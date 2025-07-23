import Image from "next/image";
import { BlogContent } from "@/types/blog";
import { useBlog } from "../hooks/blog";

const ArticleContent = ({ image, description, id }: { image: string, description: string, id: string }) => {
  const { data, loading, error } = useBlog({ id: id, content: true });
  const content = data as BlogContent;
  return (
    <section className="bg-[#0C0B10] flex flex-col items-center justify-center px-4 py-8 md:py-16">
      <div className="w-full max-w-[840px] flex flex-col items-center gap-8">
        {/* Ảnh đầu bài */}
        <div className="w-full rounded-3xl overflow-hidden shadow-lg">
          <Image
            src={image}
            width={840}
            height={336}
            alt=""
            className="w-full h-[336px] object-cover rounded-3xl"
            priority
          />
        </div>
        {/* Nội dung bài viết */}
        <div className="w-full flex flex-col gap-4">
          <p className="text-lg text-[#CCCCCC] leading-relaxed mb-2 border-l border-l-[#2468FF] p-4">{description}</p>
          {content?.content ? (
            <div
              className="prose prose-invert max-w-none text-white text-base md:text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: content?.content || "" }}
            />
          ) : (
            <p className="text-gray-400">Không có nội dung</p>
          )}
        </div>
      </div>
    </section>
  );
};
export default ArticleContent;
