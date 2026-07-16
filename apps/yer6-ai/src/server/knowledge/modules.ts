/**
 * Knowledge Module Registry
 *
 * The single, data-driven source of truth for the YER6 engineering knowledge
 * platform. Every capability the copilot exposes is modelled here as a
 * "knowledge module". Adding a new source of engineering knowledge means adding
 * (or extending) a definition in this file — no other part of the pipeline needs
 * to hardcode module names, namespaces or partitions.
 *
 * Three module kinds are supported:
 *   - "document"   : unstructured corpora ingested through the RAG pipeline
 *                    (standards, papers, manuals, books, specs, GI reports).
 *   - "structured" : relational datasets (machines, soils) that are both
 *                    queryable in Postgres and semantically indexed in Vectorize.
 *   - "compute"    : deterministic engines (calculations, decisions) that have
 *                    no corpus of their own but consume the other modules.
 *
 * Vectorize isolation is namespace-based. Each indexable module owns a
 * dedicated namespace prefix so it can be (re)indexed, queried and purged
 * independently of every other module — a hard requirement for scaling to
 * millions of documents.
 */

import type { StandardLicenseStatus } from "@/lib/rag/catalog";

export const KNOWLEDGE_MODULE_KINDS = ["document", "structured", "compute"] as const;
export type KnowledgeModuleKind = (typeof KNOWLEDGE_MODULE_KINDS)[number];

export const KNOWLEDGE_MODULE_KEYS = [
  "standards",
  "papers",
  "manuals",
  "books",
  "specifications",
  "ground-investigation",
  "machines",
  "soils",
  "calculations",
  "decisions"
] as const;
export type KnowledgeModuleKey = (typeof KNOWLEDGE_MODULE_KEYS)[number];

/**
 * A partition is an independently indexable sub-collection inside a module —
 * e.g. a standards family (Eurocode) or a manufacturer (Bauer). Partitions get
 * their own Vectorize namespace suffix so a single manufacturer's manuals can be
 * reindexed without touching the rest of the module. The lists below are
 * *known* partitions used for UI grouping and validation defaults; they are not
 * a closed set — `allowUnknownPartitions` lets operators add new ones at runtime
 * without a code change (so the platform never hardcodes the full universe).
 */
export type KnowledgePartition = {
  key: string;
  label: string;
  aliases?: string[];
};

export type KnowledgeModuleDefinition = {
  key: KnowledgeModuleKey;
  kind: KnowledgeModuleKind;
  order: number;
  title: string;
  titleTr: string;
  description: string;
  /** Vectorize namespace prefix. Empty for compute modules (no corpus). */
  namespacePrefix: string;
  /** Whether ingestion produces embeddings/vectors for this module. */
  indexable: boolean;
  /** Whether the module supports incremental (checksum-diffed) updates. */
  incremental: boolean;
  /** Default license posture applied to newly registered items. */
  defaultLicense: StandardLicenseStatus;
  /** Metadata keys the module expects on each item (used for validation/UI). */
  metadataKeys: string[];
  /** Known sub-collections; operators may register more at runtime. */
  partitions: KnowledgePartition[];
  allowUnknownPartitions: boolean;
};

const partition = (key: string, label: string, aliases?: string[]): KnowledgePartition => ({
  key,
  label,
  ...(aliases ? { aliases } : {})
});

