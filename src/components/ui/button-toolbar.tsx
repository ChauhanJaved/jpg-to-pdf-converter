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
        className={`${className} h-12 w-12 p-0 sm:h-9 sm:w-auto sm:px-4 sm:py-2`}
        onClick={handleOnClick}
      >
        {Icon && <Icon className="sm:mr-2 sm:h-6 sm:w-6" />}
        <span className="hidden text-base sm:block">{caption}</span>{" "}
        {/* Use the caption prop here */}
      </Button>
      <span className="mt-1 text-xs sm:hidden">{caption}</span>
    </div>
  );
}
