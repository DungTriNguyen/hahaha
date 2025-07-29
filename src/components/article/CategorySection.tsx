"use client";

import { useEffect, useState } from "react";
import { getBlog } from "../hooks/blog";
import { getBlogCategory } from "../hooks/blog-category";
import { BlogItem, BlogResponse } from "@/types/blog";
import Link from "next/link";
import CardTitle from "../ui/card-title";
import { formatDateToLongEN } from "@/utils/formatDate";
import CardDescription from "../ui/card-description";
import MoreButton from "../ui/more-button";
import { twMerge } from "tailwind-merge";
import { BlogCategory, BlogCategoryResponse } from "@/types/blog-category";
import Image from "next/image";

export default function CategorySlideSection() {
  const [category, setCategory] = useState<BlogCategoryResponse | null>(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null
  );
  const [dataBlog, setDataBlog] = useState<BlogResponse | null>(null);
  const [pageIndex, setPageIndex] = useState(0);
  const [allItems, setAllItems] = useState<BlogItem[]>([]);
  const PAGE_SIZE = 3;

  useEffect(() => {
    getBlogCategory({
      ParentId: process.env.NEXT_PUBLIC_CATEGORY_ARTICLE_ID,
    }).then((res) => {
      setCategory(res);
      if (res?.items?.length && res.items.length > 0 && !selectedCategoryId) {
        setSelectedCategoryId(res.items[0].id);
      }
    });
  }, []);

  useEffect(() => {
    if (!selectedCategoryId) return;
    getBlog({
      BlogCategoryId: selectedCategoryId,
      PageIndex: pageIndex,
      PageSize: PAGE_SIZE,
    }).then((res) => {
      const blogResponse = res as BlogResponse;
      setDataBlog(blogResponse);
      if (pageIndex === 0) {
        setAllItems(blogResponse?.items || []);
      } else {
        setAllItems((prev) => [...prev, ...(blogResponse?.items || [])]);
      }
    });
  }, [selectedCategoryId, pageIndex]);

  console.log("dataBlog:::::", dataBlog);

  const totalCount = dataBlog?.totalCount || 0;
  const hasMoreItems = allItems.length < totalCount;

  const handleLoadMore = () => {
    setPageIndex((prev) => prev + 1);
  };

  const handleCategoryClick = (id: string) => {
    if (selectedCategoryId !== id) {
      setSelectedCategoryId(id);
      setPageIndex(0);
      setAllItems([]);
    }
  };

  return (
    <section className="text-white lg:py-32 relative z-1">
      <div className="container px-4 md:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between gap-8 lg:gap-12">
          <div className="lg:flex-1 flex flex-col gap-6">
            {allItems && allItems.length > 0 ? (
              <>
                {allItems.map((article, index) => (
                  <Link href={`/articles/${article.itemUrl}`} key={index}>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 group items-center">
                      <div className="w-full md:w-[300px] lg:w-[440px] h-[200px] md:h-[250px] lg:h-[330px] flex-shrink-0">
                        <Image
                          unoptimized
                          width={440}
                          height={330}
                          src={article.imageUrl || "/articles/article.png"}
                          alt={article.title}
                          className="w-full h-full object-cover rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-110"
                        />
                      </div>
                      <div className="flex-1 space-y-3 md:space-y-4 min-w-0 ">
                        <CardTitle
                          title={article.title}
                          className="text-xl lg:text-2xl uppercase tracking-normal"
                        />
                        <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-white">
                          <span>
                            By Hubcom /{" "}
                            {formatDateToLongEN(article.createdDate)}
                          </span>
                        </div>
                        <CardDescription
                          description={article.description}
                          className="line-clamp-2"
                        />
                        <MoreButton />
                      </div>
                    </div>
                  </Link>
                ))}
                {hasMoreItems && (
                  <div className="flex justify-center mt-20">
                    <button
                      onClick={handleLoadMore}
                      className="px-8 py-3 rounded-2xl border border-white hover:bg-white hover:text-black bg-black bg-opacity-10 text-white font-semibold transition-colors hover:bg-opacity-20"
                    >
                      Load More
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-white bg-opacity-10 px-3 py-2 rounded">
                No data found
              </div>
            )}
          </div>

          <div className="lg:border-l lg:border-[#2A2F3C] lg:pl-8 xl:pl-10 lg:w-[280px] xl:w-[320px] flex-shrink-0">
            <div className="lg:sticky lg:top-8">
              <p className="text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6 font-coda">
                CATEGORY
              </p>
              <ul className="flex flex-wrap lg:flex-col gap-3 md:gap-4 lg:gap-6">
                {category?.items && category.items.length > 0 ? (
                  category.items.map((item: BlogCategory, index: number) => (
                    <li
                      key={index}
                      className="cursor-pointer text-sm md:text-base transition-colors uppercase"
                      onClick={() => handleCategoryClick(item.id)}
                    >
                      <span
                        className={twMerge(
                          `relative pb-1 ${
                            selectedCategoryId === item.id
                              ? "font-bold text-white after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-white"
                              : "text-gray-300 hover:text-white after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-white after:opacity-0 hover:after:opacity-100"
                          }`
                        )}
                      >
                        {item.title}
                      </span>
                    </li>
                  ))
                ) : (
                  <li className="text-white bg-opacity-10 px-3 py-2 rounded">
                    No data found
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
