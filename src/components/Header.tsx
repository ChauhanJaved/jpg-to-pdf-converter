"use client";
//External  imports
import React, { useEffect, useState } from "react";
import Link from "next/link";
import classNames from "classnames";

//Internal imports
import { montserrat } from "@/components/font/font";
import HeroIcons, { IconNames } from "./UI/HeroIcons";
import {
  headerCompanyName,
  HeaderNavItems,
  headerNavItems,
} from "@/data/website-data";
import useIntersectionObserver from "./hooks/useIntersectionObserver";

interface HeaderProps {
  defaultActiveSection?: string;
}

export default function Header({ defaultActiveSection = "" }: HeaderProps) {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Listens for screen size changes below 1024px and closes the menu when the threshold is crossed.
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    const handleChange = () => toggleMenu(false);
    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  });

  // Handle direct navigation with hash
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const section = hash.substring(1); // Remove the "#" from the hash
      if (headerNavItems.includes(section)) {
        setActiveSection(section);
      } else {
        setActiveSection(HeaderNavItems.Portfolio);
      }
    } else {
      setActiveSection(defaultActiveSection);
    }
  }, [defaultActiveSection]);

  useIntersectionObserver(setActiveSection);

  // Toggles the menu state and controls body scroll by adding/removing "overflow-hidden" class based on the menu state.
  const toggleMenu = (isOpen: boolean) => {
    setIsMenuOpen(isOpen);
    document.body.classList.toggle("overflow-hidden", isOpen);
  };

  // Returns dynamic link classes with an underline animation based on the active state.
  const linkClasses = (isActive: boolean) =>
    classNames(
      "relative ml-2 px-2 py-2 text-sm font-semibold uppercase before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:scale-0 before:bg-blue-ultramarine before:transition-transform before:duration-300 hover:before:scale-100",
      { "before:scale-100": isActive },
    );

  return (
    <header className={`${montserrat.className}`}>
      {/* z-index 999 */}
      {/* Mobile meun */}
      <nav>
        <ul
          className={classNames(
            "fixed bottom-[0] top-[0] z-[999] w-64 bg-white pt-3 text-blue-dark-imperial shadow-[0_0_18px_rgba(0,0,0,0.1)] transition-all duration-300",
            {
              "left-0 opacity-100": isMenuOpen,
              "-left-64 opacity-0": !isMenuOpen,
            },
          )}
        >
          {headerNavItems.map((item) => (
            <li key={item} className="mt-4 lg:mt-0">
              <Link
                onClick={() => {
                  toggleMenu(false);
                  setActiveSection(item);
                }}
                className={linkClasses(activeSection === item)}
                href={`/#${item}`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* z-index 998 */}
      <div className="fixed left-0 right-0 top-0 z-[998] bg-white shadow-[0_0_18px_rgba(0,0,0,0.1)]">
        <div
          className={`container mx-auto w-full text-blue-dark-imperial xl:max-w-screen-xl`}
        >
          <div className="mx-auto flex h-20 w-11/12 items-center justify-between md:w-full">
            {/* company name */}
            <h1
              className={`${montserrat.className} border-l-[5px] border-l-blue-ultramarine pl-3 text-2xl font-bold tracking-wider sm:text-3xl lg:text-4xl`}
            >
              <Link
                onClick={() => {
                  setActiveSection(HeaderNavItems.Home);
                }}
                href={`/`}
              >
                {headerCompanyName}
              </Link>
            </h1>
            {/* desktop menu */}
            <nav className="flex">
              <ul className={`hidden lg:flex lg:w-auto lg:pt-0 lg:opacity-100`}>
                {headerNavItems.map((item, index) => (
                  <li key={item} className="mt-4 lg:mt-0">
                    <Link
                      onClick={() => {
                        toggleMenu(false);
                        setActiveSection(item);
                      }}
                      className={linkClasses(activeSection === item)}
                      href={index === 0 ? "/" : `/#${item}`}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
              <HeroIcons
                iconName={IconNames.Bars3}
                className={classNames("size-9 cursor-pointer lg:hidden", {
                  hidden: isMenuOpen,
                })}
                onClick={() => {
                  toggleMenu(true);
                }}
              />
              <HeroIcons
                iconName={IconNames.XMark}
                className={classNames("size-9 cursor-pointer lg:hidden", {
                  hidden: !isMenuOpen,
                })}
                onClick={() => {
                  toggleMenu(false);
                }}
              />
            </nav>
          </div>
        </div>
      </div>
      {/* z-index 997 */}
      {/* this div is to lock background in case of mobile menu activated */}
      <div
        onClick={() => {
          toggleMenu(false);
        }}
        className={classNames(
          `fixed left-0 top-0 z-[997] h-full w-full bg-slate-950 text-3xl opacity-60`,
          { hidden: !isMenuOpen },
        )}
      ></div>
    </header>
  );
}
