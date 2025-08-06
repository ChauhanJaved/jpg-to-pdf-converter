//src/app/help/page.tsx

// External imports
import { Download, Slash } from "lucide-react";
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

const portfolioItem = portfolioItems.find(
  (item) => item.id === ProductIDs.JPGtoPDFConverterDesktop,
);
export const metadata: Metadata = portfolioItem?.metaData ?? {};

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
              <BreadcrumbPage>Software User Guide</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <section className="container mx-auto px-5 lg:px-10 xl:max-w-screen-xl">
        <SectionHeader
          className="mt-10 mb-5 lg:mt-16 lg:mb-10"
          caption="Software User Guide"
          element="h1"
          desc="Windows 11/10/8/7 | JPG to PDF Converter Version 1.5"
        />
        <div className="flex flex-col items-center">
          <div className="flex w-full flex-col items-center rounded-md border p-10">
            {portfolioItem?.downloadLink ? (
              <Link href={portfolioItem.downloadLink}>
                <Button className={"text-base"}>
                  <Download className="mr-3" /> Download Now
                </Button>
              </Link>
            ) : null}
            <div className="mt-10 flex w-full flex-col items-center">
              <ProductImage
                src={productImages.JPGtoPDFConverterDesktop.imgName}
                width={productImages.JPGtoPDFConverterDesktop.width}
                height={productImages.JPGtoPDFConverterDesktop.height}
                alt={productImages.JPGtoPDFConverterDesktop.title}
                galleryID="software-user-guide"
              />
            </div>
          </div>

          <div className="mt-5 flex flex-col">
            <h2 className="mt-10 font-semibold">
              Adding Files to JPG to PDF Converter
            </h2>
            <p className="mt-2">
              The JPG to PDF Converter software for Windows makes it easy to add
              files for conversion. Follow the steps below to quickly add and
              organize your JPG files for seamless PDF creation.
            </p>

            <h2 className="mt-10 font-semibold">
              Adding Files Using the &#34;Add Files&#34; Button
            </h2>
            <p className="mt-2">
              To start adding files, click the <strong>“Add Files”</strong>{" "}
              button in the software interface. This action will open the
              standard file browse and select window, allowing you to navigate
              to the folder where your JPG files are stored. From this window,
              you can select one or multiple files that you want to include in
              the conversion process.
            </p>

            <h2 className="mt-10 font-semibold">
              Drag and Drop for Convenience
            </h2>
            <p className="mt-2">
              If you prefer a faster method, the software allows you to drag and
              drop files directly into the file list. Open Windows Explorer,
              locate the files or folders you want to convert, and simply drag
              them into the program window. This feature is particularly useful
              for users who like to work efficiently.
            </p>

            <h2 className="mt-10 font-semibold">
              Adding All Files in a Folder
            </h2>
            <p className="mt-2">
              To include all the files in a specific directory, click the{" "}
              <strong>“Add Folder”</strong> button. This feature not only adds
              files from the selected folder but also includes files from any
              sub-folders, ensuring a comprehensive batch addition. It&#39;s
              perfect for users managing large volumes of files stored in
              organized directories.
            </p>

            <h2 className="mt-10 font-semibold">Organizing Your Files</h2>
            <p className="mt-2">
              Once your files are added, the software provides tools for easy
              organization. You can use the <strong>“Move Up”</strong> and{" "}
              <strong>“Move Down”</strong> buttons to rearrange the order of the
              files in the list. This is particularly helpful if you are merging
              multiple JPGs into a single PDF and need them in a specific
              sequence.
            </p>

            <h2 className="mt-10 font-semibold">Removing Files</h2>
            <p className="mt-2">
              If you need to adjust your selection, the software allows you to
              remove individual files by selecting them and clicking the{" "}
              <strong>“Remove”</strong> button. To clear the entire file list
              and start over, use the <strong>“Remove All”</strong> button.
              These options give you complete control over the files included in
              the conversion process.
            </p>
            <div className="my-10 flex justify-center">
              <ProductImage
                src={productImages.JPGtoPDFConverterFilesSelected.imgName}
                width={productImages.JPGtoPDFConverterFilesSelected.width}
                height={productImages.JPGtoPDFConverterFilesSelected.height}
                alt={productImages.JPGtoPDFConverterFilesSelected.title}
                galleryID="software-user-guide-files-selected"
              />
            </div>
            <h2 className="mt-10 font-semibold">
              Modify Settings in JPG to PDF Converter
            </h2>
            <p className="mt-2">
              Customizing your conversion settings is easy with the JPG to PDF
              Converter. This guide provides step-by-step instructions for
              setting the output folder, selecting output modes, and adjusting
              JPEG quality to achieve the desired results for your PDF files.
            </p>

            <h2 className="mt-10 font-semibold">Output Folder</h2>
            <p className="mt-2">
              The software allows you to choose where your converted PDF files
              will be saved. By default, the output files are stored in the
              application&#39;s default folder. However, you can change this by
              browsing for a folder of your choice:
            </p>
            <ul>
              <li>
                Click the <strong>“Browse”</strong> button in the{" "}
                <strong>Output Folder</strong> section.
              </li>
              <li>
                Select a directory where you want the converted files to be
                saved.
              </li>
              <li>
                If you want to save the PDFs in the same location as the
                original JPG files, choose the{" "}
                <strong>“Save to same folder as original file”</strong> option.
              </li>
            </ul>
            <p className="mt-2">
              To easily access your converted files after the process is
              complete, enable the{" "}
              <strong>“Open output folder after conversion”</strong> option.
              This will automatically open the destination folder once the
              conversion is finished.
            </p>

            <h2 className="mt-10 font-semibold">Output Mode</h2>
            <p className="mt-2">
              The JPG to PDF Converter offers two output modes, allowing you to
              customize how your JPG files are converted:
            </p>
            <ul>
              <li>
                <strong>Combine All JPGs into a Single PDF:</strong> Select this
                option if you want all the selected JPG files to be merged into
                one PDF document. This is ideal for creating a consolidated PDF
                file, such as an album or presentation.
              </li>
              <li>
                <strong>Create Separate PDF for Each JPG:</strong> Choose this
                option if you prefer each JPG file to be converted into an
                individual PDF document. This is useful when you need separate
                PDFs for each image.
              </li>
            </ul>
            <h2 className="mt-10 font-semibold">JPEG Quality</h2>
            <p className="mt-2">
              The software allows you to control the quality of your JPG files
              before conversion. Adjusting the JPEG quality affects both the
              image resolution and file size in the resulting PDF:
            </p>
            <ul>
              <li>
                Use the slider or input box to set the JPEG quality from{" "}
                <strong>1</strong> (lowest quality and highest compression) to{" "}
                <strong>100</strong> (best quality but least compression).
              </li>
              <li>
                Lower values result in smaller PDF file sizes but may reduce
                image clarity, making it suitable for email or web sharing.
              </li>
              <li>
                Higher values retain maximum image detail, ensuring
                professional-quality output but with larger file sizes.
              </li>
            </ul>
            <p className="mt-2">
              Adjusting JPEG quality gives you the flexibility to balance image
              clarity and file size based on your needs.
            </p>
            <strong className="mt-10">Save and Apply Settings</strong>
            <p className="mt-2">
              Once you&#39;ve configured the desired settings, they will
              automatically apply to the conversion process. These options are
              designed to provide you with a tailored conversion experience,
              whether you are working with single images or large batches of
              files.
            </p>
            <p>
              Take full control of your conversions with the JPG to PDF
              Converter, ensuring your PDF output meets your exact requirements
              every time.
            </p>
            <div className="my-10 flex justify-center">
              <ProductImage
                src={productImages.JPGtoPDFConverterSettings.imgName}
                width={productImages.JPGtoPDFConverterSettings.width}
                height={productImages.JPGtoPDFConverterSettings.height}
                alt={productImages.JPGtoPDFConverterSettings.title}
                galleryID="software-user-guide-settings"
              />
            </div>

            <h2 className="mt-10 font-semibold">
              Start the Conversion Process
            </h2>
            <p className="mt-2">
              Once you have added all your JPG files and configured the
              necessary settings, you are ready to start the conversion process
              with the JPG to PDF Converter software. Follow the steps below to
              execute the conversion and retrieve your output files.
            </p>

            <h2 className="mt-10 font-semibold">Step-by-Step Instructions</h2>
            <p className="mt-2">
              Begin the conversion by clicking the <strong>“Convert”</strong>{" "}
              button located at the bottom of the application window. This
              action initiates the process of transforming your selected JPG
              images into PDF files based on your chosen settings.
            </p>
            <p>
              During the conversion process, a progress bar or status indicator
              will display the current progress of the operation. This allows
              you to monitor the software as it processes each file in your
              list.
            </p>

            <h2 className="mt-10 font-semibold">
              Retrieving Your Output Files
            </h2>
            <p className="mt-2">
              After the conversion is complete, the software will save your
              newly created PDF files in the location you specified in the{" "}
              <strong>Output Folder</strong> settings. If you enabled the{" "}
              <strong>“Open output folder after conversion”</strong> option, the
              application will automatically open the destination folder, giving
              you instant access to your files.
            </p>
            <p>Depending on your selected output mode:</p>
            <ul>
              <li>
                If you chose{" "}
                <strong>“Combine All JPGs into a Single PDF”</strong>, you will
                find one consolidated PDF file containing all the images you
                added to the list.
              </li>
              <li>
                If you selected{" "}
                <strong>“Create Separate PDF for Each JPG”</strong>, each image
                will be converted into its own PDF file and saved individually
                in the output folder.
              </li>
            </ul>

            <h2 className="mt-10 font-semibold">Conclusion</h2>
            <p className="mt-2">
              With just a few clicks, the JPG to PDF Converter simplifies the
              process of transforming images into professional-quality PDF
              documents. Whether you are working on a single file or a large
              project, the intuitive interface and robust features ensure a
              seamless conversion experience.
            </p>
            <p>
              Start your conversion today and enjoy quick, reliable results with
              the JPG to PDF Converter software!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
