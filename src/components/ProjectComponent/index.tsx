import Image from "next/image";
import { Projects } from "../main-content/ProjectSection";

const ProjectComponent = ({ data }: { data: Projects[] }) => {
  return (
    <div>
      {data.map((project, index) => (
        <div key={project.id || index} className={`flex ${
            project.id % 2 === 0 ? 'flex-row-reverse' : 'flex-row' 
          } items-center mb-4 gap-12 bg-black rounded-lg justify-between`}>
          <div className="rounded-lg w-full">
            <Image
              src={project.img} 
              width={912}
              height={513}
              className="rounded-lg"
              alt={`Project ${project.title} image`} 
            />
          </div>
          <div className={`flex flex-col gap-6 ${project.id % 2 === 0 ? 'items-end text-end' : 'items-start'}`}>
            <div className="flex flex-col gap-2">
              <p className="text-[#1A4CD8]">{project.numberIndex}</p>
              <p>{project.title}</p>
              <p>{project.scrumb}</p>
            </div>
            <p>{project.description}</p>
            <p>More</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectComponent;