"use client";
import Image from "next/image";
import React, { useState } from "react";
const navItemsDesktop = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Services",
    href: "#services",
  },
  {
    title: "Contact",
    href: "#contact",
  },
  {
    title: "/",
  },
  {
    title: "Articles",
    href: "#articles",
  },
  {
    title: "Careers",
    href: "#careers",
  },
];
const navItemsMobile = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Services",
    href: "#services",
  },
  {
    title: "Contact",
    href: "#contact",
  },
  {
    title: "Articles",
    href: "#articles",
  },
  {
    title: "Careers",
    href: "#careers",
  },
  {
    title: "X",
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
      <header
        className="sticky top-0 left-0 w-full z-30 bg-gradient-to-b from-black/0 to-black/80 backdrop-blur-sm"
        style={{
          background:
            "linear-gradient(180deg, rgba(12,11,16,0.00) 0%, #0C0B10 100%)",
        }}
      >
        <div className="flex items-center justify-between gap-8 px-12 py-6 max-md:px-4 max-md:py-3">
          <div className="flex items-center">
            <Image src="/logo_white 1.png" alt="Logo" width={250} height={48} />
          </div>
          <nav className="hidden lg:flex items-center gap-7">
            {navItemsDesktop.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-white font-semibold text-[15px] uppercase px-2 py-1 "
              >
                {item.title}
              </a>
            ))}
          </nav>
          <button
            className="lg:hidden p-2"
            aria-label="Toggle mobile menu"
            onClick={() => setMobileOpen(true)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="w-full h-px bg-gray-700/40" />
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col h-full lg:hidden animate-fade-in">
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <Image src="/logo_white 1.png" alt="Logo" width={120} height={32} />
            <button
              className="p-2"
              aria-label="Close mobile menu"
              onClick={() => setMobileOpen(false)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto p-6 flex flex-col gap-4 items-center">
            {navItemsMobile.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex text-lg font-medium text-white  py-2 justify-start gap-2 items-center"
                onClick={() => setMobileOpen(false)}
              >
                {item.title}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;