import Button from "../ui/button";
import Description from "../ui/description";

const ContentSection = ({ content }: { content: string }) => {
  return (
    <section className="w-full bg-[#0C0B10] flex flex-col gap-12 pb-20  justify-start">
      <div className="relative z-2 w-full px-4 lg:px-0 lg:pl-12 lg:w-[840px] mx-auto justify-start text-start mt-[-100px] lg:mt-[-180px] space-y-6">
        {content ? (
          <Description description={content} />
        ) : (
          <p className="text-gray-400">Not found content</p>
        )}
        <Button
          href="#"
          text="Share your idea NOW"
          icon1="/light.svg"
          icon2="/right.svg"
          className="w-fit"
        />
      </div>
    </section>
  );
};

export default ContentSection;
