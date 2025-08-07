// src/app/jpg-vs-pdf/page.tsx

// External imports
import { Download, Slash } from "lucide-react";
import Link from "next/link";

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
              <BreadcrumbPage>JPG vs PDF</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <section className="container mx-auto px-5 lg:px-10 xl:max-w-screen-xl">
        <SectionHeader
          className="mt-10 lg:mt-16"
          caption="PDF vs JPG"
          element="h1"
          desc="Portable Document Format (PDF) | Joint Photographic Experts Group (JPEG)"
        />
        <div className="mt-10 flex flex-col">
          <h2 className="mt-10 font-semibold">
            Which File Format Should You Use?
          </h2>
          <p className="mt-2">
            Choosing between PDF and JPG file formats depends on your specific
            needs, as each serves a distinct purpose. This guide will help you
            understand the key differences between these two popular formats and
            decide which one is best suited for your use case.
          </p>

          <h2 className="mt-5 font-semibold">What is a JPG?</h2>
          <p className="mt-2">
            The <strong>JPG</strong> image format was developed by the{" "}
            <strong>Joint Photographic Experts Group (JPEG)</strong> in 1992.
            While commonly referred to as &#34;JPEG,&#34; it is often shortened
            to &#34;JPG&#34; due to earlier file-naming limitations.
          </p>
          <p>
            JPG files are designed to reduce image file sizes through a process
            known as <strong>lossy compression</strong>. This compression
            permanently removes certain image data to create smaller file sizes,
            making JPG an ideal choice for sharing and displaying images on
            websites. However, this compression can result in some loss of image
            quality, especially when the file is repeatedly saved and
            compressed.
          </p>
          <h2 className="mt-5 font-semibold">When to Use JPG?</h2>
          <ul className="list-disc pl-5">
            <li className="mt-2">
              Optimizing images for websites to improve page load speeds.
            </li>
            <li>
              Sharing photos and images over email or social media where smaller
              file sizes are essential.
            </li>
            <li>Reducing storage space for image-heavy files.</li>
          </ul>

          <h2 className="mt-5 font-semibold">What is a PDF?</h2>
          <p className="mt-2">
            The <strong>Portable Document Format (PDF)</strong>, created by
            Adobe, is the gold standard for sharing digital documents. Unlike
            JPG, PDF is a document format that ensures your file is preserved
            exactly as intended, regardless of the device or platform used to
            open it.
          </p>
          <p>
            PDFs are highly versatile, allowing you to combine images, text, and
            graphics into a single file. They are perfect for storing and
            sharing multi-page documents, presentations, and digitized forms.
            Additionally, PDFs maintain consistent formatting and are easily
            customizable for printing or editing purposes.
          </p>
          <h2 className="mt-5 font-semibold">When to Use PDF?</h2>
          <ul className="list-disc pl-5">
            <li className="mt-2">
              Sharing documents or images that must maintain their original
              formatting across devices.
            </li>
            <li>
              Combining multiple images, text, or scanned documents into one
              cohesive file.
            </li>
            <li>Creating files for professional printing or archiving.</li>
          </ul>

          <h2 className="mt-5 font-semibold">
            Key Differences Between JPG and PDF
          </h2>
          <table className="mt-2 border">
            <caption className="py-2 text-left">
              A detailed comparison of features between JPG and PDF formats
            </caption>
            <thead>
              <tr>
                <th className="border px-3 py-1">Feature</th>
                <th className="border px-3 py-1">JPG</th>
                <th className="border px-3 py-1">PDF</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-3 py-1">
                  <strong>Purpose</strong>
                </td>
                <td className="border px-3 py-1">
                  Primarily used for web images and photographs.
                </td>
                <td className="border px-3 py-1">
                  Used for sharing documents and combining text and images.
                </td>
              </tr>
              <tr>
                <td className="border px-3 py-1">
                  <strong>Compression</strong>
                </td>
                <td className="border px-3 py-1">
                  Lossy compression reduces file size but can degrade quality.
                </td>
                <td className="border px-3 py-1">
                  Supports lossless compression, preserving quality and layout.
                </td>
              </tr>
              <tr>
                <td className="border px-3 py-1">
                  <strong>Customizability</strong>
                </td>
                <td className="border px-3 py-1">
                  Limited to image adjustments like size and resolution.
                </td>
                <td className="border px-3 py-1">
                  Highly customizable for editing, printing, and combining
                  files.
                </td>
              </tr>
              <tr>
                <td className="border px-3 py-1">
                  <strong>Multi-Page Support</strong>
                </td>
                <td className="border px-3 py-1">
                  Does not support multi-page files.
                </td>
                <td className="border px-3 py-1">
                  Can combine multiple pages or images into one file.
                </td>
              </tr>
              <tr>
                <td className="border px-3 py-1">
                  <strong>Platform Compatibility</strong>
                </td>
                <td className="border px-3 py-1">
                  Universal for viewing images but may vary in quality on
                  different platforms.
                </td>
                <td className="border px-3 py-1">
                  Universally consistent across all devices and platforms.
                </td>
              </tr>
            </tbody>
          </table>

          <h2 className="mt-5 font-semibold">
            Which Format Should You Choose?
          </h2>
          <p className="mt-2">
            If you need small, easily shareable image files,{" "}
            <strong>JPG</strong> is a great choice. However, if you’re looking
            for a format that preserves document integrity, allows for
            multi-page files, and offers more customization options,{" "}
            <strong>PDF</strong> is the clear winner.
          </p>
          <p>
            For those who want to convert JPG to PDF, our{" "}
            <strong>JPG to PDF Converter</strong> is the perfect solution. This
            Windows software allows you to combine multiple JPG files into a
            single PDF document effortlessly.
          </p>

          <h2 className="mt-5 font-semibold">
            Get Started with JPG to PDF Conversion
          </h2>
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
          <p className="mt-10">
            Download our <strong>JPG to PDF Converter</strong> and install it on
            your Windows computer. The software offers a free 15-day trial,
            giving you the chance to explore all its features. Whether
            you&#39;re converting scanned documents or organizing images into a
            professional-quality PDF, our converter makes the process quick and
            seamless.
          </p>
          <p>
            Don&#39;t wait!{" "}
            <a href="download-link">Download the JPG to PDF Converter</a> today
            and experience the convenience of creating high-quality PDFs from
            your images.
          </p>
        </div>
      </section>
    </>
  );
}
