import SubTitle from "../ui/sub-title";

const FromIdeaToProduct = () => {
  return (
    <section
      className="w-full scroll-section relative h-[2560px] flex items-center overflow-hidden justify-center data-scroll-to scroll-smooth"
      style={{
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 50%)",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "100% 100%",
        maskImage: "linear-gradient(to bottom, transparent 0%, black 30%)",
        maskRepeat: "no-repeat",
        maskSize: "100% 100%",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none z-0 "
        style={{
          background:
            "linear-gradient(to bottom, rgba(12, 11, 16, 0) 0%, rgba(12, 11, 16, 1) 40%)",
          backdropFilter: "blur(8px)",
        }}
      />

      <div
        className="sticky top-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center px-4 md:px-8 section-title"
      >
        <SubTitle
          title="From ideas to products"
          as="h2"
          className="lg:text-8xl leading-tight text-white"
        />
      </div>
    </section>
  );
};

export default FromIdeaToProduct;
