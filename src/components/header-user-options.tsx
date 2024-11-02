import React from "react";
import { Button } from "./ui/button";
import { LogOut, UserCheck } from "lucide-react";
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

export default function HeaderUserOptions() {
  const { user } = useAuth();
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
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
