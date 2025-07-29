"use client";

import ContactSection from "@/components/home-page/ContactSection";
import HeroSection from "@/components/article-detail/HeroSection";
import SlideComponent from "@/components/article-detail/RelatedArticle";
import ArticleContent from "@/components/article-detail/ArticleContent";
import { useBlog } from "@/components/hooks/blog";
import { BlogItem } from "@/types/blog";
import BackgroundComponent from "@/components/article/BackgroundSection";

interface Props {
  slug: string[];
}

const ArticleDetailPage = ({ slug }: Props) => {
  const [seoSlug, id] = slug || [];
  const { data, loading, error } = useBlog({ id });
  const blog = data as BlogItem;

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error || !blog) return <p className="text-center py-10">Error</p>;
  if (!blog) return <p className="text-center py-10">Not found data</p>;

  return (
    <div className="bg-background">
      <BackgroundComponent />
      <HeroSection
        title={blog.title}
        image={blog.imageUrl}
        createdDate={blog.createdDate}
      />
      <ArticleContent description={blog.description} id={id} />
      <SlideComponent />
      <ContactSection
        subtitle="Got an idea to build?"
        description="Tell us about your desires"
        button={{
          text: "Start your MVP",
          href: "#",
          icon1: "/light.svg",
          icon2: "/right.svg",
        }}
      />
    </div>
  );
};

export default ArticleDetailPage;
