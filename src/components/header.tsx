"use client";
//External  imports
import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { EllipsisVertical, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

//Internal imports
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
  MenubarRadioGroup,
  MenubarRadioItem,
} from "@/components/ui/menubar";
import { capitalizeWords } from "@/lib/utils";
import { raleway } from "@/lib/font";
import { HeaderNavItems, headerNavItems } from "@/data/website-data";
import { useActiveSection } from "@/context/active-section-context";
import { usePageOnTop } from "@/context/page-on-top-context";

interface HeaderProps {
  defaultActiveSection?: string;
}
export default function Header({ defaultActiveSection = "" }: HeaderProps) {
  const { activeSection, setActiveSection } = useActiveSection();
  const { pageOnTop } = usePageOnTop();
  const { setTheme, systemTheme, theme } = useTheme();

  function getManuItem(item: string) {
    return capitalizeWords(item);
  }

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  // Handle direct navigation with hash
  useEffect(() => {
    const hash = window.location.hash;
    const pathName = window.location.pathname;
    if (hash) {
      const section = hash.substring(1); // Remove the "#" from the hash
      if (headerNavItems.includes(section)) {
        setActiveSection(section);
      }
    } else {
      if (pathName === "/") {
        setActiveSection(HeaderNavItems.Home);
      } else {
        setActiveSection("");
      }
    }
  }, [defaultActiveSection, setActiveSection]);
  function getCurrentTheme() {
    if (theme === "system") {
      return systemTheme;
    } else {
      return theme;
    }
  }
  return (
    <Fragment>
      <header>
        <nav
          className={`${activeSection === HeaderNavItems.Home && pageOnTop ? "bg-transparent" : "bg-background border-b shadow-sm"} fixed top-0 right-0 left-0 z-40 flex h-20 w-full items-center justify-between px-3`}
          aria-label="Main navigation"
        >
          {/* Box-1 for company name/logo */}
          <Link
            className={`${raleway.className} border-l-primary flex flex-col items-start justify-center border-l-[5px] py-1 pl-3 leading-tight font-extrabold tracking-wider`}
            href={`/#${HeaderNavItems.Home}`}
            onClick={() => {
              setActiveSection(HeaderNavItems.Home);
            }}
            aria-label="Go to home page"
          >
            <span className="flex flex-col">
              <span>FrameworkTeam</span>
              <span>Softwares</span>
            </span>
          </Link>
          {/* Box-2 for menu */}
          <div className="flex items-center justify-center">
            {/* Desktop menu */}
            <ul
              role="menubar"
              className="mr-3 hidden items-center justify-center gap-3 md:flex"
            >
              {headerNavItems.map((item) => (
                <li key={item} role="none">
                  <Link
                    role="menuitem"
                    aria-label={`Go to ${getManuItem(item)} section`}
                    onClick={() => {
                      setActiveSection(item);
                    }}
                    className={`before:bg-primary relative px-2 py-2 font-semibold before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:scale-0 before:transition-transform before:duration-300 hover:before:scale-100 ${activeSection === item && "before:scale-100"}`}
                    href={`/#${item}`}
                  >
                    {getManuItem(item)}
                  </Link>
                </li>
              ))}
            </ul>
            <Menubar>
              {/* Theam toggle---------------------- */}
              <MenubarMenu>
                {mounted ? (
                  <MenubarTrigger
                    aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
                  >
                    {getCurrentTheme() === "dark" ? <Moon /> : <Sun />}
                  </MenubarTrigger>
                ) : (
                  <MenubarTrigger aria-label={`Change theme`}>
                    <Sun />
                  </MenubarTrigger>
                )}

                <MenubarContent>
                  <MenubarRadioGroup value={theme}>
                    <MenubarRadioItem
                      onClick={() => setTheme("light")}
                      value="light"
                    >
                      Light Theme
                    </MenubarRadioItem>
                    <MenubarRadioItem
                      onClick={() => setTheme("dark")}
                      value="dark"
                    >
                      Dark Theme
                    </MenubarRadioItem>
                    <MenubarRadioItem
                      onClick={() => setTheme("system")}
                      value="system"
                    >
                      Device Default
                    </MenubarRadioItem>
                  </MenubarRadioGroup>
                </MenubarContent>
              </MenubarMenu>
              {/* Mobile manu */}
              <MenubarMenu>
                <MenubarTrigger className="md:hidden" aria-label="Open menu">
                  <EllipsisVertical />
                </MenubarTrigger>
                <MenubarContent>
                  {headerNavItems.map((item) => (
                    <Link
                      key={item}
                      onClick={() => {
                        setActiveSection(item);
                      }}
                      href={`/#${item}`}
                    >
                      <MenubarItem>{getManuItem(item)}</MenubarItem>
                    </Link>
                  ))}
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </nav>
      </header>
    </Fragment>
  );
}
