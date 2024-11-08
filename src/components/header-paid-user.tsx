import { UserCheck } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function HeaderPaidUser() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="relative" variant={"ghost"} size={"icon"}>
          <UserCheck className="text-primary" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-50">Licensed User</PopoverContent>
    </Popover>
  );
}
