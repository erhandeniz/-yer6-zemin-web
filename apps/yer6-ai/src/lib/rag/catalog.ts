export const KNOWLEDGE_CATEGORIES = [
  "Jet Grout",
  "DSM",
  "Fore Kazık",
  "Mini Kazık",
  "Ankraj",
  "Diyafram Duvar",
  "Berlin Duvar",
  "Palplanş",
  "Shotcrete",
  "Taş Kolon",
  "Vibro",
  "Enjeksiyon",
  "Zemin Etütleri",
  "SPT",
  "CPT",
  "Laboratuvar Raporları",
  "Teknik Şartnameler",
  "YER6 Projeleri",
  "Makine Katalogları",
  "İş Güvenliği",
  "Kalite Dokümanları"
] as const;

export type KnowledgeCategory = (typeof KNOWLEDGE_CATEGORIES)[number];

export const KNOWLEDGE_FILE_EXTENSIONS = [
  "pdf",
  "docx",
  "txt",
  "md",
  "markdown",
  "dwg",
  "dxf",
  "ifc",
  "jpg",
  "jpeg",
  "png",
  "xlsx",
  "xlsm",
  "xlsb",
  "xls"
] as const;

export type KnowledgeFileExtension = (typeof KNOWLEDGE_FILE_EXTENSIONS)[number];

export const KNOWLEDGE_FILE_ACCEPT = KNOWLEDGE_FILE_EXTENSIONS.map((extension) => `.${extension}`);

export const ENGINEERING_STANDARD_FAMILIES = [
  "TS",
  "Eurocode",
  "ASTM",
  "EN",
  "ACI",
  "FHWA",
  "BS",
  "DIN"
] as const;

export type EngineeringStandardFamily = (typeof ENGINEERING_STANDARD_FAMILIES)[number];

export const STANDARD_LICENSE_STATUSES = [
  "PUBLIC",
  "LICENSED_INTERNAL",
  "REFERENCE_ONLY",
  "RESTRICTED"
] as const;

export type StandardLicenseStatus = (typeof STANDARD_LICENSE_STATUSES)[number];

export const MEMORY_TYPES = [
  "CONVERSATION",
  "DOCUMENT",
  "ANALYSIS",
  "QUANTITY",
  "PRELIMINARY_COST",
  "PROPOSAL",
  "TECHNICAL_NOTE",
  "PROCEDURE",
  "EQUIPMENT"
] as const;

export type MemoryType = (typeof MEMORY_TYPES)[number];

export const SPATIAL_ASSET_KINDS = [
  "BIM",
  "DRONE",
  "POINT_CLOUD",
  "LIDAR",
  "GIS",
  "MODEL_3D"
] as const;

export function knowledgeFileExtension(name: string): KnowledgeFileExtension | null {
  const extension = name.split(".").pop()?.toLowerCase();
  return KNOWLEDGE_FILE_EXTENSIONS.find((item) => item === extension) ?? null;
}
