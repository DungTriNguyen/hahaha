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
    times: "14 Jul 2025",
    title: "UI/UX Designer",
    desc: "Build seamless, beautiful interfaces for millions of users. Collaborate closely with engineers and product teams to shape product vision.",
    infos: [
      { icon: "/clock.svg", label: "Full time" },
      { icon: "/marker_pin.svg", label: "HCMC" },
      { icon: "/luggage.svg", label: "On-site" },
    ],
  },
  {
    id: 2,
    times: "14 Jul 2025",
    title: "Frontend Developer",
    desc: "Turn complex designs into fast, responsive code.\nWork with modern frameworks (React, Next.js) to deliver pixel-perfect UI.",
    infos: [
      { icon: "/clock.svg", label: "Full time" },
      { icon: "/marker_pin.svg", label: "HCMC" },
      { icon: "/luggage.svg", label: "On-site" },
    ],
  },
  {
    id: 3,
    times: "14 Jul 2025",
    title: "Project Manager",
    desc: "Lead cross-functional teams and deliver projects on time.\nBe the bridge between clients and the dev/design team, ensuring clarity and success.",
    infos: [
      { icon: "/clock.svg", label: "Full time" },
      { icon: "/marker_pin.svg", label: "HCMC" },
      { icon: "/luggage.svg", label: "On-site" },
    ],
  },
];

const SectionCardCareer = () => {
  if (!careerDetail || careerDetail.length === 0) return <></>;
  return (
    <section className="w-full bg-[#0C0B10] px-4 md:px-0 py-16 md:py-20 flex flex-col lg:gap-12">
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-3xl lg:text-7xl md:text-5xl font-coda  text-white uppercase text-center mb-9">
          Join the Team
        </h2>
        <p className="text-sm lg:text-lg text-white/80 text-center max-w-2xl">
          We’re growing fast — and we’re looking for bold thinkers to grow with
          us.
        </p>
      </div>

      <div className="relative z-10 lg:pt-16 lg:pb-20 ">
        <div className="px-4 md:px-6 lg:px-0 overflow-hidden  ">
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
            className="custom-swiper swiper-custom-pagination lg:w-[1400px] w-[100%] md:w-[800px] "
          >
            {careerDetail.map((career) => (
              <SwiperSlide key={career.id}>
                <div className="group bg-[#0C0B10] border border-[#2A2F3C] rounded-3xl flex px-6 py-12 flex-col shadow-lg w-full h-[444px] mx-auto transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[#1A4CD8]">
                  <div className="flex items-center gap-2 justify-between">
                    <span className="text-[#10B981] text-sm uppercase tracking-wider">
                      {career.times}
                    </span>
                  </div>

                  <h3 className="text-3xl font-coda text-white mb-6">
                    {career.title}
                  </h3>

                  <p className="text-base text-[#CCCCCC] whitespace-pre-line line-clamp-4 mb-10">
                    {career.desc}
                  </p>

                  <div className="grid grid-cols-2 gap-3 justify-between">
                    {career.infos.map((info) => (
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

                  <button className="mt-auto w-full flex items-center gap-4 bg-[#121620] group-hover:bg-white transition-colors px-2 py-3 rounded-2xl text-base font-semibold uppercase text-white group-hover:text-black shadow-md justify-between overflow-hidden relative">
                    <span className="tracking-widest whitespace-nowrap transition-colors duration-300 group-hover:text-black">
                      JOIN US
                    </span>

                    <div className="relative w-10 h-10 md:w-14 md:h-14 overflow-hidden flex-shrink-0 rounded-2xl transition-colors duration-300 group-hover:bg-white">
                      {/* Default icon (send) */}
                      <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out group-hover:translate-x-full group-hover:opacity-0">
                        <Image
                          src="/send.svg"
                          alt="send"
                          width={24}
                          height={24}
                          className="w-8 h-8 md:w-8 md:h-8"
                        />
                      </div>

                      {/* Hover icon (right) */}
                      <div className="absolute inset-0 flex items-center justify-center transition-all group-hover:bg-[#1A4CD8] duration-300 ease-in-out -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                        <Image
                          src="/right.svg"
                          alt="right icon"
                          width={24}
                          height={24}
                          className="w-8 h-8 md:w-8 md:h-8"
                        />
                      </div>
                    </div>
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="custom-swiper-pagination mt-10 flex justify-center" />
      </div>
    </section>
  );
};

export default SectionCardCareer;
