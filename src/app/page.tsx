//External Imports
import { Metadata } from "next";
//Internal Imports
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import { metadataIndex } from "@/data/website-data";

export const metadata: Metadata = metadataIndex;
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
