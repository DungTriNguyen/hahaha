
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const SlideComponent = () => {
  const projects = [
    {
      id: 1,
      title: "Human-Centered",
      description:
        "We craft digital products with empathy at the core — designed not just for users, but for people with real needs and emotions.",
      image: "/img_slide_1.png",
    },
    {
      id: 2,
      title: "Insight-Driven",
      description:
        "Our solutions are guided by research, data, and behavioral insight — turning complex problems into clear, meaningful experiences.",
      image: "/img_slide_2.png",
    },
    {
      id: 3,
      title: "Creativity Meets Technology",
      description:
        "We push the limits of digital possibilities with modern technology — from AI to blockchain — blending creativity with code.",
      image: "/img_slide_3.png",
    },
    {
      id: 4,
      title: "Partnership",
      description:
        "Every product we build aligns with your long-term goals — so it’s not just beautiful, but scalable, strategic, and future-ready.",
      image: "/ing_slide_4.png",
    },
  ];
  return (
    <div className="relative [&_.swiper]:pb-10 [&_.swiper-pagination]:bottom-0 [&_.swiper-button-prev]:top-[35%] [&_.swiper-button-next]:top-[35%]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} 
        spaceBetween={24} 
        slidesPerView={1}
        breakpoints={{
          480: { slidesPerView: 1 }, 
          800: { slidesPerView: 3 }, 
        }}
        navigation 
        pagination={{ clickable: true }} 
        autoplay={{ delay: 3000, disableOnInteraction: false }} 
        className="w-full"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className=" text-black rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={project.image}
                width={400}
                height={300}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 font-coda">
                <h3 className="text-xl font-extrabold mb-2">{project.title}</h3>
                <p className="text-base">{project.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination !bottom-[-20px]" />
      </Swiper>
    </div>
  );
};
export default SlideComponent;
