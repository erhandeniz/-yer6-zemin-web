import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import type { KnowledgeArticle } from "@/types/knowledge";
import { publishedKnowledgeArticles, getKnowledgeArticleBySlug } from "@/data/knowledge";
import { siteConfig } from "@/lib/siteConfig";
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
  const socialImage = `${siteConfig.siteUrl}/opengraph-image.png`;
  return {
    title: {
      absolute: article.seoTitle
    },
    description: article.description,
    alternates: {
      canonical
    },
    robots: {
      index: true,
      follow: true
    },
    openGraph: {
      type: "article",
      title: article.seoTitle,
      description: article.description,
      url: canonical,
      publishedTime: `${article.publishedAt}T09:00:00+03:00`,
      modifiedTime: `${article.updatedAt}T09:00:00+03:00`,
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: article.title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: article.seoTitle,
      description: article.description,
      images: [socialImage]
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
  const articleImage = `${siteConfig.siteUrl}/images/jet-grout/bursa-yunuseli-nida-evleri-jet-grout-hero.webp`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${canonical}#article`,
    headline: article.title,
    description: article.description,
    image: [articleImage, `${siteConfig.siteUrl}/opengraph-image.png`],
    datePublished: `${article.publishedAt}T09:00:00+03:00`,
    dateModified: `${article.updatedAt}T09:00:00+03:00`,
    mainEntityOfPage: canonical,
    inLanguage: "tr-TR",
    articleSection: article.category,
    keywords: article.keywords,
    author: {
      "@type": "Organization",
      name: siteConfig.companyName,
      url: `${siteConfig.siteUrl}/about/`
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.companyName,
      url: siteConfig.siteUrl
    }
  };
  const faqSchema =
    article.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: article.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer
            }
          }))
        }
      : null;
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: siteConfig.siteUrl
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Bilgi Merkezi",
        item: `${siteConfig.siteUrl}/knowledge/`
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: canonical
      }
    ]
  };

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
