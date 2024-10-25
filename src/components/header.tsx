"use client";
//External  imports
import React, { useEffect, useState } from "react";
import Link from "next/link";
import classNames from "classnames";

//Internal imports
import { montserrat } from "@/lib/font";
import {
  headerCompanyName,
  HeaderNavItems,
  headerNavItems,
} from "@/data/website-data";
import useIntersectionObserver from "../hooks/use-intersection-observer";
import { ModeToggle } from "./ui/mode-toggle";
import SheetMainManu from "./sheet-main-manu";

interface HeaderProps {
  defaultActiveSection?: string;
}

export default function Header({ defaultActiveSection = "" }: HeaderProps) {
  const [activeSection, setActiveSection] = useState<string>("");

  // Handle direct navigation with hash
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const section = hash.substring(1); // Remove the "#" from the hash
      if (headerNavItems.includes(section)) {
        setActiveSection(section);
      }
    } else {
      setActiveSection(defaultActiveSection);
    }
  }, [defaultActiveSection]);

  useIntersectionObserver(setActiveSection);

  // Returns dynamic link classes with an underline animation based on the active state.
  const linkClasses = (isActive: boolean) =>
    classNames(
      "relative px-2 py-2 text-sm font-semibold uppercase before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:scale-0 before:bg-primary before:transition-transform before:duration-300 hover:before:scale-100",
      { "before:scale-100": isActive },
    );

  return (
    <header className={`${montserrat.className}`}>
      {/* z-index 10 */}
      <div className="fixed left-0 right-0 top-0 z-[10] border-b bg-background shadow-sm">
        <div className={`container w-full px-3 xl:max-w-screen-xl`}>
          <div className="flex h-20 items-center justify-between">
            {/* company name */}
            <div
              className={`${montserrat.className} border-l-[5px] border-l-primary pl-3 text-base font-bold tracking-wider sm:text-lg md:text-xl lg:text-2xl`}
            >
              <Link
                onClick={() => {
                  setActiveSection(HeaderNavItems.Home);
                }}
                href={`/`}
              >
                {headerCompanyName}
              </Link>
            </div>
            {/* desktop menu */}
            <nav className="flex items-center gap-2">
              <ul className={`hidden items-center gap-2 lg:flex`}>
                {headerNavItems.map((item, index) => (
                  <li key={item}>
                    <Link
                      onClick={() => {
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
              <ModeToggle />
              <SheetMainManu
                className="lg:hidden"
                activeSection={activeSection}
                setActiveSection={setActiveSection}
              />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
