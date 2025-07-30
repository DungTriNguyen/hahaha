import ProjectComponent from "../project-component/ProjectComponent";
import Description from "../ui/description";
import SubTitle from "../ui/sub-title";
import Title from "../ui/title";

export interface Projects {
  id: number;
  numberIndex: string;
  title: string;
  scrumb: string;
  description: string;
  img: string;
}

const projects: Projects[] = [
  {
    id: 1,
    numberIndex: "01",
    title: "DexSpace All-in-One DEX Platform",
    scrumb: "Blockchain / DeFiPlatform / AITrading",
    description:
      "Empowering traders and businesses with a multi-chain DEX featuring token launchpad, AI trading, and built-in smart contract insurance.",
    img: "/home/img_banner_1.webp",
  },
  {
    id: 2,
    numberIndex: "02",
    title: "BlockTrack",
    scrumb: "Blockchain / AI / Web3",
    description:
      "AI-powered blockchain tracker helping Web3 startups gain insights into asset flow and market shifts.",
    img: "/home/img_banner_2.webp",
  },
  {
    id: 3,
    numberIndex: "03",
    title: "BlockTrack",
    scrumb: "Blockchain / AI / Web3",
    description:
      "AI-powered blockchain tracker helping Web3 startups gain insights into asset flow and market shifts.",
    img: "/home/img_banner_3.webp",
  },
  {
    id: 4,
    numberIndex: "04",
    title: "BlockTrack",
    scrumb: "Blockchain / AI / Web3",
    description:
      "AI-powered blockchain tracker helping Web3 startups gain insights into asset flow and market shifts.",
    img: "/home/img_banner_4.webp",
  },
  {
    id: 5,
    numberIndex: "05",
    title: "BlockTrack",
    scrumb: "Blockchain / AI / Web3",
    description:
      "AI-powered blockchain tracker helping Web3 startups gain insights into asset flow and market shifts.",
    img: "/home/img_banner_5.webp",
  },
];

const ProjectSection = () => {
  return (
    <section
      className="relative z-20 w-full bg-background text-white data-scroll-to"
      id="projects"
    >
      <div className="flex flex-col items-center gap-14 pt-44 pb-20">
        <div className="flex flex-col items-center gap-8 text-center max-w-4xl">
          <div className="flex flex-col gap-1">
            <Title title="Projects" />
            <SubTitle
              title="OUR Bold WORKS"
              as="h2"
              className="w-full max-w-[400px]"
            />
          </div>
          <Description description="Shaping brilliant ideas into life" />
        </div>
        <div className="w-full">
          <ProjectComponent data={projects} />
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
