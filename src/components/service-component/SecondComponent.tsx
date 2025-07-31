import Image from "next/image";
import CardTitle from "../ui/card-title";

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
      <div className="container py-20 lg:py-6 px-[10px] flex flex-col lg:flex-row gap-8 md:gap-12 justify-center items-center">
        <div className="flex flex-col gap-6 w-auto">   
          <CardTitle title="Latest technologies we build with" className="text-xl lg:text-2xl font-normal uppercase max-w-[250px]" />
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
          <CardTitle title="Partnering with leading suppliers" className="text-xl lg:text-2xl uppercase max-w-[250px]" />
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
