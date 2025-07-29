export default function WaveComponent() {
  return (
    <div className="w-full h-[100px] absolute bottom-[11%] left-0 z-9 bg-background">
      {/* Wave Top */}
      <div className="absolute inset-x-0 bottom-0 h-full w-full bg-blue z-20">
        <div
          className="absolute bottom-0 left-0 h-full w-full waveTop will-change-transform scale-1600"
          style={{
            backgroundImage: 'url("/wave1.svg")',
            backgroundRepeat: "repeat-x",
            backgroundPosition: "left bottom",
            backgroundSize: "500px 100px",
          }}
        ></div>
      </div>
      {/* Wave Middle */}
      <div className="absolute inset-x-0 bottom-0 h-full w-full bg-blue z-[10] opacity-100">
        <div
          className="absolute bottom-0 left-0 h-full w-full waveMiddle will-change-transform scale-1600"
          style={{
            backgroundImage: 'url("/wave2.svg")',
            backgroundRepeat: "repeat-x",
            backgroundPosition: "left bottom",
            backgroundSize: "500px 100px",
          }}
        ></div>
      </div>
      {/* Wave Bottom */}
      <div className="absolute inset-x-0 bottom-0 h-full w-full bg-blue opacity-100 z-[10]">
        <div
          className="absolute bottom-0 left-0 h-full w-full waveBottom will-change-transform scale-1600"
          style={{
            backgroundImage: 'url("/wave3.svg")',
            backgroundRepeat: "repeat-x",
            backgroundPosition: "left bottom",
            backgroundSize: "500px 100px",
          }}
        ></div>
      </div>
    </div>
  );
}
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Autoplay } from "swiper/modules";
// import Image from "next/image";
// export default function WaveComponent({
//   img,
//   key,
//   className,
// }: {
//   img: string;
//   key: number;
//   className: string;
// }) {
//   return (
//     <div
//       className={`${className} absolute bottom-0 left-0 w-[1200%] md:w-[600%] h-[100px]`}
//     >
//       <Swiper
//         modules={[Autoplay]}
//         loop={true}
//         autoplay={{
//           disableOnInteraction: false,
//         }}
//         speed={1000}
//         slidesPerView={1}
//         effect="slide"
//         className=""
//       >
//         <SwiperSlide>
//           <div>
//             <Image
//               src={img}
//               key={key}
//               alt="wave"
//               width={100}
//               height={100}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div>
//             <Image
//               src={img}
//               key={key}
//               alt="wave"
//               width={100}
//               height={100}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }
