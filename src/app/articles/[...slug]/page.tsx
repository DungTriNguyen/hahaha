import type { Metadata, ResolvingMetadata } from "next";
import ArticleDetailPage from "./ArticleDetailPage";
import { getBlog } from "@/components/hooks/blog";
import { SeoData } from "@/types/seo";

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
    const blogData = await getBlog({ id: customId });
    seoData = blogData as Partial<SeoData>;
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

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <ArticleDetailPage params={{ slug }} />;
}