"use client";
import React from "react";
import SectionHeader from "./section-header";
import { HeaderNavItems, portfolioItems } from "@/data/website-data";
import { Button } from "./ui/button";
import { MonitorDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Desktop() {
  const portfolioItem = portfolioItems[0];
  return (
    <section
      id={HeaderNavItems.Desktop}
      className="container scroll-m-20 px-5 pt-10 text-gray-700 dark:text-gray-300 lg:px-10 lg:pt-20 xl:max-w-screen-xl"
    >
      <SectionHeader
        caption="Desktop Application"
        element="h2"
        desc="Windows 11/10/8/7 | Fully Functional 15 Days Free Trial | Secure Download"
      />
      <div className="mt-10 flex flex-col">
        <div className="flex flex-col items-center">
          <div className="flex w-full flex-col items-center rounded border p-10 shadow">
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
        </div>
        <div className="mt-5 flex flex-col">
          <p className="text-base font-semibold lg:text-lg">
            Introducing the Ultimate JPG to PDF Converter for Windows
          </p>
          <p className="text-base lg:text-lg">
            Transform your JPG files into PDFs securely and efficiently with our
            powerful desktop software. Designed for Windows users, our JPG to
            PDF converter allows you to perform conversions entirely offline,
            ensuring that your data remains private and secure. Without the need
            for an internet connection, you can confidently convert files on
            your local system, eliminating any risk of data breaches or
            unauthorized access.
          </p>
        </div>
        <div className="mt-5 flex flex-col">
          <p className="text-base font-semibold lg:text-lg">
            Lightning-Fast and Reliable Conversions
          </p>
          <p className="text-base lg:text-lg">
            Experience rapid conversion from JPG to PDF with our dependable
            software. Whether you&#39;re working from home, the office, or on
            the go, our tool is engineered to deliver quick and reliable results
            without relying on an internet connection. Convert your JPEG files
            to PDF format in a matter of seconds, no matter where you are,
            ensuring your work is always uninterrupted.
          </p>
        </div>
        <div className="mt-5 flex flex-col">
          <p className="text-base font-semibold lg:text-lg">
            Effortless Batch Conversion
          </p>
          <p className="text-base lg:text-lg">
            Save time and streamline your workflow by converting multiple JPG
            images to PDFs in a single operation. Our batch processing feature
            is designed to handle large volumes of files quickly and
            efficiently, eliminating the tedious task of converting images one
            by one. Whether you&#39;re dealing with a handful of images or
            thousands, our software makes bulk conversion simple and
            hassle-free.
          </p>
        </div>
        <div className="mt-5 flex flex-col">
          <p className="text-base font-semibold lg:text-lg">
            Intuitive Drag-and-Drop Interface
          </p>
          <p className="text-base lg:text-lg">
            Our user-friendly interface makes file conversion effortless, even
            for beginners. Simply drag and drop your JPG files into the
            software, and you&#39;re ready to start converting. This intuitive
            feature simplifies the process, allowing you to focus on your work
            rather than navigating complex menus.
          </p>
        </div>
        <div className="mt-5 flex flex-col">
          <p className="text-base font-semibold lg:text-lg">
            Flexible Conversion Options
          </p>
          <p className="text-base lg:text-lg">
            Customize your PDF output with versatile conversion modes. Whether
            you need to create separate PDFs for each JPG or combine multiple
            images into a single multi-page PDF document, our software gives you
            the flexibility to meet your specific needs. Tailor the conversion
            process to suit your preferences and ensure your files are organized
            just the way you want them.
          </p>
        </div>
        <div className="mt-5 flex flex-col">
          <p className="text-base font-semibold lg:text-lg">
            Organize Images with Ease
          </p>
          <p className="text-base lg:text-lg">
            Take control of your file order before conversion with our
            easy-to-use MOVE UP and MOVE DOWN buttons. Rearrange your JPG images
            to determine their sequence in the final PDF, giving you complete
            freedom to organize your documents exactly as you envision.
          </p>
        </div>
        <div className="mt-5 flex flex-col">
          <p className="text-base font-semibold lg:text-lg">
            Designed for High-Volume Conversions
          </p>
          <p className="text-base lg:text-lg">
            Need to convert thousands of JPG files in seconds? Our JPG to PDF
            Converter is one of the fastest and most versatile solutions
            available. Ideal for both professionals and casual users, this
            robust software allows you to batch process large collections of
            JPEG files with just a few clicks. Launch the converter, drag and
            drop your files or folders into the conversion list, customize your
            settings, and hit &#34;Convert&#34;—your images will be instantly
            transformed into high-quality PDF documents.
          </p>
        </div>
        <div className="mt-5 flex flex-col">
          <p className="text-base font-semibold lg:text-lg">
            User-Friendly with Advanced Features
          </p>
          <p className="text-base lg:text-lg">
            Not only is our JPG to PDF Converter fast and easy to use, but it
            also offers advanced options for those who need more control over
            the conversion process. Choose to convert each JPG file into a
            separate PDF or merge all your images into a single, multi-page PDF.
            Adjust image quality settings to ensure the final PDF meets your
            specific requirements, making this tool adaptable to a wide range of
            needs.
          </p>
        </div>
        <div className="mt-5 flex flex-col">
          <p className="text-base font-semibold lg:text-lg">
            Why Convert JPG to PDF?
          </p>
          <p className="text-base lg:text-lg">
            JPG (Joint Photographic Experts Group) is a widely-used image format
            known for its efficient compression, perfect for online sharing.
            However, when it comes to preserving image quality, especially for
            text or line drawings, converting to PDF (Portable Document Format)
            is often the better choice. PDFs are universally recognized and
            ideal for sharing, printing, and archiving documents, offering a
            combination of text, graphics, and images that maintain their
            quality across devices.
          </p>
        </div>
        <div className="mt-5 flex flex-col">
          <p className="text-base font-semibold lg:text-lg">Conclusion</p>
          <p className="text-base lg:text-lg">
            Our JPG to PDF Converter for Windows is the perfect solution for
            anyone looking to convert images to PDF with speed, security, and
            ease. Whether you&#39;re handling a few files or thousands, this
            software delivers the efficiency and flexibility you need to get the
            job done. Don&#39;t settle for less—download the best JPG to PDF
            Converter for Windows today and experience effortless file
            conversion at its finest.
          </p>
        </div>
        <div className="mt-5 flex flex-col">
          <p className="text-base font-semibold lg:text-lg">
            Helpful Links for Desktop App
          </p>
          <Link href={""} className="text-base lg:text-lg">
            <Button variant={"link"} className="h-auto px-0 py-0">
              JPG to PDF Converter software user guide
            </Button>
          </Link>
          <Link href={""} className="text-base lg:text-lg">
            <Button variant={"link"} className="h-auto px-0 py-0">
              How to convert JPG to PDF in batch?
            </Button>
          </Link>
          <Link href={""} className="text-base lg:text-lg">
            <Button variant={"link"} className="h-auto px-0 py-0">
              How to combine multiple JPG to PDF in Windows?
            </Button>
          </Link>
          <Link href={""} className="text-base lg:text-lg">
            <Button variant={"link"} className="h-auto px-0 py-0">
              How do I change a scanned JPGs to a PDF file?
            </Button>
          </Link>
          <Link href={""} className="text-base lg:text-lg">
            <Button variant={"link"} className="h-auto px-0 py-0">
              Which file format should you use JPG or PDF?
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
