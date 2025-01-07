"use client";

//External  imports
import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { EllipsisVertical, Sun, Moon, User, UserCheck } from "lucide-react";
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
import { HeaderNavItems, headerNavItems, hrefValue } from "@/data/website-data";
import { useUser } from "@/context/user-context";
import { useActiveSection } from "@/context/active-section-context";
import LicenseRegisterDialog from "@/components/license-register-dialog";
import { useToast } from "@/hooks/use-toast";

interface HeaderProps {
  defaultActiveSection?: string;
}
export default function Header({ defaultActiveSection = "" }: HeaderProps) {
  const { activeSection, setActiveSection } = useActiveSection();
  const { userStatus } = useUser();
  const [showDialog, setShowDialog] = useState(false);
  const handleRegisterClick = () => setShowDialog(true);
  const { setTheme, systemTheme, theme } = useTheme();
  const { toast } = useToast();

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
      if (
        pathName === `/${HeaderNavItems.Desktop.toLocaleLowerCase()}.html` ||
        pathName === `/${HeaderNavItems.Desktop.toLocaleLowerCase()}`
      ) {
        setActiveSection(HeaderNavItems.Desktop);
      } else if (pathName === `/`) {
        setActiveSection(HeaderNavItems.Home);
      }
    }
  }, [defaultActiveSection, setActiveSection]);

  function getManuItem(item: string) {
    if (item === HeaderNavItems.Desktop) {
      return `${capitalizeWords(HeaderNavItems.Desktop)} App`;
    } else {
      return capitalizeWords(item);
    }
  }
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
        <nav className="fixed left-0 right-0 top-0 z-50 flex h-20 w-full items-center justify-between border-b bg-background px-3 shadow-sm">
          {/* Box-1 for company name/logo */}
          <Link
            className={`${raleway.className} flex flex-col items-start justify-center border-l-[5px] border-l-primary py-1 pl-3 text-sm font-extrabold leading-tight tracking-wider xs:text-lg`}
            href={`/#${HeaderNavItems.Home}`}
            onClick={() => setActiveSection(HeaderNavItems.Home)}
          >
            <p>FrameworkTeam</p>
            <p>Softwares</p>
          </Link>
          {/* Box-2 for menu */}
          <ul className="flex items-center justify-center">
            {/* Desktop menu */}
            <div className="mr-3 hidden items-center justify-center gap-3 md:flex">
              {headerNavItems.map((item) => (
                <li key={item}>
                  <Link
                    onClick={() => {
                      setActiveSection(item);
                    }}
                    className={`relative px-2 py-2 text-base font-semibold before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:scale-0 before:bg-primary before:transition-transform before:duration-300 hover:before:scale-100 ${activeSection === item && "before:scale-100"}`}
                    href={hrefValue(item)}
                  >
                    {getManuItem(item)}
                  </Link>
                </li>
              ))}
            </div>
            <Menubar>
              {/* User status---------------------- */}
              <li>
                {userStatus === "paid" ? (
                  <MenubarMenu>
                    <MenubarTrigger
                      onClick={() => {
                        toast({
                          title: "You are a Licensed User",
                          description:
                            "Thank you for purchasing a license! You have full access to all features.",
                        });
                      }}
                    >
                      <UserCheck />
                    </MenubarTrigger>
                  </MenubarMenu>
                ) : (
                  // Trial User
                  <MenubarMenu>
                    <MenubarTrigger>
                      <User />
                    </MenubarTrigger>
                    <MenubarContent>
                      <Link
                        href={`/#${HeaderNavItems.Pricing}`}
                        onClick={() => setActiveSection(HeaderNavItems.Pricing)}
                      >
                        <MenubarItem>Buy License</MenubarItem>
                      </Link>
                      <MenubarItem onClick={handleRegisterClick}>
                        Register License...
                      </MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                )}
              </li>
              {/* Theam toggle---------------------- */}
              <li className={``}>
                <MenubarMenu>
                  <MenubarTrigger>
                    {getCurrentTheme() === "dark" ? <Moon /> : <Sun />}
                  </MenubarTrigger>

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
              </li>
              {/* Mobile manu */}
              <li className="md:hidden">
                <MenubarMenu>
                  <MenubarTrigger className={``}>
                    <EllipsisVertical />
                  </MenubarTrigger>
                  <MenubarContent>
                    {headerNavItems.map((item) => (
                      <Link
                        key={item}
                        onClick={() => {
                          setActiveSection(item);
                        }}
                        href={hrefValue(item)}
                      >
                        <MenubarItem>{getManuItem(item)}</MenubarItem>
                      </Link>
                    ))}
                  </MenubarContent>
                </MenubarMenu>
              </li>
            </Menubar>
          </ul>
        </nav>
      </header>
      {/* License Registration Modal */}
      <LicenseRegisterDialog
        showRegisterLicenseDialog={showDialog}
        setShowRegisterLicenseDialog={setShowDialog}
      ></LicenseRegisterDialog>
    </Fragment>
  );
}
