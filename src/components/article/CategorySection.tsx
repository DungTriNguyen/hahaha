import Image from "next/image";
import Link from "next/link";
import { describe } from "node:test";
import { title } from "process";

const menuItems = [
  {
    title: "DIGITAL STRATEGY",
    href: "/articles/d",
  },
  {
    title: "AI & AUTOMATION",
    href: "/articles/ai",
  },
  {
    title: "UX/UI DESIGN",
    href: "/articles/ux",
  },
];

const articleCategory = [
  {
    img: "/articles/article.png",
    title: "Why Most MVPs Fail & How to Build One That Doesn’t",
    time: "By Jane Doe / Jul 4, 2025",
    description:
      "Launching fast is easy. Launching smart is hard. In this article, we break down common MVP mistakes and ho",
    linkMore: "/articles/launching-smart",
  },
  {
    img: "/articles/article.png",
    title: "Why Most MVPs Fail & How to Build One That Doesn’t",
    time: "By Jane Doe / Jul 4, 2025",
    description:
      "Launching fast is easy. Launching smart is hard. In this article, we break down common MVP mistakes and ho",
    linkMore: "/articles/launching-smart",
  },
  {
    img: "/articles/article.png",
    title: "Why Most MVPs Fail & How to Build One That Doesn’t",
    time: "By Jane Doe / Jul 4, 2025",
    description:
      "Launching fast is easy. Launching smart is hard. In this article, we break down common MVP mistakes and ho",
    linkMore: "/articles/launching-smart",
  },
  {
    img: "/articles/article.png",
    title: "Why Most MVPs Fail & How to Build One That Doesn’t",
    time: "By Jane Doe / Jul 4, 2025",
    description:
      "Launching fast is easy. Launching smart is hard. In this article, we break down common MVP mistakes and ho",
    linkMore: "/articles/launching-smart",
  },
];

const CategorySlideSection = () => {
  return (
    <section className="bg-[#0C0B10] text-white py-20">
      <div className="container flex justify-between">
        <div className="space-y-6">
            {articleCategory.map((article, index) => {
          return (
            <div key={index} className="flex gap-6 justify-center items-center pr-12">
              <div className="">
                <Image
                  src={article.img}
                  height={440}
                  width={330}
                  alt="Article Category"
                />
              </div>
              <div className="w-[480px]">
                <p>{article.title}</p>
                <p>{article.time}</p>
                <p className="line-clamp-2">{article.description}</p>
                <a href={article.linkMore} className="underline font-bold">
                  Read More
                </a>
              </div>
            </div>
          );
        })}
        </div>

        <div className="border-l border-[#2A2F3C] pl-10">
          <p className="text-4xl mb-6">CATEGORY</p>
          <ul className="flex flex-col gap-6 ">
            {menuItems.map((item, index) => (
              <Link href={item.href} key={index} className="hover:underline"><li>{item.title}</li></Link>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CategorySlideSection;
