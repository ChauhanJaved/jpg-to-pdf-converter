//External Imports
import React, { Fragment, useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";

//Internal Imports
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { headerNavItems } from "@/data/website-data";
import { poppins } from "@/lib/font";

interface HeaderSheetMainManuProps {
  className: string;
  activeSection: string;
  setActiveSection: (value: string) => void;
}
export default function HeaderSheetMainManu({
  className,
  setActiveSection,
}: HeaderSheetMainManuProps) {
  const [open, setOpen] = useState(false);
  const openSheet = () => {
    setOpen(true);
  };

  return (
    <Fragment>
      <Button
        size={"icon"}
        variant={"ghost"}
        onClick={openSheet}
        className={className}
      >
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
            <ul className={`${poppins.className}`}>
              {headerNavItems.map((item) => (
                <li key={item} className="">
                  <SheetClose asChild>
                    <Link
                      onClick={() => {
                        setActiveSection(item);
                      }}
                      href={`/#${item}`}
                    >
                      <Button variant={"ghost"}>{item}</Button>
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
