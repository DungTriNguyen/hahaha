import { describe } from "node:test";
import ProjectComponent from "../ProjectComponent";

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
    img: "/img_banner_1.png",
  },
  {
    id: 2,
    numberIndex: "02",
    title: "BlockTrack",
    scrumb: "Blockchain / AI / Web3",
    description:
      "AI-powered blockchain tracker helping Web3 startups gain insights into asset flow and market shifts.",
    img: "/img_banner_2.png",
  },
  {
    id: 3,
    numberIndex: "03",
    title: "BlockTrack",
    scrumb: "Blockchain / AI / Web3",
    description:
      "AI-powered blockchain tracker helping Web3 startups gain insights into asset flow and market shifts.",
    img: "/img_banner_3.png",
  },
  {
    id: 4,
    numberIndex: "04",
    title: "BlockTrack",
    scrumb: "Blockchain / AI / Web3",
    description:
      "AI-powered blockchain tracker helping Web3 startups gain insights into asset flow and market shifts.",
    img: "/img_banner_4.png",
  },
  {
    id: 5,
    numberIndex: "05",
    title: "BlockTrack",
    scrumb: "Blockchain / AI / Web3",
    description:
      "AI-powered blockchain tracker helping Web3 startups gain insights into asset flow and market shifts.",
    img: "/img_banner_5.png",
  },
];

const ProjectSection = () => {
  return (
    <section className="relative z-20  mx-auto bg-[#0C0B10] items-center justify-center text-white">
      <div className="container flex w-full flex-col items-center justify-center pt-40">
        <div className="flex flex-col items-center justify-center gap-6 text-center max-w-2xl w-full">
          <span className="text-[#B3CCFF] text-sm font-semibold tracking-widest uppercase mb-2">
            Projects
          </span>
          <h2 className="text-white text-4xl md:text-6xl uppercase mb-2">
            OUR Bold WORKS
          </h2>
          <p className="text-white/90 text-base md:text-lg mb-14">
            Shaping brilliant ideas into life
          </p>
        </div>
        <div className="items-center justify-center ">
          <ProjectComponent data={projects} />
        </div>
      </div>
    </section>
  );
};
export default ProjectSection;
