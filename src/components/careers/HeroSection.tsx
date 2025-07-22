import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-[url('/img_background.png')] bg-cover bg-center w-full flex flex-col justify-center items-center text-white py-20 top-0">
      <div className="container text-center space-y-2">
        <p className="text-[#B3CCFF]">SERVICES</p>
        <h1 className="text-7xl">WHERE GREAT PEOPLE DO GREAT WORK</h1>
        <p className="text-sm">
          Whether you're a designer, developer, or strategist, your voice
          matters here.
        </p>
        <div className="bg-[#2468FF] w-[252px] rounded-2xl flex items-center gap-8 p-2">
          <p className="ml-6">EXPLORE NOW</p>
          <div className="p-3 rounded-lg bg-[#1A4CD8]">
            <Image
              src="/starts.svg"
              alt="starts"
              width={26}
              height={26}
              className="block hover:hidden"
            />
            <Image
              src="/right.svg"
              alt="logo"
              width={8}
              height={16}
              className="hidden hover:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
