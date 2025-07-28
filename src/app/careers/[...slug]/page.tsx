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
  const parentMetadata = await parent;
  const { slug } = await params;
  const customId = slug?.[slug.length - 1];
  let seoData: Partial<SeoData> = {};

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/Blog/${process.env.NEXT_PUBLIC_TENANT_ID}/${customId}`,
      { cache: "no-store" }
    );

    if (res.ok) {
      seoData = await res.json();
    } else {
      console.warn("SEO fetch failed:", res.status);
    }
  } catch (error) {
    console.error("Error fetching SEO metadata:", error);
  }

  return {
    title:
      seoData.metaTitle ||
      parentMetadata.title ||
      "Hubcom | Digital Transformation Solutions for Businesses",
    description:
      seoData.metaDescription ||
      parentMetadata.description ||
      "Hoạt động trong lĩnh vực phát triển, sản xuất và cung cấp các sản phẩm, dịch vụ hoặc giải pháp công nghệ thông tin",
    keywords: seoData.metaKeywords || parentMetadata.keywords || undefined,
    alternates: {
      canonical: seoData.metaCanonical || parentMetadata?.alternates?.canonical,
    },
    robots: {
      index: seoData.metaCrawlMode === 1,
      follow: seoData.metaCrawlMode === 1,
    },
    openGraph: {
      images:
        seoData.images?.map((img) => ({ url: img.origin })) ||
        parentMetadata.openGraph?.images,
    },
  };
}
const Page = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const { slug } = await params;
  return <CareerDetailPage slug={slug} />;
};

export default Page;
