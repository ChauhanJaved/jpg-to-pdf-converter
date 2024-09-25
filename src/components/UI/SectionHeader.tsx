//External imports
import React from "react";
//Internal imports
import { montserrat } from "@/components/font/font";

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
          className: `text flex flex-col items-center text-center md:text-3xl text-2xl font-bold  text-blue-dark-imperial uppercase`,
        },
        <>
          {props.caption}

          <span className="relative w-[120px] pt-[15px] text-center">
            <span className="absolute bottom-[1px] block h-[1px] w-[120px] bg-black-200"></span>
            <span className="absolute bottom-0 left-[calc(50%-20px)] block h-[3px] w-[40px] bg-blue-ultramarine"></span>
          </span>
        </>,
      )}
      {props.desc && (
        <p className={`pt-3 text-center text-lg font-semibold`}>{props.desc}</p>
      )}
    </div>
  );
}
