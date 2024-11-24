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
      className="container scroll-m-20 px-5 pt-10 text-gray-700 dark:text-gray-300 lg:px-10 lg:pt-20 xl:max-w-screen-xl"
    >
      <div className="flex flex-col items-center">
        <SectionHeader
          element="h2"
          caption={`License Pricing`}
          desc={
            "One-Time Purchase with Lifetime License | Free Lifetime Upgrades | 15-Day Money-Back Guarantee | Single License Valid for Both Desktop and Web Apps | Secure Payments via FastSpring"
          }
        />
        <div className="mt-10 flex w-full items-center justify-center rounded border py-5 shadow">
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
        </div>
        <div className="mt-5 flex flex-col">
          <h3 className="text-base font-semibold lg:text-lg">
            Secure Payments via FastSpring
          </h3>
          <p className="text-base lg:text-lg">
            We partner with Bright Market, LLC, dba FastSpring, located at 801
            Garden St., Santa Barbara, CA 93101, USA, for secure and efficient
            payment processing. Once your order is complete, FastSpring will
            immediately send a license key to the email address associated with
            your order. To activate your license, simply enter the key in the
            app. For your privacy, FastSpring does not share any sensitive
            payment information, such as credit card details, with us. Your
            transaction is completely secure.
          </p>
        </div>
        <div className="mt-5 flex flex-col">
          <h3 className="text-base font-semibold lg:text-lg">
            One-Time Purchase with Lifetime License
          </h3>
          <p className="text-base lg:text-lg">
            Enjoy a lifetime of access with just a one-time purchase of our JPG
            to PDF converter. Once you’ve acquired the license, there are no
            recurring fees or subscriptions. This lifetime license provides you
            unlimited use of our powerful conversion tools, making it a
            valuable, long-term investment for users who frequently work with
            image to PDF conversions.
          </p>
        </div>
        <div className="mt-5 flex flex-col">
          <h3 className="text-base font-semibold lg:text-lg">
            Free Lifetime Upgrades
          </h3>
          <p className="text-base lg:text-lg">
            Stay up-to-date with all the latest features and enhancements, free
            of charge. Our lifetime license includes complimentary upgrades,
            ensuring you always have access to the most optimized and advanced
            version of our converter. Whether it’s new settings, increased
            speed, or enhanced usability, you’ll receive every improvement at no
            additional cost.
          </p>
        </div>
        <div className="mt-5 flex flex-col">
          <h3 className="text-base font-semibold lg:text-lg">
            15-Day Money-Back Guarantee
          </h3>
          <p className="text-base lg:text-lg">
            We’re confident you’ll find our converter indispensable, but we
            understand that every user’s needs are different. That’s why we
            offer a 15-day money-back guarantee with your purchase. Try the
            software, explore its features, and if you’re not fully satisfied,
            we’ll gladly refund your payment within this period – no questions
            asked.
          </p>
        </div>
        <div className="mt-5 flex flex-col">
          <h3 className="text-base font-semibold lg:text-lg">
            Single License Valid for Both Desktop and Web Apps
          </h3>
          <p className="text-base lg:text-lg">
            Enjoy the flexibility of using our converter on both desktop and web
            platforms with a single license. This dual compatibility ensures you
            have the freedom to work on your preferred device, whether you’re at
            your desk or on the go, maximizing convenience and usability without
            the need for multiple licenses.
          </p>
        </div>
      </div>
    </section>
  );
}
