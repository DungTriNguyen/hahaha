"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";


const HeroSection = () => {
  return (
    <section className="relative z-20 w-full pt-40 bg-[#0C0B10]">
      <iframe
        src="https://my.spline.design/untitled-RB1SJwTPp4QHGyj70yzQOkIR/"
        className="absolute w-full h-full object-cover z-10 pointer-events-none"
        style={{
          pointerEvents: "none",
          left: 0,
          top: 0,
          bottom: 0,
          position: "absolute",
        }}
        allowFullScreen
      />
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(12, 11, 16, 0.8) 50%, rgba(12, 11, 16, 1) 100%)",
        }}
      />

      <div className="relative z-30 pt-16 pb-20">
      <div className="container relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center text-white">
        <div className="flex-1 max-w-2xl">
          <div className="mb-9">
            <p className="text-[#B3CCFF] text-sm font-semibold tracking-widest uppercase mb-2">
              SERVICES
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase font-coda mb-9">
            WE BUILD BEYOND BRIEFS
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
            Whether you're a designer, developer, or strategist, your voice matters here.
            </p>
          </div>

          <div className="bg-[#2468FF] rounded-2xl flex items-center justify-between p-2 w-fit">
            <span className="px-6 py-4 font-semibold">SEE OPEN ROLES</span>
            <div className="p-3 rounded-xl bg-[#1A4CD8]">
              <Image
                src="/rocket.svg"
                alt="rocket"
                width={26}
                height={26}
                className="block hover:hidden"
              />
              <Image
                src="/right.svg"
                alt="arrow"
                width={8}
                height={16}
                className="hidden hover:block"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="relative w-full h-[600px] lg:h-[622px]">
            <Image
              src="/careers/hero_section.png"
              fill
              alt="service banner"
              className="object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
