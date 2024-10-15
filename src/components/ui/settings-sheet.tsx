import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
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
import { PageOrientationEnum } from "@/lib/pdf-lib";

interface SettingsSheetProps {
  disabled?: boolean;
}

function capitalizeFirstLetter(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export default function SettingsSheet({
  disabled = false,
}: SettingsSheetProps) {
  const [open, setOpen] = useState(false);
  const openSheet = () => {
    setOpen(true);
  };
  const [orientation, setOrientation] = useState(PageOrientationEnum.landscape);
  const handleOrientationChange = (value: PageOrientationEnum) => {
    setOrientation(value);
  };
  return (
    <>
      <ButtonToolbar
        handleOnClick={openSheet}
        disabled={disabled}
        caption="Settings"
        icon={Settings}
      ></ButtonToolbar>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Settings</SheetTitle>
          </SheetHeader>
          <div className="mt-3 flex flex-col border px-3 py-4 shadow-sm">
            <div className="flex flex-col space-y-3">
              <Label htmlFor="orientation">Page Orientation</Label>
              <Select
                value={orientation}
                onValueChange={handleOrientationChange}
              >
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
          </div>
          <SheetFooter className="mt-3">
            <SheetClose asChild>
              <Button>OK</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}
