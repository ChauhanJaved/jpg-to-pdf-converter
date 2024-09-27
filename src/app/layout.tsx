//Internal imports
import { roboto } from "@/components/font/font";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { companyName, copyrightYear } from "@/data/website-data";
import type { Metadata } from "next";

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
      </body>
    </html>
  );
}
