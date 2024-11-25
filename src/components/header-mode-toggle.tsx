//External Imports
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

//Internal Imports
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function HeaderModeToggle() {
  const { setTheme, systemTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun />
          Light Theme
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon />
          Dark Theme
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          {systemTheme === "dark" ? <Moon /> : <Sun />}
          Device Default
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
