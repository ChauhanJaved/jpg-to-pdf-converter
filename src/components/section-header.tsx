//External imports
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
          className: `${Element === "h1" ? "text-4xl font-bold tracking-tight lg:text-5xl" : "text-3xl font-semibold tracking-tight"} flex flex-col items-center text-center text-gray-900 dark:text-gray-100`,
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
          className={`pt-3 text-center text-lg font-medium text-gray-700 dark:text-gray-300`}
        >
          {props.desc}
        </p>
      )}
    </div>
  );
}
