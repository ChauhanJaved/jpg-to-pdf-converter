import React, { Fragment, useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ButtonToolbar from "./button-toolbar";
import { Settings } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MarginEnum, PageOrientationEnum, PageSizeEnum } from "@/lib/pdf-lib";

interface SettingsSheetProps {
  disabled?: boolean;
  orientation: PageOrientationEnum;
  pageSize: PageSizeEnum;
  margin: MarginEnum;
  onOrientationChange: (orientation: PageOrientationEnum) => void;
  onPageSizeChange: (pageSize: PageSizeEnum) => void;
  onMarginChange: (margin: MarginEnum) => void;
}

function capitalizeFirstLetter(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export default function SettingsSheet({
  disabled = false,
  orientation,
  pageSize,
  margin,
  onOrientationChange,
  onPageSizeChange,
  onMarginChange,
}: SettingsSheetProps) {
  const [open, setOpen] = useState(false);
  const openSheet = () => {
    setOpen(true);
  };

  return (
    <Fragment>
      <ButtonToolbar
        handleOnClick={openSheet}
        disabled={disabled}
        caption="Settings"
        icon={Settings}
      ></ButtonToolbar>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild></SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Settings</SheetTitle>
          </SheetHeader>
          <div className="mt-3 flex flex-col rounded border px-3 py-4 shadow-sm">
            <div className="flex flex-col space-y-2">
              <Label htmlFor="orientation">Page Orientation</Label>
              <Select value={orientation} onValueChange={onOrientationChange}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Select Page orientation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value={PageOrientationEnum.portrait}>
                      {capitalizeFirstLetter(PageOrientationEnum.portrait)}
                    </SelectItem>
                    <SelectItem value={PageOrientationEnum.landscape}>
                      {capitalizeFirstLetter(PageOrientationEnum.landscape)}
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="mt-5 flex flex-col space-y-2">
              <Label htmlFor="size">Page Size</Label>
              <Select value={pageSize} onValueChange={onPageSizeChange}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Select Page Size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value={PageSizeEnum.Fit}>
                      {capitalizeFirstLetter(PageSizeEnum.Fit)}
                    </SelectItem>
                    <SelectItem value={PageSizeEnum.A4}>
                      {capitalizeFirstLetter(PageSizeEnum.A4)}
                    </SelectItem>
                    <SelectItem value={PageSizeEnum.USLetter}>
                      {capitalizeFirstLetter(PageSizeEnum.USLetter)}
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="mt-5 flex flex-col space-y-2">
              <Label htmlFor="size">Margin</Label>
              <Select value={margin} onValueChange={onMarginChange}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Select Margin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value={MarginEnum.None}>
                      {capitalizeFirstLetter(MarginEnum.None)}
                    </SelectItem>
                    <SelectItem value={MarginEnum.Small}>
                      {capitalizeFirstLetter(MarginEnum.Small)}
                    </SelectItem>
                    <SelectItem value={MarginEnum.Large}>
                      {capitalizeFirstLetter(MarginEnum.Large)}
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <SheetFooter className="mt-3">
            <SheetClose asChild>
              <Button>OK</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </Fragment>
  );
}
