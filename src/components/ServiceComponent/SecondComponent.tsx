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
    <section className="relative z-20 bg-[#1A4CD8] text-white py-40 bg-[url('/img_service_section_2.png')] bg-cover bg-center">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Latest Technologies */}
          <div className="flex-1">
            <div className="mb-6">
              <h3 className="text-2xl font-coda font-normal uppercase mb-6">
                Latest technologies
                <br />
                we build with
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
              {technologies1.map((item, index) => (
                <div key={index} className="flex justify-center items-center">
                  <div className="w-auto h-auto">
                    <Image
                      src={item.icon}
                      width={0}
                      height={0}
                      alt="technology icon"
                      className="w-auto h-auto max-w-[80px] max-h-[80px]"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Partnering with Leading Suppliers */}
          <div className="flex-1">
            <div className="mb-6">
              <h3 className="text-2xl font-coda font-normal uppercase mb-6">
                Partnering with
                <br />
                leading suppliers
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
              {technologies2.map((item, index) => (
                <div key={index} className="flex justify-center items-center">
                  <div className="w-auto h-auto">
                    <Image
                      src={item.icon}
                      width={0}
                      height={0}
                      alt="partner icon"
                      className="w-auto h-auto max-w-[80px] max-h-[80px]"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondComponent;
