"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import Title from "../ui/title";
import SubTitle from "../ui/sub-title";
import Description from "../ui/description";
import CardTitle from "../ui/card-title";
import CardDescription from "../ui/card-description";

const slides = [
  {
    img: "/home/img_slide_1.webp",
    title: "Human-Centered",
    desc: "We craft digital products with empathy at the core — designed not just for users, but for people with real needs and emotions.",
  },
  {
    img: "/home/img_slide_2.webp",
    title: "Insight-Driven",
    desc: "Our solutions are guided by research, data, and behavioral insight — turning complex problems into clear, meaningful experiences.",
  },
  {
    img: "/home/img_slide_3.webp",
    title: "Creativity Meets Technology",
    desc: "We push the limits of digital possibilities with modern technology — from AI to blockchain — blending creativity with code.",
  },
  {
    img: "/home/img_slide_4.webp",
    title: "Partnership",
    desc: "Every product we build aligns with your long-term goals — so it's not just beautiful, but scalable, strategic, and future-ready.",
  },
];

const AboutSection = () => {
  return (
    <section
      className="relative z-20 w-full lg:pt-40 bg-background overflow-hidden data-scroll-to"
      id="about"
    >
      <iframe
        src="https://my.spline.design/particleplanet-d7SCh4sTgE3E99WaGUflMxS9/"
        className="absolute w-full h-full object-cover z-10 pointer-events-none animated-iframe"
        style={{
          pointerEvents: "none",
          left: 0,
          top: 0,
          bottom: 0,
          position: "absolute",
        }}
        loading="lazy"
        title="3D Interactive Spline Animation of Particle Planet"
        allowFullScreen
      />
      <div
        className="absolute inset-0 z-10 pointer-events-none "
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(12, 11, 16, 0.93) 50%, rgba(12, 11, 16, 1) 100%)",
        }}
      />

      <div className="container relative z-30 flex flex-col items-center justify-center gap-1 text-center mx-auto px-4">
        <Title title="About" />
        <SubTitle title="WE BUILD BEYOND BRIEFS" as="h2" className="pb-4" />
        <Description
          description={`We craft scalable systems where clarity meets creativity <br /> Human-focused. Tech-backed. Future-ready`}
        />
      </div>

      <div className="container relative z-10 py-4 lg:pt-16 lg:pb-20">

        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".custom-swiper-pagination",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          spaceBetween={48}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 10 },
            1024: { slidesPerView: 2, spaceBetween: 48 },
          }}
          className="custom-swiper swiper-custom-pagination w-full"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="rounded-2xl bg-card flex flex-col gap-9 md:flex-row h-auto md:h-[424px] shadow-lg overflow-hidden">
                <div className="w-full lg:w-[318px] h-48 md:h-full relative">
                  <Image
                    src={slide.img}
                    fill
                    alt={slide.title}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center pr-6 p-2 lg:p-0 lg:pr-6">
                  <CardTitle title={slide.title} as="h3" className="mb-4" />
                  <div className="w-12 h-0.5 bg-white mb-4" />
                  <CardDescription
                    description={slide.desc}
                    className="italic"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-swiper-pagination mt-16 flex justify-center" />
      </div>
    </section>
  );
};

export default AboutSection;
