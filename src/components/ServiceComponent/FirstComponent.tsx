import Image from "next/image";

const FirstComponent = () => {
  return (
    <section className="relative z-20 bg-[#0C0B10] text-white pt-20 md:pt-32 lg:pt-44 pb-10 md:pb-16 lg:pb-20">
  
      {/* <div className="w-full h-[100px] absolute top-0 left-0 z-100 overflow-hidden bg-black ">

        <div className="absolute inset-x-0 bottom-[-1px] h-full w-full overflow-hidden bg-blue z-[15]">
          <div
            className="absolute bottom-0 left-0 h-full w-[500%] bg-repeat-x bg-[length:60%_100px] smooth-animate-wave1"
            style={{ backgroundImage: 'url("/vector 4.svg")' }}
          ></div>
        </div>

        <div className="absolute inset-x-0 bottom-[-1px] h-full w-full overflow-hidden bg-blue z-[10] opacity-70">
          <div
            className="absolute bottom-0 left-0 h-full w-[500%] bg-repeat-x bg-[length:50%_100px] smooth-animate-wave2"
            style={{ backgroundImage: 'url("/vector 5.svg")' }}
          ></div>
        </div>

        <div className="absolute inset-x-0 bottom-[-1px] h-full w-full overflow-hidden bg-blue opacity-50 z-[5]">
          <div
            className="absolute bottom-0 left-0 h-full w-[500%] bg-repeat-x bg-[length:50%_100px] smooth-animate-wave3"
            style={{ backgroundImage: 'url("/vector 6.svg")' }}
          ></div>
        </div>
      </div> */}
      


      <div className="container relative z-10 flex flex-col-reverse lg:flex-row gap-8 md:gap-12 lg:gap-16 items-center px-4 md:px-6 lg:px-8">
        <div className="flex-1 max-w-2xl">
          <div className="mb-6 md:mb-8 lg:mb-9">
            <p className="text-[#B3CCFF] text-xs md:text-sm font-semibold tracking-widest uppercase mb-2">
              SERVICES
            </p>
            <h2 className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl  uppercase font-coda mb-6 md:mb-8 lg:mb-9 leading-tight">
              Bring your Ideas to real World
            </h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed">
              We turn your marvelous ideas to market in a very short time, but
              also ready for scale
            </p>
          </div>

          <div className="mb-6 md:mb-8">
            <ul className="space-y-2 list-disc pl-8 text-white/90 text-sm md:text-base font-semibold">
              <li>MVP to Market</li>
              <li>BUILD FOR SCALE</li>
              <li>READY FOR MILLION USERS</li>
            </ul>
          </div>

          <div className="bg-white text-black rounded-xl md:rounded-2xl flex items-center justify-between p-2 w-fit group cursor-pointer">
            <span className="px-4 md:px-6 py-3 md:py-4 font-semibold text-sm md:text-base">
              Launch your idea
            </span>

            {/* Icon container */}
            <div className="p-2 md:p-3 rounded-lg md:rounded-xl bg-[#0C0B10] hover:bg-[#1A4CD8] relative w-[48px] h-[48px] md:w-[56px] md:h-[56px] overflow-hidden">
              {/* Rocket icon - hiển thị mặc định */}
              <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out group-hover:translate-x-full group-hover:opacity-0">
                <Image
                  src="/rocket.svg"
                  alt="rocket"
                  width={24}
                  height={24}
                  className="md:w-8 md:h-8"
                />
              </div>

              {/* Arrow icon - hiển thị khi hover */}
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

        <div className="flex-1 relative w-full">
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
            <Image
              src="/img_service_section_1.png"
              fill
              alt="service banner"
              className="object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstComponent;
