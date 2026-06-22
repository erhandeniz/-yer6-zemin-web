"use client";

import Link from "next/link";
import { Copy, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

const shareUrls = {
  twitter: "https://twitter.com/intent/tweet?text=",
  linkedin: "https://www.linkedin.com/sharing/share-offsite/?url=",
  facebook: "https://www.facebook.com/sharer/sharer.php?u="
};

export function ShareLinks({ url, title }: { url: string; title: string }) {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  function copyLink() {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="mt-10 flex flex-wrap gap-3 text-sm text-white/75">
      <span className="inline-flex items-center gap-2 text-white/50">
        <ExternalLink className="h-4 w-4 text-gold-100" /> {t("shareLabel")}
      </span>
      <Link href={`${shareUrls.twitter}${encodedTitle}%20${encodedUrl}`} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 px-4 py-3 transition hover:bg-white/5">
        Twitter
      </Link>
      <Link href={`${shareUrls.linkedin}${encodedUrl}`} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 px-4 py-3 transition hover:bg-white/5">
        LinkedIn
      </Link>
      <Link href={`${shareUrls.facebook}${encodedUrl}`} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 px-4 py-3 transition hover:bg-white/5">
        Facebook
      </Link>
      <button onClick={copyLink} className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-3 transition hover:bg-white/5">
        <Copy className="h-4 w-4" /> {copied ? t("shareCopied") : t("shareCopy")}
      </button>
    </div>
  );
}
