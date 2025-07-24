"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

const HeroSection = () => {
  return (
    <section className="relative z-20 w-full pt-10 lg:pb-8 ">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16 text-white px-4 md:px-8">
        {/* Text content */}
        <div className="flex-1 max-w-2xl w-full">
          <p className="text-[#B3CCFF] text-xs md:text-sm font-semibold tracking-widest uppercase mb-2">
            SERVICES
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl uppercase font-coda mb-6 leading-tight">
            Where Great People Do Great Work
          </h2>
          <p className="text-base md:text-lg text-white/90 leading-relaxed mb-8">
            Whether you're a designer, developer, or strategist, your voice matters here.
          </p>

          <button className="relative z-10 bg-[#2468FF] rounded-2xl flex items-center gap-4 px-2 py-3 overflow-hidden group cursor-pointer shadow-lg transition-colors">
            <span className="font-semibold tracking-wide px-2">SEE OPEN ROLES</span>
            <span className="p-2 md:p-3 rounded-xl bg-[#1A4CD8] relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center overflow-hidden">
              {/* Icon mặc định */}
              <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out group-hover:translate-x-full group-hover:opacity-0">
                <Image src="/right.svg" alt="right" width={28} height={28} className="w-6 h-6 md:w-8 md:h-8" />
              </span>
              {/* Icon khi hover */}
              <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                <Image src="/row.svg" alt="row" width={28} height={28} className="w-6 h-6 md:w-8 md:h-8" />
              </span>
            </span>
          </button>
        </div>

        {/* Image content */}
        <div className="flex-1 w-full flex justify-center items-center">
          <div className="relative w-full max-w-[350px] md:max-w-[420px] lg:max-w-[500px] xl:max-w-[600px] aspect-[5/6]">
            <Image
              src="/careers/hero_section.png"
              fill
              alt="service banner"
              className="object-contain rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
