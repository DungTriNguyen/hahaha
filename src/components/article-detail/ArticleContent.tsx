import { getBlog } from "@/components/hooks/blog";
import { BlogContent } from "@/types/blog";
import CardDescription from "../ui/card-description";
import Description from "../ui/description";

const ArticleContent = async ({
  description,
  id,
}: {
  description: string;
  id: string;
}) => {
  const data = await getBlog({ id: id, content: true });
  const content = data as BlogContent;
  console.log("content", content);
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
          {content?.content ? (
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
