import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="h-screen"></div>
      <section className="fixed inset-0 z-0 pointer-events-none">
        <video
          src="/radial-glass_4.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
          <h1 className="text-4xl font-bold">Where Tech Meets Creativity</h1>
          <p className="text-sm">We design intelligent digital platforms...</p>
          <div className="bg-[#2468FF] rounded-lg flex items-center gap-8 p-2">
            <p className="ml-6">EXPLORE NOW</p>
            <div className="p-3 rounded-lg bg-[#1A4CD8]">
              <Image
                src="/starts.svg"
                alt="starts"
                width={26}
                height={26}
                className="block hover:hidden"
              />
              <Image
                src="/right.svg"
                alt="logo"
                width={8}
                height={16}
                className="hidden hover:block"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;