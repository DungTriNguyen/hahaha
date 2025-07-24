// app/articles/[...slug]/page.tsx
import ArticleDetailPage from "./ArticleDetailPage";

interface PageProps {
  params: {
    slug: string[];
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  return <ArticleDetailPage slug={slug} />;
}
