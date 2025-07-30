import Image from "next/image";

export default function BackgroundComponent() {
  return (
    <div className="bg-background absolute top-0 left-0 w-full z-[1]">
      <Image
        src="/home/img_background.webp"
        alt="background"
        width={1920}
        height={768}
        className="w-full h-full object-top lg:object-cover"
      />
      <div
        className="absolute bottom-[-18%] w-full h-full blur-xl"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, #0C0B10 100%)",
        }}
      />
    </div>
  );
}
