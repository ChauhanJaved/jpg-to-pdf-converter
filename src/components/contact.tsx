import { email, HeaderNavItems } from "@/data/website-data";
import React from "react";
import SectionHeader from "./ui/SectionHeader";
import HeroIcons, { IconNames } from "./ui/HeroIcons";
import { nunito } from "./font/font";

export default function Contact() {
  return (
    <section
      id={HeaderNavItems.Contact}
      className="container mx-auto scroll-m-[64px] px-3 pt-16 text-lg xl:max-w-screen-xl"
    >
      <SectionHeader caption="contact" element="h2" />
      <div className="mt-10 flex flex-col items-center">
        <div className="flex flex-col space-y-5 md:flex-row md:space-x-5 md:space-y-0">
          <div className="w-80 rounded bg-white-snow p-7">
            <HeroIcons
              iconName={IconNames.Envelope}
              className="size-14 text-blue-ultramarine"
            />
            <h3
              className={`${nunito.className} mt-3 text-lg font-bold text-blue-dark-imperial md:text-xl`}
            >
              Email Us
            </h3>
            <p className="mt-1">{email}</p>
          </div>
          <div className="w-80 rounded bg-white-snow p-7">
            <HeroIcons
              iconName={IconNames.Clock}
              className="size-14 text-blue-ultramarine"
            />
            <h3
              className={`${nunito.className} mt-3 text-lg font-bold text-blue-dark-imperial md:text-xl`}
            >
              Open Hours
            </h3>
            <p className="mt-1">
              Monday - Saturday <br /> 10:00AM - 08:00PM
            </p>
          </div>
        </div>

        <p className={`mb-8 mt-8 text-lg`}>
          Please feel free to contact us if you have encountered a problem with
          our software product, you have a question about our product or
          purchase related question. If you are a licensed user, please include
          your order details, so that we can make your problem a priority for
          our support staff. Please note that the response will take some time
          (12 - 24 hours).
        </p>
      </div>
    </section>
  );
}
