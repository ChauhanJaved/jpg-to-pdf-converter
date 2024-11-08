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
import { Button } from "./ui/button";

export default function Pricing() {
  const portfolioItem = portfolioItems.find(
    (item) => item.id === ProductIDs.JPGtoPDFConverter,
  );
  return (
    portfolioItem && (
      <section id={HeaderNavItems.Pricing} className="scroll-m-[80px]">
        <div className="container mx-auto px-3 py-10 xl:max-w-screen-xl">
          <div className="mx-5 flex flex-col items-center sm:mx-7 md:mx-9 lg:mx-11">
            <SectionHeader
              className="pb-10"
              element="h2"
              caption={`License Pricing`}
              desc={
                portfolioItem.desc
                  ? portfolioItem.desc
                  : "One-Time Purchase with Lifetime License | Free Lifetime Upgrades | 15-Day Money-Back Guarantee | Single License Valid for Both Desktop and Web Apps | Secure Payments via FastSpring"
              }
            />
            <div className="grid max-w-[750px] grid-cols-1 gap-5 text-gray-700 dark:text-gray-300 sm:grid-cols-2 lg:grid-cols-3">
              {licenseOptions.map((license, index) => (
                <div key={index} className="flex items-center justify-center">
                  <Link
                    target="_blank"
                    href={license.paymentLink}
                    className="w-[240px]"
                  >
                    <div className="flex flex-row gap-1">
                      <div className="">
                        <Button variant={"ghost"} size={"icon"}>
                          <ShoppingCart />
                        </Button>
                      </div>
                      <div className="flex flex-col items-start justify-center">
                        <p>{license.licenseType} </p>
                        <p> {license.price}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <p className="mt-10 text-gray-700 dark:text-gray-300 lg:text-lg">
              We partner with Bright Market, LLC, dba{" "}
              <strong>FastSpring</strong>, located at 801 Garden St., Santa
              Barbara, CA 93101, USA, for secure and efficient payment
              processing. Once your order is complete, FastSpring will
              immediately send a license key to the email address associated
              with your order. To activate your license, simply enter the key in
              the app. For your privacy, FastSpring does not share any sensitive
              payment information, such as credit card details, with us. Your
              transaction is completely secure.
            </p>
          </div>
        </div>
      </section>
    )
  );
}
