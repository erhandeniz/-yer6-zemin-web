const PROJECT_FILE_MAX_BYTES = 256 * 1024 * 1024;
export const PROJECT_FILE_MAX_COUNT = 20;
const PROJECT_FILE_EXTENSIONS = [
  "pdf",
  "docx",
  "txt",
  "md",
  "markdown",
  "dwg",
  "dxf",
  "ifc",
  "png",
  "jpg",
  "jpeg",
  "xlsx",
  "xlsm",
  "xlsb",
  "xls",
  "webp"
] as const;
export const PROJECT_FILE_ACCEPT = PROJECT_FILE_EXTENSIONS.map((extension) => `.${extension}`);

const allowedExtensions = new Set<string>(PROJECT_FILE_EXTENSIONS);
const allowedMimeTypes: Record<string, Set<string>> = {
  pdf: new Set(["application/pdf", "application/octet-stream"]),
  docx: new Set([
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/octet-stream"
  ]),
  txt: new Set(["text/plain", "application/octet-stream"]),
  md: new Set(["text/markdown", "text/plain", "application/octet-stream"]),
  markdown: new Set(["text/markdown", "text/plain", "application/octet-stream"]),
  png: new Set(["image/png"]),
  jpg: new Set(["image/jpeg"]),
  jpeg: new Set(["image/jpeg"]),
  xlsx: new Set(["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/octet-stream"]),
  xlsm: new Set(["application/vnd.ms-excel.sheet.macroenabled.12", "application/octet-stream"]),
  xlsb: new Set(["application/vnd.ms-excel.sheet.binary.macroenabled.12", "application/octet-stream"]),
  xls: new Set(["application/vnd.ms-excel", "application/octet-stream"]),
  webp: new Set(["image/webp"]),
  dwg: new Set(["application/acad", "application/x-acad", "application/autocad_dwg", "application/dwg", "application/octet-stream"]),
  dxf: new Set(["application/dxf", "application/x-dxf", "image/vnd.dxf", "text/plain", "application/octet-stream"]),
  ifc: new Set(["application/x-step", "application/step", "text/plain", "application/octet-stream"])
};

export type ProjectFileLike = {
  name: string;
  size: number;
  type?: string;
};

export type ProjectFileValidationError = "name" | "size" | "type";

function projectFileExtension(name: string) {
  return name.split(".").pop()?.toLowerCase() ?? "";
}

export function validateProjectFile(file: ProjectFileLike): ProjectFileValidationError | null {
  if (!file.name || file.name.length > 180 || /[\\/]/.test(file.name)) return "name";
  if (!Number.isFinite(file.size) || file.size <= 0 || file.size > PROJECT_FILE_MAX_BYTES) return "size";

  const extension = projectFileExtension(file.name);
  if (!allowedExtensions.has(extension)) return "type";
  const mime = file.type?.toLowerCase().trim();
  if (mime && !allowedMimeTypes[extension]?.has(mime)) return "type";
  return null;
}
