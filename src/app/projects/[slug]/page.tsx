import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { projects } from "@/lib/content";
import { siteConfig } from "@/lib/siteConfig";
import { ProjectDetailContent } from "./ProjectDetailContent";

type Props = {
  params: Promise<{ slug: string }>;
};

type Project = (typeof projects)[number];

function getProjectImages(project: Project) {
  const imageAlt =
    "imageAlt" in project && typeof project.imageAlt === "string" ? project.imageAlt : project.title;
  const gallery =
    "gallery" in project ? (project.gallery as { src: string; alt: string }[]) : [];
  const uniqueImages = new Map<string, string>();

  [{ src: project.image, alt: imageAlt }, ...gallery].forEach(({ src, alt }) => {
    if (!uniqueImages.has(src)) uniqueImages.set(src, alt);
  });

  return Array.from(uniqueImages, ([src, alt]) => ({
    url: src.startsWith("http") ? src : `${siteConfig.siteUrl}${src}`,
    alt
  }));
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  const canonical = `${siteConfig.siteUrl}/projects/${project.slug}/`;
  const title = "seoTitle" in project && typeof project.seoTitle === "string" ? project.seoTitle : `${project.title} Zemin Güçlendirme Projesi`;
  const description =
    "metaDescription" in project && typeof project.metaDescription === "string"
      ? project.metaDescription
      : `${project.summary} ${project.category} uygulaması, zemin güçlendirme ve kalite kontrol yaklaşımıyla sunulur.`;
  const images = getProjectImages(project);

  return {
    title,
    description,
    alternates: {
      canonical
    },
    openGraph: {
      title,
      description,
      url: canonical,
      images
    }
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const canonical = `${siteConfig.siteUrl}/projects/${project.slug}/`;
  const images = getProjectImages(project);
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${project.title} - ${project.category} Zemin Güçlendirme Projesi`,
    description: project.summary,
    url: canonical,
    image: images.map(({ url, alt }, index) => ({
      "@type": "ImageObject",
      url,
      contentUrl: url,
      caption: alt,
      representativeOfPage: index === 0
    })),
    ...(/^\d{4}$/.test(project.year) ? { datePublished: `${project.year}-01-01` } : {}),
    author: {
      "@type": "Organization",
      name: siteConfig.companyName,
      url: siteConfig.siteUrl
    },
    publisher: {
      "@type": "Organization",
      "@id": `${siteConfig.siteUrl}/#organization`,
      name: siteConfig.companyName
    },
    about: {
      "@type": "Service",
      name: project.category,
      provider: { "@id": `${siteConfig.siteUrl}/#organization` }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: siteConfig.siteUrl },
      { "@type": "ListItem", position: 2, name: "Projeler", item: `${siteConfig.siteUrl}/projects/` },
      { "@type": "ListItem", position: 3, name: project.title, item: canonical }
    ]
  };

  return (
    <>
      <Script
        id={`project-schema-${project.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <Script
        id={`project-breadcrumb-${project.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ProjectDetailContent slug={slug} />
    </>
  );
}
