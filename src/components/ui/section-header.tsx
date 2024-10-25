//External imports
import React from "react";
//Internal imports
import { montserrat } from "@/lib/font";

interface PropsSectionHeader {
  caption: string;
  desc?: string;
  className?: string;
  element?: "h1" | "h2";
}
export default function SectionHeader(props: PropsSectionHeader) {
  const Element = props.element || "h1";
  return (
    <div className={`${props.className} ${montserrat.className}`}>
      {React.createElement(
        Element,
        {
          className: `text-base flex flex-col items-center text-center sm:text-lg md:text-xl lg:text-2xl font-bold   uppercase`,
        },
        <>
          {props.caption}

          <span className="relative w-[120px] pt-[15px] text-center">
            <span className="absolute bottom-[1px] block h-[1px] w-[120px] bg-muted-foreground"></span>
            <span className="absolute bottom-0 left-[calc(50%-20px)] block h-[3px] w-[40px] bg-primary"></span>
          </span>
        </>,
      )}
      {props.desc && (
        <p
          className={`pt-3 text-center text-sm font-normal sm:text-base md:text-lg lg:text-xl`}
        >
          {props.desc}
        </p>
      )}
    </div>
  );
}
