"use client";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-[#0C0B10] overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24 flex flex-col items-center justify-center">
      {/* Background iframe/gradient overlay */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://my.spline.design/untitled-RB1SJwTPp4QHGyj70yzQOkIR/"
          className="w-full h-full object-cover"
          style={{
            pointerEvents: "none",
            left: 0,
            top: 0,
            bottom: 0,
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
          allowFullScreen
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0C0B10CC] to-[#0C0B10]" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-3xl mx-auto px-4">
        <span className="text-[#B3CCFF] text-sm font-semibold tracking-widest uppercase opacity-80 mb-4">Mid-Level</span>
        <h1 className="font-coda text-4xl md:text-6xl lg:text-7xl font-bold uppercase leading-tight text-white mb-6">UI/UX Designer</h1>
        <div className="text-base md:text-lg text-[#CCCCCC] font-semibold mb-2">Full-time &bull; onsite &bull; HCMC</div>
      </div>
    </section>
  );
};

export default HeroSection;
