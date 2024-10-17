"use client";
import React, { useEffect, useRef, useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const router = useRouter();
  const navRef = useRef(null);

  const scrollRef = useRef(0);
  const [visible, setVisible] = useState(false);

  const closeMenuAndNavigate = (href) => {
    setToggleMenu(false);
    router.push(href);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setToggleMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY - scrollRef.current > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollRef]);

  const Menu = () =>
    links.map(({ href, label }) => (
      <li
        key={`${href}${label}`}
        className="shrink-0 py-6 sm:py-1 sm:px-2 sm:hover:scale-105 sm:transition sm:hover:bg-gray-200/70 sm:rounded-lg"
      >
        <Link
          href={href}
          onClick={() => closeMenuAndNavigate(href)}
          className="text-xl sm:text-sm md:text-base"
        >
          {label}
        </Link>
      </li>
    ));

  return (
    <header
      className={`fixed z-10 top-0 right-0 sm:w-full transition-all duration-300 ${
        visible ? "sm:bg-gray-300/30 sm:backdrop-blur-md" : "sm:bg-none"
      }`}
    >
      <div>
        <nav ref={navRef} className="pr-4 py-3">
          <ul className="hidden justify-end gap-4 text-xs text-white font-bold sm:flex">
            <Menu />
          </ul>
          <div className="flex sm:hidden">
            {toggleMenu ? (
              <RiCloseLine
                color="#000"
                size={22}
                className="z-20"
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <RiMenu3Line
                color="#fff"
                size={22}
                onClick={() => setToggleMenu(true)}
              />
            )}
            <div
              className={`flex h-screen w-[75vw] z-10 flex-col text-orange-950 text-center bg-gray-500 px-4 absolute top-0 right-0 shadow transition transform ease-in-out duration-[400ms] ${
                toggleMenu ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <ul className="divide-y-4 w-full mt-10">
                <Menu />
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

const links = [
  { href: "/", label: "Home" },
  { href: "/", label: "Subpage 1" },
  { href: "/", label: "Subpage 2" },
  { href: "/", label: "Subpage 3" },
  { href: "/", label: "Subpage 4" },
];

export default Header;
