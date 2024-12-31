//External Imports
import React, { Fragment } from "react";
import { EllipsisVertical } from "lucide-react";
import Link from "next/link";

//Internal Imports

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { headerNavItems, hrefValue } from "@/data/website-data";
import { capitalizeWords } from "@/lib/utils";
import { Button } from "./ui/button";

interface HeaderSheetMainManuProps {
  className?: string;
  activeSection: string;
  setActiveSection: (value: string) => void;
}
export default function HeaderSheetMainManu({
  setActiveSection,
  className,
}: HeaderSheetMainManuProps) {
  return (
    <Fragment>
      <Menubar className={`${className} m-0 p-0`}>
        <MenubarMenu>
          <MenubarTrigger>
            <Button variant={"ghost"} size={"icon"}>
              <EllipsisVertical />
            </Button>
          </MenubarTrigger>
          <MenubarContent className="border">
            {headerNavItems.map((item) => (
              <Link
                key={item}
                onClick={() => {
                  setActiveSection(item);
                }}
                href={hrefValue(item)}
              >
                <MenubarItem>{capitalizeWords(item)}</MenubarItem>
              </Link>
            ))}
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Theam</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Light Theme</MenubarItem>
                <MenubarItem>Dark Theme</MenubarItem>
                <MenubarItem>Device Default</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </Fragment>
  );
}
