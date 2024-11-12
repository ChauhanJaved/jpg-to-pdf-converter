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
      className="container scroll-m-20 px-5 pt-10 text-gray-700 dark:text-gray-300 lg:px-10 lg:pt-20 xl:max-w-screen-xl"
    >
      <SectionHeader caption="Contact Us" element="h2" />
      <div className="mt-10 flex flex-col">
        <div className="flex flex-wrap items-center justify-center">
          {/* Box----------1 */}
          <div className="m-2 flex h-28 w-72 flex-col items-center justify-center rounded border p-3">
            <div className="flex flex-row items-center gap-1">
              <Mail className="h-6 w-6" />
              <p className={`text-lg`}>Support email</p>
            </div>
            <p className="text-lg">{email}</p>
          </div>
          {/* Box----------2 */}
          <div className="m-2 flex h-28 w-72 flex-col items-center justify-center rounded border p-3">
            <div>
              <div className="flex flex-row items-center gap-1">
                <Clock className="h-6 w-6" />
                <p className={`text-lg`}>Open Hours</p>
              </div>
              <p className="text-lg">
                Monday - Saturday <br /> 10:00AM - 08:00PM
              </p>
            </div>
          </div>
          <div></div>
        </div>
        <p className={`mt-5 text-lg`}>
          Please feel free to contact us if you have encountered a problem with
          our product, you have a question about our product or purchase related
          question. If you are a licensed user, please include your order
          details, so that we can make your problem a priority for our support
          staff. Please note that the response will take some time (12 - 24
          hours).
        </p>
      </div>
      {/* <p className={`mb-8 mt-8 text-lg`}>
          Please feel free to contact us if you have encountered a problem with
          our product, you have a question about our product or purchase related
          question. If you are a licensed user, please include your order
          details, so that we can make your problem a priority for our support
          staff. Please note that the response will take some time (12 - 24
          hours).
        </p> */}
    </section>
  );
}