export const KNOWLEDGE_MODULES: Record<KnowledgeModuleKey, KnowledgeModuleDefinition> = {
  standards: {
    key: "standards",
    kind: "document",
    order: 1,
    title: "Global Engineering Standards",
    titleTr: "Küresel Mühendislik Standartları",
    description:
      "Codes and design standards: Eurocode 7/8, ASTM, ACI, FHWA, USACE, BS 8004, DIN, TS EN, ISSMGE, DFI.",
    namespacePrefix: "std",
    indexable: true,
    incremental: true,
    defaultLicense: "REFERENCE_ONLY",
    metadataKeys: ["standardCode", "family", "edition", "clause", "rightsHolder"],
    allowUnknownPartitions: true,
    partitions: [
      partition("eurocode-7", "Eurocode 7 (Geotechnical Design)", ["EC7", "EN 1997"]),
      partition("eurocode-8", "Eurocode 8 (Seismic Design)", ["EC8", "EN 1998"]),
      partition("astm", "ASTM"),
      partition("aci", "ACI"),
      partition("fhwa", "FHWA"),
      partition("usace", "USACE"),
      partition("bs-8004", "BS 8004", ["BS8004"]),
      partition("din", "DIN"),
      partition("ts-en", "TS EN", ["TSE", "TS"]),
      partition("issmge", "ISSMGE"),
      partition("dfi", "DFI")
    ]
  },
  papers: {
    key: "papers",
    kind: "document",
    order: 2,
    title: "Engineering Papers",
    titleTr: "Bilimsel Makaleler",
    description:
      "Peer-reviewed and conference papers on soil behaviour, numerical modelling and ground improvement. Designed to index tens of thousands of documents.",
    namespacePrefix: "paper",
    indexable: true,
    incremental: true,
    defaultLicense: "REFERENCE_ONLY",
    metadataKeys: ["doi", "authors", "journal", "year", "keywords"],
    allowUnknownPartitions: true,
    partitions: [
      partition("ground-improvement", "Ground Improvement"),
      partition("deep-foundations", "Deep Foundations"),
      partition("liquefaction", "Liquefaction & Seismic"),
      partition("numerical-modelling", "Numerical Modelling"),
      partition("site-characterization", "Site Characterization")
    ]
  },
  manuals: {
    key: "manuals",
    kind: "document",
    order: 3,
    title: "Technical Manuals",
    titleTr: "Teknik Kılavuzlar",
    description:
      "Manufacturer operation & maintenance manuals and technical handbooks for drilling and piling rigs.",
    namespacePrefix: "manual",
    indexable: true,
    incremental: true,
    defaultLicense: "LICENSED_INTERNAL",
    metadataKeys: ["manufacturer", "model", "documentType", "revision"],
    allowUnknownPartitions: true,
    partitions: [
      partition("bauer", "Bauer"),
      partition("soilmec", "Soilmec"),
      partition("casagrande", "Casagrande"),
      partition("comacchio", "Comacchio"),
      partition("junttan", "Junttan"),
      partition("klemm", "Klemm"),
      partition("liebherr", "Liebherr"),
      partition("abi", "ABI")
    ]
  },
  books: {
    key: "books",
    kind: "document",
    order: 4,
    title: "Engineering Books",
    titleTr: "Mühendislik Kitapları",
    description: "Reference textbooks and monographs in geotechnical and foundation engineering.",
    namespacePrefix: "book",
    indexable: true,
    incremental: true,
    defaultLicense: "REFERENCE_ONLY",
    metadataKeys: ["isbn", "authors", "publisher", "edition", "year"],
    allowUnknownPartitions: true,
    partitions: [
      partition("foundation-engineering", "Foundation Engineering"),
      partition("soil-mechanics", "Soil Mechanics"),
      partition("ground-improvement", "Ground Improvement"),
      partition("earthquake-geotech", "Earthquake Geotechnics")
    ]
  },
  specifications: {
    key: "specifications",
    kind: "document",
    order: 5,
    title: "Construction Specifications",
    titleTr: "Yapım Şartnameleri",
    description: "Method statements, technical specifications and QA/QC procedures for execution.",
    namespacePrefix: "spec",
    indexable: true,
    incremental: true,
    defaultLicense: "LICENSED_INTERNAL",
    metadataKeys: ["discipline", "revision", "projectPhase", "client"],
    allowUnknownPartitions: true,
    partitions: [
      partition("piling", "Piling"),
      partition("ground-improvement", "Ground Improvement"),
      partition("excavation-support", "Excavation Support"),
      partition("qa-qc", "QA / QC")
    ]
  },
  "ground-investigation": {
    key: "ground-investigation",
    kind: "document",
    order: 6,
    title: "Ground Investigation Reports",
    titleTr: "Zemin Etüt Raporları",
    description:
      "Borehole logs, SPT/CPT results, pressuremeter, geophysics and laboratory testing reports.",
    namespacePrefix: "gir",
    indexable: true,
    incremental: true,
    defaultLicense: "LICENSED_INTERNAL",
    metadataKeys: ["projectId", "location", "coordinates", "reportDate", "investigationType"],
    allowUnknownPartitions: true,
    partitions: [
      partition("boreholes", "Borehole Logs"),
      partition("spt", "SPT"),
      partition("cpt", "CPT"),
      partition("laboratory", "Laboratory"),
      partition("geophysics", "Geophysics")
    ]
  },
  machines: {
    key: "machines",
    kind: "structured",
    order: 7,
    title: "Machine Database",
    titleTr: "Makine Veritabanı",
    description:
      "Structured rig specifications (torque, depth, diameter, weight, power) with a semantic index for feasibility matching.",
    namespacePrefix: "machine",
    indexable: true,
    incremental: true,
    defaultLicense: "PUBLIC",
    metadataKeys: ["manufacturer", "model", "torque", "maxDepth", "maxDiameter"],
    allowUnknownPartitions: true,
    partitions: [
      partition("bauer", "Bauer"),
      partition("soilmec", "Soilmec"),
      partition("casagrande", "Casagrande"),
      partition("comacchio", "Comacchio"),
      partition("junttan", "Junttan"),
      partition("klemm", "Klemm"),
      partition("liebherr", "Liebherr"),
      partition("abi", "ABI")
    ]
  },
  soils: {
    key: "soils",
    kind: "structured",
    order: 8,
    title: "Soil Database",
    titleTr: "Zemin Veritabanı",
    description:
      "Structured soil profiles and parameters (classification, strength, index properties) with a semantic index.",
    namespacePrefix: "soil",
    indexable: true,
    incremental: true,
    defaultLicense: "LICENSED_INTERNAL",
    metadataKeys: ["classification", "location", "depth", "sourceReportId"],
    allowUnknownPartitions: true,
    partitions: [
      partition("clay", "Clay"),
      partition("sand", "Sand"),
      partition("silt", "Silt"),
      partition("gravel", "Gravel"),
      partition("rock", "Rock"),
      partition("fill", "Fill")
    ]
  },
  calculations: {
    key: "calculations",
    kind: "compute",
    order: 9,
    title: "Calculation Engine",
    titleTr: "Hesap Motoru",
    description:
      "Deterministic geotechnical calculators (bearing capacity, settlement, earth pressure, jet grout quantities).",
    namespacePrefix: "",
    indexable: false,
    incremental: false,
    defaultLicense: "PUBLIC",
    metadataKeys: [],
    allowUnknownPartitions: false,
    partitions: []
  },
  decisions: {
    key: "decisions",
    kind: "compute",
    order: 10,
    title: "Engineering Decision Engine",
    titleTr: "Mühendislik Karar Motoru",
    description:
      "Rule-based recommendations that combine soil data, standards, machine feasibility and calculations.",
    namespacePrefix: "",
    indexable: false,
    incremental: false,
    defaultLicense: "PUBLIC",
    metadataKeys: [],
    allowUnknownPartitions: false,
    partitions: []
  }
};

