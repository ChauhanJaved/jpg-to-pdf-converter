import { PDFDocument } from "pdf-lib";

export interface FileObject {
  file: File;
  id: string;
}
export enum PageOrientationEnum {
  portrait = "portrait",
  landscape = "landscape",
}
export enum PageSizeEnum {
  A4 = "a4",
  USLetter = "us-letter",
  Fit = "fit",
}
export enum MarginEnum {
  None = "none",
  Small = "small",
  Large = "large",
}
type PageOrientation = "portrait" | "landscape";
type PageSize = "a4" | "us-letter" | "fit";
type Margin = "none" | "small" | "large";

// Define standard page sizes
const pageSizes = {
  a4: { width: 595.28, height: 841.89 }, // A4 size in points
  "us-letter": { width: 612, height: 792 }, // US Letter size in points
};

// Define margin sizes in points (1pt = 1/72 inch)
export const marginSizes = {
  none: 0,
  small: 20, // Small margin
  large: 50, // Large margin
};

// Convert the JPG files to PDF with customization options
export const handleConvertToPdf = async (
  fileList: FileObject[],
  pageOrientation: PageOrientation = "portrait",
  pageSize: PageSize = "fit",
  margin: Margin = "none",
) => {
  // Create a new PDF document
  const pdfDoc = await PDFDocument.create();

  for (const file of fileList) {
    const imageBytes = await file.file.arrayBuffer();
    const image = await pdfDoc.embedJpg(imageBytes);

    // Get the dimensions of the image
    const imageWidth = image.width;
    const imageHeight = image.height;

    // Define the page dimensions based on the chosen size
    let pageWidth, pageHeight;
    if (pageSize === "fit") {
      pageWidth = imageWidth;
      pageHeight = imageHeight;
    } else {
      const size = pageSizes[pageSize];
      pageWidth = size.width;
      pageHeight = size.height;
    }

    // Swap dimensions for landscape orientation
    if (pageOrientation === "landscape") {
      [pageWidth, pageHeight] = [pageHeight, pageWidth];
    }

    // Calculate margin
    const marginSize = marginSizes[margin];
    const availableWidth = pageWidth - marginSize * 2;
    const availableHeight = pageHeight - marginSize * 2;

    // Calculate the image dimensions to fit within the available area
    let drawWidth = availableWidth;
    let drawHeight = (imageHeight * availableWidth) / imageWidth;

    // Adjust if the image height exceeds the available height
    if (drawHeight > availableHeight) {
      drawHeight = availableHeight;
      drawWidth = (imageWidth * availableHeight) / imageHeight;
    }

    // Add a new page to the PDF with the calculated dimensions
    const page = pdfDoc.addPage([pageWidth, pageHeight]);

    // Draw the image on the page with the specified margin
    page.drawImage(image, {
      x: (pageWidth - drawWidth) / 2,
      y: (pageHeight - drawHeight) / 2,
      width: drawWidth,
      height: drawHeight,
    });
  }

  // Save the PDF and download it
  const pdfBytes = await pdfDoc.save();
  downloadPdf(pdfBytes);
};

// Helper function to download the PDF file with a unique name
const downloadPdf = (pdfBytes: Uint8Array) => {
  const blob = new Blob([pdfBytes], { type: "application/pdf" });

  // Generate a unique filename using a timestamp
  const uniqueName = `converted_${new Date().toISOString().replace(/[:.]/g, "-")}.pdf`;

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = uniqueName;
  a.click();
};
