import BackgroundComponent from "@/components/article/BackgroundSection";
import CategorySlideSection from "@/components/article/CategorySection";
import HeroSlideSecton from "@/components/article/HeroSlideSection";
import ContactSection from "@/components/main-content/ContactSection";

const ArticlePage = () => {
  return (
    <div className="bg-[#0C0B10]">
      <BackgroundComponent />
      <HeroSlideSecton />
      <CategorySlideSection />
      <ContactSection />
    </div>
  );
};

export default ArticlePage;
