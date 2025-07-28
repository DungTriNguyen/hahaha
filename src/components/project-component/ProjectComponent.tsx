import Image from "next/image";
import { Projects } from "../home-page/ProjectSection";
import { twMerge } from "tailwind-merge";
import CardTitle from "../ui/card-title";
import Tag from "../ui/tag";
import CardNumber from "../ui/card-number";
import CardDescription from "../ui/card-description";
import MoreButton from "../ui/more-button";

const ProjectComponent = ({ data }: { data: Projects[] }) => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
      {data.map((project, index) => (
        <div
          key={project.id || index}
          className={twMerge(
            "flex flex-col lg:flex-row items-stretch bg-[var(--background)] rounded-lg overflow-hidden group",
            project.id % 2 === 0 ? "lg:flex-row-reverse " : ""
          )}
          style={{ minHeight: "513px" }}
        >
          <div className="w-full lg:w-[912px] relative">
            <div className="relative w-full h-[300px] lg:h-[513px] opacity-80 rounded-lg overflow-hidden">
              <Image
                src={project.img}
                fill
                sizes="(min-width: 1024px) 912px, 100vw"
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                alt={`Project ${project.title} image`}
              />
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center py-4 lg:p-12 max-w-[744px]">
            <div
              className={twMerge(
                "flex flex-col gap-6",
                project.id % 2 === 0
                  ? "lg:items-end lg:text-right"
                  : "lg:items-start"
              )}
            >
              <div className="flex flex-col gap-2">
                <CardNumber number={project.numberIndex} />
                <CardTitle title={project.title} as="h3" />
                <div
                  className={twMerge(
                    "flex flex-wrap gap-2",
                    project.id % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
                  )}
                >
                  {project.scrumb.split(" / ").map((tag, tagIndex) => (
                    <div key={tagIndex} className="flex items-center gap-2">
                      <Tag title={tag} />
                      {tagIndex < project.scrumb.split(" / ").length - 1 && (
                        <div className="">
                          <Image
                            src="/line.svg"
                            alt="line"
                            width={6}
                            height={6}
                            className="w-full h-auto"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <CardDescription
                description={project.description}
                className="line-clamp-3"
              />
              <MoreButton />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectComponent;
