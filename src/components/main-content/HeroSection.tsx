"use client";

import Image from "next/image";
import { useBlog } from "../hooks/blog";
import { useBlogCategory } from "../hooks/blog-category";

const HeroSection = () => {
  const { data, loading, error } = useBlog();
  console.log("data", data);
  const {
    data: blogCategories,
    loading: blogCategoriesLoading,
    error: blogCategoriesError,
  } = useBlogCategory();
  console.log("blogCategories", blogCategories);

  return (
    <>
      <div className="h-screen"></div>
      <section className="fixed inset-0 z-0">
        <div className="w-full relative inset-0 h-screen">
          <iframe
            src="https://my.spline.design/untitled-V0MRkb0fl4hWPlrsrdpTfhIB/"
            className="absolute top-[35%] right-[20%] w-full h-full"
            style={{  transform: "scale(1.8)" }}
            allowFullScreen
          ></iframe>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10 gap-9">
          <h1 className="text-[72px] font-coda max-w-[800px] text-center">
            WHERE TECH MEETS CREATIVITY
          </h1>
          <p className="text-lg">We design intelligent digital platforms that grow with your business</p>
          <div className="relative z-50 bg-[#2468FF] w-fit rounded-2xl flex items-center gap-8 p-2 overflow-hidden group cursor-pointer">
              <p className="ml-6">EXPLORE NOW</p>

              {/* Container cho icon */}
              <div className="p-2 md:p-3 rounded-xl bg-[#1A4CD8] relative w-12 h-12 md:w-[56px] md:h-[56px] overflow-hidden flex-shrink-0">
              {/* Icon mặc định (light.svg) */}
              <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out group-hover:translate-x-full group-hover:opacity-0">
                <Image src="/starts.svg" alt="right" width={32} height={32} className="w-6 h-6 md:w-8 md:h-8" />
              </div>

              {/* Icon khi hover (right.svg) */}
              <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                <Image src="/right.svg" alt="right" width={32} height={32} className="w-6 h-6 md:w-8 md:h-8" />
              </div>
            </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
