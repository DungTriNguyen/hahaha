"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import SubTitle from "../ui/sub-title";
import Description from "../ui/description";
import CardTitle from "../ui/card-title";
import CardDescription from "../ui/card-description";
import { formatDateToLongEN } from "@/utils/formatDate";
import { useBlogQuery } from "../hooks/blog";
import { CareerResponse } from "@/types/career";

const infos = [
  { icon: "/icons/clock.svg", label: "Full time" },
  { icon: "/icons/marker_pin.svg", label: "HCMC" },
  { icon: "/icons/luggage.svg", label: "On-site" },
];
export default function SectionCardCareer() {
  const { data: dataCareers } = useBlogQuery({
    BlogCategoryId: process.env.NEXT_PUBLIC_CATEGORY_CAREERS_ID,
  });
  const CareerResponse = dataCareers as CareerResponse | null;
  if (!CareerResponse || CareerResponse.items.length === 0) return null;
  const temp: CareerResponse = {
    items: [
      ...CareerResponse.items,
      ...CareerResponse.items,
      ...CareerResponse.items,
    ],
  };
  return (
    <section className="container w-full px-4 md:px-0 py-16 md:py-20 flex flex-col lg:gap-12">
      <div className="relative z-2 flex flex-col items-center mb-10 lg:mb-0">
        <SubTitle title="Join the Team" className="mb-9" />
        <Description description="We’re growing fast — and we’re looking for bold thinkers to grow with us." />
      </div>
      <div className="relative z-10 lg:pt-16 lg:pb-20">
        <div className="">
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
              1024: { slidesPerView: 2.655556, spaceBetween: 48 },
            }}
            className="custom-swiper swiper-custom-pagination w-full"
          >
            {temp?.items?.map((career, index) => (
              <SwiperSlide key={index}>
                <Link href={`/careers/${career.itemUrl}`}>
                  <div className="group bg-background border border-[#2A2F3C] rounded-3xl flex flex-col shadow-lg w-full min-h-[444px] mx-auto transition-all duration-300 ease-in-out hover:bg-button hover:min-h-[480px] px-6 pt-12 pb-12">
                    <div className="flex flex-col transition-all duration-300 ease-in-out group-hover:-translate-y-3">
                      <span className="text-dateCard text-sm font-semibold tracking-wider">
                        {formatDateToLongEN(career.createdDate)}
                      </span>

                      <CardTitle title={career.title} className="pb-6" />

                      <CardDescription
                        description={career.description}
                        className="whitespace-pre-line line-clamp-3 pb-6"
                      />
                    </div>

                    <div className="transition-all duration-300 ease-in-out overflow-hidden h-0 group-hover:h-4">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-full w-full"></div>
                    </div>

                    <div className="flex flex-col transition-all duration-300 ease-in-out group-hover:translate-y-3">
                      <div className="grid grid-cols-2 gap-3 justify-between pb-6">
                        {infos.map((info) => (
                          <div
                            key={info.label}
                            className="flex items-center gap-2 px-1 rounded-xl"
                          >
                            <Image
                              src={info.icon}
                              alt={info.label}
                              width={20}
                              height={20}
                            />
                            <span className="text-sm text-white font-semibold">
                              {info.label}
                            </span>
                          </div>
                        ))}
                      </div>

                      <button className="flex bg-card group-hover:bg-white items-center gap-8 justify-between w-full p-1 rounded-2xl">
                        <span className="text-white group-hover:text-black pl-5 font-semibold tracking-widest uppercase text-sm md:text-[15px] whitespace-nowrap">
                          JOIN US
                        </span>
                        <div className="p-1 rounded-xl group-hover:bg-black relative w-12 h-12 md:w-[56px] md:h-[56px] overflow-hidden flex-shrink-0">
                          <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out group-hover:translate-x-full group-hover:opacity-0">
                            <Image
                              src="/icons/send.svg"
                              alt="icon1"
                              width={32}
                              height={32}
                              className="w-6 h-6 md:w-8 md:h-8"
                            />
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                            <Image
                              src="/icons/right.svg"
                              alt="icon2"
                              width={32}
                              height={32}
                              className="w-6 h-6 md:w-8 md:h-8"
                            />
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="custom-swiper-pagination mt-10 flex justify-center" />
      </div>
    </section>
  );
}
