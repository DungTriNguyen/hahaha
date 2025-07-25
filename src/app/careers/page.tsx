
import BackgroundComponent from "@/components/article/BackgroundSection"
import ContactSection from "@/components/careers/ContactSection"
import HeroSection from "@/components/careers/HeroSection"
import SectionCardCareer from "@/components/careers/SectionCardCareer"

const CareersPage = () => {
    return (
        <div className="bg-[#0C0B10]">
            <BackgroundComponent />
            <HeroSection/>
            <SectionCardCareer/>
            <ContactSection/>
        </div>
    )
}

export default CareersPage