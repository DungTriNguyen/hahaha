"use client";
import AboutSection from "@/components/home-page/AboutSection";
import ContactSection from "@/components/home-page/ContactSection";
import FromIdeaToProduct from "@/components/home-page/FromIdeaToProduct";
import HeroSection from "@/components/home-page/HeroSection";
import ProjectSection from "@/components/home-page/ProjectSection";
import ServiceSection from "@/components/home-page/ServiceSection";
import { useEffect } from "react";
import initAnimations from "../../../public/animations/in-view-animation";

export default function Home() {
  useEffect(() => {
    initAnimations();
  }, []);
  return (
    <div>
      <HeroSection />
      <FromIdeaToProduct />
      <ProjectSection />
      <AboutSection />
      <ServiceSection />
      <ContactSection
        id="contact"
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
}
