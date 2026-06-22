import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { KnowledgeArticle } from "@/types/knowledge";
import { publishedKnowledgeArticles, getKnowledgeArticleBySlug } from "@/data/knowledge";
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
  const canonical = `https://www.yer6zemin.com.tr/knowledge/${article.slug}`;
  return {
    title: article.seoTitle,
    description: article.description,
    alternates: {
      canonical: `/knowledge/${article.slug}`
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

  return <KnowledgeArticleContent article={article} />;
}
