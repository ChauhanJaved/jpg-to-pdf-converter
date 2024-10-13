//Internal imports
import { roboto } from "@/lib/font";
import "./globals.css";
import Header from "@/components/header";
import { companyName, copyrightYear } from "@/data/website-data";
import type { Metadata } from "next";
import { Toaster } from "@/components/UI/toaster";
import Footer from "@/components/footer";
import ScrollTop from "@/components/UI/scroll-top";

export const metadata: Metadata = {
  title: "JPG to PDF Converter",
  description: "JPG to PDF Converter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} bg-white text-base font-normal text-black-600`}
      >
        <Header />
        {children}
        <Footer companyName={companyName} copyrightYear={copyrightYear} />
        <ScrollTop />
        <Toaster />
      </body>
    </html>
  );
}
