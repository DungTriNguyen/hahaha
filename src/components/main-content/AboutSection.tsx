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
    desc: "Every product we build aligns with your long-term goals — so it’s not just beautiful, but scalable, strategic, and future-ready.",
  },
];

const AboutSection = () => {
  return (
    <section className="relative z-20 w-full pt-40 bg-[#0C0B10]">
      <video
        src="/threshold-dark-ambient-ui.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover z-10 pointer-events-none"
      />

      <div className=" container relative z-30 flex flex-col  items-center justify-center gap-6 text-center max-w-2xl w-full">
        <span className="text-[#B3CCFF] text-sm font-semibold tracking-widest uppercase mb-2">
          Contact
        </span>
        <h2 className="text-white text-4xl md:text-6xl font-bold uppercase mb-2">
          let&apos;s achieve your goals together
        </h2>
        <p className="text-white/90 text-base md:text-lg mb-4">
          Tell us about your desires
        </p>
      </div>
      <div className=" relative z-30 pt-24">
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
            paddingLeft: "290px",
          }}
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div
                className={`rounded-2xl bg-black h-full flex gap-9 justify-between shadow-lg`}
                style={{ backgroundColor: "#121620" }}
              >
                <div className="w-full h-auto">
                  <Image
                    src={slide.img}
                    width={318}
                    height={424}
                    alt=""
                    className="w-full h-full rounded-l-lg"
                  />
                </div>
                <div className="flex flex-col ">
                  <h3 className="text-2xl md:text-3xl text-left text-white mb-4">
                    {slide.title}
                  </h3>
                  <div className="w-12 h-1 bg-white rounded mb-4" />
                  <p className="text-base text-left text-white/80">
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
