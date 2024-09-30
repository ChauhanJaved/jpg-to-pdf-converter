"use client";
//External  imports

//Internal imports

import { HeaderNavItems } from "@/data/website-data";
import Dropzone from "./UI/Dropzone";
import SectionHeader from "./UI/SectionHeader";
import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import Button from "./UI/Button";

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
        className="mt-10"
        caption="Select JPG Images"
        handleClick={() => {
          if (openFileDialog) openFileDialog(); // Call the open dialog function
        }}
      />

      <Button
        disabled={filePreviews.length > 0 ? false : true}
        className="mt-5"
        caption="Convert to PDF"
        handleClick={handleConvertToPdf}
      />

      <Dropzone
        filePreviews={filePreviews}
        setFilePreviews={setFilePreviews}
        setOpenFileDialog={setOpenFileDialog}
      />
    </section>
  );
};
export default Hero;
