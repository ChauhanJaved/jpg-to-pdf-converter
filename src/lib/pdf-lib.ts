import { PDFDocument } from "pdf-lib";
// Define the type for a file object
interface FileObject {
  file: File;
  id: string;
}
// Convert the JPG files to PDF
export const handleConvertToPdf = async (fileList: FileObject[]) => {
  // Create a new PDF document
  const pdfDoc = await PDFDocument.create();

  for (const file of fileList) {
    const imageBytes = await file.file.arrayBuffer();
    const image = await pdfDoc.embedJpg(imageBytes);

    // Get the dimensions of the image
    const imageWidth = image.width;
    const imageHeight = image.height;

    // Add a new page to the PDF for each image
    const page = pdfDoc.addPage([imageWidth, imageHeight]);

    // Draw the image on the page, scaling it to fit if necessary
    page.drawImage(image, {
      x: 0,
      y: 0,
      width: imageWidth,
      height: imageHeight,
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
