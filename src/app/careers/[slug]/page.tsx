
import ContentSection from "@/components/career-detail/ContentSection"
import ContactSection from "@/components/career-detail/ContactSection"
import HeroSection from "@/components/career-detail/HeroSection"
import BackgroundComponent from "@/components/article/BackgroundSection"

const CareersPage = () => {
    return (
        <div >
            <BackgroundComponent />
            <HeroSection/>
            <ContentSection/>
            <ContactSection/>
        </div>
    )
}

export default CareersPage