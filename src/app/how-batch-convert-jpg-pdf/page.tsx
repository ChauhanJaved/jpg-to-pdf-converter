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
              <BreadcrumbPage>Batch Convert JPG to PDF</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <section className="container px-5 text-gray-700 dark:text-gray-300 lg:px-10 xl:max-w-screen-xl">
        <SectionHeader
          className="mb-5 mt-10 lg:mb-10 lg:mt-16"
          caption="JPG to PDF Converter"
          element="h1"
          desc="Windows 11/10/8/7 | Fully Functional - No Limits - 15 Days Free | Safe & Secure Download"
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
        </div>
      </section>
    </>
  );
}
