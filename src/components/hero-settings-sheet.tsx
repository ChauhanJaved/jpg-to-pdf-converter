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
  SheetDescription,
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
import {
  useSettings,
  PageOrientationEnum,
  MarginEnum,
  PageSizeEnum,
} from "@/context/settings-context";
import { Checkbox } from "@/components/ui/check-box";

function capitalizeFirstLetter(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export default function HeroSettingsSheet() {
  const { settings, updateSettings } = useSettings();
  // Handlers
  const handleOrientationChange = (value: PageOrientationEnum) => {
    updateSettings({ orientation: value });
  };
  const handlePageSizeChange = (value: PageSizeEnum) => {
    updateSettings({ pageSize: value });
  };

  const handleMarginChange = (value: MarginEnum) => {
    updateSettings({ margin: value });
  };

  const handleMergeAllImagesChange = (value: boolean) => {
    updateSettings({ mergeAllImages: value });
  };
  const [open, setOpen] = useState(false);
  const openSheet = () => {
    setOpen(true);
  };

  return (
    <Fragment>
      <HeroButtonToolbar
        handleOnClick={openSheet}
        caption="Settings"
        icon={Settings}
      ></HeroButtonToolbar>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild></SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Settings</SheetTitle>
            <SheetDescription className="sr-only">
              Change conversion settings
            </SheetDescription>
          </SheetHeader>
          <div className="mt-3 flex flex-col rounded border px-3 py-4 shadow-sm">
            <div className="flex flex-col space-y-2">
              <Label htmlFor="orientation">Page Orientation</Label>
              <Select
                value={settings.orientation}
                onValueChange={handleOrientationChange}
              >
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
              <Select
                value={settings.pageSize}
                onValueChange={handlePageSizeChange}
              >
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
              <Select
                value={settings.margin}
                onValueChange={handleMarginChange}
              >
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
                checked={settings.mergeAllImages}
                onCheckedChange={handleMergeAllImagesChange}
              />
              <Label htmlFor="imagepreview">Merge all JPG</Label>
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
