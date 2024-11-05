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
import { useUser } from "@/context/user-context";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function HeaderTrialUser() {
  const { setUserStatus } = useUser(); // Access user context
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [licenseKey, setLicenseKey] = useState("");
  const [error, setError] = useState("");

  const handleRegisterClick = () => setIsDialogOpen(true);

  const handleLicenseValidation = async () => {
    try {
      // Replace with your license key validation API call or Firebase function
      const isValid = await validateLicenseKey(licenseKey); // mock function for validation
      if (isValid) {
        setUserStatus("paid");
        setIsDialogOpen(false); // Close dialog
      } else {
        setError("License key is not valid. Please try again.");
      }
    } catch (error) {
      setError(`An error occurred. Please try again later. ${error}`);
    }
  };

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
          <Link href={"/#purchase"}>
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
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Register License</DialogTitle>
            <DialogDescription className="sr-only">
              Enter license key
            </DialogDescription>
          </DialogHeader>
          <Input
            placeholder="Enter license key"
            value={licenseKey}
            onChange={(e) => {
              setLicenseKey(e.target.value);
              setError("");
            }}
          />
          {error && <p className="text-destructive">{error}</p>}
          <DialogFooter>
            <Button onClick={handleLicenseValidation}>Validate License</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

// Mock function for license key validation
const validateLicenseKey = async (key: string): Promise<boolean> => {
  // Implement your license validation logic here
  // e.g., call Firebase or FastSpring
  return key === "VALID_KEY"; // Replace with actual validation
};
