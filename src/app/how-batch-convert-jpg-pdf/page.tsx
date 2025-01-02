import SectionHeader from "@/components/section-header";
import { MonitorDown, Slash } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  HeaderNavItems,
  metadataDesktop,
  productData,
  productImages,
} from "@/data/website-data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import BreadcrumbNextLink from "@/components/breadcrumb-next-link";
import { Metadata } from "next";
import { capitalizeWords } from "@/lib/utils";
export const metadata: Metadata = metadataDesktop;
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
              <BreadcrumbNextLink
                linkName={`${capitalizeWords(HeaderNavItems.Desktop)} App`}
                hrefActiveSection={`/${HeaderNavItems.Desktop.toLocaleLowerCase()}`}
                headerActiveSection={HeaderNavItems.Desktop}
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
      <section className="container px-5 text-gray-700 dark:text-gray-300 lg:px-10 xl:max-w-screen-xl">
        <SectionHeader
          className="mb-5 mt-10 lg:mb-10 lg:mt-16"
          caption="Batch Convert JPG to PDF"
          element="h1"
          desc="Windows 11/10/8/7 | Fully Functional - No Limits - 15 Days Free | Safe & Secure Download"
        />
        <div className="mt-10 flex flex-col">
          <div className="flex flex-col items-center">
            <div className="flex w-full flex-col items-center rounded border p-10 shadow">
              <Link href={productData.downloadLink}>
                <Button className={"py-6 text-xl"}>
                  <MonitorDown className="mr-3 h-8 w-8" /> Download Now
                </Button>
              </Link>
              <div className="mt-10 flex w-full flex-col items-center md:w-2/3">
                <Image
                  src={productImages.JPGtoPDFConverter.imgName}
                  width={productImages.JPGtoPDFConverter.width}
                  height={productImages.JPGtoPDFConverter.height}
                  alt={productImages.JPGtoPDFConverter.title}
                  className="relative"
                />
              </div>
            </div>
          </div>
          <div className="mt-5 flex flex-col lg:text-lg">
            <h2 className="font-semibold">
              How to Convert JPG to PDF in Batch
            </h2>
            <p>
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

            <h2 className="mt-1 font-semibold">
              Step-by-Step Guide to Convert JPG to PDF in Batch
            </h2>
            <div className="ml-3 mt-1">
              <h3 className="font-semibold">
                1. Download and Install the Software
              </h3>
              <p>
                To get started, download the free JPG to PDF Converter software
                and install it on your computer. The installation is
                straightforward, and a full version of the program is available
                for download. Once installed, launch the application to access
                its user-friendly interface.
              </p>
              <h3 className="mt-1 font-semibold">
                2. Add JPG Files for Conversion
              </h3>
              <p>
                Click on the <strong>“Add Files”</strong> button to open a file
                browser window. From there, navigate to the folder containing
                your JPG images and select the files you want to convert.
                Alternatively, you can simply drag and drop files or entire
                folders directly from Windows Explorer into the application’s
                file list. This drag-and-drop feature makes it easy to manage
                large batches of images.
              </p>
              <div className="my-10 flex justify-center">
                <Image
                  src={productImages.JPGtoPDFConverterFilesSelected.imgName}
                  width={productImages.JPGtoPDFConverterFilesSelected.width}
                  height={productImages.JPGtoPDFConverterFilesSelected.height}
                  alt={productImages.JPGtoPDFConverterFilesSelected.title}
                />
              </div>
              <h3 className="mt-1 font-semibold">
                3. Configure Conversion Settings
              </h3>
              <p>
                Before starting the conversion, you can customize the output
                settings to suit your needs:
              </p>
              <ul>
                <li>
                  <strong>Output Folder:</strong> Choose the folder where the
                  converted PDF files will be saved. You can either specify a
                  custom folder or select the default option,{" "}
                  <strong>“Save to the same folder as original files.”</strong>
                </li>
                <li>
                  <strong>Output Mode:</strong> Decide how you want your PDFs to
                  be generated:
                  <ul>
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
                <li>
                  <strong>JPEG Quality:</strong> Adjust the quality of the
                  output images. You can set the quality anywhere from 1 (lowest
                  quality with highest compression) to 100 (best quality with
                  minimal compression). This allows you to balance file size and
                  image clarity.
                </li>
              </ul>
              <div className="my-10 flex justify-center">
                <Image
                  src={productImages.JPGtoPDFConverterSettings.imgName}
                  width={productImages.JPGtoPDFConverterSettings.width}
                  height={productImages.JPGtoPDFConverterSettings.height}
                  alt={productImages.JPGtoPDFConverterSettings.title}
                />
              </div>
              <h3 className="mt-1 font-semibold">
                4. Start the Conversion Process
              </h3>
              <p>
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

              <h3 className="mt-1 font-semibold">
                5. Access Your Converted PDFs
              </h3>
              <p>
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
            <h2 className="mt-1 font-semibold">
              Why Choose Our JPG to PDF Converter?
            </h2>
            <p>
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
