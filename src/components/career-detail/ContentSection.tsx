import Image from "next/image";

const ContentSection = () => {
  return (
    <section className="relative z-20 w-full bg-[#0C0B10] flex flex-col gap-12 pb-20  justify-start">
      {/* Intro + vertical bar */}
      <div className="w-full pl-8 lg:pl-0 lg:w-3xl mx-auto justify-start text-start mt-[-100px]">
        {/* Responsibilities */}
        <div className="flex flex-col gap-2 md:pl-8">
          <h3 className="text-2xl font-semibold text-white mb-1">
            Responsibilities
          </h3>
          <ul className="text-white text-base md:text-lg leading-relaxed list-disc list-inside space-y-1">
            <li>Design delightful digital experiences.</li>
            <li>Collaborate with product &amp; dev teams.</li>
            <li>Deliver wireframes, prototypes, and UI specs.</li>
          </ul>
        </div>
        {/* Requirements */}
        <div className="flex flex-col gap-2 md:pl-8">
          <h3 className="text-2xl font-semibold text-white mb-1">
            Requirements
          </h3>
          <ul className="text-white text-base md:text-lg leading-relaxed list-disc list-inside space-y-1">
            <li>2+ years of experience in UI/UX.</li>
            <li>Familiarity with Figma, Adobe XD.</li>
            <li>Good communication &amp; teamwork skills.</li>
          </ul>
        </div>
        {/* Nice to Have */}
        <div className="flex flex-col gap-2 md:pl-8">
          <h3 className="text-2xl font-semibold text-white mb-1">
            Nice to Have
          </h3>
          <ul className="text-white text-base md:text-lg leading-relaxed list-disc list-inside space-y-1">
            <li>Experience with motion UI or animation.</li>
            <li>Knowledge of HTML/CSS.</li>
          </ul>
        </div>
        {/* Button */}
        <div className="pt-8 md:pl-8">
          <div className="bg-[#2468FF] text-white rounded-2xl flex items-center justify-between p-2 w-fit group cursor-pointer transition-all duration-300 max-w-full">
            <span className="px-4 py-3 md:px-6 md:py-4 font-semibold tracking-widest uppercase text-sm md:text-base whitespace-nowrap">
              Share your idea NOW
            </span>
            <div className="p-2 md:p-3 rounded-xl bg-[#1A4CD8] relative w-12 h-12 md:w-[56px] md:h-[56px] overflow-hidden flex-shrink-0">
              {/* Icon mặc định (light.svg) */}
              <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out group-hover:translate-x-full group-hover:opacity-0">
                <Image
                  src="/light.svg"
                  alt="light"
                  width={32}
                  height={32}
                  className="w-6 h-6 md:w-8 md:h-8"
                />
              </div>

              {/* Icon khi hover (right.svg) */}
              <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                <Image
                  src="/right.svg"
                  alt="arrow"
                  width={32}
                  height={32}
                  className="w-6 h-6 md:w-8 md:h-8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
