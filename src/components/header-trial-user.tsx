import React, { useState } from "react";
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

import { HeaderNavItems } from "@/data/website-data";
import LicenseRegisterDialog from "./license-register-dialog";

export default function HeaderTrialUser() {
  const [showDialog, setShowDialog] = useState(false);

  const handleRegisterClick = () => setShowDialog(true);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="relative" variant={"ghost"} size={"icon"}>
            <User />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Trail User</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link href={`/#${HeaderNavItems.Pricing}`}>
            <DropdownMenuItem>
              <ShoppingCart />
              <span>Buy License</span>
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem onClick={handleRegisterClick}>
            <Wrench />
            <span>Register License</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* License Registration Modal */}
      <LicenseRegisterDialog
        showRegisterLicenseDialog={showDialog}
        setShowRegisterLicenseDialog={setShowDialog}
      ></LicenseRegisterDialog>
    </>
  );
}
