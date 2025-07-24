"use client";
import SlideComponent from "../SlideComponent";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";

import { useBlog } from "../hooks/blog";
import { BlogResponse } from "@/types/blog";

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

const HeroSlideSecton = () => {
  const { data, loading, error } = useBlog();
  const dataBlog = data as BlogResponse;
  console.log("data", dataBlog);

  return (
    <section className="w-full flex flex-col justify-center items-center text-white py-10 md:py-16 lg:py-20">
      <div className="container text-center px-4 md:px-6 lg:px-8">
        <p className="text-sm md:text-base">ARTICLES</p>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-coda">
          INSIGHTS & IDEAS
        </h1>
      </div>
      <div className="pt-8 md:pt-12 lg:pt-16 w-full justify-center px-4 md:px-6 lg:px-8">
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".custom-swiper-pagination",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 32,
            },
            1440: {
              slidesPerView: 2,
              spaceBetween: 48,
            },
          }}
          className="custom-swiper swiper-custom-pagination px-5 md:px-10 lg:px-20 xl:px-[290px]"
        >
          {dataBlog?.items ? (
            dataBlog.items.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="rounded-xl w-full max-w-[320px] md:max-w-[480px] lg:max-w-[600px] xl:max-w-[720px] h-[200px] md:h-[300px] lg:h-[400px] xl:h-[540px] overflow-hidden mx-auto">
                  <Image
                    src={item.imageUrl}
                    width={720}
                    height={540}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))
          ) : (
            <div className="flex justify-center items-center h-[200px] md:h-[300px] lg:h-[400px] xl:h-[540px]">
              <p className="text-gray-400">Không có dữ liệu</p>
            </div>
          )}
        </Swiper>
        <div className="custom-swiper-pagination mt-6 md:mt-8 lg:mt-10 flex justify-center" />
      </div>
    </section>
  );
};

export default HeroSlideSecton;
