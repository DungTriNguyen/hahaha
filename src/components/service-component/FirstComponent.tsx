import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import WaveComponent from "../wave-component/WaveComponent";
import Title from "../ui/title";
import SubTitle from "../ui/sub-title";
import Description from "../ui/description";

const slides = [
  {
    key: 1,
    img: "/wave1.svg",
    class: "waveTop",
  },
  {
    key: 2,
    img: "/wave2.svg",
    class: "waveMiddle",
  },
  {
    key: 3,
    img: "/wave3.svg",
    class: "waveBottom",
  },
];

const FirstComponent = () => {
  return (
    <section className="relative bg-background text-white pt-20 md:pt-32 lg:pt-44 z-30 ">
      <div className="container relative z-20 flex flex-col-reverse lg:flex-row gap-8 md:gap-12 lg:gap-16 items-center px-4 lg:px-0">
        <div className="flex-1 w-full mb-[-200px]">
          <div className="mb-6 ">
            <Title title="Services" />
            <SubTitle
              title="Bring your Ideas to real World"
              as="h2"
              className="text-start mb-6 md:mb-8 lg:mb-9"
            />
            <Description
              description="We turn your marvelous ideas to market in a very short time, but also ready for scale"
              className="text-start"
            />
          </div>
          <div className="mb-6 md:mb-8">
            <ul className="space-y-3 list-disc pl-6 text-white text-sm md:text-[15px] font-semibold">
              <li>MVP to Market</li>
              <li>BUILD FOR SCALE</li>
              <li>READY FOR MILLION USERS</li>
            </ul>
          </div>
          <div className="bg-white text-black rounded-2xl flex items-center justify-between p-1 w-fit gap-8 group cursor-pointer">
            <span className="ml-4 font-semibold text-sm md:text-base uppercase">
              Launch your idea
            </span>

            <div className="rounded-xl bg-[var(--background)] hover:bg-[var(--number-card)] relative w-[48px] h-[48px] md:w-[56px] md:h-[56px] overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out group-hover:translate-x-full group-hover:opacity-0">
                <Image
                  src="/rocket.svg"
                  alt="rocket"
                  width={24}
                  height={24}
                  className="md:w-8 md:h-8"
                />
              </div>

              <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out translate-x-[-100%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                <Image
                  src="/right.svg"
                  alt="arrow"
                  width={24}
                  height={24}
                  className="md:w-8 md:h-8"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 relative w-full mb-[-100px]">
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] ">
            <Image
              src="/img_service_section_1.png"
              fill
              alt="service banner"
              sizes="(min-width: 1024px) 912px, 100vw"
              className="object-contain rounded-lg float-item"
            />
          </div>
        </div>
      </div>

      {/* <div className="relative w-full h-[100px] bottom-[100px] left-0 z-9 bg-transparent">
        {slides.map((slide, idx) => (
          <WaveComponent
            key={slide.key}
            img={slide.img}
            className={slide.class}
          />
        ))}
      </div> */}
      <WaveComponent />
    </section>
  );
};

export default FirstComponent;
