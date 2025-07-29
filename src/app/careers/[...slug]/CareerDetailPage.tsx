import BackgroundComponent from "@/components/article/BackgroundSection";
import ContentSection from "@/components/career-detail/ContentSection";
import HeroSection from "@/components/career-detail/HeroSection";
import ContactSection from "@/components/home-page/ContactSection";
import { getBlog } from "@/components/hooks/blog";
import type { CareerContent, CareerItem } from "@/types/career";

interface Props {
  params: { slug: string[] };
}
export default async function CareerDetailPage({ params }: Props) {
  const [seoSlug, id] = params.slug || [];

  if (!id) {
    return <p className="text-center py-10">Not found data</p>;
  }
  let careerBlog: CareerItem | null = null;
  let contentData: CareerContent | null = null;

  try {
    const [careerRes, contentRes] = await Promise.all([
      getBlog({ id }),
      getBlog({ id, content: true }),
    ]);
    careerBlog = careerRes as CareerItem;
    contentData = contentRes as CareerContent;
  } catch (error) {
    return <p className="text-center py-10">Error loading career</p>;
  }

  if (!careerBlog || !contentData) {
    return <p className="text-center py-10">Not found data</p>;
  }

  return (
    <div className="bg-background">
      <BackgroundComponent />
      <HeroSection
        category={careerBlog?.categoryName}
        title={careerBlog?.title}
        description={careerBlog?.description}
      />
      <ContentSection content={contentData?.content} />
      <ContactSection
        subtitle="Thanks! We’ll be in touch soon"
        description={`“Got questions? Contact us at <a href="mailto:careers@hubcom.tech" class="underline text-button">careers@hubcom.tech</a>”`}
      />
    </div>
  );
}
