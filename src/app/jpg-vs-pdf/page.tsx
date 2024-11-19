import SectionHeader from "@/components/section-header";
import { MonitorDown, Slash } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { HeaderNavItems, portfolioItems } from "@/data/website-data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Page() {
  const portfolioItem = portfolioItems[0];
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
              <BreadcrumbPage>JPG vs PDF</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <section className="container px-5 text-gray-700 dark:text-gray-300 lg:px-10 xl:max-w-screen-xl">
        <SectionHeader
          className="mb-5 mt-10 lg:mb-10 lg:mt-16"
          caption="PDF vs JPG"
          element="h1"
          desc="Portable Document Format (PDF) | Joint Photographic Experts Group (JPEG)"
        />
        <div className="mt-10 flex flex-col">
          <div className="flex flex-col lg:text-lg">
            <h2 className="font-semibold">Which File Format Should You Use?</h2>
            <p>
              Choosing between PDF and JPG file formats depends on your specific
              needs, as each serves a distinct purpose. This guide will help you
              understand the key differences between these two popular formats
              and decide which one is best suited for your use case.
            </p>

            <h2 className="mt-1 font-semibold">What is a JPG?</h2>
            <p>
              The <strong>JPG</strong> image format was developed by the{" "}
              <strong>Joint Photographic Experts Group (JPEG)</strong> in 1992.
              While commonly referred to as &#34;JPEG,&#34; it is often
              shortened to &#34;JPG&#34; due to earlier file-naming limitations.
            </p>
            <p>
              JPG files are designed to reduce image file sizes through a
              process known as <strong>lossy compression</strong>. This
              compression permanently removes certain image data to create
              smaller file sizes, making JPG an ideal choice for sharing and
              displaying images on websites. However, this compression can
              result in some loss of image quality, especially when the file is
              repeatedly saved and compressed.
            </p>
            <p>
              <strong>When to Use JPG?</strong>
            </p>
            <ul>
              <li>
                Optimizing images for websites to improve page load speeds.
              </li>
              <li>
                Sharing photos and images over email or social media where
                smaller file sizes are essential.
              </li>
              <li>Reducing storage space for image-heavy files.</li>
            </ul>

            <h2 className="mt-1 font-semibold">What is a PDF?</h2>
            <p>
              The <strong>Portable Document Format (PDF)</strong>, created by
              Adobe, is the gold standard for sharing digital documents. Unlike
              JPG, PDF is a document format that ensures your file is preserved
              exactly as intended, regardless of the device or platform used to
              open it.
            </p>
            <p>
              PDFs are highly versatile, allowing you to combine images, text,
              and graphics into a single file. They are perfect for storing and
              sharing multi-page documents, presentations, and digitized forms.
              Additionally, PDFs maintain consistent formatting and are easily
              customizable for printing or editing purposes.
            </p>
            <p>
              <strong>When to Use PDF?</strong>
            </p>
            <ul>
              <li>
                Sharing documents or images that must maintain their original
                formatting across devices.
              </li>
              <li>
                Combining multiple images, text, or scanned documents into one
                cohesive file.
              </li>
              <li>Creating files for professional printing or archiving.</li>
            </ul>

            <h2 className="mt-1 font-semibold">
              Key Differences Between JPG and PDF
            </h2>
            <table className="mt-3 border p-3">
              <thead className="border">
                <tr className="p-3">
                  <th>Feature</th>
                  <th>JPG</th>
                  <th>PDF</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border">
                  <td className="p-3">
                    <strong>Purpose</strong>
                  </td>
                  <td>Primarily used for web images and photographs.</td>
                  <td>
                    Used for sharing documents and combining text and images.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Compression</strong>
                  </td>
                  <td>
                    Lossy compression reduces file size but can degrade quality.
                  </td>
                  <td>
                    Supports lossless compression, preserving quality and
                    layout.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Customizability</strong>
                  </td>
                  <td>
                    Limited to image adjustments like size and resolution.
                  </td>
                  <td>
                    Highly customizable for editing, printing, and combining
                    files.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Multi-Page Support</strong>
                  </td>
                  <td>Does not support multi-page files.</td>
                  <td>Can combine multiple pages or images into one file.</td>
                </tr>
                <tr>
                  <td>
                    <strong>Platform Compatibility</strong>
                  </td>
                  <td>
                    Universal for viewing images but may vary in quality on
                    different platforms.
                  </td>
                  <td>
                    Universally consistent across all devices and platforms.
                  </td>
                </tr>
              </tbody>
            </table>

            <h2 className="mt-1 font-semibold">
              Which Format Should You Choose?
            </h2>
            <p>
              If you need small, easily shareable image files,{" "}
              <strong>JPG</strong> is a great choice. However, if you’re looking
              for a format that preserves document integrity, allows for
              multi-page files, and offers more customization options,{" "}
              <strong>PDF</strong> is the clear winner.
            </p>
            <p>
              For those who want to convert JPG to PDF, our{" "}
              <strong>JPG to PDF Converter</strong> is the perfect solution.
              This Windows software allows you to combine multiple JPG files
              into a single PDF document effortlessly.
            </p>

            <h3 className="mt-1 font-semibold">
              Get Started with JPG to PDF Conversion
            </h3>
            <div className="my-3 flex w-full flex-col items-center rounded border p-10 shadow">
              <Link href={portfolioItem.downloadLink}>
                <Button className={"py-6 text-xl"}>
                  <MonitorDown className="mr-3 h-8 w-8" /> Download Now
                </Button>
              </Link>
              <div className="mt-10 flex w-full flex-col items-center md:w-2/3">
                <Image
                  src={portfolioItem.src}
                  width={portfolioItem.width}
                  height={portfolioItem.height}
                  alt={portfolioItem.title}
                  className="relative"
                />
              </div>
            </div>
            <p>
              Download our <strong>JPG to PDF Converter</strong> and install it
              on your Windows computer. The software offers a free 15-day trial,
              giving you the chance to explore all its features. Whether
              you&#39;re converting scanned documents or organizing images into
              a professional-quality PDF, our converter makes the process quick
              and seamless.
            </p>
            <p>
              Don&#39;t wait!{" "}
              <a href="download-link">Download the JPG to PDF Converter</a>{" "}
              today and experience the convenience of creating high-quality PDFs
              from your images.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
