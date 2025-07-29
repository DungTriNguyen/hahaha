import BackgroundComponent from "@/components/article/BackgroundSection";
import HeroSection from "@/components/careers/HeroSection";
import SectionCardCareer from "@/components/careers/SectionCardCareer";
import ContactSection from "@/components/home-page/ContactSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "Careers",
  alternates: {
    canonical: "https://hubcom.tech/careers",
  },
  openGraph: {
    title: "Careers",
    url: "https://hubcom.tech/careers",
    images: [
      {
        url: "https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://hubcom.tech/&size=16",
      },
    ],
  },
};

const CareersPage = () => {
  return (
    <div className="bg-background">
      <BackgroundComponent />
      <HeroSection />
      <SectionCardCareer />
      <ContactSection
        subtitle="Don't see your role listed?"
        description="We’re always open to great people."
        button={{
          text: "Send Open Application",
          href: "#",
          icon1: "/luggage.svg",
          icon2: "/right.svg",
        }}
      />
    </div>
  );
};

export default CareersPage;
