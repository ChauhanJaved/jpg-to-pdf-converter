// src/app/how-to-merge-jpg-to-pdf/page.tsx

// External imports

import { Download, MonitorDown, Slash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Internal imports
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/section-header";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { HeaderNavItems, ProductIDs, productImages } from "@/data/website-data";
import BreadcrumbNextLink from "@/components/breadcrumb-next-link";
import { Metadata } from "next";
import { capitalizeWords } from "@/lib/utils";
import { portfolioItems } from "@/data/portfolio-items";
import ProductImage from "@/components/product-image";

const portfolioItemDesktop = portfolioItems.find(
  (item) => item.id === ProductIDs.JPGtoPDFConverterDesktop,
);
const portfolioItemWeb = portfolioItems.find(
  (item) => item.id === ProductIDs.JPGtoPDFConverterWeb,
);
export const metadata: Metadata = portfolioItemDesktop?.metaData ?? {};

export default function Page() {
  return (
    <>
      <div className="px-5 pt-24">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbNextLink
                linkName={capitalizeWords(HeaderNavItems.Home)}
                hrefActiveSection={`/#${HeaderNavItems.Home}`}
                headerActiveSection={HeaderNavItems.Home}
              />
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Merge JPG to PDF</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <section className="container mx-auto px-5 lg:px-10 xl:max-w-screen-xl">
        <SectionHeader
          className="mt-10 lg:mt-16"
          caption="Merge JPG to PDF"
          element="h1"
          desc="Windows 11/10/8/7 | Fully Functional - No Limits - 15 Days Free | Safe & Secure Download"
        />
        <div className="mt-10 flex w-full flex-col items-center justify-center gap-3 rounded-md border p-10">
          {/* ----- Box-1 ----- */}
          {portfolioItemDesktop?.downloadLink && (
            <Button asChild className="text-base">
              <Link
                className="flex flex-row items-center justify-center gap-3"
                href={portfolioItemDesktop.downloadLink}
              >
                <Download />
                <span> Download Now</span>
              </Link>
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
          <div className="mt-10 flex w-full flex-col items-center">
            <ProductImage
              src={productImages.JPGtoPDFConverterDesktop.imgName}
              width={productImages.JPGtoPDFConverterDesktop.width}
              height={productImages.JPGtoPDFConverterDesktop.height}
              alt={productImages.JPGtoPDFConverterDesktop.title}
              galleryID={
                portfolioItemDesktop?.id
                  ? portfolioItemDesktop.id
                  : "gallery-id"
              }
            />
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="mt-10 font-semibold">
            How to Combine Multiple JPG Images into a Single PDF in Windows
          </h2>
          <p className="mt-2">
            Portable Document Format (PDF) is one of the most versatile and
            widely used file formats for sharing, printing, and archiving. If
            you have a collection of JPG images, such as photos or scanned
            documents, you can combine them into a single PDF file for easier
            sharing and professional presentation.
          </p>
          <p>
            Combining multiple JPG images into one PDF document is quick and
            simple with our <strong>JPG to PDF Converter</strong>. This software
            allows you to batch process multiple images at once, saving you time
            and effort while ensuring high-quality output.
          </p>

          <h2 className="mt-5 font-semibold">
            Step-by-Step Guide to Merge JPG Files into a Single PDF
          </h2>
          <div className="ml-3">
            <h3 className="mt-2 font-semibold">
              1. Download and Install the JPG to PDF Converter
            </h3>
            <p className="mt-2">
              To begin, download the <strong>JPG to PDF Converter</strong>{" "}
              software and install it on your Windows computer. The software is
              lightweight and easy to install. Once the installation is
              complete, launch the program to access its intuitive and
              user-friendly interface.
            </p>

            <h3 className="mt-2 font-semibold">
              2. Add JPG Files to the Conversion List
            </h3>
            <p className="mt-2">
              Click on the <strong>“Add Files”</strong> button to open a file
              selection window. From there, browse to the folder containing your
              JPG images and select the files you wish to merge into a single
              PDF.
            </p>
            <p>
              Alternatively, you can use the drag-and-drop feature to add files
              directly from Windows Explorer. Simply select your JPG images or
              entire folders and drag them into the application&#39;s file list.
              This method is especially useful when handling a large number of
              files.
            </p>
            <div className="mt-10 flex justify-center">
              <ProductImage
                src={productImages.JPGtoPDFConverterFilesSelected.imgName}
                width={productImages.JPGtoPDFConverterFilesSelected.width}
                height={productImages.JPGtoPDFConverterFilesSelected.height}
                alt={productImages.JPGtoPDFConverterFilesSelected.title}
                galleryID={
                  portfolioItemDesktop?.id
                    ? `${portfolioItemDesktop.id}-files-selected`
                    : "files-selected"
                }
              />
            </div>
            <h3 className="mt-10 font-semibold">
              3. Rearrange the Order of JPG Files
            </h3>
            <p className="mt-2">
              Before merging your images, you may want to rearrange the order in
              which they appear in the final PDF document. Use the{" "}
              <strong>“Move Up”</strong> and <strong>“Move Down”</strong>{" "}
              buttons to change the sequence of the JPG files in the list. This
              feature gives you full control over the organization of your
              merged PDF.
            </p>

            <h3 className="mt-2 font-semibold">
              4. Configure Conversion Settings
            </h3>
            <p className="mt-2">
              Before starting the conversion, take a moment to customize the
              output settings:
            </p>
            <ul className="list-disc pl-5">
              <li className="mt-2">
                <strong>Output Folder:</strong> Specify the location where the
                merged PDF file will be saved. You can select a custom folder or
                use the default option,{" "}
                <strong>“Save to the same folder as original files.”</strong>
              </li>
              <li className="mt-2">
                <strong>Output Mode:</strong> Choose the mode for PDF
                generation:
                <ul className="list-disc pl-5">
                  <li className="mt-2">
                    <strong>“Combine all JPG to one PDF”</strong>: This option
                    merges all selected JPG images into a single PDF document,
                    perfect for creating multi-page PDFs.
                  </li>
                  <li className="mt-2">
                    <strong>“Create separate PDF for each JPG”</strong>: This
                    option generates a standalone PDF file for each JPG image,
                    which is ideal for individual documents.
                  </li>
                </ul>
              </li>
              <li className="mt-2">
                <strong>JPEG Quality:</strong> Adjust the quality of the images
                in the PDF. You can set the quality level from 1 (lowest quality
                with maximum compression) to 100 (highest quality with minimal
                compression) to balance file size and clarity.
              </li>
            </ul>
            <div className="mt-10 flex justify-center">
              <ProductImage
                src={productImages.JPGtoPDFConverterSettings.imgName}
                width={productImages.JPGtoPDFConverterSettings.width}
                height={productImages.JPGtoPDFConverterSettings.height}
                alt={productImages.JPGtoPDFConverterSettings.title}
                galleryID={
                  portfolioItemDesktop?.id
                    ? `${portfolioItemDesktop.id}-settings`
                    : "settings"
                }
              />
            </div>

            <h3 className="mt-10 font-semibold">
              5. Start the Conversion Process
            </h3>
            <p className="mt-2">
              Once your files are added, arranged, and the settings are
              configured, click on the <strong>“Convert”</strong> button to
              begin the merging process. The software will process all selected
              JPG files and combine them into a single PDF document.
            </p>
            <p>
              During the conversion, a progress bar will display the status of
              the operation. Depending on the number of files and their sizes,
              the process may take a few seconds to complete.
            </p>

            <h3 className="mt-2 font-semibold">
              6. Access the Merged PDF File
            </h3>
            <p className="mt-2">
              When the conversion is complete, navigate to the output folder to
              locate your newly merged PDF file. If you enabled the option{" "}
              <strong>“Open output folder after conversion”</strong>, the folder
              will open automatically, allowing you to view and use your PDF
              immediately.
            </p>
          </div>

          <h2 className="mt-5 font-semibold">
            Why Use Our JPG to PDF Converter for Merging Files?
          </h2>
          <p className="mt-2">
            Our JPG to PDF Converter offers a reliable and efficient solution
            for merging multiple images into a single PDF. With advanced options
            for batch processing, customizable settings, and a user-friendly
            interface, it simplifies the process while delivering
            professional-quality results. Download our software today and
            streamline your workflow!
          </p>
        </div>
      </section>
    </>
  );
}
