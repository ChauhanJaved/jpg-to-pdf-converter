import React from "react";
import { Button } from "./ui/button";
import { LogOut, ShoppingCart, UserCheck } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/context/auth-context";
import { auth } from "../../firebaseConfig";
import { signOut } from "firebase/auth";
import Link from "next/link";

export default function HeaderUserOptions() {
  const { user } = useAuth();
  const creationDate = new Date(
    auth.currentUser?.metadata.creationTime || Date.now(),
  );
  const calculateTrialDaysLeft = (creationDate: Date) => {
    const now = new Date();
    const diffTime = now.getTime() - creationDate.getTime();
    const diffDays = Math.ceil(14 - diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0; // Return 0 if trial period has expired
  };
  const daysLeft = calculateTrialDaysLeft(creationDate);
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("Successfully logged out");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="relative" variant={"ghost"} size={"icon"}>
          <UserCheck className="text-primary" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{user?.displayName}</DropdownMenuLabel>
        <DropdownMenuLabel>
          {daysLeft > 0
            ? `Trial ends in ${daysLeft} days.`
            : `Trial has ended.`}
        </DropdownMenuLabel>

        <DropdownMenuSeparator />
        <Link href={"/#purchase"}>
          <DropdownMenuItem>
            <ShoppingCart />
            <span>Buy License</span>
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
