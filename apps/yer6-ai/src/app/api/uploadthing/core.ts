import { createUploadthing, type FileRouter } from "uploadthing/next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const upload = createUploadthing();
const allowedExtensions = new Set(["pdf", "dwg", "dxf", "ifc", "png", "jpg", "jpeg", "webp"]);

export const uploadRouter = {
  projectFiles: upload({ blob: { maxFileSize: "256MB", maxFileCount: 20 } })
    .middleware(async ({ files }) => {
      const session = await getServerSession(authOptions);
      if (process.env.AUTH_REQUIRED === "true" && !session) throw new Error("Unauthorized");
      const invalid = files.find((file) => !allowedExtensions.has(file.name.split(".").pop()?.toLowerCase() ?? ""));
      if (invalid) throw new Error(`Unsupported file type: ${invalid.name}`);
      return { uploadedBy: session?.user.id ?? "demo-user" };
    })
    .onUploadComplete(async ({ file, metadata }) => ({ key: file.key, name: file.name, uploadedBy: metadata.uploadedBy })),
} satisfies FileRouter;

export type UploadRouter = typeof uploadRouter;
