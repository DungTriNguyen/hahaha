import Image from "next/image";

export default function BackgroundComponent() {
  return (
    <div className="bg-[#0C0B10] absolute top-0 left-0 w-full h-full z-[-1]">
      <Image
        src="/img_background.png"
        alt="background"
        width={1920}
        height={768}

      />
    </div>
  );
}
