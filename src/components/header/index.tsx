import Image from "next/image";

const Header = () => {
  return (
    <div className="flex flex-nowrap justify-between items-center px-12 py-6 bg-black backdrop-blur-md text-white fixed top-0 w-full z-50">
      <div>
        <Image src="/logo_white 1.png" width={250} height={48} alt="LOGO" />
      </div>
      <ul className="flex gap-8">
        <li className="hover:cursor-pointer transition-colors">HOME</li>
        <li className="hover:cursor-pointer transition-colors">PROJECTS</li>
        <li className="hover:cursor-pointer transition-colors">ABOUT</li>
        <li className="hover:cursor-pointer transition-colors">SERVICE</li>
        <li className="hover:cursor-pointer transition-colors">CONTACT</li>
        <span>/</span>
        <li className="hover:cursor-pointer transition-colors">ARTICLES</li>
        <li className="hover:cursor-pointer transition-colors">CAREERS</li>
      </ul>
    </div>
  );
};

export default Header;