import {
  HeaderNavItems,
  licenseOptions,
  portfolioItems,
  ProductIDs,
} from "@/data/website-data";
import React from "react";
import SectionHeader from "./ui/section-header";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Purchase() {
  const portfolioItem = portfolioItems.find(
    (item) => item.id === ProductIDs.JPGtoPDFConverter,
  );
  return (
    portfolioItem && (
      <section
        id={HeaderNavItems.Purchase}
        className="container mx-auto scroll-m-[64px] px-3 pt-16 text-lg xl:max-w-screen-xl"
      >
        <SectionHeader
          caption={`Buy License`}
          desc={
            portfolioItem.desc
              ? portfolioItem.desc
              : "One Time Purchase | Lifetime Use License | Free Upgrades | 15 Days Money Back Guarantee"
          }
        />
        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {licenseOptions.map((license, index) => (
            <Link target="_blank" key={index} href={license.paymentLink}>
              <div className="flex flex-row rounded border p-5 shadow-sm">
                <ShoppingCart className="mr-5 h-8 w-8 text-primary sm:h-9 sm:w-9" />
                <div className="flex flex-col items-start justify-center font-bold">
                  <p className="text-base text-primary sm:text-lg">
                    {license.licenseType}{" "}
                  </p>
                  <p className="text-base sm:text-lg"> {license.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    )
  );
}
