import SubTitle from "../ui/sub-title";

const FromIdeaToProduct = () => {
  return (
    <section className="relative w-full h-[2560px] flex items-center justify-center overflow-hidden data-scroll-to"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(12, 11, 16, 0) 0%, rgba(12, 11, 16, 1) 100%)",
        }}
      />

      <div className="absolute inset-0 backdrop-blur-[80px]" />

      <div className="relative z-10 flex flex-col items-center justify-center px-4 md:px-8">
        <SubTitle
          title="From ideas to products"
          as="h2"
          className="text-8xl leading-tight tracking-wider"
        />
      </div>
    </section>
  );
};

export default FromIdeaToProduct;
