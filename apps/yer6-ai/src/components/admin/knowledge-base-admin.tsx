"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  BookOpenCheck,
  Database,
  FileSearch,
  LoaderCircle,
  RefreshCw,
  Search,
  ShieldCheck,
  Trash2,
  UploadCloud
} from "lucide-react";
import { useRef, useState } from "react";
import { useAITranslation } from "@/components/i18n-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { KnowledgeDocumentSummary, KnowledgeStats } from "@/lib/rag/api";
import {
  KNOWLEDGE_CATEGORIES,
  KNOWLEDGE_FILE_ACCEPT,
  STANDARD_LICENSE_STATUSES,
  knowledgeFileExtension
} from "@/lib/rag/catalog";
import { useUploadThing } from "@/lib/uploadthing";
import { formatFileSize } from "@/lib/utils";

async function api<T>(url: string, init?: RequestInit) {
  const response = await fetch(url, init);
  const value = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(typeof value.error === "string" ? value.error : "REQUEST_FAILED");
  return value as T;
}

export function KnowledgeBaseAdmin() {
  const { t, locale } = useAITranslation();
  const queryClient = useQueryClient();
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [category, setCategory] = useState<(typeof KNOWLEDGE_CATEGORIES)[number]>("Zemin Etütleri");
  const [scope, setScope] = useState<"company" | "standards">("company");
  const [version, setVersion] = useState("");
  const [licenseStatus, setLicenseStatus] = useState<(typeof STANDARD_LICENSE_STATUSES)[number]>("REFERENCE_ONLY");
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState<string[]>([]);
  const [notice, setNotice] = useState<string | null>(null);
  const organizationId = process.env.NEXT_PUBLIC_YER6_ORGANIZATION_ID || "yer6";

  const stats = useQuery({
    queryKey: ["knowledge-stats"],
    queryFn: () => api<KnowledgeStats>("/api/admin/knowledge/stats"),
    retry: false
  });
  const documents = useQuery({
    queryKey: ["knowledge-documents"],
    queryFn: () => api<{ documents: KnowledgeDocumentSummary[] }>("/api/admin/knowledge/documents?limit=50"),
    retry: false
  });
  const { startUpload, isUploading } = useUploadThing("knowledgeFiles");

  const refresh = async () => {
    await Promise.all([
      queryClient.invalidateQueries({ queryKey: ["knowledge-stats"] }),
      queryClient.invalidateQueries({ queryKey: ["knowledge-documents"] })
    ]);
  };

  const upload = useMutation({
    mutationFn: async () => {
      if (!file) throw new Error("FILE_REQUIRED");
      const extension = knowledgeFileExtension(file.name);
      if (!extension) throw new Error("UNSUPPORTED_FILE");
      const uploaded = await startUpload([file]);
      const result = uploaded?.[0]?.serverData;
      if (!result) throw new Error("UPLOAD_FAILED");
      return api<{ document: KnowledgeDocumentSummary }>("/api/admin/knowledge/documents", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: file.name,
          extension,
          mimeType: file.type || "application/octet-stream",
          size: file.size,
          category,
          scope,
          organizationId: scope === "company" ? organizationId : undefined,
          storageKey: result.key,
          sourceUrl: result.url,
          version: version || undefined,
          licenseStatus: scope === "standards" ? licenseStatus : undefined,
          contentIndexingAllowed: scope === "standards"
            ? licenseStatus === "PUBLIC" || licenseStatus === "LICENSED_INTERNAL"
            : true,
          ingest: true
        })
      });
    },
    onSuccess: async () => {
      setFile(null);
      setNotice(t("Document queued for indexing"));
      await refresh();
    },
    onError: () => setNotice(t("Knowledge service is not configured or access was denied"))
  });

  const remove = useMutation({
    mutationFn: (id: string) => api(`/api/admin/knowledge/documents/${id}`, { method: "DELETE" }),
    onSuccess: refresh
  });

  const reindex = useMutation({
    mutationFn: (id: string) => api(`/api/admin/knowledge/documents/${id}/ingest`, { method: "POST" }),
    onSuccess: refresh
  });

  const runSearch = async () => {
    try {
      const result = await api<{ matches: Array<{ content: string }> }>("/api/admin/knowledge/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: search, organizationId, includeStandards: true, limit: 5 })
      });
      setSearchResult(result.matches.map((match) => match.content));
    } catch {
      setNotice(t("Knowledge service is not configured or access was denied"));
    }
  };

  const unavailable = stats.isError || documents.isError;
  const stat = stats.data;
  const categoryLabel = (value: (typeof KNOWLEDGE_CATEGORIES)[number]) => {
    const labels: Partial<Record<typeof value, [string, string]>> = {
      "Fore Kazık": ["Fore Pile", "الخوازيق المحفورة"],
      "Mini Kazık": ["Micropile", "الخوازيق الدقيقة"],
      "Ankraj": ["Anchors", "المراسي الأرضية"],
      "Diyafram Duvar": ["Diaphragm Wall", "الجدار الحاجز"],
      "Berlin Duvar": ["Soldier Pile Wall", "جدار الخوازيق المتباعدة"],
      "Palplanş": ["Sheet Pile", "الستائر اللوحية"],
      "Taş Kolon": ["Stone Columns", "الأعمدة الحجرية"],
      "Enjeksiyon": ["Grouting", "الحقن"],
      "Zemin Etütleri": ["Geotechnical Investigations", "دراسات التربة"],
      "Laboratuvar Raporları": ["Laboratory Reports", "تقارير المختبر"],
      "Teknik Şartnameler": ["Technical Specifications", "المواصفات الفنية"],
      "YER6 Projeleri": ["YER6 Projects", "مشاريع YER6"],
      "Makine Katalogları": ["Machine Catalogues", "كتالوجات المعدات"],
      "İş Güvenliği": ["Occupational Safety", "السلامة المهنية"],
      "Kalite Dokümanları": ["Quality Documents", "وثائق الجودة"]
    };
    return locale === "tr" ? value : labels[value]?.[locale === "ar" ? 1 : 0] ?? value;
  };
  const licenseLabel = (value: (typeof STANDARD_LICENSE_STATUSES)[number]) => ({
    PUBLIC: t("Public"),
    LICENSED_INTERNAL: t("Licensed internal"),
    REFERENCE_ONLY: t("Reference only"),
    RESTRICTED: t("Restricted")
  })[value];

  return (
    <section className="mt-6 border-y border-white/[0.065] py-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Badge tone="gold"><Database className="mr-1 size-3" />{t("Geotechnical Intelligence")}</Badge>
            <Badge tone={stat?.layers.retrieval === "ready" ? "green" : "neutral"}>
              {stat?.layers.retrieval === "ready" ? t("Retrieval ready") : t("Retrieval inactive")}
            </Badge>
          </div>
          <h2 className="mt-3 text-lg font-semibold text-white/90">{t("Knowledge base and standards")}</h2>
          <p className="mt-1 text-xs text-white/35">{t("Manage evidence, embeddings, standards rights and semantic retrieval.")}</p>
        </div>
        <Button variant="ghost" onClick={refresh} aria-label={t("Refresh")} title={t("Refresh")}>
          <RefreshCw className="size-4" />{t("Refresh")}
        </Button>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {[
          [t("Documents"), stat?.documents ?? 0],
          [t("Ready"), stat?.readyDocuments ?? 0],
          [t("Chunks"), stat?.chunks ?? 0],
          [t("Storage"), formatFileSize(stat?.bytes ?? 0)]
        ].map(([label, value]) => (
          <div key={String(label)} className="border-l border-primary/35 bg-white/[0.018] px-4 py-3">
            <p className="text-[10px] uppercase text-white/28">{label}</p>
            <p className="mt-2 text-xl font-semibold text-white/80">{value}</p>
          </div>
        ))}
      </div>

      {unavailable ? (
        <div className="mt-4 flex items-start gap-3 border border-amber-300/15 bg-amber-300/[0.035] p-4 text-xs text-white/45">
          <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary/70" />
          <span>{t("Knowledge administration requires an authenticated admin and configured providers.")}</span>
        </div>
      ) : null}

      <div className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,1.25fr)_minmax(320px,.75fr)]">
        <div className="panel overflow-hidden">
          <div className="grid gap-3 border-b border-white/[0.065] p-4 sm:grid-cols-2 lg:grid-cols-4">
            <label className="text-[11px] text-white/38">{t("Category")}
              <select value={category} onChange={(event) => setCategory(event.target.value as typeof category)} className="mt-1.5 h-9 w-full rounded-md border border-white/10 bg-[#151515] px-2 text-xs text-white/70">
                {KNOWLEDGE_CATEGORIES.map((item) => <option key={item} value={item}>{categoryLabel(item)}</option>)}
              </select>
            </label>
            <label className="text-[11px] text-white/38">{t("Memory layer")}
              <select value={scope} onChange={(event) => setScope(event.target.value as typeof scope)} className="mt-1.5 h-9 w-full rounded-md border border-white/10 bg-[#151515] px-2 text-xs text-white/70">
                <option value="company">{t("Company memory")}</option>
                <option value="standards">{t("Standards library")}</option>
              </select>
            </label>
            <label className="text-[11px] text-white/38">{t("Version")}
              <input value={version} onChange={(event) => setVersion(event.target.value)} maxLength={80} className="mt-1.5 h-9 w-full rounded-md border border-white/10 bg-black/20 px-2 text-xs text-white/70" />
            </label>
            <label className="text-[11px] text-white/38">{t("License status")}
              <select disabled={scope !== "standards"} value={licenseStatus} onChange={(event) => setLicenseStatus(event.target.value as typeof licenseStatus)} className="mt-1.5 h-9 w-full rounded-md border border-white/10 bg-[#151515] px-2 text-xs text-white/70 disabled:opacity-35">
                {STANDARD_LICENSE_STATUSES.map((item) => <option key={item} value={item}>{licenseLabel(item)}</option>)}
              </select>
            </label>
          </div>
          <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center">
            <input ref={inputRef} type="file" accept={KNOWLEDGE_FILE_ACCEPT.join(",")} className="sr-only" onChange={(event) => setFile(event.target.files?.[0] ?? null)} />
            <Button variant="outline" onClick={() => inputRef.current?.click()}><UploadCloud className="size-4" />{file?.name ?? t("Choose document")}</Button>
            <Button disabled={!file || isUploading || upload.isPending} onClick={() => upload.mutate()}>
              {isUploading || upload.isPending ? <LoaderCircle className="size-4 animate-spin" /> : <BookOpenCheck className="size-4" />}
              {t("Upload and index")}
            </Button>
            {notice ? <p className="text-[11px] text-white/38">{notice}</p> : null}
          </div>
          <div className="max-h-[360px] overflow-auto border-t border-white/[0.055]">
            {(documents.data?.documents ?? []).map((document) => (
              <div key={document.id} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b border-white/[0.05] px-4 py-3 last:border-0">
                <div className="min-w-0">
                  <p className="truncate text-xs font-medium text-white/68">{document.name}</p>
                  <p className="mt-1 truncate text-[10px] text-white/28">{document.category} · {document.scope} · {document.status} · {document.chunkCount} {t("chunks")}</p>
                </div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" onClick={() => reindex.mutate(document.id)} aria-label={t("Reindex")} title={t("Reindex")}><RefreshCw className="size-3.5" /></Button>
                  <Button variant="ghost" size="icon" onClick={() => remove.mutate(document.id)} aria-label={t("Delete")} title={t("Delete")}><Trash2 className="size-3.5" /></Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="panel p-4">
          <div className="flex items-center gap-2"><FileSearch className="size-4 text-primary/70" /><h3 className="text-sm font-semibold text-white/78">{t("Semantic search test")}</h3></div>
          <div className="mt-4 flex gap-2">
            <input value={search} onChange={(event) => setSearch(event.target.value)} maxLength={6000} placeholder={t("Search the knowledge base")} className="h-9 min-w-0 flex-1 rounded-md border border-white/10 bg-black/20 px-3 text-xs text-white/70" />
            <Button size="icon" disabled={!search.trim()} onClick={runSearch} aria-label={t("Search")} title={t("Search")}><Search className="size-4" /></Button>
          </div>
          <div className="mt-4 space-y-2">
            {searchResult.length === 0 ? <p className="py-8 text-center text-xs text-white/25">{t("No search results")}</p> : searchResult.map((content, index) => (
              <p key={`${index}-${content.slice(0, 20)}`} className="line-clamp-4 border-l border-primary/30 pl-3 text-[11px] leading-5 text-white/42">{content}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
