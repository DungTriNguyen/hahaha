import Image from "next/image";

const ContentSection = () => {
  return (
    <section className="w-full bg-[#0C0B10] px-4 md:px-0 py-12 md:py-20 flex flex-col gap-12 max-w-3xl mx-auto ">
      {/* Intro + vertical bar */}
      <div className="relative flex items-start">
        <div className="hidden md:block absolute left-0 top-6 w-1 h-28 bg-[#2468FF] rounded-full" />
        <div className="text-[#CCCCCC] text-base md:text-lg leading-relaxed pl-0 md:pl-8">
          Build seamless, beautiful interfaces for millions of users.<br />
          Collaborate closely with engineers and product teams to shape product vision.
        </div>
      </div>
      {/* Responsibilities */}
      <div className="flex flex-col gap-2 md:pl-8">
        <h3 className="text-2xl font-semibold text-white mb-1">Responsibilities</h3>
        <ul className="text-white text-base md:text-lg leading-relaxed list-disc list-inside space-y-1">
          <li>Design delightful digital experiences.</li>
          <li>Collaborate with product &amp; dev teams.</li>
          <li>Deliver wireframes, prototypes, and UI specs.</li>
        </ul>
      </div>
      {/* Requirements */}
      <div className="flex flex-col gap-2 md:pl-8">
        <h3 className="text-2xl font-semibold text-white mb-1">Requirements</h3>
        <ul className="text-white text-base md:text-lg leading-relaxed list-disc list-inside space-y-1">
          <li>2+ years of experience in UI/UX.</li>
          <li>Familiarity with Figma, Adobe XD.</li>
          <li>Good communication &amp; teamwork skills.</li>
        </ul>
      </div>
      {/* Nice to Have */}
      <div className="flex flex-col gap-2 md:pl-8">
        <h3 className="text-2xl font-semibold text-white mb-1">Nice to Have</h3>
        <ul className="text-white text-base md:text-lg leading-relaxed list-disc list-inside space-y-1">
          <li>Experience with motion UI or animation.</li>
          <li>Knowledge of HTML/CSS.</li>
        </ul>
      </div>
      {/* Button */}
      <div className="pt-4 md:pl-8">
        <button className="flex items-center gap-3 bg-[#2468FF] hover:bg-[#1A4CD8] transition-colors px-8 py-4 rounded-2xl text-base font-semibold uppercase text-white shadow-lg">
          Send Open Application
          <span className="inline-flex items-center gap-1">
            <Image src="/luggage.svg" alt="luggage" width={24} height={24} />
            <Image src="/right.svg" alt="arrow" width={16} height={16} />
          </span>
        </button>
      </div>
    </section>
  );
};

export default ContentSection;
