"use client";
import BackgroundComponent from "@/components/article/BackgroundSection";
import ContentSection from "@/components/career-detail/ContentSection";
import HeroSection from "@/components/career-detail/HeroSection";
import ContactSection from "@/components/home-page/ContactSection";
import { useBlog } from "@/components/hooks/blog";
import { CareerContent, CareerItem } from "@/types/career";
interface Props {
  slug: string[];
}
const CareerDetailPage = ({ slug }: Props) => {
  const [seoSlug, id] = slug || [];
  const { data, loading } = useBlog({ id });
  const { data: content } = useBlog({ id: id, content: true });
  const contentData = content as CareerContent;
  const careerBlog = data as CareerItem;

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (!careerBlog || !content)
    return <p className="text-center py-10">Not found data</p>;
  return (
    <div className="bg-[#0C0B10]">
      <BackgroundComponent />
      <HeroSection
        category={careerBlog.categoryName}
        title={careerBlog.title}
        description={careerBlog.description}
      />
      <ContentSection content={contentData.content} />
      <ContactSection
        subtitle="Thanks! We’ll be in touch soon"
        description={`“Got questions? Contact us at <a href="mailto:careers@hubcom.tech" class="underline text-[#2468FF]">careers@hubcom.tech</a>”`}
      />
    </div>
  );
};

export default CareerDetailPage;
