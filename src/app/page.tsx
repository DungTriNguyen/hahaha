import AboutSection from "@/components/main-content/AboutSection";
import ContactSection from "@/components/main-content/ContactSection";
import HeroSection from "@/components/main-content/HeroSection";
import ProjectSection from "@/components/main-content/ProjectSection";
import ServiceSection from "@/components/main-content/ServiceSection";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <HeroSection/>
      <ProjectSection/>
      {/* <AboutSection/> */}
      <ServiceSection/>
      <ContactSection/>
      

    </div>
  );
}
