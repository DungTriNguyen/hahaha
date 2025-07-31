import { formatDateToLongEN } from "@/utils/formatDate";
import Image from "next/image";
import Title from "../ui/title";
import SubTitle from "../ui/sub-title";
const HeroSection = ({
  title,
  image,
  createdDate,
}: {
  title: string;
  image: string;
  createdDate: string;
}) => {
  return (
    <section className="w-full flex flex-col justify-center items-center text-white py-10 md:py-16 lg:py-20 top-0 ">
      <div className="w-full lg:container relative z-2 text-center space-y-2 px-4">
        <Title title="ARTICLES" />
        <SubTitle
          title={title ? title : "Not found title"}
          as="h1"
          className="max-w-full mb-9"
        />
        <p className="text-xs lg:text-[15px] uppercase font-semibold mb-20">
          Digital Strategy • Minh Tran • {formatDateToLongEN(createdDate)}
        </p>
        <div className="max-w-[840px] rounded-2xl mx-auto overflow-hidden shadow-lg">
          <Image
            src={image || "/articles/default_detail.webp"}
            width={840}
            height={336}
            alt=""
            className="w-full h-[336px] object-cover"
            priority
            unoptimized
          />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
