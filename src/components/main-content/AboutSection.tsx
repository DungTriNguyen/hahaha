"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const slides = [
  {
    title: "Human-Centered",
    desc: "We craft digital products with empathy at the core — designed not just for users, but for people with real needs and emotions.",
  },
  {
    title: "Insight-Driven",
    desc: "Our solutions are guided by research, data, and behavioral insight — turning complex problems into clear, meaningful experiences.",
  },
  {
    title: "Creativity Meets Technology",
    desc: "We push the limits of digital possibilities with modern technology — from AI to blockchain — blending creativity with code.",
  },
  {
    title: "Partnership",
    desc: "Every product we build aligns with your long-term goals — so it’s not just beautiful, but scalable, strategic, and future-ready.",
  },
];

const AboutSection= () => {
  return (
    <section className="relative z-20 w-full py-16 bg-black">
      <div className="bg-black">
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
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          className="custom-swiper swiper-custom-pagination "
          style={{
            paddingLeft: "240px",
          }}
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div
                className={`rounded-2xl p-8 bg-black h-full flex flex-col justify-between shadow-lg`}
                style={{ minHeight: 340, backgroundColor: "#121620" }}
              >
                <h3 className="text-2xl md:text-3xl text-left text-white mb-4">
                  {slide.title}
                </h3>
                <div className="w-12 h-1 bg-white rounded mb-4" />
                <p className="text-base text-left text-white/80">
                  {slide.desc}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default AboutSection;