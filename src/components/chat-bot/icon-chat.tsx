import Image from "next/image";
import Link from "next/link";

const IconChat = () => {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-4 z-50">
      <Link href={"/"}>
        <div className="flex items-center justify-end group relative">
          <span className="mr-3 text-white font-semibold uppercase text-base whitespace-nowrap opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 absolute right-full">
            Start a project
          </span>
          <button
            className="group p-2 md:p-3 rounded-lg md:rounded-xl bg-[#2468FF] border-4 border-[#1A4CD8] relative w-[48px] h-[48px] lg:w-[64px]  lg:h-[64px] md:w-[56px] md:h-[56px] overflow-hidden transition-colors duration-300"
            aria-label="Start a project"
          >
            <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out group-hover:translate-x-full group-hover:opacity-0">
              <Image
                src="/rocket.svg"
                alt="rocket"
                width={24}
                height={24}
                className="md:w-8 md:h-8"
              />
            </span>
            <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
              <Image
                src="/right.svg"
                alt="arrow"
                width={24}
                height={24}
                className="md:w-8 md:h-8"
              />
            </span>
          </button>
        </div>
      </Link>
      <Link href={"#"}>
        <div className="flex items-center justify-end group relative">
          <span className="mr-3 text-white font-semibold text-base whitespace-nowrap uppercase opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 absolute right-full">
            Live chat
          </span>
          <button
            className="group p-2 md:p-3 rounded-lg md:rounded-xl bg-[#2468FF] border-4 border-[#1A4CD8] relative h-[48px] w-[48px] lg:h-[64px] lg:w-[64px] md:w-[56px] md:h-[56px] overflow-hidden transition-colors duration-300"
            aria-label="Live chat"
          >
            <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out group-hover:translate-x-full group-hover:opacity-0">
              <Image
                src="/message.svg"
                alt="message"
                width={24}
                height={24}
                className="md:w-8 md:h-8"
              />
            </span>
            <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
              <Image
                src="/right.svg"
                alt="arrow"
                width={24}
                height={24}
                className="md:w-8 md:h-8"
              />
            </span>
          </button>
        </div>
      </Link>
    </div>
  );
};

export default IconChat;
