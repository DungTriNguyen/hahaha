"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CardTitle from "../ui/card-title";
import Description from "../ui/description";
import Link from "next/link";

const slides = [
  {
    itemUrl: "/articles/article_1",
    imageUrl: "/articles/article_1.png",
    title: "Article 1",
  },
  {
    itemUrl: "/articles/article_2",
    imageUrl: "/articles/article_2.png",
    title: "Article 2",
  },
  {
    itemUrl: "/articles/article_3",
    imageUrl: "/articles/article_3.png",
    title: "Article 3",
  },
];

const SlideSection = () => {
  return (
    <section className=" relative z-2 bg-background w-full flex flex-col justify-center items-center text-white lg:py-20 top-0">
      <div className="container text-start">
        <p className="text-4xl font-coda">RELATED ARTICLES</p>
      </div>

      <div className="bg-background pt-8 md:pt-12 lg:pt-16 w-full justify-center px-4 md:px-6 lg:px-8 overflow-hidden">
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
          className="custom-swiper swiper-custom-pagination px-5 md:px-10 lg:px-20"
        >
          {slides.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="rounded-2xl">
                <Link href={`/articles/${item.itemUrl}`}>
                  <div className="rounded-xl w-full max-w-[320px] md:max-w-[480px] lg:max-w-[600px] xl:max-w-[720px] h-[200px] md:h-[300px] lg:h-[400px] xl:h-[540px] mx-auto relative">
                    <Image
                      src={item.imageUrl}
                      width={720}
                      height={540}
                      alt={item.title}
                      className="w-full relative h-full object-cover brightness-75 transition-transform duration-500 ease-in-out hover:scale-110"
                    />
                    <div className="absolute z-10 flex flex-col gap-1 p-12 bottom-0 right-0 left-0">
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
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-swiper-pagination mt-6 md:mt-8 lg:mt-10 flex justify-center" />
      </div>
    </section>
  );
};

export default SlideSection;
