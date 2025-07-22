import Image from "next/image";

const FirstComponent = () => {
  return (
    <section className="relative z-20 bg-[#0C0B10] text-white pt-44">
      <div className="container flex gap-12">
        <div>
          <p className="pb-4 text-[#B3CCFF]">SERVICES</p>
          <h5 className="pb-9 text-[72px]">BRING YOUR IDEAS TO REAL WORLD</h5>
          <p className="pb-6">
            We turn your marvelous ideas to market in a very short time, but
            also ready for scale
          </p>
          <ul className="list-inside pb-6">
            <li>MVP to Market</li>
            <li>BUILD FOR SCALE</li>
            <li>READY FOR MILLION USERS</li>
          </ul>
          <div className="bg-white text-black w-[277px] rounded-2xl flex items-center justify-between gap-8 p-2">
            <p className="ml-6">LAUNCH YOUR IDEA</p>
            <div className="p-3 rounded-xl bg-[#0C0B10]">
              <Image
                src="/rocket.svg"
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
        <div>
         
            <div className="w-full h-auto">
              <Image
                src="/img_service_section_1.png"
                width={752}
                height={752}
                alt="service banner "
                className="object-cover"
              />
            </div>
          
        </div>
      </div>
    </section>
  );
};

export default FirstComponent;
