import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, getServicePaths } from "@/lib/content";
import { ServiceDetailContent } from "./ServiceDetailContent";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getServicePaths();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    notFound();
  }

  const canonical = `https://www.yer6zemin.com.tr/services/${service.slug}`;

  return {
    title: `${service.title} | Hizmetler`,
    description: service.summary,
    alternates: {
      canonical: `/services/${service.slug}`
    },
    openGraph: {
      title: `${service.title} | Hizmetler`,
      description: service.summary,
      url: canonical
    }
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return <ServiceDetailContent slug={slug} />;
}
