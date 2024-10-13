import {
  HeaderNavItems,
  portfolioItems,
  ProductIDs,
} from "@/data/website-data";
import React from "react";
import SectionHeader from "./UI/section-header";
import { Button } from "./UI/button";
import { Download } from "lucide-react";
import Link from "next/link";
import HeroIcons, { IconNames } from "./UI/hero-icons";
import { montserrat } from "../lib/font";
import Image from "next/image";

export default function Desktop() {
  const portfolioItem = portfolioItems.find(
    (item) => item.id === ProductIDs.JPGtoPDFConverter,
  );
  return (
    portfolioItem && (
      <section
        id={HeaderNavItems.Desktop}
        className="container mx-auto flex scroll-m-[64px] flex-col items-center justify-center px-3 pt-16 xl:max-w-screen-xl"
      >
        <SectionHeader
          caption={`Desktop ${portfolioItem.title}`}
          desc={
            portfolioItem.desc
              ? portfolioItem.desc
              : "Windows 11/10/8/7 | Fully Functional 15 Days Free Trial"
          }
        />
        <Button className="m-2 mt-10 lg:text-lg">
          <Link
            href={portfolioItem.downloadLink}
            className="flex items-center justify-center"
          >
            <Download className="mr-2 h-4 w-4 lg:h-6 lg:w-6" />
            <p> Download Now</p>
          </Link>
        </Button>
        <div className="mt-10 flex w-full flex-col md:flex-row">
          {/* ----- Box-1 ----- */}
          <div className="flex w-full flex-col items-center md:w-2/3">
            <Image
              src={portfolioItem.src}
              width={portfolioItem.width}
              height={portfolioItem.height}
              alt={portfolioItem.title}
              className="relative"
              priority
            />
          </div>
          {/* ----- Box-2 ----- */}
          <div className="mt-5 md:ml-3 md:mt-0 md:w-1/3">
            <div className="flex flex-col text-center">
              {portfolioItem.features.map((item, index) => (
                <div key={index} className="mb-3 flex w-full flex-col">
                  <div className="flex flex-row items-center">
                    <HeroIcons
                      iconName={IconNames.CheckCircle}
                      className="h-9 w-9 flex-none text-blue-ultramarine"
                    />

                    <div className="flex flex-grow flex-col pl-3 text-left">
                      <h2 className={`${montserrat.className} font-bold`}>
                        {item}
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {portfolioItem.description}
      </section>
    )
  );
}
