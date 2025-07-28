"use client";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { BlogResponse } from "@/types/blog";
import Link from "next/link";
import { useBlog } from "../hooks/blog";
import CardTitle from "../ui/card-title";
import Description from "../ui/description";
import SubTitle from "../ui/sub-title";
import Title from "../ui/title";

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
  const { data } = useBlog({
    PageSize: 3,
  });
  const dataBlog = data as BlogResponse;
  console.log("data", dataBlog);

  return (
    <section className=" relative z-2 w-full flex flex-col justify-center items-center text-white py-10 md:py-16 lg:py-20 overflow-hidden">
      <div className="container text-center px-4 md:px-6 lg:px-8">
        <Title title="ARTICLES" />
        <SubTitle
          title="INSIGHTS & IDEAS"
          as="h1"
          className="text-center max-w-full"
        />
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
          spaceBetween={12}
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
                    <img
                      loading="lazy"
                      src={item.imageUrl}
                      width={720}
                      height={540}
                      alt={item.title}
                      className="w-full relative h-full object-cover brightness-75 transition-transform duration-500 ease-in-out hover:scale-110"
                    />
                    <div className="absolute z-10 flex flex-col gap-1 p-4 lg:p-12 bottom-0 right-0 left-0">
                      <Description
                        description="Blockchain / AI / Web3"
                        className="text-start font-semibold lg:text-sm mb-2"
                      />
                      <div className="flex items-center gap-4 justify-between">
                        <CardTitle
                          title={item.title}
                          className="text-start text-shadow-lg/40 lg:text-4xl"
                        />
                        <img
                          loading="lazy"
                          src="/arrow_up_right.svg"
                          alt="arrow_up_right"
                          width={26}
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
        <div className="custom-swiper-pagination mt-6 md:mt-8 lg:mt-10 flex justify-center" />
      </div>


      {/* <div className="relative z-10 lg:pt-16 lg:pb-20">
        <div className="px-4 md:px-6 lg:px-0 overflow-hidden py-8">
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
              640: { slidesPerView: 1, spaceBetween: 0 },
              1024: { slidesPerView: 2, spaceBetween: 48 },
            }}
            style={{
              paddingLeft: "0px",
              paddingRight: "0px",
            }}
            className="custom-swiper swiper-custom-pagination lg:w-[1400px] w-[100%] md:w-[800px]"
          >

            <SwiperSlide>
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
                          className="w-full relative h-full object-cover brightness-75 transition-transform duration-500 ease-in-out hover:scale-110"
                        />
                        <div className="absolute z-10 flex flex-col gap-1 p-4 lg:p-12 bottom-0 right-0 left-0">
                          <Description
                            description="Blockchain / AI / Web3"
                            className="text-start font-semibold lg:text-sm mb-2"
                          />
                          <div className="flex items-center gap-4 justify-between">
                            <CardTitle
                              title={item.title}
                              className="text-start text-shadow-lg/40 lg:text-4xl"
                            />
                            <Image
                              src="/arrow_up_right.svg"
                              alt="arrow_up_right"
                              width={26}
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
            </SwiperSlide>
          
          </Swiper>
        </div>
        <div className="custom-swiper-pagination mt-10 flex justify-center" />
      </div> */}
    </section>
  );
};

export default HeroSlideSecton;
