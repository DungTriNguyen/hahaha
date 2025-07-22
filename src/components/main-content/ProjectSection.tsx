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
    <section className="relative z-20 max-w-[1440px] mx-auto bg-black items-center justify-center text-white">
      <div className="flex w-full flex-col items-center justify-center">
       
          <p className="pb-2">PROJECTS</p>
          <h2 className="pb-9">OUR Bold WORKS</h2>
       
        <p>Shaping brilliant ideas into life</p>
        <div className="items-center justify-center ">
          <ProjectComponent data={projects} />
        </div>
      </div>
    </section>
  );
};
export default ProjectSection;
