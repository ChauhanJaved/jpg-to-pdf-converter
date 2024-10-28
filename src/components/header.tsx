"use client";
//External  imports
import React, { useEffect, useState } from "react";
import Link from "next/link";

//Internal imports
import { poppins, raleway } from "@/lib/font";
import { HeaderNavItems, headerNavItems } from "@/data/website-data";
import useIntersectionObserver from "@/hooks/use-intersection-observer";
import { HeaderModeToggle } from "@/components/header-mode-toggle";
import HeaderSheetMainManu from "@/components/header-sheet-main-manu";

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

  return (
    <header>
      {/* z-index 10 */}
      <div className="fixed left-0 right-0 top-0 z-[10] border-b bg-background shadow-sm">
        <div
          className={`container flex h-20 w-full items-center justify-between px-3 xl:max-w-screen-xl`}
        >
          {/* Company name/logo */}
          <Link
            onClick={() => {
              setActiveSection(HeaderNavItems.Home);
            }}
            href={`/`}
          >
            <div
              className={`${raleway.className} flex flex-col items-start justify-center border-l-[5px] border-l-primary py-1 pl-3 text-lg font-extrabold leading-tight tracking-wider`}
            >
              <p>FrameworkTeam</p>
              <p>Softwares</p>
            </div>
          </Link>
          {/*Menu */}
          <nav className="flex items-center gap-2">
            {/* Desktop Menu */}
            <ul
              className={`${poppins.className} hidden items-center gap-2 lg:flex`}
            >
              {headerNavItems.map((item, index) => (
                <li key={item}>
                  <Link
                    onClick={() => {
                      setActiveSection(item);
                    }}
                    className={`relative px-2 py-2 text-sm font-semibold uppercase before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:scale-0 before:bg-primary before:transition-transform before:duration-300 hover:before:scale-100 ${activeSection === item && "before:scale-100"}`}
                    href={index === 0 ? "/" : `/#${item}`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-row items-center gap-1">
              {/* Dark mode */}
              <HeaderModeToggle />
              {/* Mobile meun */}
              <HeaderSheetMainManu
                className="lg:hidden"
                activeSection={activeSection}
                setActiveSection={setActiveSection}
              />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
