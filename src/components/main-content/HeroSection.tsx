import Image from "next/image";
const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/radial-glass_4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

      <div className="flex flex-col relative z-20 text-center gap-9 text-white justify-center items-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Where Tech Meets Creativity
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          We design intelligent digital platforms that grow with your business
        </p>
        <div className="flex w-[205px] h-[64px] items-center gap-8 justify-center rounded-2xl bg-[#2468FF]">
          <p className="pl-6">explore now</p>
          <div className="rounded-2xl p-3 bg-[#1A4CD8]">
            <Image src="/starts.svg" width={32} height={32} alt="starts" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
