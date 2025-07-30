"use client";
import { BlogContent } from "@/types/blog";
import CardDescription from "../ui/card-description";
import Description from "../ui/description";
import { useBlogQuery } from "../hooks/blog";

const ArticleContent = ({
  description,
  id,
}: {
  description: string;
  id: string;
}) => {
  const { data, isLoading, error } = useBlogQuery({
    id: id,
    content: true,
  });
  const content = data as BlogContent;

  return (
    <section className="bg-background flex flex-col items-center justify-center px-4 pb-16">
      <div className="w-full max-w-[840px] relative z-2 flex flex-col items-center gap-8">
        <div className="w-full flex flex-col gap-4 ">
          {description ? (
            <CardDescription
              description={description}
              className="mb-6 border-l-2 border-l-button text-start ml-6 p-4 text-lg italic"
            />
          ) : (
            <p className="text-gray-400">Not found description</p>
          )}
          {isLoading ? (
            <div className="text-gray-400">Loading content...</div>
          ) : error ? (
            <div className="text-gray-400">Error loading content</div>
          ) : content?.content ? (
            <Description
              description={content?.content}
              className="text-start"
            />
          ) : (
            <p className="text-gray-400">Not found content</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ArticleContent;
