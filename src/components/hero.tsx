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
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {portfolioItem.downloadLink && (
                <a href={portfolioItem.downloadLink}>
                  <Button className="py-5 text-base">
                    <Download className="mr-2" />
                    Download Now
                  </Button>
                </a>
              )}
            </div>
            {portfolioItemWeb?.productWebsite && (
              <div className="mt-3 text-center">
                <Button variant={"link"}>
                  <Link href={portfolioItemWeb.productWebsite} target="_blank">
                    Try Our Online JPG to PDF Converter
                  </Link>
                </Button>
              </div>
            )}

            <div className="mt-10 flex w-full flex-col justify-center md:flex-row">
              {/* ----- Box-1 ----- */}

              <ProductImage
                src={portfolioItem.src}
                width={portfolioItem.width}
                height={portfolioItem.height}
                alt={portfolioItem.title}
                galleryID="product-image"
              />

              {/* ----- Box-2 ----- */}
              <div className="mt-5 md:mt-0 md:ml-3 md:w-1/3">
                <div className="flex flex-col text-center">
                  {portfolioItem.features.map((item, index) => (
                    <div key={index} className="mb-3 flex w-full flex-col">
                      <div className="flex flex-row items-start">
                        <div className="mt-1 size-6">
                          <CircleCheck />
                        </div>
                        <div className="flex flex-grow flex-col pl-3 text-left">
                          <h2>{item}</h2>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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
