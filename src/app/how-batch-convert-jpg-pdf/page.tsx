// src/app/how-batch-convert-jpg-pdf/page.tsx

// External imports
import { Download, Slash } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

// Internal imports
import SectionHeader from "@/components/section-header";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { HeaderNavItems, ProductIDs, productImages } from "@/data/website-data";
import { Button } from "@/components/ui/button";
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
              <BreadcrumbPage>Batch Convert JPG to PDF</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <section className="container mx-auto px-5 lg:px-10 xl:max-w-screen-xl">
        <SectionHeader
          className="mt-10 lg:mt-16"
          caption="Batch Convert JPG to PDF"
          element="h1"
          desc="Windows 11/10/8/7 | Fully Functional - No Limits - 15 Days Free | Safe & Secure Download"
        />
        <div className="flex flex-col">
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
                galleryID="batch-convert-jpg-to-pdf"
              />
            </div>
          </div>
          <div className="mt-5 flex flex-col">
            <h2 className="mt-10 font-semibold">
              How to Convert JPG to PDF in Batch
            </h2>
            <p className="mt-2">
              JPG is one of the most widely used image formats on the web.
              However, it has limitations when it comes to image quality,
              especially for viewing, printing, or sharing in professional
              contexts. By converting JPG images to Adobe&#39;s Portable
              Document Format (PDF), you can enhance their usability for various
              purposes like presentations, archiving, or document sharing.
            </p>
            <p>
              If you have a large number of JPG files to convert, using a batch
              converter can save you significant time and effort. Our JPG to PDF
              Converter software is designed to handle batch conversions
              efficiently, ensuring high-quality output while streamlining the
              process.
            </p>

            <h2 className="mt-10 font-semibold">
              Step-by-Step Guide to Convert JPG to PDF in Batch
            </h2>
            <div className="ml-2">
              <h3 className="mt-2 font-semibold">
                1. Download and Install the Software
              </h3>
              <p className="mt-2">
                To get started, download the free JPG to PDF Converter software
                and install it on your computer. The installation is
                straightforward, and a full version of the program is available
                for download. Once installed, launch the application to access
                its user-friendly interface.
              </p>
              <h3 className="mt-2 font-semibold">
                2. Add JPG Files for Conversion
              </h3>
              <p className="mt-2">
                Click on the <strong>“Add Files”</strong> button to open a file
                browser window. From there, navigate to the folder containing
                your JPG images and select the files you want to convert.
                Alternatively, you can simply drag and drop files or entire
                folders directly from Windows Explorer into the
                application&#39;s file list. This drag-and-drop feature makes it
                easy to manage large batches of images.
              </p>
              <div className="my-10 flex justify-center">
                <ProductImage
                  src={productImages.JPGtoPDFConverterFilesSelected.imgName}
                  width={productImages.JPGtoPDFConverterFilesSelected.width}
                  height={productImages.JPGtoPDFConverterFilesSelected.height}
                  alt={productImages.JPGtoPDFConverterFilesSelected.title}
                  galleryID="batch-convert-jpg-to-pdf-files-selected"
                />
              </div>
              <h3 className="mt-2 font-semibold">
                3. Configure Conversion Settings
              </h3>
              <p className="mt-2">
                Before starting the conversion, you can customize the output
                settings to suit your needs:
              </p>
              <ul className="list-disc pl-5">
                <li className="mt-2">
                  <strong>Output Folder:</strong> Choose the folder where the
                  converted PDF files will be saved. You can either specify a
                  custom folder or select the default option,{" "}
                  <strong>“Save to the same folder as original files.”</strong>
                </li>
                <li className="mt-2">
                  <strong>Output Mode:</strong> Decide how you want your PDFs to
                  be generated:
                  <ul className="mt-2 list-disc pl-5">
                    <li>
                      <strong>“Combine all JPG files into one PDF”</strong>:
                      This option merges all the selected JPG images into a
                      single PDF document, ideal for creating multi-page PDFs.
                    </li>
                    <li>
                      <strong>“Create separate PDF for each JPG”</strong>: Each
                      JPG image is converted into its own standalone PDF file,
                      perfect for individual documents.
                    </li>
                  </ul>
                </li>
                <li className="mt-2">
                  <strong>JPEG Quality:</strong> Adjust the quality of the
                  output images. You can set the quality anywhere from 1 (lowest
                  quality with highest compression) to 100 (best quality with
                  minimal compression). This allows you to balance file size and
                  image clarity.
                </li>
              </ul>
              <div className="my-10 flex justify-center">
                <ProductImage
                  src={productImages.JPGtoPDFConverterSettings.imgName}
                  width={productImages.JPGtoPDFConverterSettings.width}
                  height={productImages.JPGtoPDFConverterSettings.height}
                  alt={productImages.JPGtoPDFConverterSettings.title}
                  galleryID="batch-convert-jpg-to-pdf-settings"
                />
              </div>
              <h3 className="mt-2 font-semibold">
                4. Start the Conversion Process
              </h3>
              <p className="mt-2">
                Once your files are added and settings are configured, click on
                the <strong>“Convert”</strong> button to begin the batch
                conversion process. The software will process each JPG image
                according to your selected output mode and save the generated
                PDFs in the specified output folder.
              </p>
              <p>
                During the conversion, a progress indicator will keep you
                informed about the status of the operation. Depending on the
                number of files and their size, the process may take a few
                moments to complete.
              </p>

              <h3 className="mt-2 font-semibold">
                5. Access Your Converted PDFs
              </h3>
              <p className="mt-2">
                After the conversion is complete, navigate to the output folder
                to access your new PDF files. If you enabled the option{" "}
                <strong>“Open output folder after conversion”</strong>, the
                folder will automatically open, allowing you to view your files
                immediately.
              </p>
              <p>
                Whether you chose to merge all images into a single PDF or
                create separate PDFs for each image, your files will be ready
                for use in just a few clicks.
              </p>
            </div>
            <h2 className="mt-10 font-semibold">
              Why Choose Our JPG to PDF Converter?
            </h2>
            <p className="mt-2">
              Our software offers a seamless and efficient way to convert
              multiple JPG images to PDF format, with advanced options for
              customization. Designed for both beginners and professionals, it
              ensures high-quality results with minimal effort. Download our JPG
              to PDF Converter today and experience hassle-free batch
              conversions!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
