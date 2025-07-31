"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import Title from "../ui/title";
import SubTitle from "../ui/sub-title";
import Description from "../ui/description";
import Button from "../ui/button";

const HeroSection = () => {
  return (
    <section className="relative z-20 w-full lg:pb-8 lg:pt-44">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row  items-center lg:items-start  justify-center lg:justify-start  gap-12 text-white">
        <div className="w-full max-w-[800px] justify-items-start ">
          <Title title="SERVICES" />
          <SubTitle
            title="Where Great People Do Great Work"
            as="h1"
            className="text-start mb-9 max-w-full"
          />
          <Description
            description="Whether you're a designer, developer, or strategist, your voice matters here."
            className="mb-9 text-start"
          />
          <Button
            href="#"
            icon1="/icons/right.svg"
            icon2="/icons/row.svg"
            text="SEE OPEN ROLES"
            className="w-fit"
            aria-label="SEE OPEN ROLES"
          />
        </div>

        <div className="flex justify-start items-start">
          <div className="relative w-full h-auto max-w-[592px]">
            <Image
              src="/careers/hero_section.webp"
              alt="service banner"
              width={592}
              height={622}
              priority
              sizes="(max-width: 768px) 100vw, 592px"
              className="object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
