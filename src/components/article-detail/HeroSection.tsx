import { BlogItem } from "@/types/blog";

const HeroSection = ({ title }: { title: string }) => {
  return (
    <section className="bg-[url('/img_background.png')] bg-cover bg-center w-full flex flex-col justify-center items-center text-white py-20 top-0">
     <div className="container text-center space-y-2">
        <p className="text-[#B3CCFF]">ARTICLES</p>
        {/* <h1 className="text-7xl">WHY MOST MVPS FAIL & HOW TO BUILD ONE THAT DOESN’T</h1> */}
        <h1 className="text-7xl font-coda">{title}</h1>
        <p className="text-sm">Digital Strategy  •  Minh Tran  •  July 4, 2025</p>
      </div>
    </section>
  )
}
export default HeroSection;