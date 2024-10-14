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
        onClick={handleOnClick}
        className={`${className}`}
      >
        {Icon && (
          <Icon className="h-5 w-5 sm:mr-2 sm:h-6 sm:w-6 md:h-6 md:w-6" />
        )}
        <span className="hidden sm:block sm:text-base md:text-lg">
          {caption}
        </span>{" "}
        {/* Use the caption prop here */}
      </Button>
      <span className="mt-1 text-xs sm:hidden">{caption}</span>
    </div>
  );
}
