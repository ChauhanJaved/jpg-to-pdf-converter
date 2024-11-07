//External Imports
import React from "react";
import { Clock, Mail } from "lucide-react";

//Internal Imports
import { email, HeaderNavItems } from "@/data/website-data";
import SectionHeader from "@/components/section-header";

export default function Contact() {
  return (
    <section
      id={HeaderNavItems.Contact}
      className="container mx-auto scroll-m-[80px] px-3 py-10 text-lg text-gray-700 dark:text-gray-300 xl:max-w-screen-xl"
    >
      <SectionHeader caption="Contact Us" element="h2" />
      <div className="mt-10 flex flex-col items-center">
        <div className="flex flex-col space-y-5 md:flex-row md:space-x-5 md:space-y-0">
          <div className="w-80 rounded border p-7 shadow-sm">
            <Mail className="h-9 w-9 text-primary sm:h-10 sm:w-10" />
            <h3 className={`mt-3 text-lg font-bold md:text-xl`}>Email Us</h3>
            <p className="mt-1">{email}</p>
          </div>
          <div className="w-80 rounded border p-7 shadow-sm">
            <Clock className="h-9 w-9 text-primary sm:h-10 sm:w-10" />
            <h3 className={`mt-3 text-lg font-bold md:text-xl`}>Open Hours</h3>
            <p className="mt-1">
              Monday - Saturday <br /> 10:00AM - 08:00PM
            </p>
          </div>
        </div>

        <p className={`mb-8 mt-8 text-lg`}>
          Please feel free to contact us if you have encountered a problem with
          our product, you have a question about our product or purchase related
          question. If you are a licensed user, please include your order
          details, so that we can make your problem a priority for our support
          staff. Please note that the response will take some time (12 - 24
          hours).
        </p>
      </div>
    </section>
  );
}
