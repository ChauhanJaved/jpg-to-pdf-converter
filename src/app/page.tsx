//External Imports
import { Metadata } from "next";
//Internal Imports
import Contact from "@/components/contact";
import Desktop from "@/components/desktop";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";

export const metadata: Metadata = {
  title: "JPG to PDF Converter",
  description: "JPG to PDF Converter",
};
export default function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <Desktop />
        <Pricing />
        <Contact />
      </main>
    </>
  );
}
