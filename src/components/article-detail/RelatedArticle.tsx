"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CardTitle from "../ui/card-title";
import Description from "../ui/description";
import Link from "next/link";
import { BlogResponse } from "@/types/blog";

const SlideSection = ({
  articleRelatedData,
}: {
  articleRelatedData: BlogResponse | null;
}) => {
  return (
    <section className="container w-full px-4 md:px-0 py-16 md:py-20 flex flex-col lg:gap-12 ">
      <div className="text-start">
        <p className="text-4xl font-coda">RELATED ARTICLES</p>
      </div>

      <div className="relative z-10 ">

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
            1024: { slidesPerView: 1.937, spaceBetween: 48 },
          }}
          className="custom-swiper swiper-custom-pagination w-full overflow-hidden"
        >
          {articleRelatedData?.items &&
            articleRelatedData?.items.length > 0 ? (
            articleRelatedData?.items?.map((item, idx) => (
              <SwiperSlide key={idx}>
                <Link href={`/articles/${item.itemUrl}`}>
                  <div className="rounded-xl w-full overflow-hidden mx-auto relative">
                    <Image
                      src={item.imageUrl}
                      unoptimized
                      width={720}
                      height={540}
                      alt={item.title}
                      className="w-full relative h-[250px] lg:h-[540px] object-cover brightness-75 transition-transform duration-500 ease-in-out hover:scale-110"
                    />
                    <div className="absolute z-10 flex flex-col p-4 lg:p-12 bottom-0 right-0 left-0 text-end">
                      <Description
                        description="Blockchain / AI / Web3"
                        className="text-start font-semibold lg:text-sm"
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
                          className="hover:opacity-80 transition-opacity duration-300 "
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))
          ) : (
            <div className="flex justify-center items-center h-full">
              <p className="text-white">No related articles</p>
            </div>
          )}
        </Swiper>

        <div className="custom-swiper-pagination mt-12 flex justify-center" />
      </div>
    </section>
  );
};

export default SlideSection;
