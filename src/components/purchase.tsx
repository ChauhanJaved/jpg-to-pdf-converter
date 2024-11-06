import {
  HeaderNavItems,
  licenseOptions,
  portfolioItems,
  ProductIDs,
} from "@/data/website-data";
import React from "react";
import SectionHeader from "./section-header";
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
        className="container mx-auto scroll-m-[64px] bg-secondary px-3 py-10 text-lg xl:max-w-screen-xl"
      >
        <div className="mx-5 sm:mx-7 md:mx-9 lg:mx-11">
          <SectionHeader
            element="h2"
            caption={`Buy License`}
            desc={
              portfolioItem.desc
                ? portfolioItem.desc
                : "One Time Purchase | Lifetime Use License | Free Upgrades | 15 Days Money Back Guarantee | Secure FastSpring Payments"
            }
          />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {licenseOptions.map((license, index) => (
              <Link target="_blank" key={index} href={license.paymentLink}>
                <div className="flex flex-row gap-3">
                  <div className="pt-1">
                    <ShoppingCart className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <p className="text-base sm:text-lg">
                      {license.licenseType}{" "}
                    </p>
                    <p className="text-base sm:text-lg"> {license.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-10">
            We use Bright Market, LLC dba FastSpring, 801 Garden St., Santa
            Barbara, CA 93101 (USA) to process your payment.{" "}
          </p>
        </div>
      </section>
    )
  );
}
