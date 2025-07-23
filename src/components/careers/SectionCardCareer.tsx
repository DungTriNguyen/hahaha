"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const careerDetail = [
  {
    id: 1,
    level: "Mid-Level",
    isNew: true,
    title: "UI/UX Designer",
    desc:
      "Build seamless, beautiful interfaces for millions of users. Collaborate closely with engineers and product teams to shape product vision.",
    infos: [
      { icon: "/clock.svg", label: "Full time" },
      { icon: "/marker_pin.svg", label: "HCMC" },
      { icon: "/luggage.svg", label: "On-site" },
    ],
  },
  {
    id: 2,
    level: "Senior",
    isNew: true,
    title: "Frontend Developer",
    desc:
      "Turn complex designs into fast, responsive code.\nWork with modern frameworks (React, Next.js) to deliver pixel-perfect UI.",
    infos: [
      { icon: "/clock.svg", label: "Full time" },
      { icon: "/marker_pin.svg", label: "HCMC" },
      { icon: "/luggage.svg", label: "On-site" },
    ],
  },
  {
    id: 3,
    level: "Principal",
    isNew: true,
    title: "Project Manager",
    desc:
      "Lead cross-functional teams and deliver projects on time.\nBe the bridge between clients and the dev/design team, ensuring clarity and success.",
    infos: [
      { icon: "/clock.svg", label: "Full time" },
      { icon: "/marker_pin.svg", label: "HCMC" },
      { icon: "/luggage.svg", label: "On-site" },
    ],
  },
];

const SectionCardCareer = () => {
  return (
    <section className="w-full bg-[#0C0B10] px-4 md:px-0 py-12 md:py-20 flex flex-col gap-12">
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-4xl md:text-5xl font-coda font-bold text-white uppercase text-center mb-2">Join the Team</h2>
        <p className="text-lg text-white/80 text-center max-w-2xl">
          We’re growing fast — and we’re looking for bold thinkers to grow with us.
        </p>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={12}
        slidesPerView={1.1}
        breakpoints={{
          640: { slidesPerView: 1.2 },
          900: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        grabCursor={true}
        className="w-full section-career-swiper"
      >
        {careerDetail.map((career) => (
          <SwiperSlide key={career.id}>
            <div className="bg-[#0C0B10] border border-[#2A2F3C] rounded-3xl flex p-8 flex-col gap-6 shadow-lg  h-full">
              {/* Badge */}
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#1A4CD8] text-white text-xs font-semibold px-3 py-1 rounded-xl uppercase tracking-wider">
                  {career.level}
                </span>
                {career.isNew && (
                  <span className="bg-[#1DD1A1] text-white text-xs font-semibold px-2 py-1 rounded-xl uppercase tracking-wider">
                    NEW
                  </span>
                )}
              </div>
              {/* Title */}
              <h3 className="text-2xl font-coda font-bold text-white mb-2">{career.title}</h3>
              {/* Desc */}
              <p className="text-base text-[#CCCCCC] whitespace-pre-line line-scamp-3 mb-4">{career.desc}</p>
              {/* Info */}
              <div className="flex gap-4 flex-wrap mb-4">
                {career.infos.map((info) => (
                  <div key={info.label} className="flex items-center gap-2 bg-[#121620] rounded-xl px-3 py-2">
                    <Image src={info.icon} alt={info.label} width={20} height={20} />
                    <span className="text-sm text-white font-semibold">{info.label}</span>
                  </div>
                ))}
              </div>
              {/* Button */}
              <button className="mt-auto flex items-center gap-3 bg-[#121620] hover:bg-[#1A4CD8] transition-colors px-6 py-3 rounded-2xl text-base font-semibold uppercase text-white shadow-md">
                JOIN US
                <span className="inline-flex items-center gap-1">
                  <Image src="/send.svg" alt="send" width={20} height={20} />
                  <Image src="/right.svg" alt="arrow" width={16} height={16} />
                </span>
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Ẩn navigation arrows bằng CSS */}
      <style jsx global>{`
        .section-career-swiper .swiper-button-next,
        .section-career-swiper .swiper-button-prev {
          display: none !important;
        }
      `}</style>
    </section>
  );
};

export default SectionCardCareer;
