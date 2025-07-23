"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const slides = [
  {
    img: "/img_slide_1.png",
    title: "Human-Centered",
    desc: "We craft digital products with empathy at the core — designed not just for users, but for people with real needs and emotions.",
  },
  {
    img: "/img_slide_2.png",
    title: "Insight-Driven",
    desc: "Our solutions are guided by research, data, and behavioral insight — turning complex problems into clear, meaningful experiences.",
  },
  {
    img: "/img_slide_3.png",
    title: "Creativity Meets Technology",
    desc: "We push the limits of digital possibilities with modern technology — from AI to blockchain — blending creativity with code.",
  },
  {
    img: "/img_slide_4.png",
    title: "Partnership",
    desc: "Every product we build aligns with your long-term goals — so it's not just beautiful, but scalable, strategic, and future-ready.",
  },
];

const AboutSection = () => {
  return (
    <section className="relative z-20 w-full pt-40 bg-[#0C0B10]">
      <iframe
        src="https://my.spline.design/particleplanet-d7SCh4sTgE3E99WaGUflMxS9/"
        className="absolute w-full h-full object-cover z-10 pointer-events-none"
        style={{
          pointerEvents: "none",
          left: 0,
          top: 0,
          bottom: 0,
          position: "absolute",
        }}
        allowFullScreen
      />
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(12, 11, 16, 0.8) 50%, rgba(12, 11, 16, 1) 100%)",
        }}
      />

      <div className="container relative z-30 flex flex-col items-center justify-center gap-9 text-center max-w-4xl mx-auto px-4">
        <span className="text-[#B3CCFF] text-sm font-semibold tracking-widest uppercase">
          About
        </span>
        <h2 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold uppercase font-coda">
          WE BUILD BEYOND BRIEFS
        </h2>
        <p className="text-white/90 text-base md:text-lg max-w-2xl">
          We craft scalable systems where clarity meets creativity
          <br />
          Human-focused. Tech-backed. Future-ready
        </p>
      </div>

      <div className="relative z-30 pt-16 pb-20">
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          spaceBetween={48}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 1.2, spaceBetween: 32 },
            1024: { slidesPerView: 1.5, spaceBetween: 48 },
            1440: { slidesPerView: 2, spaceBetween: 48 },
          }}
          className="custom-swiper swiper-custom-pagination"
          style={{
            // paddingLeft: "max(1rem, calc((100vw - 1440px) / 2))",
            paddingRight: "max(1rem, calc((100vw - 1440px) / 2))",
            paddingLeft: "290px",
          }}
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="rounded-2xl bg-[#121620] h-[424px] flex shadow-lg overflow-hidden">
                <div className="w-1/2 h-full relative">
                  <Image
                    src={slide.img}
                    fill
                    alt={slide.title}
                    className="object-cover"
                  />
                </div>
                <div className="w-1/2 flex flex-col justify-center p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl text-white font-coda mb-4">
                    {slide.title}
                  </h3>
                  <div className="w-12 h-1 bg-white rounded mb-4" />
                  <p className="text-base text-white/80 leading-relaxed">
                    {slide.desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default AboutSection;
