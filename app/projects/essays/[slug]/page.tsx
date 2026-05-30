import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EssayPage } from "@/components/site/EssayPage";
import { essays } from "@/components/site/data";

type EssayRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return essays.map((essay) => ({
    slug: essay.slug,
  }));
}

export async function generateMetadata({
  params,
}: EssayRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const essay = essays.find((item) => item.slug === slug);

  if (!essay) {
    return {
      title: "Essay | Helen Qi",
    };
  }

  return {
    title: `${essay.title} | Helen Qi`,
    description: `${essay.category} essay by Helen Qi.`,
  };
}

export default async function Essay({ params }: EssayRouteProps) {
  const { slug } = await params;
  const essay = essays.find((item) => item.slug === slug);

  if (!essay) {
    notFound();
  }

  return <EssayPage essay={essay} />;
}
