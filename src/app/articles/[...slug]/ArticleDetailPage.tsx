// app/articles/[...slug]/ArticleDetailPage.tsx
"use client";

import ContactSection from "@/components/article-detail/ContactSection";
import HeroSection from "@/components/article-detail/HeroSection";
import SlideComponent from "@/components/article-detail/SlideSection";
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

  if (loading) return <p className="text-center py-10">Đang tải...</p>;
  if (error || !blog)
    return <p className="text-center py-10">Đã xảy ra lỗi.</p>;
  if (!blog)
    return <p className="text-center py-10">Không tìm thấy bài viết.</p>;

  return (
    <div>
      <BackgroundComponent />
      <HeroSection
        title={blog.title}
        image={blog.imageUrl}
        createdDate={blog.createdDate}
      />
      <ArticleContent
        image={blog.imageUrl}
        description={blog.description}
        id={id}
      />
      <SlideComponent />
      <ContactSection />
    </div>
  );
};

export default ArticleDetailPage;
