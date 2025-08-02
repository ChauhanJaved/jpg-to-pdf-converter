//External Imports
import { Metadata } from "next";
//Internal Imports
import Contact from "@/components/contact";
import Pricing from "@/components/pricing";
import { portfolioItems } from "@/data/portfolio-items";
import Desktop from "@/components/desktop";
import { ProductIDs } from "@/data/website-data";

const portfolioItem = portfolioItems.find(
  (item) => item.id === ProductIDs.JPGtoPDFConverterDesktop,
);

export const metadata: Metadata = portfolioItem?.metaData ?? {};
export default function Home() {
  return (
    <>
      <main id="main">
        <Desktop />
        <Pricing />
        <Contact />
      </main>
    </>
  );
}
