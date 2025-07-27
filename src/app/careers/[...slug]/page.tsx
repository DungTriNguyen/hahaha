import CareerDetailPage from "./CareerDetailPage";

import { SeoData } from "@/types/seo";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ slug: string[] }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const [id, seoSlug] = slug || [];
  const customId = slug[slug.length - 1];
  const blog = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/Blog/${process.env.NEXT_PUBLIC_TENANT_ID}/${customId}`
  ).then((res) => res.json());
  const seoData = blog as SeoData;
  return {
    title: seoData.metaTitle,
    description: seoData.metaDescription,
    alternates: {
      canonical: seoData.metaCanonical,
    },
    openGraph: {
      title: seoData.metaTitle,
    },
  };
}
const Page = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const { slug } = await params;
  return <CareerDetailPage slug={slug} />;
};

export default Page;
