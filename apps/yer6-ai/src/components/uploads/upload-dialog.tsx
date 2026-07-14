"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { Check, File, FileArchive, FileImage, FileText, UploadCloud, X } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useAITranslation } from "@/components/i18n-provider";
import { Progress } from "@/components/ui/progress";
import { engineeringCategories, projects } from "@/lib/data";
import {
  PROJECT_FILE_ACCEPT,
  PROJECT_FILE_MAX_COUNT,
  validateProjectFile
} from "@/lib/uploads/project-file";
import { formatFileSize } from "@/lib/utils";
import { useUploadThing } from "@/lib/uploadthing";
import { useAppStore, type UploadItem } from "@/store/app-store";

function fileIcon(type: string) {
  if (type.startsWith("image/")) return FileImage;
  if (type.includes("pdf")) return FileText;
  if (type.includes("zip")) return FileArchive;
  return File;
}

export function UploadDialog() {
  const { t } = useAITranslation();
  const open = useAppStore((state) => state.uploadOpen);
  const setOpen = useAppStore((state) => state.setUploadOpen);
  const uploads = useAppStore((state) => state.uploads);
  const addUploads = useAppStore((state) => state.addUploads);
  const updateUpload = useAppStore((state) => state.updateUpload);
  const inputRef = useRef<HTMLInputElement>(null);
  const pendingUploadIds = useRef<string[]>([]);
  const [dragging, setDragging] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [project, setProject] = useState(projects[0].id);
  const [category, setCategory] = useState<(typeof engineeringCategories)[number]>("Jet Grout");
  const { startUpload, isUploading } = useUploadThing("projectFiles", {
    uploadProgressGranularity: "fine",
    onUploadProgress: (progress) => {
      pendingUploadIds.current.forEach((id) => updateUpload(id, progress, "uploading"));
    }
  });

  const queueFiles = useCallback(
    async (files: File[]) => {
      const selectedFiles = files.slice(0, PROJECT_FILE_MAX_COUNT);
      const validFiles = selectedFiles.filter((file) => validateProjectFile(file) === null);
      setValidationError(
        files.length > PROJECT_FILE_MAX_COUNT
          ? t("You can upload up to 20 files at once.")
          : validFiles.length !== selectedFiles.length
            ? t("One or more files have an unsupported type or exceed 256 MB.")
            : null
      );

      const items: UploadItem[] = validFiles.map((file) => ({
        id: `${file.name}-${file.lastModified}-${crypto.randomUUID()}`,
        name: file.name,
        size: file.size,
        type: file.type || "application/octet-stream",
        progress: 0,
        status: "uploading"
      }));

      addUploads(items);
      pendingUploadIds.current = items.map((item) => item.id);
      try {
        const result = await startUpload(validFiles);
        items.forEach((item, index) => updateUpload(
          item.id,
          result?.[index] ? 100 : item.progress,
          result?.[index] ? "ready" : "failed"
        ));
        if (!result || result.length !== validFiles.length) {
          setValidationError(t("One or more files could not be uploaded."));
        }
      } catch {
        items.forEach((item) => updateUpload(item.id, item.progress, "failed"));
        setValidationError(t("One or more files could not be uploaded."));
      } finally {
        pendingUploadIds.current = [];
      }
    },
    [addUploads, startUpload, t, updateUpload]
  );

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <AnimatePresence>
        {open ? (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[70] bg-black/75 backdrop-blur-sm"
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                initial={{ opacity: 0, y: 14, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.985 }}
                transition={{ duration: 0.18 }}
                className="fixed left-1/2 top-1/2 z-[71] flex max-h-[90vh] w-[calc(100%-24px)] max-w-2xl -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-lg border border-white/10 bg-[#101010] shadow-2xl"
              >
                <div className="flex items-start justify-between border-b border-white/[0.075] px-5 py-4">
                  <div>
                    <Dialog.Title className="text-base font-semibold text-white">{t("Upload project files")}</Dialog.Title>
                    <Dialog.Description className="mt-1 text-xs text-white/40">
                      {t("Add source documents to the engineering analysis workspace.")}
                    </Dialog.Description>
                  </div>
                  <Dialog.Close asChild>
                    <Button variant="ghost" size="icon" aria-label={t("Close upload dialog")}>
                      <X className="size-4" />
                    </Button>
                  </Dialog.Close>
                </div>
                <div className="overflow-y-auto p-5">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <label className="space-y-1.5 text-xs text-white/50">
                      {t("Project")}
                      <select
                        value={project}
                        onChange={(event) => setProject(event.target.value)}
                        className="h-10 w-full rounded-md border border-white/10 bg-[#151515] px-3 text-xs text-white/80 outline-none focus:border-primary/40"
                      >
                        {projects.map((item) => (
                          <option key={item.id} value={item.id}>{item.name}</option>
                        ))}
                      </select>
                    </label>
                    <label className="space-y-1.5 text-xs text-white/50">
                      {t("Engineering category")}
                      <select
                        value={category}
                        onChange={(event) => setCategory(event.target.value as typeof category)}
                        className="h-10 w-full rounded-md border border-white/10 bg-[#151515] px-3 text-xs text-white/80 outline-none focus:border-primary/40"
                      >
                        {engineeringCategories.map((item) => <option key={item} value={item}>{t(item)}</option>)}
                      </select>
                    </label>
                  </div>
                  <button
                    type="button"
                    className={`mt-4 flex min-h-44 w-full flex-col items-center justify-center rounded-md border border-dashed px-5 text-center transition-colors ${
                      dragging ? "border-primary bg-primary/[0.07]" : "border-white/15 bg-white/[0.02] hover:border-primary/40 hover:bg-white/[0.035]"
                    }`}
                    disabled={isUploading}
                    onClick={() => inputRef.current?.click()}
                    onDragEnter={(event) => { event.preventDefault(); setDragging(true); }}
                    onDragOver={(event) => event.preventDefault()}
                    onDragLeave={() => setDragging(false)}
                    onDrop={(event) => {
                      event.preventDefault();
                      setDragging(false);
                      void queueFiles(Array.from(event.dataTransfer.files));
                    }}
                  >
                    <span className="grid size-11 place-items-center rounded-md border border-primary/20 bg-primary/[0.08] text-primary">
                      <UploadCloud className="size-5" />
                    </span>
                    <span className="mt-3 text-sm font-medium text-white/85">{t("Drop engineering files here")}</span>
                    <span className="mt-1 text-xs text-white/35">{t("PDF, DWG, DXF, IFC and images · up to 256 MB")}</span>
                  </button>
                  <input
                    ref={inputRef}
                    className="sr-only"
                    type="file"
                    multiple
                    accept={PROJECT_FILE_ACCEPT.join(",")}
                    onChange={(event) => void queueFiles(Array.from(event.target.files ?? []))}
                  />
                  {validationError ? (
                    <p className="mt-2 text-xs text-red-300/80" role="alert">{validationError}</p>
                  ) : null}
                  {uploads.length ? (
                    <div className="mt-5 space-y-2" aria-live="polite">
                      <div className="flex items-center justify-between">
                        <p className="technical-label text-white/35">{t("Upload queue")}</p>
                        <span className="text-[11px] text-white/30">{uploads.length} {t("files")}</span>
                      </div>
                      {uploads.slice(0, 5).map((item) => {
                        const Icon = fileIcon(item.type);
                        return (
                          <div key={item.id} className="panel-subtle flex items-center gap-3 p-3">
                            <span className="grid size-9 shrink-0 place-items-center rounded-md bg-white/[0.055] text-white/45">
                              <Icon className="size-4" />
                            </span>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-2">
                                <span className="truncate text-xs font-medium text-white/75">{item.name}</span>
                                <span className="shrink-0 text-[10px] text-white/25">{formatFileSize(item.size)}</span>
                              </div>
                              <Progress value={item.progress} className="mt-2" />
                            </div>
                            {item.status === "ready" ? (
                              <span className="grid size-6 place-items-center rounded-full bg-emerald-400/10 text-emerald-300" aria-label={t("Ready")}>
                                <Check className="size-3.5" />
                              </span>
                            ) : (
                              <span className="w-9 text-right font-mono text-[10px] text-white/35">{item.progress}%</span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
                <div className="flex items-center justify-between border-t border-white/[0.075] bg-white/[0.015] px-5 py-3.5">
                  <span className="flex items-center gap-2 text-[11px] text-white/30">
                    <Check className="size-3.5 text-emerald-400" /> {t("Encrypted in transit and at rest")}
                  </span>
                  <Button onClick={() => setOpen(false)}>{t("Continue to analysis")}</Button>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        ) : null}
      </AnimatePresence>
    </Dialog.Root>
  );
}
