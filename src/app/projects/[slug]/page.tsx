import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/lib/content";
import { siteConfig } from "@/lib/siteConfig";
import { ProjectDetailContent } from "./ProjectDetailContent";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  const canonical = `${siteConfig.siteUrl}/projects/${project.slug}`;
  return {
    title: `${project.title} Zemin Güçlendirme Projesi`,
    description: `${project.summary} ${project.category} uygulaması, zemin güçlendirme ve kalite kontrol yaklaşımıyla sunulur.`,
    alternates: {
      canonical
    },
    openGraph: {
      title: `${project.title} Zemin Güçlendirme Projesi | YER6`,
      description: `${project.summary} ${project.category} uygulaması, zemin güçlendirme ve kalite kontrol yaklaşımıyla sunulur.`,
      url: canonical,
      images: [{ url: project.image }]
    }
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return <ProjectDetailContent slug={slug} />;
}
