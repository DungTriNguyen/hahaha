import { BlogItem } from "@/types/blog";
import Image from "next/image";
const HeroSection = ({ title, image }: { title: string, image: string }) => {
  return (
    <section className="w-full flex flex-col justify-center items-center text-white py-10 top-0">
      <div className="container text-center space-y-2">
        <p className="text-[#B3CCFF]">ARTICLES</p>
        <h1 className="text-7xl font-coda">{title}</h1>
        <p className="text-sm">Digital Strategy  •  Minh Tran  •  July 4, 2025</p>
        <div className="max-w-[840px] rounded-3xl mx-auto overflow-hidden shadow-lg mt-10">
          <Image
            src={image || "/images/default-image.png"}
            width={840}
            height={336}
            alt=""
            className="w-full h-[336px] object-cover rounded-3xl"
            priority
          />
        </div>
      </div>
    </section>
  )
}
export default HeroSection;