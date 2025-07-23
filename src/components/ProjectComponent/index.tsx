import Image from "next/image";
import { Projects } from "../main-content/ProjectSection";

const ProjectComponent = ({ data }: { data: Projects[] }) => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-[1440px] mx-auto">
      {data.map((project, index) => (
        <div
          key={project.id || index}
          className={`flex flex-col lg:flex-row items-stretch bg-[#0C0B10] rounded-lg overflow-hidden group ${project.id % 2 === 0 ? "lg:flex-row-reverse " : ""
            }`}
          style={{ minHeight: "513px" }}
        >
          {/* Image Section - Fixed width like Figma */}
          <div className="w-full lg:w-[912px] relative">
            <div className="relative w-full h-[300px] lg:h-[513px] opacity-80 rounded-lg overflow-hidden">
              <Image
                src={project.img}
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                alt={`Project ${project.title} image`}
              />
            </div>
          </div>

          {/* Content Section - Fixed width like Figma */}
          <div className="flex-1 flex flex-col justify-center py-4 lg:p-12 max-w-[744px]">
            <div
              className={`flex flex-col gap-6 ${project.id % 2 === 0
                  ? "lg:items-end lg:text-right"
                  : "lg:items-start"
                }`}
            >
              <div className="flex flex-col gap-2">
                {/* Project Number */}
                <p className="text-[#1A4CD8] text-6xl lg:text-8xl xl:text-9xl font-coda font-normal">
                  {project.numberIndex}
                </p>

                {/* Project Title */}
                <h3 className="text-white text-2xl lg:text-3xl xl:text-4xl font-coda font-normal">
                  {project.title}
                </h3>

                {/* Project Tags */}
                <div
                  className={`flex flex-wrap gap-2 ${project.id % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
                    }`}
                >
                  {project.scrumb.split(" / ").map((tag, tagIndex) => (
                    <div key={tagIndex} className="flex items-center gap-2">
                      <span className="text-white text-sm font-semibold">
                        {tag}
                      </span>
                      {tagIndex < project.scrumb.split(" / ").length - 1 && (
                        <div className="w-px h-4 bg-white/70" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Description */}
              <p className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-lg">
                {project.description}
              </p>

              {/* More Button */}
              <div className="relative w-fit group-hover:cursor-pointer">
                <div className="flex items-center gap-2 z-10 relative">
                  <span className="text-gray-400 text-sm font-semibold">More</span>
                </div>

                {/* Animated underline */}
                <span className="absolute bottom-0 left-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-500 ease-in-out" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectComponent;
