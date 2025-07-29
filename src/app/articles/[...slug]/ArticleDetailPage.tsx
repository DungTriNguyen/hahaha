import ContactSection from "@/components/home-page/ContactSection";
import HeroSection from "@/components/article-detail/HeroSection";
import SlideComponent from "@/components/article-detail/RelatedArticle";
import ArticleContent from "@/components/article-detail/ArticleContent";
import BackgroundComponent from "@/components/article/BackgroundSection";

import { getBlog } from "@/components/hooks/blog";
import type { BlogItem, BlogResponse } from "@/types/blog";

interface Props {
  params: { slug: string[] };
}

export default async function ArticleDetailPage({ params }: Props) {
  const [seoSlug, id] = params.slug || [];
  let blog: BlogItem | null = null;
  try {
    const data = await getBlog({ id });
    blog = data as BlogItem;
  } catch (error) {
    return <p className="text-center py-10">Error loading article</p>;
  }
  if (!blog) {
    return <p className="text-center py-10">Not found data</p>;
  }
  let articleRelatedData: BlogResponse | null = null;
  try {
    const related = await getBlog({
      PageIndex: 0,
      PageSize: 3,
      ExcludeBlogId: blog.id,
      BlogCategoryId: blog?.categoryId,
    });
    articleRelatedData = related as BlogResponse;
  } catch (error) {
    articleRelatedData = null;
  }
  console.log("articleRelatedData:::::", articleRelatedData);
  return (
    <div className="bg-background">
      <BackgroundComponent />
      <HeroSection
        title={blog?.title}
        image={blog?.imageUrl}
        createdDate={blog?.createdDate}
      />
      <ArticleContent description={blog?.description} id={id} />
      <SlideComponent articleRelatedData={articleRelatedData} />
      <ContactSection
        subtitle="Got an idea to build?"
        button={{
          text: "Start your MVP",
          href: "#",
          icon1: "/light.svg",
          icon2: "/right.svg",
        }}
      />
    </div>
  );
}
