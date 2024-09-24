//Internal imports
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
      >
        <Header />
        {children}
        <Footer companyName={companyName} copyrightYear={copyrightYear} />
      </body>
    </html>
  );
}
