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
    <section className="relative z-20 w-full lg:pb-8 ">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 text-white px-4 md:px-8">
        <div className="flex-1 w-full">
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
            icon1="/right.svg"
            icon2="/row.svg"
            text="SEE OPEN ROLES"
            className="w-fit"
          />
        </div>

        <div className="flex-1 w-full flex justify-center items-center">
          <div className="relative w-full aspect-[5/6]">
            <Image
              src="/careers/hero_section.png"
              fill
              alt="service banner"
              className="object-contain rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
