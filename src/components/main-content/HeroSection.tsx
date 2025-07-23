"use client";

import Image from "next/image";
import { useBlog } from "../hooks/blog";
import { useBlogCategory } from "../hooks/blog-category";

const HeroSection = () => {
  const { data, loading, error } = useBlog();
  console.log("data", data);
  const { data: blogCategories, loading: blogCategoriesLoading, error: blogCategoriesError } = useBlogCategory();
  console.log("blogCategories", blogCategories);

  return (
    <>
      <div className="h-screen"></div>
      <section className="fixed inset-0 z-0 pointer-events-none">
        <div className="">
        <iframe
          src="https://my.spline.design/untitled-V0MRkb0fl4hWPlrsrdpTfhIB/"
          className="absolute inset-0 w-full h-full"
          style={{ pointerEvents: "none", transform: "scale(1.2)" }}
          allowFullScreen
        ></iframe>
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10 gap-9">
          <h1 className="text-[72px] font-coda max-w-[800px] text-center">
            WHERE TECH MEETS CREATIVITY
          </h1>
          <p className="text-lg">We design intelligent digital platforms...</p>
          <div className="bg-[#2468FF] rounded-2xl  flex items-center gap-8 p-2">
            <p className="ml-6">EXPLORE NOW</p>
            <div className="p-3 rounded-lg bg-[#1A4CD8]">
              <Image
                src="/starts.svg"
                alt="starts"
                width={26}
                height={26}
                className="block hover:hidden"
              />
              <Image
                src="/right.svg"
                alt="logo"
                width={8}
                height={16}
                className="hidden hover:block"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
