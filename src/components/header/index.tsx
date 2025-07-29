"use client";
import Image from "next/image";
import React, { useState } from "react";
const navItemsDesktop = [
  {
    title: "Home",
    href: "/#home",
  },
  {
    title: "Projects",
    id: "#projects",
    href: "/#projects",
  },
  {
    title: "About",
    id: "#about",
    href: "/#about",
  },
  {
    title: "Services",
    id: "#services",
    href: "/#services",
  },
  {
    title: "Contact",
    id: "#contact",
    href: "/#contact",
  },
  {
    title: "/",
  },
  {
    title: "Articles",
    href: "/articles",
  },
  {
    title: "Careers",
    href: "/careers",
  },
];
const navItemsMobile = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Projects",
    href: "/#projects",
  },
  {
    title: "About",
    href: "/#about",
  },
  {
    title: "Services",
    href: "/#services",
  },
  {
    title: "Contact",
    href: "#contact",
  },
  {
    title: <Image src="/line_header.svg" alt="Logo" width={100} height={32} />,
  },
  {
    title: "Articles",
    href: "/articles",
  },
  {
    title: "Careers",
    href: "/careers",
  },
  {
    title: <Image src="/close_header.svg" alt="Logo" width={48} height={48} />,
  },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  React.useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="sticky top-0 left-0 w-full z-40 bg-transparent header-blur-gradient">
        <div className="flex items-center justify-between gap-8 px-12 py-6 max-md:px-4 max-md:py-3">
          <div className="flex items-center">
            <a href="/">
              <Image
                src="/logo_white 1.png"
                alt="Logo"
                width={250}
                height={48}
              />
            </a>
          </div>
          <nav className="hidden lg:flex items-center gap-6">
            {navItemsDesktop.map((item, index) =>
              item.href ? (
                <a
                  key={index}
                  data-scroll-to={item.id}
                  href={item.href}
                  className="text-white font-semibold text-[15px] uppercase px-2 py-1"
                >
                  {item.title}
                </a>
              ) : (
                <span
                  key={index}
                  className="text-white font-semibold text-[15px] uppercase px-2 py-1 opacity-70 cursor-default"
                  aria-disabled="true"
                >
                  {item.title}
                </span>
              )
            )}
          </nav>
          <button
            className="lg:hidden p-2"
            aria-label="Toggle mobile menu"
            onClick={() => setMobileOpen(true)}
            
          >
            <Image src="/menu.svg" alt="Menu" width={40} height={14} />
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black flex  flex-col h-full lg:hidden animate-fade-in drop-text">
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <a href="/">
              <Image
                src="/logo_white 1.png"
                alt="Logo"
                width={120}
                height={32}
              />
            </a>
            <button
              className="p-2"
              aria-label="Close mobile menu"
              onClick={() => setMobileOpen(false)}
            >
              <Image src="/menu.svg" alt="Menu" width={40} height={14} />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto p-6 flex flex-col gap-4 items-center">
            {navItemsMobile.map((item, index) =>
              item.href ? (
                <a
                  key={index}
                  data-scroll-to={item.href}
                  href={item.href}
                  className="flex text-2xl font-coda font-medium text-white py-2 justify-start gap-2 items-center"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.title}
                </a>
              ) : (
                <span
                  key={index}
                  className="flex text-lg font-coda font-medium text-white py-2 justify-start gap-2 items-center opacity-70 cursor-default"
                  aria-disabled="true"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.title}
                </span>
              )
            )}
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
