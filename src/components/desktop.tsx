"use client";
//External Imports
import { CircleCheck, Download, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
//Internal Imports
import SectionHeader from "@/components/section-header";
import { ProductIDs } from "@/data/website-data";
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
export default function Desktop() {
  const { setActiveSection } = useActiveSection();
  return (
    <main id="main">
      {portfolioItem && (
        <>
          <div className="container mx-auto flex flex-col items-center justify-center px-5 pt-28 md:pt-32 xl:max-w-screen-xl">
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
              {portfolioItemWeb?.productWebsite && (
                <Link href={portfolioItemWeb.productWebsite} target="_blank">
                  <Button className="py-5 text-base">
                    <SquareArrowOutUpRight className="mr-2" />
                    Try Online Converter
                  </Button>
                </Link>
              )}
            </div>

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
                          <h2 className={`text-base lg:text-lg`}>{item}</h2>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {portfolioItem.description}
            <div className="mt-5 flex w-full flex-col gap-3">
              <strong className="mb-3 text-base lg:mb-0">
                Helpful Links for Desktop App:
              </strong>
              <Link
                href={"/help"}
                className="text-base lg:text-lg"
                onClick={() => setActiveSection("")}
              >
                <Button variant={"link"} className="h-auto lg:px-0 lg:py-0">
                  JPG to PDF Converter software user guide
                </Button>
              </Link>
              <Link
                href={"/how-batch-convert-jpg-pdf"}
                className="text-base lg:text-lg"
                onClick={() => setActiveSection("")}
              >
                <Button variant={"link"} className="h-auto lg:px-0 lg:py-0">
                  How to convert JPG to PDF in batch?
                </Button>
              </Link>
              <Link
                href={"/how-to-merge-jpg-to-pdf"}
                className="text-base lg:text-lg"
                onClick={() => setActiveSection("")}
              >
                <Button variant={"link"} className="h-auto lg:px-0 lg:py-0">
                  How to combine multiple JPG to PDF in Windows?
                </Button>
              </Link>
              <Link
                href={"how-to-export-scanned-jpg-to-pdf"}
                className="text-base lg:text-lg"
                onClick={() => setActiveSection("")}
              >
                <Button variant={"link"} className="h-auto lg:px-0 lg:py-0">
                  How do I change a scanned JPGs to a PDF file?
                </Button>
              </Link>
              <Link
                href={"/jpg-vs-pdf"}
                className="text-base lg:text-lg"
                onClick={() => setActiveSection("")}
              >
                <Button variant={"link"} className="h-auto lg:px-0 lg:py-0">
                  Which file format should you use JPG or PDF?
                </Button>
              </Link>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
