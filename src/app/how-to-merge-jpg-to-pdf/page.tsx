import SectionHeader from "@/components/section-header";
import { MonitorDown, Slash } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  HeaderNavItems,
  productData,
  productImages,
} from "@/data/website-data";
export default function Page() {
  return (
    <>
      <div className="px-5 pt-24">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href={`/#${HeaderNavItems.Home}`}>
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href={`/#${HeaderNavItems.Desktop}`}>
                Desktop
              </BreadcrumbLink>
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
      <section className="container px-5 text-gray-700 dark:text-gray-300 lg:px-10 xl:max-w-screen-xl">
        <SectionHeader
          className="mb-5 mt-10 lg:mb-10 lg:mt-16"
          caption="Merge JPG to PDF"
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
              How to Combine Multiple JPG Images into a Single PDF in Windows
            </h2>
            <p>
              Portable Document Format (PDF) is one of the most versatile and
              widely used file formats for sharing, printing, and archiving. If
              you have a collection of JPG images, such as photos or scanned
              documents, you can combine them into a single PDF file for easier
              sharing and professional presentation.
            </p>
            <p>
              Combining multiple JPG images into one PDF document is quick and
              simple with our <strong>JPG to PDF Converter</strong>. This
              software allows you to batch process multiple images at once,
              saving you time and effort while ensuring high-quality output.
            </p>

            <h2 className="mt-1 font-semibold">
              Step-by-Step Guide to Merge JPG Files into a Single PDF
            </h2>
            <div className="ml-3">
              <h3 className="mt-1 font-semibold">
                1. Download and Install the JPG to PDF Converter
              </h3>
              <p>
                To begin, download the <strong>JPG to PDF Converter</strong>{" "}
                software and install it on your Windows computer. The software
                is lightweight and easy to install. Once the installation is
                complete, launch the program to access its intuitive and
                user-friendly interface.
              </p>

              <h3 className="mt-1 font-semibold">
                2. Add JPG Files to the Conversion List
              </h3>
              <p>
                Click on the <strong>“Add Files”</strong> button to open a file
                selection window. From there, browse to the folder containing
                your JPG images and select the files you wish to merge into a
                single PDF.
              </p>
              <p>
                Alternatively, you can use the drag-and-drop feature to add
                files directly from Windows Explorer. Simply select your JPG
                images or entire folders and drag them into the
                application&#39;s file list. This method is especially useful
                when handling a large number of files.
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
                3. Rearrange the Order of JPG Files
              </h3>
              <p>
                Before merging your images, you may want to rearrange the order
                in which they appear in the final PDF document. Use the{" "}
                <strong>“Move Up”</strong> and <strong>“Move Down”</strong>{" "}
                buttons to change the sequence of the JPG files in the list.
                This feature gives you full control over the organization of
                your merged PDF.
              </p>

              <h3 className="mt-1 font-semibold">
                4. Configure Conversion Settings
              </h3>
              <p>
                Before starting the conversion, take a moment to customize the
                output settings:
              </p>
              <ul>
                <li>
                  <strong>Output Folder:</strong> Specify the location where the
                  merged PDF file will be saved. You can select a custom folder
                  or use the default option,{" "}
                  <strong>“Save to the same folder as original files.”</strong>
                </li>
                <li>
                  <strong>Output Mode:</strong> Choose the mode for PDF
                  generation:
                  <ul>
                    <li>
                      <strong>“Combine all JPG to one PDF”</strong>: This option
                      merges all selected JPG images into a single PDF document,
                      perfect for creating multi-page PDFs.
                    </li>
                    <li>
                      <strong>“Create separate PDF for each JPG”</strong>: This
                      option generates a standalone PDF file for each JPG image,
                      which is ideal for individual documents.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>JPEG Quality:</strong> Adjust the quality of the
                  images in the PDF. You can set the quality level from 1
                  (lowest quality with maximum compression) to 100 (highest
                  quality with minimal compression) to balance file size and
                  clarity.
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
                5. Start the Conversion Process
              </h3>
              <p>
                Once your files are added, arranged, and the settings are
                configured, click on the <strong>“Convert”</strong> button to
                begin the merging process. The software will process all
                selected JPG files and combine them into a single PDF document.
              </p>
              <p>
                During the conversion, a progress bar will display the status of
                the operation. Depending on the number of files and their sizes,
                the process may take a few seconds to complete.
              </p>

              <h3 className="mt-1 font-semibold">
                6. Access the Merged PDF File
              </h3>
              <p>
                When the conversion is complete, navigate to the output folder
                to locate your newly merged PDF file. If you enabled the option{" "}
                <strong>“Open output folder after conversion”</strong>, the
                folder will open automatically, allowing you to view and use
                your PDF immediately.
              </p>
            </div>

            <h2 className="mt-1 font-semibold">
              Why Use Our JPG to PDF Converter for Merging Files?
            </h2>
            <p>
              Our JPG to PDF Converter offers a reliable and efficient solution
              for merging multiple images into a single PDF. With advanced
              options for batch processing, customizable settings, and a
              user-friendly interface, it simplifies the process while
              delivering professional-quality results. Download our software
              today and streamline your workflow!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
