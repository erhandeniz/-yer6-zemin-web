import { createUploadthing, type FileRouter } from "uploadthing/next";
import { validateProjectFile } from "@/lib/uploads/project-file";

const upload = createUploadthing();

export type UploadPrincipal = {
  id: string;
  role: string;
};

const uploadPrincipals = new WeakMap<Request, UploadPrincipal | null>();

export function bindUploadPrincipal(request: Request, principal: UploadPrincipal | null) {
  uploadPrincipals.set(request, principal);
}

export function clearUploadPrincipal(request: Request) {
  uploadPrincipals.delete(request);
}

export function getUploadPrincipal(request: Request) {
  return uploadPrincipals.get(request) ?? null;
}

export const uploadRouter = {
  projectFiles: upload({ blob: { maxFileSize: "256MB", maxFileCount: 20, acl: "private" } })
    .middleware(async ({ files, req }) => {
      const principal = getUploadPrincipal(req);
      if (!principal) throw new Error("Unauthorized");
      const invalid = files.some((file) => validateProjectFile(file) !== null);
      if (invalid) throw new Error("Unsupported project file");
      return { uploadedBy: principal.id };
    })
    .onUploadComplete(async ({ file, metadata }) => ({ key: file.key, name: file.name, uploadedBy: metadata.uploadedBy })),
  knowledgeFiles: upload({ blob: { maxFileSize: "256MB", maxFileCount: 20, acl: "private" } })
    .middleware(async ({ files, req }) => {
      const principal = getUploadPrincipal(req);
      if (!principal || principal.role !== "ADMIN") throw new Error("Unauthorized");
      if (files.some((file) => validateProjectFile(file) !== null)) {
        throw new Error("Unsupported knowledge file");
      }
      return { uploadedBy: principal.id };
    })
    .onUploadComplete(async ({ file, metadata }) => ({
      key: file.key,
      name: file.name,
      url: file.ufsUrl,
      size: file.size,
      type: file.type,
      uploadedBy: metadata.uploadedBy
    }))
} satisfies FileRouter;

export type UploadRouter = typeof uploadRouter;
