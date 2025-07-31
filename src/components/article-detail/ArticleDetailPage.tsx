"use client";

import ContactSection from "@/components/home-page/ContactSection";
import HeroSection from "@/components/article-detail/HeroSection";
import SlideComponent from "@/components/article-detail/RelatedArticle";
import ArticleContent from "@/components/article-detail/ArticleContent";
import BackgroundComponent from "@/components/article/BackgroundSection";

import type { BlogItem, BlogResponse } from "@/types/blog";
import { useBlogQuery } from "@/components/hooks/blog";

interface Props {
  params: { slug: string[] };
}

export default function ArticleDetailPage({ params }: Props) {
  const [seoSlug, id] = params.slug || [];

  const {
    data: blog,
    isLoading: isLoadingBlog,
    error: blogError,
  } = useBlogQuery({ id });

  const blogItem = blog as BlogItem | null;

  const {
    data: articleRelatedData,
    isLoading: isLoadingRelated,
    error: relatedError,
  } = useBlogQuery({
    PageIndex: 0,
    PageSize: 3,
    ExcludeBlogId: blogItem?.id,
    BlogCategoryId: blogItem?.categoryId,
  });

  const relatedData = articleRelatedData as BlogResponse | null;


  if (isLoadingBlog) {
    return <p className="text-center py-10">Loading article...</p>;
  }


  if (blogError || !blogItem) {
    return <p className="text-center py-10">Error loading article</p>;
  }

  return (
    <div className="bg-background">
      <BackgroundComponent />
      <HeroSection
        title={blogItem?.title}
        image={blogItem?.imageUrl}
        createdDate={blogItem?.createdDate}
      />
      <ArticleContent description={blogItem?.description} id={id} />
      <SlideComponent articleRelatedData={relatedData} />
      <ContactSection
        subtitle="Got an idea to build?"
        button={{
          text: "Start your MVP",
          href: "#",
          icon1: "/icons/light.svg",
          icon2: "/icons/right.svg",
        }}
      />
    </div>
  );
}
