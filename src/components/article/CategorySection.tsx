"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useBlogCategory } from "../hooks/blog-category";
import { useBlog } from "../hooks/blog";
import { BlogResponse } from "@/types/blog";

const CategorySlideSection = () => {
  const {
    data: category,
    loading,
    error,
  } = useBlogCategory({
    ParentId: process.env.NEXT_PUBLIC_CATEGORY_ARTICLE_ID,
  });
  console.log("category", category);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null
  );

  // 👉 Khi category fetch xong, tự động set ID đầu tiên nếu chưa có ID
  useEffect(() => {
    if (category && category.items.length > 0 && !selectedCategoryId) {
      setSelectedCategoryId(category.items[0].id);
    }
  }, [category, selectedCategoryId]);

  const { data: article } = useBlog({
    BlogCategoryId: selectedCategoryId ?? undefined,
  });
  const dataBlog = article as BlogResponse;
  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
  };

  return (
    <section className="bg-[#0C0B10] text-white py-10 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-12">
          {/* Articles List */}
          <div className="space-y-6 lg:flex-1">
            {dataBlog?.items.map((article, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8"
              >
                {/* Image */}
                <div className="w-full md:w-[300px] lg:w-[440px] h-[200px] md:h-[250px] lg:h-[330px] flex-shrink-0">
                  <Image
                    src={article.imageUrl || "/articles/article.png"}
                    height={330}
                    width={440}
                    alt="Article Category"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3 md:space-y-4 min-w-0">
                  {/* Title */}
                  <h3 className="text-lg md:text-xl lg:text-2xl font-coda uppercase leading-tight text-white">
                    {article.title}
                  </h3>

                  {/* Metadata */}
                  <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-white">
                    <span>{article.createdDate}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm md:text-base text-[#CCCCCC] leading-relaxed line-clamp-3 md:line-clamp-none">
                    {article.description}
                  </p>

                  {/* Read More Button */}
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs md:text-sm font-semibold text-white">
                      More
                    </span>
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Category Sidebar */}
          <div className="lg:border-l lg:border-[#2A2F3C] lg:pl-8 xl:pl-10 lg:w-[280px] xl:w-[320px] flex-shrink-0">
            <div className="lg:sticky lg:top-8">
              <p className="text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6 font-coda">
                CATEGORY
              </p>
              <ul className="flex flex-wrap lg:flex-col gap-3 md:gap-4 lg:gap-6">
                {category?.items.map((item, index) => (
                  <li
                    key={index}
                    className={`hover:underline cursor-pointer text-sm md:text-base transition-colors ${
                      selectedCategoryId === item.id
                        ? "font-bold text-white"
                        : "text-gray-300 hover:text-white"
                    }`}
                    onClick={() => handleCategoryClick(item.id)}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySlideSection;
