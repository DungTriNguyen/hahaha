import React from "react";

const FromIdeaToProduct = () => {
  return (
    <section className="relative w-full h-[2560px] flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(12, 11, 16, 0) 0%, rgba(12, 11, 16, 1) 100%)",
        }}
      />

      {/* Blur overlay */}
      <div className="absolute inset-0 backdrop-blur-[80px]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 md:px-8">
        <h2 className="text-white text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-coda font-normal uppercase text-center leading-tight max-w-6xl">
          From ideas to products
        </h2>
      </div>
    </section>
  );
};

export default FromIdeaToProduct;
