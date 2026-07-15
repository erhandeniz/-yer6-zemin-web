import Link from "next/link";
import React, { ReactNode } from "react";

export function parseMarkdownLinks(text: string): ReactNode {
  if (!text) return "";
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match;
  while ((match = regex.exec(text)) !== null) {
    const linkText = match[1];
    const url = match[2];
    const index = match.index;
    if (index > lastIndex) {
      parts.push(text.substring(lastIndex, index));
    }
    const isInternal = url.startsWith('/');
    if (isInternal) {
      parts.push(
        <Link key={index} href={url} className="text-gold-200 hover:underline">
          {linkText}
        </Link>
      );
    } else {
      parts.push(
        <a key={index} href={url} target="_blank" rel="noopener noreferrer" className="text-gold-200 hover:underline">
          {linkText}
        </a>
      );
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }
  return parts.length > 0 ? <>{parts}</> : text;
}
