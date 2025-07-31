import BackgroundComponent from "@/components/article/BackgroundSection";
import CategorySlideSection from "@/components/article/CategorySection";
import HeroSlideSecton from "@/components/article/HeroSlideSection";
import ContactSection from "@/components/home-page/ContactSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles",
  description: "Articles",
  alternates: {
    canonical: "https://hubcom.tech/articles",
  },
  openGraph: {
    title: "Articles",
    url: "https://hubcom.tech/articles",
    images: [
      {
        url: "https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://hubcom.tech/&size=16",
      },
    ],
  },
};
const ArticlePage = () => {
  return (
    <div className="bg-background">
      <BackgroundComponent />
      <HeroSlideSecton />
      <CategorySlideSection />
      <ContactSection
        title="Contact"
        subtitle="let's achieve your goals together"
        description="Tell us about your desires"
        button={{
          text: "Share your idea NOW",
          href: "#",
          icon1: "/icons/light.svg",
          icon2: "/icons/right.svg",
          
        }}
      />
    </div>
  );
};

export default ArticlePage;
