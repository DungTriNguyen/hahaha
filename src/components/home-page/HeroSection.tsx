"use client";
import SubTitle from "@/components/ui/sub-title";
import Button from "../ui/button";
import Description from "../ui/description";
import Image from "next/image";
const HeroSection = () => {
  return (
    <>
      <div className="h-screen pointer-events-none"></div>
      <section className="fixed inset-0 z-0 data-scroll-to">
        <div className="w-full relative inset-0 h-screen drop-iframe">
          <iframe
            src="https://my.spline.design/untitled-V0MRkb0fl4hWPlrsrdpTfhIB/"
            className="absolute top-[35%] right-[20%] w-full h-full pointer-events-none"
            loading="lazy"
            title="3D Interactive Spline Animation of Product Showcase"
            allow="autoplay; fullscreen"
            style={{
              transform: "scale(1.8)",
              transformOrigin: "center",
              willChange: "transform",
            }}
          />
        </div>
        <div className="container absolute inset-0 flex flex-col justify-center items-center text-white z-10 gap-8 drop-text">
          <div className="drop-title">
            <SubTitle title="WHERE TECH MEETS CREATIVITY" as="h1" />
          </div>
          <div className="drop-desc">
            <Description description="We design intelligent digital platforms that grow with your business" />
          </div>
          <div className="drop-btn opacity-0">
            <Button
              href="#"
              icon1="/starts.svg"
              icon2="/right.svg"
              text="EXPLORE NOW"
            />
          </div>
        </div>
        <div className="absolute w-full flex flex-col gap-2.5 bottom-0 z-10 justify-center items-center">
          <div className="w-6 h-full flex items-center justify-center">
            <Image
              src="/line_explore.svg"
              alt="line_explore"
              width={2}
              height={24}
            />
          </div>
          <div>
            <p className="uppercase text-descriptionCard">Scroll to explore</p>
          </div>
          <div className="w-6 h-full flex items-center justify-center">
            <Image
              src="/line_explore.svg"
              alt="line_explore"
              width={2}
              height={24}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
