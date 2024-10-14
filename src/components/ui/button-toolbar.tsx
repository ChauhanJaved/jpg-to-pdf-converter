import React from "react";
import { Button } from "./button"; // Ensure this import is correct

interface ButtonToolbarProps {
  caption?: string;
  handleOnClick?: () => void;
  disabled?: boolean;
  className?: string;
  icon?: React.ElementType; // Icon can be any React node
}

export default function ButtonToolbar({
  caption = "",
  handleOnClick,
  disabled = false,
  className = "",
  icon: Icon,
}: ButtonToolbarProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Button
        disabled={disabled}
        className={`${className}`}
        onClick={handleOnClick}
      >
        {Icon && <Icon className="h-6 w-6 sm:mr-2" />}
        <span className="hidden text-base sm:block">{caption}</span>{" "}
        {/* Use the caption prop here */}
      </Button>
      <span className="mt-1 text-xs sm:hidden">{caption}</span>
    </div>
  );
}
