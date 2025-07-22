import ContactSection from "@/components/main-content/ContactSection"
import HeroSection from "@/components/careers/HeroSection"
import SlideComponent from "@/components/article-detail/SlideSection"
import ArticleContent from "@/components/article-detail/ArticleContent"

const CareersPage = () => {
    return (
        <div>
            <HeroSection/>
            <ArticleContent/>
            <SlideComponent/> 
            <ContactSection/>
        </div>
    )
}

export default CareersPage