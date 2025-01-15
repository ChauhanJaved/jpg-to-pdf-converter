//Extarnal Imports
import React, { Fragment, useState } from "react";
import { Settings } from "lucide-react";

//Internal Imports
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
import HeroButtonToolbar from "@/components/hero-button-toolbar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MarginEnum, PageOrientationEnum, PageSizeEnum } from "@/lib/pdf-lib";
import { Checkbox } from "@/components/ui/check-box";

function capitalizeFirstLetter(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

interface HeroSettingsSheetProps {
  disabled?: boolean;
  orientation: PageOrientationEnum;
  pageSize: PageSizeEnum;
  margin: MarginEnum;
  mergeAllImages: boolean;
  onOrientationChange: (orientation: PageOrientationEnum) => void;
  onPageSizeChange: (pageSize: PageSizeEnum) => void;
  onMarginChange: (margin: MarginEnum) => void;
  onMergeAllImagesChange: (shouldMerge: boolean) => void;
}

export default function HeroSettingsSheet({
  disabled = false,
  orientation,
  pageSize,
  margin,
  mergeAllImages,
  onOrientationChange,
  onPageSizeChange,
  onMarginChange,
  onMergeAllImagesChange,
}: HeroSettingsSheetProps) {
  const [open, setOpen] = useState(false);
  const openSheet = () => {
    setOpen(true);
  };

  return (
    <Fragment>
      <HeroButtonToolbar
        handleOnClick={openSheet}
        disabled={disabled}
        caption="Settings"
        icon={Settings}
      ></HeroButtonToolbar>
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
                <SelectTrigger className="w-[150px]">
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
                <SelectTrigger className="w-[150px]">
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
                <SelectTrigger className="w-[150px]">
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
            <div className="mt-7 flex items-center">
              <Checkbox
                id="imagepreview"
                className="mr-1"
                checked={mergeAllImages}
                onCheckedChange={onMergeAllImagesChange}
              />
              <Label htmlFor="imagepreview">Merge all JPG</Label>
            </div>
          </div>
          <SheetFooter className="mt-3">
            <Button>Restore Default</Button>
            <SheetClose asChild>
              <Button>Save</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </Fragment>
  );
}
