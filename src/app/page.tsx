import AboutSection from "@/components/main-content/AboutSection";
import ContactSection from "@/components/main-content/ContactSection";
import FromIdeaToProduct from "@/components/main-content/FromIdeaToProduct";
import HeroSection from "@/components/main-content/HeroSection";
import ProjectSection from "@/components/main-content/ProjectSection";
import ServiceSection from "@/components/main-content/ServiceSection";
import FirstComponent from "@/components/ServiceComponent/FirstComponent";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <HeroSection/>
      <FromIdeaToProduct/>
      <ProjectSection/>
      <AboutSection/>
      <ServiceSection/>
      <ContactSection/>
    </div>
  );
}
