import {
  HeaderNavItems,
  portfolioItems,
  ProductIDs,
} from "@/data/website-data";
import React from "react";
import SectionHeader from "./UI/SectionHeader";
import { Button } from "./UI/Button";
import { Download } from "lucide-react";
import Link from "next/link";

export default function Desktop() {
  const portfolioItem = portfolioItems.find(
    (item) => item.id === ProductIDs.JPGtoPDFConverter,
  );
  return (
    portfolioItem && (
      <section
        id={HeaderNavItems.Desktop}
        className="container mx-auto flex scroll-m-[64px] flex-col items-center justify-center px-3 py-10 xl:max-w-screen-xl"
      >
        <SectionHeader
          caption={portfolioItem.title}
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
      </section>
    )
  );
}
