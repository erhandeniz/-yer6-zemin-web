import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import type { KnowledgeArticle } from "@/types/knowledge";
import { publishedKnowledgeArticles, getKnowledgeArticleBySlug } from "@/data/knowledge";
import { siteConfig } from "@/lib/siteConfig";
import { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo";
import { KnowledgeArticleContent } from "./KnowledgeArticleContent";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return publishedKnowledgeArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getKnowledgeArticleBySlug(slug);
  if (!article) {
    notFound();
  }
  return buildMetadata(article);
}

function buildMetadata(article: KnowledgeArticle): Metadata {
  const canonical = `${siteConfig.siteUrl}/knowledge/${article.slug}/`;
  return {
    title: {
      absolute: article.seoTitle
    },
    description: article.description,
    alternates: {
      canonical
    },
    openGraph: {
      title: article.seoTitle,
      description: article.description,
      url: canonical
    }
  };
}

export default async function KnowledgeArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getKnowledgeArticleBySlug(slug);
  if (!article) {
    notFound();
  }

  const canonical = `${siteConfig.siteUrl}/knowledge/${article.slug}/`;
  const articleSchema = generateArticleSchema({
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    url: canonical
  });

  const faqSchema = generateFAQSchema(article.faq);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Ana Sayfa", item: siteConfig.siteUrl },
    { name: "Bilgi Merkezi", item: `${siteConfig.siteUrl}/knowledge/` },
    { name: article.title, item: canonical }
  ]);

  return (
    <>
      <Script
        id={`article-schema-${article.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id={`article-breadcrumb-schema-${article.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema ? (
        <Script
          id={`article-faq-schema-${article.slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}
      <KnowledgeArticleContent article={article} />
    </>
  );
}
