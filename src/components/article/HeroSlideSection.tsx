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
import Link from "next/link";

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
  const { data, loading, error } = useBlog({
    PageSize: 3,
  });
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
                <Link href={`/articles/${item.itemUrl}`}>
                  <div className="rounded-xl w-full max-w-[320px] md:max-w-[480px] lg:max-w-[600px] xl:max-w-[720px] h-[200px] md:h-[300px] lg:h-[400px] xl:h-[540px] overflow-hidden mx-auto relative">

                    <Image
                      src={item.imageUrl}
                      width={720}
                      height={540}
                      alt={item.title}
                      className="w-full relative h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                    />
                    <div className="absolute z-10 flex flex-col gap-1 p-4 bottom-0 right-0 left-0">
                      <p className="text-sm font-semibold">Blockchain / AI / Web3</p>
                      <div className="flex items-center gap-2 justify-between">
                        <p className="font-coda text-4xl text-white">Why Most MVPs Fail  &  How to Build One That Doesn’t</p>
                        <Image src="/arrow_up_right.svg" alt="arrow_up_right" width={26} height={26} />
                      </div>
                    </div>
                  </div>
                </Link>
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
