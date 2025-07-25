"use client";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden pt-32 md:pt-40 flex flex-col items-center justify-center pb-30 lg:pb-[200px]">
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-3xl mx-auto px-4">
        <span className="text-[#B3CCFF] text-sm font-semibold tracking-widest uppercase opacity-80 mb-4">
          Mid-Level
        </span>
        <h1 className="font-coda text-4xl md:text-6xl lg:text-7xl uppercase leading-tight text-white mb-6">
          UI/UX Designer
        </h1>
        <div className="text-base md:text-lg text-[#CCCCCC]  uppercase font-semibold mb-16">
          Full-time • onsite • HCMC
        </div>
        <div className="relative flex items-start pl-4">
          <div className="w-full flex flex-col gap-4">
            <p className="text-lg text-[#CCCCCC] leading-relaxed mb-2 border-l border-l-[#2468FF] ml-6 p-4">
              Build seamless, beautiful interfaces for millions of
              users. Collaborate closely with engineers and product teams to
              shape product vision.
            </p>
            {/* {content?.content ? (
            <div
              className="prose prose-invert max-w-none text-white text-base md:text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: content?.content || "" }}
            />
          ) : (
            <p className="text-gray-400">Notfound content</p>
          )} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
