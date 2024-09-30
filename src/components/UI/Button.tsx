import React from "react";
// Internal imports
import { montserrat } from "@/components/font/font";
import HeroIcons, { IconNames } from "./HeroIcons";

interface ButtonProps {
  className?: string;
  caption: string;
  handleClick: () => void;
  icon?: IconNames;
  disabled?: boolean;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      type="button"
      disabled={props.disabled}
      onClick={props.handleClick}
      className={`flex items-center justify-center ${props.className ?? ""} ${montserrat.className} rounded bg-blue-ultramarine px-10 py-3 text-lg font-medium tracking-wide text-white transition-all duration-300 hover:opacity-90 active:opacity-90 disabled:cursor-not-allowed disabled:opacity-50`}
    >
      <span>{props.caption}</span>

      {props.icon && (
        <HeroIcons
          iconName={props.icon}
          className="ml-2 h-6 w-6 font-bold"
          strokeWidth={1.5}
        />
      )}
    </button>
  );
}
