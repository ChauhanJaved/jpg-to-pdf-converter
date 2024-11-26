//External Imports
import { Metadata } from "next";
import { Slash } from "lucide-react";

//Internal Imports
import {
  HeaderNavItems,
  productData,
  productImages,
} from "@/data/website-data";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Desktop from "@/components/desktop";
import cloudinaryLoader from "@/lib/cloudinary-loader";
import BreadcrumbNextLink from "@/components/breadcrumb-next-link";

export const metadata: Metadata = {
  title: "JPG to PDF Converter Desktop App - Powerful Offline Software",
  description:
    "Download our feature-rich desktop app to convert JPG to PDF offline. Enjoy batch processing, high-quality output, secure local conversions, and customizable PDF settings. Ideal for professional and personal use.",
  keywords:
    "JPG to PDF desktop app, offline JPG to PDF converter, JPG to PDF software, batch JPG to PDF, secure PDF converter, high-quality PDF conversion, customizable PDF settings, image to PDF software, photo to PDF app, JPG to PDF offline tool",
  openGraph: {
    title: "JPG to PDF Converter Desktop App - Powerful Offline Software",
    description:
      "Download our feature-rich desktop app to convert JPG to PDF offline. Enjoy batch processing, high-quality output, secure local conversions, and customizable PDF settings. Ideal for professional and personal use.",
    url: `${productData.productWebsite}/desktop.html`,
    siteName: productData.title,
    images: [
      {
        url: cloudinaryLoader({
          src: productImages.JPGtoPDFConverter.imgName,
          width: productImages.JPGtoPDFConverter.width,
        }),
        width: productImages.JPGtoPDFConverter.width,
        height: productImages.JPGtoPDFConverter.height,
        alt: "JPG to PDF Converter Desktop App",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
export default function Page() {
  return (
    <>
      <div className="px-5 pt-24">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbNextLink
                linkName={HeaderNavItems.Home}
                hrefActiveSection={`/#${HeaderNavItems.Home}`}
                headerActiveSection={HeaderNavItems.Home}
              />
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Desktop</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <main id="main">
        <Desktop />
      </main>
    </>
  );
}
