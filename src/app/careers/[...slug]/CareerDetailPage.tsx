"use client";

import BackgroundComponent from "@/components/article/BackgroundSection";
import ContentSection from "@/components/career-detail/ContentSection";
import HeroSection from "@/components/career-detail/HeroSection";
import ContactSection from "@/components/home-page/ContactSection";
import type { CareerContent, CareerItem } from "@/types/career";
import { useBlogQuery } from "@/components/hooks/blog";

interface Props {
  params: { slug: string[] };
}

export default function CareerDetailPage({ params }: Props) {
  const [seoSlug, id] = params.slug || [];

  // Fetch career data
  const {
    data: careerBlog,
    isLoading: isLoadingCareer,
    error: careerError,
  } = useBlogQuery({ id: id || "" });

  const careerItem = careerBlog as CareerItem | null;

  // Fetch career content
  const {
    data: contentData,
    isLoading: isLoadingContent,
    error: contentError,
  } = useBlogQuery({ id: id || "", content: true });

  const content = contentData as CareerContent | null;

  if (!id) {
    return <p className="text-center py-10">Not found data</p>;
  }

  // Show loading state
  if (isLoadingCareer || isLoadingContent) {
    return <p className="text-center py-10">Loading career...</p>;
  }

  // Show error state
  if (careerError || contentError || !careerItem || !content) {
    return <p className="text-center py-10">Error loading career</p>;
  }

  return (
    <div className="bg-background">
      <BackgroundComponent />
      <HeroSection
        category={careerItem?.categoryName}
        title={careerItem?.title}
        description={careerItem?.description}
      />
      <ContentSection content={content?.content} />
      <ContactSection
        subtitle="Thanks! We'll be in touch soon"
        description={`"Got questions? Contact us at <a href="mailto:careers@hubcom.tech" class="underline text-button">careers@hubcom.tech</a>"`}
      />
    </div>
  );
}
