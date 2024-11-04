import React from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ShoppingCart, User, Wrench } from "lucide-react";
import Link from "next/link";

export default function HeaderTrialUser() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="relative" variant={"ghost"} size={"icon"}>
          <User />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Trial User</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href={"/#purchase"}>
          <DropdownMenuItem>
            <ShoppingCart />
            <span>Buy License</span>
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem>
          <Wrench />
          <span>Register License</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
