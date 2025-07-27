"use client";
import CardDescription from "../ui/card-description";
import SubTitle from "../ui/sub-title";
import Title from "../ui/title";

const HeroSection = ({
  category,
  title,
  description,
}: {
  category: string;
  title: string;
  description: string;
}) => {
  return (
    <section className="relative w-full overflow-hidden  py-10 md:py-16 lg:py-20 flex flex-col items-center justify-center pb-30 lg:pb-[200px]">
      <div className=" w-full lg:container relative z-10 flex flex-col items-center justify-center text-center mx-auto px-4">
        <Title
          title={category ? category : "Not found category"}
          className="mb-2"
        />
        <SubTitle
          title={title ? title : "Not found title"}
          as="h1"
          className="mb-9 max-w-full"
        />
        <div className="text-base md:text-lg text-[#CCCCCC] uppercase font-semibold mb-6 lg:mb-16">
          Full-time • onsite • HCMC
        </div>
        <div className="relative flex items-start pl-4">
          <div className="max-w-3xl flex flex-col gap-4 p-2 lg:p-6">
            {description ? (
              <CardDescription
                description={description}
                className="border-l-2 border-l-[#2468FF] text-start lg:ml-6 p-4 text-lg italic"
              />
            ) : (
              <p className="text-gray-400">Not found description</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
