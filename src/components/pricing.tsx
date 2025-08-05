// src/components/pricing.tsx

// External Imports
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

// Internal Imports
import { HeaderNavItems, licenseOptions } from "@/data/website-data";
import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";

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
            "Lifetime license with one-time purchase | Free upgrades | 15-day money-back guarantee | Secure payments via FastSpring"
          }
        />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {licenseOptions.map((license, index) => (
            <div key={index} className="flex items-center justify-center">
              <Button asChild variant={"outline"} className="h-16 w-[275px]">
                <Link
                  aria-label={`Buy ${license.licenseType} for ${license.price}`}
                  className="flex gap-3"
                  target="_blank"
                  href={license.paymentLink}
                  rel="noopener noreferrer"
                >
                  <ShoppingCart />
                  <div className="flex flex-col items-start">
                    <span>{license.licenseType}</span>
                    <span>{license.price}</span>
                  </div>
                </Link>
              </Button>
            </div>
          ))}
        </div>
        <div className="flex flex-col">
          <h3 className="mt-10 font-semibold">
            Secure Payments via FastSpring
          </h3>
          <p className="mt-2">
            We partner with Bright Market, LLC, dba FastSpring, located at 801
            Garden St., Santa Barbara, CA 93101, USA, for secure and efficient
            payment processing. Once your order is complete, FastSpring will
            immediately send a license key to the email address associated with
            your order. To activate your license, simply enter the key in the
            app. For your privacy, FastSpring does not share any sensitive
            payment information, such as credit card details, with us. Your
            transaction is completely secure.
          </p>

          <h3 className="mt-10 font-semibold">
            One-Time Purchase with Lifetime License
          </h3>
          <p className="mt-2">
            Enjoy a lifetime of access with just a one-time purchase of our JPG
            to PDF converter. Once you’ve acquired the license, there are no
            recurring fees or subscriptions. This lifetime license provides you
            unlimited use of our powerful conversion tools, making it a
            valuable, long-term investment for users who frequently work with
            image to PDF conversions.
          </p>

          <h3 className="mt-10 font-semibold">Free Lifetime Upgrades</h3>
          <p className="mt-2">
            Stay up-to-date with all the latest features and enhancements, free
            of charge. Our lifetime license includes complimentary upgrades,
            ensuring you always have access to the most optimized and advanced
            version of our converter. Whether it’s new settings, increased
            speed, or enhanced usability, you’ll receive every improvement at no
            additional cost.
          </p>

          <h3 className="mt-10 font-semibold">15-Day Money-Back Guarantee</h3>
          <p className="mt-2">
            We&apos;re confident you&apos;ll find our converter indispensable,
            but we understand that every user&apos;s needs are different.
            That&apos;s why we offer a 15-day money-back guarantee with your
            purchase. Try the software, explore its features, and if you&apos;re
            not fully satisfied, we&apos;ll gladly refund your payment within
            this period — no questions asked.
          </p>
        </div>
      </div>
    </section>
  );
}
