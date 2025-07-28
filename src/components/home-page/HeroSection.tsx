"use client";
import SubTitle from "@/components/ui/sub-title";
import Button from "../ui/button";
import Description from "../ui/description";
const HeroSection = () => {
  return (
    <>
      <div className="h-screen pointer-events-none"></div>
      <section className="fixed inset-0 z-0 data-scroll-to">
        <div className="w-full relative inset-0 h-screen fade-up delay-3000 ">
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
        <div className="container absolute inset-0 flex flex-col justify-center items-center text-white z-10 gap-9 drop-text">
          <SubTitle title="WHERE TECH MEETS CREATIVITY" as="h1" />
          <Description description="We design intelligent digital platforms that grow with your business" />
          <Button
            href="#"
            icon1="/starts.svg"
            icon2="/right.svg"
            text="EXPLORE NOW"
          />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
