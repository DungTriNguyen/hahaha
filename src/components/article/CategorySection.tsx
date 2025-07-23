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
    <section className="bg-[#0C0B10] text-white py-20">
      <div className="container flex justify-between">
        <div className="space-y-6">
          {dataBlog?.items.map((article, index) => (
            <div
              key={index}
              className="flex gap-6 justify-center items-center pr-12"
            >
              <div className="">
                <Image
                  src={article.imageUrl || "/articles/article.png"}
                  height={440}
                  width={330}
                  alt="Article Category"
                />
              </div>
              <div className="w-[480px]">
                <p>{article.title}</p>
                <p>{article.createdDate}</p>
                <p className="line-clamp-2">{article.description}</p>
                <a
                  href={`/articles/${article.itemUrl}`}
                  className="underline font-bold"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="border-l border-[#2A2F3C] pl-10">
          <p className="text-4xl mb-6">CATEGORY</p>
          <ul className="flex flex-col gap-6">
            {category?.items.map((item, index) => (
              <li
                key={index}
                className={`hover:underline cursor-pointer ${
                  selectedCategoryId === item.id ? "font-bold" : ""
                }`}
                onClick={() => handleCategoryClick(item.id)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CategorySlideSection;
