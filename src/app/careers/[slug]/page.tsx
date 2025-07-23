
import ContentSection from "@/components/career-detail/ContentSection"
import ContactSection from "@/components/career-detail/ContactSection"
import HeroSection from "@/components/career-detail/HeroSection"

const CareersPage = () => {
    return (
        <div className="bg-[#0C0B10]">
            <HeroSection/>
            <ContentSection/>
            <ContactSection/>
        </div>
    )
}

export default CareersPage