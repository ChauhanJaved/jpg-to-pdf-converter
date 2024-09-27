// External imports
import Link from "next/link";

// Internal imports
import { montserrat } from "@/components/font/font";
import HeroIcons, { IconNames } from "./HeroIcons";

interface ButtonProps {
  className?: string;
  caption: string;
  link: string;
  icon?: IconNames;
}
export default function Button(props: ButtonProps) {
  return (
    <Link
      href={props.link}
      className={`flex items-center justify-center ${props.className} ${montserrat.className} rounded bg-blue-ultramarine px-10 py-3 text-lg font-medium tracking-wide text-white transition-all duration-300 hover:opacity-90 active:opacity-90`}
    >
      <span className="">{props.caption}</span>

      {props.icon && (
        <HeroIcons
          iconName={props.icon}
          className="ml-2 size-6 font-bold"
          strokeWidth={1.5}
        />
      )}
    </Link>
  );
}
