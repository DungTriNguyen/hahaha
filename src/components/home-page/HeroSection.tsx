"use client";
import SubTitle from "@/components/ui/sub-title";
import Button from "../ui/button";
import Description from "../ui/description";
import Image from "next/image";
import { useTranslations } from "next-intl";
const HeroSection = () => {
  const t = useTranslations("HomePage");
  return (
    <>
      <div className="h-screen pointer-events-none"></div>
      <section className="fixed inset-0 pb-[200px] bg-background z-0 data-scroll-to" id="home">
        <div className="relative pb-[170px]"> 
        <div className="w-full relative inset-0 h-screen ">
          <iframe
            src="https://my.spline.design/untitled-V0MRkb0fl4hWPlrsrdpTfhIB/"
            className="absolute top-[35%] right-[20%] w-full h-full pointer-events-none drop-iframe"
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
        <div className="container absolute inset-0 flex flex-col justify-center items-center text-white z-10 gap-8 pb-[75px] drop-text ">
          <div className="drop-title">
            <SubTitle title={t("title")} as="h1" />
          </div>
          <div className="drop-desc">
            <Description description={t("description")} />
          </div>
          <div className="drop-btn opacity-0 ">
            <Button
              href="#"
              icon1="/icons/starts.svg"
              icon2="/icons/right.svg"
              text={t("button")}  
              aria-label={t("button")}
            />
          </div>
        </div>
        </div>

        <div className="absolute w-full flex flex-col gap-2.5 bottom-0 z-10 justify-center items-center fade-up hasDelay7000ms">
          <div className="w-full h-auto flex items-center justify-center">
            <Image
              src="/icons/line_explore_1.svg"
              alt="line_explore"
              width={2}
              height={5}
            />
          </div>
          <div>
            <p className="uppercase text-descriptionCard text-[15px]">{t("scroll_to_explore")}</p>
          </div>
          <div className="w-full h-10 flex items-center justify-center">
            <Image
              src="/icons/line_explore_2.svg"
              alt="line_explore"
              width={2}
              height={10}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
