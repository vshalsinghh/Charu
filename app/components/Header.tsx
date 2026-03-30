"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const NAV_LINKS = [
    { name: "About Us", path: "/about" },
    { name: "Capabilities", path: "/capabilities" },
    { name: "Contact Us", path: "/contact" },
  ];

  const isActive = (path: string) =>
    pathname === path
      ? "border-b-2 border-white text-white"
      : "border-b-2 border-transparent hover:border-white hover:text-gray-300";
 
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header className="bg-black shadow-md sticky top-0 z-50 text-white">
      
      {/* Top Bar */}
      <div className="flex justify-between items-center px-6 py-4 md:px-10">

        <div className="text-xl font-bold tracking-wide">
          <Link href="/">CHARU</Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-lg font-medium">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`${isActive(link.path)} transition-colors duration-300 pb-1`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 z-60 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Dropdown */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black shadow-lg 
        transform transition-transform duration-300 ease-in-out 
        md:hidden z-40
        ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex flex-col gap-6 px-6 py-10 text-lg font-medium">
          {NAV_LINKS.map((link, index) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setIsOpen(false)}
              style={{
                transitionDelay: isOpen ? `${index * 80}ms` : "0ms",
              }}
              className={`transition-all duration-300 pb-1
                ${isActive(link.path)}
                ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"}
              `}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;