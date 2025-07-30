import Image from "next/image";

const technologies1 = [
  { icon: "/technologies/python_icon.svg" },
  { icon: "/technologies/net_icon.svg" },
  { icon: "/technologies/angular_icon.svg" },
  { icon: "/technologies/reactnative_icon.svg" },
  { icon: "/technologies/solidity_icon.svg" },
  { icon: "/technologies/typescript_icon.svg" },
];

const technologies2 = [
  { icon: "/technologies/aws_icon.svg" },
  { icon: "/technologies/sesame_icon.svg" },
  { icon: "/technologies/azure_icon.svg" },
  { icon: "/technologies/viettel_icon.svg" },
  { icon: "/technologies/openai_icon.svg" },
  { icon: "/technologies/anthrop_icon.svg" },
];

const SecondComponent = () => {
  return (
    <section className="relative w-full z-20 bg-numberCard text-white bg-[url('/home/img_service_section_2.webp')] bg-cover bg-no-repeat bg-center md:py-32 lg:pt-[275px] lg:pb-[135px]">
      <div className="container py-6 px-[10px] flex flex-col lg:flex-row gap-8 md:gap-12 justify-center items-center">
        <div className="flex flex-col gap-6 w-auto">

          <h3 className="text-xl md:text-2xl font-coda font-normal uppercase leading-tight">
            Latest technologies
            <br />
            we build with
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-6 ">
            {technologies1.map((item, index) => (
              <div key={index} className="w-[175px] h-[98px] py-6 px-8 justify-center items-center ">

                <Image
                  src={item.icon}
                  width={0}
                  height={0}
                  alt="partner icon"
                  className="w-full h-full object-contain"
                />

              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 w-auto">

          <h3 className="text-xl md:text-2xl font-coda font-normal uppercase leading-tight">
            Partnering with
            <br />
            leading suppliers
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-6 ">
            {technologies2.map((item, index) => (
              <div key={index} className="w-[175px] h-[98px] py-6 px-8 justify-center items-center ">

                <Image
                  src={item.icon}
                  width={0}
                  height={0}
                  alt="partner icon"
                  className="w-full h-full object-contain"
                />

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondComponent;
