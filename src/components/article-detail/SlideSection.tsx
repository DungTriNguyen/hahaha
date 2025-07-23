"use client";
import SlideComponent from "../SlideComponent";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const slides = [
  {
    img: "/articles/article_1.png",
  },
  {
    img: "/articles/article_2.png",
  },
  {
    img: "/articles/article_3.png",
  },
];

const SlideSection = () => {
  return (
    <section className=" bg-[#0C0B10] w-full flex flex-col justify-center items-center text-white py-20 top-0">
      <div className="container text-start">
        <p className="text-4xl font-coda">RELATED ARTICLES</p>
      </div>
      <div className="pt-16 w-full flex justify-center">
        <div className="w-full">
          <Swiper
            modules={[Pagination]}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            spaceBetween={12}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 2 },
            }}
            className="custom-swiper swiper-custom-pagination mx-auto"
            style={{
              paddingLeft: "290px",
            }}
          >
            {slides.map((slide, idx) => (
              <SwiperSlide key={idx}>
                <div className="rounded-xl overflow-hidden">
                  <Image src={slide.img} width={720} height={540} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SlideSection;
