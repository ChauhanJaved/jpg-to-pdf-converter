// src/components/hero.tsx

"use client";

//External Imports
import Image from "next/image";
import { Download } from "lucide-react";
import Link from "next/link";

//Internal Imports
import SectionHeader from "@/components/section-header";
import { HeaderNavItems, ProductIDs } from "@/data/website-data";
import { Button } from "@/components/ui/button";
import { useActiveSection } from "@/context/active-section-context";
import { portfolioItems } from "@/data/portfolio-items";
import ProductImage from "@/components/product-image";

const portfolioItemDesktop = portfolioItems.find(
  (item) => item.id === ProductIDs.JPGtoPDFConverterDesktop,
);
const portfolioItemWeb = portfolioItems.find(
  (item) => item.id === ProductIDs.JPGtoPDFConverterWeb,
);
export default function Hero() {
  const { setActiveSection } = useActiveSection();
  return (
    <section id={HeaderNavItems.Home} className="relative flex w-full flex-col">
      {/* Hero background image */}
      <Image
        className="object-cover dark:hidden"
        src={"/frameworkteam/hero-bg"}
        fill
        alt="hero image"
        priority
      />
      <div className="z-0 container m-auto px-5 pt-24 pb-12 md:px-10 md:pt-32 xl:max-w-screen-xl">
        {portfolioItemDesktop && (
          <>
            <SectionHeader
              caption={portfolioItemDesktop.title}
              desc={portfolioItemDesktop.subtitle}
            />

            <div className="mt-10 flex w-full flex-col items-center justify-center gap-3 rounded-md border p-10">
              {/* ----- Box-1 ----- */}
              {portfolioItemDesktop.downloadLink && (
                <Button asChild className="text-base">
                  <a
                    href={portfolioItemDesktop.downloadLink}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center justify-center gap-3"
                  >
                    <Download />
                    <span>Download Now</span>
                  </a>
                </Button>
              )}
              {/* ----- Box-2 ----- */}
              {portfolioItemWeb?.productWebsite && (
                <Button asChild variant={"link"}>
                  <Link
                    href={portfolioItemWeb.productWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Try Online JPG to PDF Converter
                  </Link>
                </Button>
              )}
              {/* ----- Box-3 ----- */}
              <ProductImage
                src={portfolioItemDesktop.src}
                width={portfolioItemDesktop.width}
                height={portfolioItemDesktop.height}
                alt={`Screenshot of ${portfolioItemDesktop.title} interface`}
                galleryID="product-image"
              />
            </div>
            {portfolioItemDesktop.description}
            <div className="mt-10 flex w-full flex-col items-start gap-3">
              <strong>Helpful Links for Desktop App</strong>
              <Button asChild variant={"link"} className="h-auto px-0 py-0">
                <Link href={"/help"} onClick={() => setActiveSection("")}>
                  JPG to PDF Converter software user guide
                </Link>
              </Button>
              <Button asChild variant={"link"} className="h-auto px-0 py-0">
                <Link
                  href={"/how-batch-convert-jpg-pdf"}
                  onClick={() => setActiveSection("")}
                >
                  How to convert JPG to PDF in batch?
                </Link>
              </Button>
              <Button asChild variant={"link"} className="h-auto px-0 py-0">
                <Link
                  href={"/how-to-merge-jpg-to-pdf"}
                  onClick={() => setActiveSection("")}
                >
                  How to combine multiple JPG to PDF in Windows?
                </Link>
              </Button>
              <Button asChild variant={"link"} className="h-auto px-0 py-0">
                <Link
                  href={"/how-to-export-scanned-jpg-to-pdf"}
                  onClick={() => setActiveSection("")}
                >
                  How do I change a scanned JPGs to a PDF file?
                </Link>
              </Button>
              <Button asChild variant={"link"} className="h-auto px-0 py-0">
                <Link href={"/jpg-vs-pdf"} onClick={() => setActiveSection("")}>
                  Which file format should you use JPG or PDF?
                </Link>
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
