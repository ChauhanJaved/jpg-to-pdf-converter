import { HeaderNavItems, licenseOptions } from "@/data/website-data";
import React from "react";
import SectionHeader from "./section-header";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Pricing() {
  return (
    <section
      id={HeaderNavItems.Pricing}
      className="container mx-auto scroll-m-20 px-5 pt-10 lg:px-10 lg:pt-20 xl:max-w-screen-xl"
    >
      <div className="flex flex-col items-center">
        <SectionHeader
          element="h2"
          caption={`License Pricing`}
          desc={
            "One-Time Purchase with Lifetime License | Free Lifetime Upgrades | 15-Day Money-Back Guarantee | Secure Payments via FastSpring"
          }
        />

        <div className="mt-10 grid max-w-[750px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {licenseOptions.map((license, index) => (
            <div key={index} className="flex items-center justify-center">
              <Link target="_blank" href={license.paymentLink}>
                <Button variant={"outline"} className="h-14 w-[235px]">
                  <ShoppingCart className="mr-3" />
                  <div className="flex flex-col items-start">
                    <span>{license.licenseType}</span>
                    <span>{license.price}</span>
                  </div>
                </Button>
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col">
          <p className="mt-3 font-semibold">Secure Payments via FastSpring</p>
          <p>
            We partner with Bright Market, LLC, dba FastSpring, located at 801
            Garden St., Santa Barbara, CA 93101, USA, for secure and efficient
            payment processing. Once your order is complete, FastSpring will
            immediately send a license key to the email address associated with
            your order. To activate your license, simply enter the key in the
            app. For your privacy, FastSpring does not share any sensitive
            payment information, such as credit card details, with us. Your
            transaction is completely secure.
          </p>

          <p className="mt-3 font-semibold">
            One-Time Purchase with Lifetime License
          </p>
          <p>
            Enjoy a lifetime of access with just a one-time purchase of our JPG
            to PDF converter. Once you’ve acquired the license, there are no
            recurring fees or subscriptions. This lifetime license provides you
            unlimited use of our powerful conversion tools, making it a
            valuable, long-term investment for users who frequently work with
            image to PDF conversions.
          </p>

          <p className="mt-3 font-semibold">Free Lifetime Upgrades</p>
          <p>
            Stay up-to-date with all the latest features and enhancements, free
            of charge. Our lifetime license includes complimentary upgrades,
            ensuring you always have access to the most optimized and advanced
            version of our converter. Whether it’s new settings, increased
            speed, or enhanced usability, you’ll receive every improvement at no
            additional cost.
          </p>

          <p className="mt-3 font-semibold">15-Day Money-Back Guarantee</p>
          <p>
            We’re confident you’ll find our converter indispensable, but we
            understand that every user’s needs are different. That’s why we
            offer a 15-day money-back guarantee with your purchase. Try the
            software, explore its features, and if you’re not fully satisfied,
            we’ll gladly refund your payment within this period – no questions
            asked.
          </p>
        </div>
      </div>
    </section>
  );
}
