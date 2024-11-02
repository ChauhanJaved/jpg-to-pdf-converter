"use client";
//External  imports
import Link from "next/link";
import { User, UserCheck } from "lucide-react";

//Internal imports
import { poppins, raleway } from "@/lib/font";
import { HeaderModeToggle } from "@/components/header-mode-toggle";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/auth-context";

export default function Header() {
  const { user } = useAuth();
  return (
    <header>
      {/* z-index 10 */}
      <div className="fixed left-0 right-0 top-0 z-[10] flex h-20 w-full items-center justify-between border-b bg-background px-3 shadow-sm">
        {/* Company name/logo */}
        <Link href={`/`}>
          <div
            className={`${raleway.className} flex flex-col items-start justify-center border-l-[5px] border-l-primary py-1 pl-3 text-lg font-extrabold leading-tight tracking-wider`}
          >
            <p>FrameworkTeam</p>
            <p>Softwares</p>
          </div>
        </Link>

        {/*Menu */}
        <nav className="flex items-center gap-2">
          <ul className={`${poppins.className} flex items-center gap-1`}>
            <li>
              {user ? (
                <Button className="relative" variant={"ghost"} size={"icon"}>
                  <UserCheck className="text-primary" />
                </Button>
              ) : (
                <Link href={"/signin"}>
                  <Button className="relative" variant={"ghost"} size={"icon"}>
                    <User />
                  </Button>
                </Link>
              )}
            </li>
            <li>
              {/* Dark mode */}
              <HeaderModeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
