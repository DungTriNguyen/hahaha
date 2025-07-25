"use client";
import AboutSection from "@/components/main-content/AboutSection";
import ContactSection from "@/components/main-content/ContactSection";
import FromIdeaToProduct from "@/components/main-content/FromIdeaToProduct";
import HeroSection from "@/components/main-content/HeroSection";
import ProjectSection from "@/components/main-content/ProjectSection";
import ServiceSection from "@/components/main-content/ServiceSection";
import FirstComponent from "@/components/ServiceComponent/FirstComponent";
import Image from "next/image";
import { useEffect } from "react";
import initAnimations from "../../public/js/in-view-animation";
export default function Home() {
  useEffect(() => {
    initAnimations();
  }, []);
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
