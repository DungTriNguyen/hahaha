"use client";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { BlogResponse } from "@/types/blog";
import Link from "next/link";
import CardTitle from "../ui/card-title";
import Description from "../ui/description";
import SubTitle from "../ui/sub-title";
import Title from "../ui/title";
import Image from "next/image";
import { useBlogQuery } from "../hooks/blog";

const HeroSlideSecton = () => {
  const {
    data: dataBlog,
    isLoading,
    error,
  } = useBlogQuery({
    PageSize: 3,
  });
  const blogResponse = dataBlog as BlogResponse | null;

  return (
    <section className="container relative z-2 w-full flex flex-col justify-center items-center text-white lg:pt-21 lg:pb-34">
      <div className="text-center">
        <Title title="ARTICLES" />
        <SubTitle
          title="INSIGHTS & IDEAS"
          as="h1"
          className="text-center max-w-full"
        />
      </div>
      <div className="relative z-10 lg:pt-12 w-full">
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".custom-swiper-pagination",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 10 },
            1024: { slidesPerView: 1.937, spaceBetween: 48 },
          }}
          className="custom-swiper swiper-custom-pagination w-full"
        >
          {isLoading ? (
            <div className="flex justify-center items-center h-[200px] md:h-[300px] lg:h-[400px] xl:h-[540px]">
              <p className="text-gray-400">Loading...</p>
            </div>
          ) : error ? (
            <div className="flex justify-center items-center h-[200px] md:h-[300px] lg:h-[400px] xl:h-[540px]">
              <p className="text-gray-400">Error loading data</p>
            </div>
          ) : blogResponse?.items ? (
            blogResponse.items.map((item, idx) => (
              <SwiperSlide key={idx}>
                <Link href={`/articles/${item.itemUrl}`}>
                  <div className="rounded-2xl w-full overflow-hidden mx-auto relative">
                    <Image
                      src={item.imageUrl}
                      unoptimized
                      width={720}
                      height={540}
                      alt={item.title}
                      className="w-full relative h-[250px] lg:h-[540px] object-cover brightness-75 transition-transform duration-500 ease-in-out hover:scale-110"
                    />
                    <div className="absolute z-10 flex flex-col p-4 lg:p-12 bottom-0 right-0 left-0">
                      <Description
                        description="Blockchain / AI / Web3"
                        className="text-start font-semibold lg:text-sm "
                      />
                      <div className="flex items-end text-end gap-4 justify-between">
                        <CardTitle
                          title={item.title}
                          className="text-start text-shadow-lg/40 lg:text-4xl line-clamp-2"
                        />
                        <Image
                          src="/icons/arrow_up_right.svg"
                          alt="arrow_up_right"
                          width={26}
                          unoptimized
                          height={26}
                          className="hover:opacity-80 transition-opacity duration-300"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))
          ) : (
            <div className="flex justify-center items-center h-[200px] md:h-[300px] lg:h-[400px] xl:h-[540px]">
              <p className="text-gray-400">No data found</p>
            </div>
          )}
        </Swiper>

        <div className="custom-swiper-pagination mt-12 flex justify-center" />
      </div>
    </section>
  );
};

export default HeroSlideSecton;
