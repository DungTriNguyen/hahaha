"use client";
import { useState, useEffect } from "react";
import { BlogItem, BlogResponse } from "@/types/blog";
import Link from "next/link";
import CardTitle from "../ui/card-title";
import { formatDateToLongEN } from "@/utils/formatDate";
import CardDescription from "../ui/card-description";
import MoreButton from "../ui/more-button";
import { twMerge } from "tailwind-merge";
import { BlogCategory, BlogCategoryResponse } from "@/types/blog-category";
import Image from "next/image";
import { useBlogQuery } from "../hooks/blog";
import { useBlogCategoryQuery } from "../hooks/blog-category";

export default function CategorySlideSection() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null
  );
  const [pageIndex, setPageIndex] = useState(0);
  const [allItems, setAllItems] = useState<BlogItem[]>([]);
  const PAGE_SIZE = 3;

  const {
    data: category,
    isLoading: isLoadingCategory,
    error: categoryError,
  } = useBlogCategoryQuery({
    ParentId: process.env.NEXT_PUBLIC_CATEGORY_ARTICLE_ID,
  });

  const categoryResponse = category as BlogCategoryResponse | null;

  useEffect(() => {
    if (
      categoryResponse?.items?.length &&
      categoryResponse.items.length > 0 &&
      !selectedCategoryId
    ) {
      setSelectedCategoryId(categoryResponse.items[0].id);
    }
  }, [categoryResponse, selectedCategoryId]);

  const {
    data: dataBlog,
    isLoading: isLoadingBlog,
    error: blogError,
  } = useBlogQuery({
    BlogCategoryId: selectedCategoryId || undefined,
    PageIndex: pageIndex,
    PageSize: PAGE_SIZE,
  });

  const blogResponse = dataBlog as BlogResponse | null;

  useEffect(() => {
    if (blogResponse && selectedCategoryId) {
      if (pageIndex === 0) {
        setAllItems(blogResponse?.items || []);
      } else {
        setAllItems((prev) => [...prev, ...(blogResponse?.items || [])]);
      }
    }
  }, [blogResponse, selectedCategoryId, pageIndex]);

  const totalCount = blogResponse?.totalCount || 0;
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
    <section className="text-white relative z-1 pb-10">
      <div className="lg:max-w-[1285px] mx-auto px-4 lg:px-0">
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between gap-8 lg:gap-12">
          <div className="lg:flex-1 flex flex-col gap-6">
            {isLoadingBlog ? (
              <div className="text-white bg-opacity-10 px-3 py-2 rounded">
                Loading articles...
              </div>
            ) : blogError ? (
              <div className="text-white bg-opacity-10 px-3 py-2 rounded">
                Error loading articles
              </div>
            ) : allItems && allItems.length > 0 ? (
              <>
                {allItems.map((article, index) => (
                  <Link href={`/articles/${article.itemUrl}`} key={index}>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 group items-center">
                      <div className="w-full md:w-[300px] lg:w-[440px] h-[200px] md:h-[250px] lg:h-[330px] flex-shrink-0">
                        <Image
                          width={440}
                          height={330}
                          src={article.imageUrl || "/articles/default.webp"}
                          alt={article.title}
                          className="w-full h-full object-cover rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, 440px"
                          unoptimized
                        />
                      </div>
                      <div className="flex-1 space-y-3 md:space-y-6 min-w-0 text-start">
                        <CardTitle
                          title={article.title}
                          className="text-xl lg:text-2xl uppercase tracking-normal text-start "
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

          <div className="lg:border-l lg:border-[#2A2F3C] lg:pl-8 xl:pl-12 lg:w-[280px] xl:w-[320px] flex-shrink-0">
            <div className="lg:sticky lg:top-8 lg:mt-30">
              <p className="text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6 font-coda">
                CATEGORY
              </p>
              <ul className="flex flex-wrap lg:flex-col gap-3 md:gap-4 lg:gap-6">
                {isLoadingCategory ? (
                  <li className="text-white bg-opacity-10 px-3 py-2 rounded">
                    Loading categories...
                  </li>
                ) : categoryError ? (
                  <li className="text-white bg-opacity-10 px-3 py-2 rounded">
                    Error loading categories
                  </li>
                ) : categoryResponse?.items &&
                  categoryResponse.items.length > 0 ? (
                  categoryResponse.items.map(
                    (item: BlogCategory, index: number) => (
                      <li
                        key={index}
                        className="cursor-pointer text-sm md:text-[15px] transition-colors uppercase"
                        onClick={() => handleCategoryClick(item.id)}
                      >
                        <span
                          className={twMerge(
                            `relative pb-1 ${selectedCategoryId === item.id
                              ? "font-bold text-white after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-white"
                              : "text-gray-300 hover:text-white after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-white after:opacity-0 hover:after:opacity-100"
                            }`
                          )}
                        >
                          {item.title}
                        </span>
                      </li>
                    )
                  )
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
