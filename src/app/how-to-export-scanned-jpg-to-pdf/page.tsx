// src/app/how-to-export-scanned-jpg-to-pdf/page.tsx

// External imports
import { Download, MonitorDown, Slash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

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
              <BreadcrumbPage>Export Scanned JPG to PDF</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <section className="container mx-auto px-5 lg:px-10 xl:max-w-screen-xl">
        <SectionHeader
          className="mt-10 lg:mt-16"
          caption="Export Scanned JPG to PDF"
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
                aria-label={`Download ${portfolioItemDesktop.title} software for Windows`}
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
            How to Change Scanned JPGs into a PDF File
          </h2>
          <p className="mt-2">
            Over the years, Adobe&#39;s Portable Document Format (PDF) has
            become the universal standard for sharing and storing digital
            documents. Its cross-platform compatibility ensures that PDFs can be
            opened on virtually any mobile device, computer, or operating
            system. If you have scanned documents saved as JPG files, converting
            them into a PDF is an excellent way to make them easier to share,
            organize, or store.
          </p>
          <p>
            Using our <strong>JPG to PDF Converter</strong>, you can create a
            single, multi-page PDF document from multiple scanned JPG images.
            This feature is particularly useful for organizing and sharing
            documents digitally or preserving hard-copy materials for future
            reference.
          </p>

          <h2 className="mt-5 font-semibold">
            Step-by-Step Guide to Convert Scanned JPGs to a PDF
          </h2>
          <div className="ml-3">
            <h3 className="mt-2 font-semibold">
              1. Download and Install the JPG to PDF Converter
            </h3>
            <p className="mt-2">
              Start by downloading the <strong>JPG to PDF Converter</strong>{" "}
              software and installing it on your computer. The program offers a
              free 15-day trial for you to explore its features. Once installed,
              launch the application to access its user-friendly interface, as
              shown below.
            </p>

            <h3 className="mt-2 font-semibold">2. Add Scanned JPG Files</h3>
            <p className="mt-2">
              To add your scanned JPG images, click the{" "}
              <strong>“Add Files”</strong> button to open a file selection
              dialog. From there, browse to the folder where your images are
              saved and select the files you wish to convert.
            </p>
            <p>
              Alternatively, you can add entire folders of images by clicking on
              the <strong>“Add Folders”</strong> button. For added convenience,
              you can also drag and drop files or folders directly into the
              application&#39;s file list from Windows Explorer.
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
              3. Rearrange JPG Files (Optional)
            </h3>
            <p className="mt-2">
              If you need to rearrange the order of your scanned images before
              combining them into a PDF, use the <strong>“Move Up”</strong> and{" "}
              <strong>“Move Down”</strong> buttons. This feature ensures that
              your PDF pages appear in the exact order you prefer, especially
              when dealing with multi-page scanned documents.
            </p>

            <h3 className="mt-2 font-semibold">
              4. Customize Conversion Settings
            </h3>
            <p className="mt-2">
              Before starting the conversion, configure the output settings to
              suit your needs:
            </p>
            <ul className="list-disc pl-5">
              <li className="mt-2">
                <strong>Output Folder:</strong> Choose where your converted PDF
                files will be saved. You can either specify a custom folder or
                use the default option,{" "}
                <strong>“Save to the same folder as original files.”</strong>
              </li>
              <li className="mt-2">
                <strong>Output Mode:</strong> Select how your PDFs will be
                created:
                <ul className="list-disc pl-5">
                  <li className="mt-2">
                    <strong>“Combine all JPG to one PDF”</strong>: Merges all
                    selected JPG images into a single, multi-page PDF document.
                  </li>
                  <li className="mt-2">
                    <strong>“Create separate PDF for each JPG”</strong>:
                    Converts each JPG file into an individual single-page PDF.
                  </li>
                </ul>
              </li>
              <li className="mt-2">
                <strong>JPEG Quality:</strong> Adjust the quality of the images
                in the PDF. The quality can be set from 1 (lowest quality,
                smallest file size) to 100 (highest quality, largest file size).
                Choose the setting that best balances image clarity and file
                size.
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
              Once all your JPG files are added, arranged, and the settings are
              configured, click on the <strong>“Convert”</strong> button to
              begin the transformation process. The software will batch convert
              all selected JPG files into professional-quality PDFs.
            </p>
            <p className="mt-2">
              During the conversion process, a progress indicator will display
              the status. The time required will depend on the number and size
              of the files being converted.
            </p>

            <h3 className="mt-2 font-semibold">
              6. Access the Converted PDF Files
            </h3>
            <p className="mt-2">
              When the conversion is complete, your output PDF files will be
              saved in the designated output folder. If you enabled the option{" "}
              <strong>“Open output folder after conversion”</strong>, the folder
              will open automatically, allowing you to view and use your newly
              created PDFs immediately.
            </p>
          </div>
          <h2 className="mt-5 font-semibold">
            Why Convert Scanned JPGs to PDF?
          </h2>
          <p className="mt-2">
            PDFs are more versatile and reliable than JPG images for sharing,
            printing, and archiving. They preserve document formatting, support
            multiple pages in a single file, and offer better compatibility
            across devices and platforms. Our{" "}
            <strong>JPG to PDF Converter</strong> ensures a seamless conversion
            process, allowing you to digitize and organize your scanned
            documents effortlessly.
          </p>
          <p>
            Download the software today and enjoy the convenience of
            transforming your JPG images into high-quality PDF files!
          </p>
        </div>
      </section>
    </>
  );
}
