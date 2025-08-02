//External imports
import { poppins } from "@/lib/font";
import React from "react";
//Internal imports

interface PropsSectionHeader {
  caption: string;
  desc?: string;
  className?: string;
  element?: "h1" | "h2";
}
export default function SectionHeader(props: PropsSectionHeader) {
  const Element = props.element || "h1";
  return (
    <div className={`${props.className}`}>
      {React.createElement(
        Element,
        {
          className: `${Element === "h1" ? "text-4xl font-bold tracking-tight lg:text-5xl" : "text-3xl font-semibold tracking-tight"} flex flex-col items-center text-center  ${poppins.className}`,
        },
        <>{props.caption[0].toUpperCase() + props.caption.slice(1)}</>,
      )}
      {props.desc && (
        <p className={`mt-3 text-center text-lg font-medium lg:mx-40`}>
          {props.desc}
        </p>
      )}
    </div>
  );
}
