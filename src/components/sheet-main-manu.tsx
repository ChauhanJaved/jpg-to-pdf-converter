import React, { Fragment, useState } from "react";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import classNames from "classnames";

import { Menu } from "lucide-react";
import Link from "next/link";
import { headerNavItems } from "@/data/website-data";
// Returns dynamic link classes with an underline animation based on the active state.
const linkClasses = (isActive: boolean) =>
  classNames(
    "relative ml-2 px-2 py-2 text-sm font-semibold uppercase before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:scale-0 before:bg-primary before:transition-transform before:duration-300 hover:before:scale-100",
    { "before:scale-100": isActive },
  );
interface SheetMainManuProps {
  activeSection: string;
  setActiveSection: (value: string) => void;
}
export default function SheetMainManu({
  activeSection,
  setActiveSection,
}: SheetMainManuProps) {
  const [open, setOpen] = useState(false);
  const openSheet = () => {
    setOpen(true);
  };

  return (
    <Fragment>
      <Button size={"icon"} variant={"outline"} onClick={openSheet}>
        <Menu />
      </Button>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild></SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="hidden">Main Manu</SheetTitle>
            <SheetDescription className="hidden">Main Manu</SheetDescription>
          </SheetHeader>
          <nav>
            <ul>
              {headerNavItems.map((item) => (
                <li key={item} className="mt-4 lg:mt-0">
                  <SheetClose asChild>
                    <Link
                      onClick={() => {
                        setActiveSection(item);
                      }}
                      className={linkClasses(activeSection === item)}
                      href={`/#${item}`}
                    >
                      {item}
                    </Link>
                  </SheetClose>
                </li>
              ))}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </Fragment>
  );
}
