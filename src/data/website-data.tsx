import cloudinaryLoader from "@/lib/cloudinary-loader";
import { Metadata } from "next";

export const VALID_CHARS: string = "0123456789ABCDEFGHJKLMNPQRTUVWXY";
export const headerCompanyName: string = "FrameworkTeam";
export const companyName: string = "FrameworkTeam Softwares";
export const email: string = "support@frameworkteam.com";
export const copyrightYear: string = new Date().getFullYear().toString();
const title: string =
  "Free Online JPG to PDF Converter - Secure, Fast, and High-Quality";
const description: string =
  "Easily convert JPG to PDF with our free online tool. Enjoy secure, fast, and high-quality conversions directly on your device. No file uploads, ensuring privacy and safety. Perfect for personal or professional use with a free trial included!";
const keywords: string =
  "JPG to PDF, free JPG to PDF converter, online JPG to PDF tool, secure JPG to PDF conversion, local JPG to PDF conversion, no file upload JPG to PDF, privacy-first PDF converter, high-quality PDF conversion, fast JPG to PDF, image to PDF converter, photo to PDF converter, JPG to PDF free trial, best JPG to PDF tool, easy JPG to PDF conversion";
const titleDesktop: string =
  "Free JPG to PDF Converter Desktop App - Powerful Offline Software";
const descriptionDesktop: string =
  "Download our feature-rich desktop app to convert JPG to PDF offline. Enjoy batch processing, high-quality output, secure local conversions, and customizable PDF settings. Ideal for professional and personal use.";
const keywordsDesktop: string =
  "JPG to PDF desktop app, offline JPG to PDF converter, JPG to PDF software, batch JPG to PDF, secure PDF converter, high-quality PDF conversion, customizable PDF settings, image to PDF software, photo to PDF app, JPG to PDF offline tool";
export enum HeaderNavItems {
  Home = "Home",
  Desktop = "Desktop",
  Pricing = "Purchase",
  Contact = "Contact",
}
export const headerNavItems: string[] = [
  HeaderNavItems.Home,
  HeaderNavItems.Desktop,
  HeaderNavItems.Pricing,
  HeaderNavItems.Contact,
];

export const productImages = {
  JPGtoPDFConverterWeb: {
    title: "JPG to PDF Converter Online",
    imgName: `/${headerCompanyName.toLowerCase()}/${"jpg-to-pdf-converter-web.png".toLowerCase()}`,
    width: 1170,
    height: 2532,
  },
  JPGtoPDFConverter: {
    title: "JPG to PDF Converter",
    imgName: `/${headerCompanyName.toLowerCase()}/${"jpg-to-pdf-converter.jpg".toLowerCase()}`,
    width: 756,
    height: 463,
  },
  JPGtoPDFConverterFilesSelected: {
    title: "JPG to PDF Converter Files Selected",
    imgName: `/${headerCompanyName.toLowerCase()}/${"jpg-to-pdf-converter-files-selected.jpg".toLowerCase()}`,
    width: 756,
    height: 463,
  },
  JPGtoPDFConverterSettings: {
    title: "JPG to PDF Converter Settings",
    imgName: `/${headerCompanyName.toLowerCase()}/${"jpg-to-pdf-converter-settings.jpg".toLowerCase()}`,
    width: 756,
    height: 463,
  },
};

export const productData = {
  id: "jpg-to-pdf-converter",
  title: "JPG to PDF Converter",
  productWebsite: "https://www.jpg-to-pdf-converter.com/",
  productWebsiteDesktop: "https://www.jpg-to-pdf-converter.com/desktop",
  downloadLink:
    "https://jpg-to-pdf-converter.com/downloads/jpg-to-pdf-converter-setup.exe",
};

export const licenseOptions = [
  {
    licenseType: "One Device License",
    price: "$24.95 USD",
    paymentLink:
      "https://frameworkteam.onfastspring.com/jpg-to-pdf-converter-one-computer-license",
  },
  {
    licenseType: "Two Devices License",
    price: "$39.95 USD",
    paymentLink:
      "https://frameworkteam.onfastspring.com/jpg-to-pdf-converter-two-computers-license",
  },
  {
    licenseType: "Three Devices License",
    price: "$44.95 USD",
    paymentLink:
      "https://frameworkteam.onfastspring.com/jpg-to-pdf-converter-three-computers-license",
  },
  {
    licenseType: "Five Devices License",
    price: "$64.95 USD",
    paymentLink:
      "https://frameworkteam.onfastspring.com/jpg-to-pdf-converter-five-computers-license",
  },
  {
    licenseType: "Ten Devices License",
    price: "$109.95 USD",
    paymentLink:
      "https://frameworkteam.onfastspring.com/jpg-to-pdf-converter-ten-computers-license",
  },
  {
    licenseType: "Unlimited Devices License",
    price: "$224.95 USD",
    paymentLink:
      "https://frameworkteam.onfastspring.com/jpg-to-pdf-converter-unlimited-computers-license",
  },
];

export const metadataIndex: Metadata = {
  title: title,
  description: description,
  keywords: keywords,
  alternates: {
    canonical: productData.productWebsite,
  },
  openGraph: {
    title: title,
    description: description,
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

export const metadataDesktop: Metadata = {
  title: titleDesktop,
  description: descriptionDesktop,
  keywords: keywordsDesktop,
  alternates: {
    canonical: productData.productWebsiteDesktop,
  },
  openGraph: {
    title: titleDesktop,
    description: descriptionDesktop,
    url: productData.productWebsiteDesktop,
    siteName: productData.title,
    images: [
      {
        url: cloudinaryLoader({
          src: productImages.JPGtoPDFConverter.imgName,
          width: productImages.JPGtoPDFConverter.width,
        }),
        width: productImages.JPGtoPDFConverter.width,
        height: productImages.JPGtoPDFConverter.height,
        alt: productData.title,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
