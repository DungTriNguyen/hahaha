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
    <section className="relative z-20 bg-[#0C0B10] text-white bg-[url('/img_service_section_2.png')]">
      <div className="container flex justify-between px-16 py-20">
        <div>
          <p className="text-sm font-semibold tracking-widest uppercase mb-4">
            LATEST TECHNOLOGIES WE BUILD WITH
          </p>
          <div>
            <ul className="grid grid-cols-3 gap-12">
              {technologies1.map((item, index) => (
                <li key={index} className="flex justify-center items-center">
                  <div className="w-auto h-auto">
                    <Image
                      src={item.icon}
                      width={0}
                      height={0}
                      alt="icon technology"
                      className="w-auto h-auto"
                      style={{ width: "auto", height: "auto" }} // Đảm bảo SVG hiển thị kích thước gốc
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold tracking-widest uppercase mb-4">
            PARTNERING WITH LEADING SUPPLIERS
          </p>
          <div>
            <ul className="grid grid-cols-3 gap-12">
              {technologies2.map((item, index) => (
                <li key={index} className="flex justify-center items-center">
                  <div className="w-auto h-auto">
                    <Image
                      src={item.icon}
                      width={0}
                      height={0}
                      alt="icon technology"
                      className="w-auto h-auto"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondComponent;