"use client";
//External  imports

//Internal imports

import { HeaderNavItems } from "@/data/website-data";
import Dropzone from "./UI/Dropzone";
import SectionHeader from "./UI/SectionHeader";
import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import Button from "./UI/Button";
import HeroIcons, { IconNames } from "./UI/HeroIcons";

const Hero = () => {
  const [filePreviews, setFilePreviews] = useState<
    { file: File; preview: string }[]
  >([]);
  const [openFileDialog, setOpenFileDialog] = useState<(() => void) | null>(
    null,
  );

  // Convert the JPG files to PDF
  const handleConvertToPdf = async () => {
    const pdfDoc = await PDFDocument.create();

    for (const { file } of filePreviews) {
      const imageBytes = await file.arrayBuffer();
      const image = await pdfDoc.embedJpg(imageBytes);
      const page = pdfDoc.addPage([image.width, image.height]);

      page.drawImage(image, {
        x: 0,
        y: 0,
        width: image.width,
        height: image.height,
      });
    }

    const pdfBytes = await pdfDoc.save();
    downloadPdf(pdfBytes);
  };

  // Helper function to download the PDF file
  const downloadPdf = (pdfBytes: Uint8Array) => {
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "converted.pdf";
    a.click();
  };
  return (
    <section
      id={HeaderNavItems.Home}
      className="relative m-auto mt-[80px] flex w-full scroll-m-[80px] flex-col items-center justify-start px-3 py-10 xl:max-w-screen-xl"
    >
      <SectionHeader
        caption="JPG to PDF Converter"
        desc="Convert JPG images to PDF in seconds. Easily adjust orientation and margins."
      />

      <Button
        disabled={filePreviews.length > 0 ? false : true}
        className="mt-5"
        caption="Convert to PDF"
        handleClick={handleConvertToPdf}
      />
      <p
        className={`${filePreviews.length > 0 ? "visible opacity-100" : "invisible opacity-0"} fixed right-[41px] top-[259px] z-[997] flex h-[30px] w-[30px] items-center justify-center rounded-full border border-black-900 bg-blue-ultramarine text-white`}
      >
        {filePreviews.length}
      </p>
      <button
        onClick={() => {
          if (openFileDialog) openFileDialog(); // Call the open dialog function
        }}
        className={`${filePreviews.length > 0 ? "visible opacity-100" : "invisible opacity-0"} fixed right-4 top-[280px] z-[996] flex h-[40px] w-[40px] items-center justify-center rounded bg-blue-ultramarine text-white transition-all duration-300 hover:opacity-90 active:opacity-90`}
      >
        <HeroIcons
          iconName={IconNames.Plus}
          className="size-6 font-bold"
          strokeWidth={1.5}
        />
      </button>

      <Dropzone
        filePreviews={filePreviews}
        setFilePreviews={setFilePreviews}
        setOpenFileDialog={setOpenFileDialog}
      />
    </section>
  );
};
export default Hero;