export const KNOWLEDGE_MODULE_LIST: KnowledgeModuleDefinition[] = KNOWLEDGE_MODULE_KEYS.map(
  (key) => KNOWLEDGE_MODULES[key]
).sort((a, b) => a.order - b.order);

export function isKnowledgeModuleKey(value: unknown): value is KnowledgeModuleKey {
  return typeof value === "string" && (KNOWLEDGE_MODULE_KEYS as readonly string[]).includes(value);
}

export function getKnowledgeModule(key: string): KnowledgeModuleDefinition | null {
  return isKnowledgeModuleKey(key) ? KNOWLEDGE_MODULES[key] : null;
}

export function knowledgeModulesByKind(kind: KnowledgeModuleKind): KnowledgeModuleDefinition[] {
  return KNOWLEDGE_MODULE_LIST.filter((module) => module.kind === kind);
}

export const DOCUMENT_MODULE_KEYS: KnowledgeModuleKey[] = knowledgeModulesByKind("document").map(
  (module) => module.key
);

export const INDEXABLE_MODULE_KEYS: KnowledgeModuleKey[] = KNOWLEDGE_MODULE_LIST.filter(
  (module) => module.indexable
).map((module) => module.key);

/**
 * Normalise a free-text partition into a stable slug and resolve known aliases.
 * Returns null when the module does not accept the partition (closed set) and
 * the value is unknown.
 */
export function resolvePartition(
  moduleKey: KnowledgeModuleKey,
  value: string | undefined | null
): string | null {
  const definition = KNOWLEDGE_MODULES[moduleKey];
  if (!value) return null;
  const normalized = value.trim().toLowerCase().replace(/[\s_]+/g, "-").replace(/[^a-z0-9-]/g, "");
  if (!normalized) return null;
  const known = definition.partitions.find(
    (item) =>
      item.key === normalized ||
      item.aliases?.some((alias) => alias.toLowerCase().replace(/[\s_]+/g, "-") === normalized)
  );
  if (known) return known.key;
  return definition.allowUnknownPartitions ? normalized.slice(0, 48) : null;
}
