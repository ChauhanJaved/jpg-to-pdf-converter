//External Imports
import { Metadata } from "next";
//Internal Imports
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import { productData, productImages } from "@/data/website-data";
import cloudinaryLoader from "@/lib/cloudinary-loader";

export const metadata: Metadata = {
  title: "JPG to PDF Converter - Free Online Tool & Powerful Desktop App",
  description:
    "Easily convert JPG to PDF with our free online tool or feature-rich desktop app. Enjoy secure, high-quality conversions, batch processing, and customizable settings. Perfect for personal or professional use.",
  keywords:
    "JPG to PDF, convert JPG to PDF, online JPG to PDF, desktop JPG to PDF converter, batch JPG to PDF, free JPG to PDF, image to PDF, photo to PDF, secure PDF converter, customizable PDF converter, high-quality PDF conversion, JPG to PDF software",
  openGraph: {
    title: "JPG to PDF Converter - Free Online Tool & Powerful Desktop App",
    description:
      "Easily convert JPG to PDF with our free online tool or feature-rich desktop app. Enjoy secure, high-quality conversions, batch processing, and customizable settings. Perfect for personal or professional use.",
    url: productData.productWebsite,
    siteName: productData.title,
    images: [
      {
        url: cloudinaryLoader({
          src: productImages.JPGtoPDFConverterWeb.imgName,
          width: productImages.JPGtoPDFConverterWeb.width,
        }),
        width: productImages.JPGtoPDFConverterWeb.width,
        height: productImages.JPGtoPDFConverterWeb.height,
        alt: productData.title,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
export default function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <Pricing />
        <Contact />
      </main>
    </>
  );
}
