"use client";
//External Imports
import Image from "next/image";
import { CircleCheck, Download, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
//Internal Imports
import SectionHeader from "@/components/section-header";
import { HeaderNavItems, ProductIDs } from "@/data/website-data";
import { Button } from "@/components/ui/button";
import { useActiveSection } from "@/context/active-section-context";
import { portfolioItems } from "@/data/portfolio-items";
import ProductImage from "./product-image";
const portfolioItem = portfolioItems.find(
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
        {portfolioItem && (
          <>
            <SectionHeader
              caption={portfolioItem.title}
              desc={portfolioItem.subtitle}
            />

            <div className="mt-10 flex w-full flex-col items-center justify-center gap-3 rounded-md border p-10">
              {/* ----- Box-1 ----- */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                {portfolioItem.downloadLink && (
                  <a href={portfolioItem.downloadLink}>
                    <Button className="py-5 text-base">
                      <Download className="mr-2" />
                      Download Now
                    </Button>
                  </a>
                )}
              </div>
              {/* ----- Box-2 ----- */}
              {portfolioItemWeb?.productWebsite && (
                <div className="text-center">
                  <Button variant={"link"}>
                    <Link
                      href={portfolioItemWeb.productWebsite}
                      target="_blank"
                    >
                      Try Online JPG to PDF Converter
                    </Link>
                  </Button>
                </div>
              )}
              {/* ----- Box-3 ----- */}
              <ProductImage
                src={portfolioItem.src}
                width={portfolioItem.width}
                height={portfolioItem.height}
                alt={portfolioItem.title}
                galleryID="product-image"
              />

              {/* ----- Box-2 ----- */}
              {/* <div className="mt-5 flex flex-col gap-3 pt-2 text-center md:mt-0 md:ml-6 md:w-1/3">
                {portfolioItem.features.map((item, index) => (
                  <div
                    key={index}
                    className="flex w-full flex-col items-start text-left"
                  >
                    <p>✔ {item}</p>
                  </div>
                ))}
              </div> */}
            </div>

            {portfolioItem.description}
            <div className="mt-10 flex w-full flex-col items-start gap-3">
              <strong>Helpful Links for Desktop App</strong>
              <Button variant={"link"} className="h-auto px-0 py-0">
                <Link href={"/help"} onClick={() => setActiveSection("")}>
                  JPG to PDF Converter software user guide
                </Link>
              </Button>
              <Button variant={"link"} className="h-auto px-0 py-0">
                <Link
                  href={"/how-batch-convert-jpg-pdf"}
                  onClick={() => setActiveSection("")}
                >
                  How to convert JPG to PDF in batch?
                </Link>
              </Button>
              <Button variant={"link"} className="h-auto px-0 py-0">
                <Link
                  href={"/how-to-merge-jpg-to-pdf"}
                  onClick={() => setActiveSection("")}
                >
                  How to combine multiple JPG to PDF in Windows?
                </Link>
              </Button>
              <Button variant={"link"} className="h-auto px-0 py-0">
                <Link
                  href={"how-to-export-scanned-jpg-to-pdf"}
                  onClick={() => setActiveSection("")}
                >
                  How do I change a scanned JPGs to a PDF file?
                </Link>
              </Button>
              <Button variant={"link"} className="h-auto px-0 py-0">
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
