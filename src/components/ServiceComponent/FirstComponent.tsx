import Image from "next/image";

const FirstComponent = () => {
  return (
    <section className="relative z-20 bg-[#0C0B10] text-white pt-44 pb-20">
      {/* Background image with gradient overlay */}
      {/* <div className="absolute inset-0 z-0">
        <Image
          src="/img_service_section_1.png"
          fill
          alt="service background"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(26, 76, 216, 1) 0%, rgba(26, 76, 216, 0) 100%)",
          }}
        />
      </div> */}

      <div className="container relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        <div className="flex-1 max-w-2xl">
          <div className="mb-9">
            <p className="text-[#B3CCFF] text-sm font-semibold tracking-widest uppercase mb-2">
              SERVICES
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl uppercase font-coda mb-9">
              Bring your Ideas to real World
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              We turn your marvelous ideas to market in a very short time, but
              also ready for scale
            </p>
          </div>

          <div className="mb-8">
            <ul className="space-y-2 text-white/90">
              <li>MVP to Market</li>
              <li>BUILD FOR SCALE</li>
              <li>READY FOR MILLION USERS</li>
            </ul>
          </div>

          <div className="bg-white text-black rounded-2xl flex items-center justify-between p-2 w-fit">
            <span className="px-6 py-4 font-semibold">Launch your idea</span>
            <div className="p-3 rounded-xl bg-[#0C0B10]">
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
          <div className="relative w-full h-[600px] lg:h-[700px]">
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
