import React, { Fragment, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import ImageList from "./ImageList";
import Button from "./Button";
import HeroIcons, { IconNames } from "./HeroIcons";
import { PDFDocument } from "pdf-lib";

interface DropzoneProps {
  filePreviews: { file: File; preview: string }[];
  setFilePreviews: React.Dispatch<
    React.SetStateAction<{ file: File; preview: string }[]>
  >;
}

const Dropzone: React.FC<DropzoneProps> = ({
  filePreviews,
  setFilePreviews,
}) => {
  // Handle file drop or selection
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const newFiles = acceptedFiles.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));
      setFilePreviews((prev) => [...prev, ...newFiles]);
    },
    [setFilePreviews],
  );

  // Set up the dropzone, restricting to JPG files only
  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    noClick: true,
    noKeyboard: true,
    accept: { "image/jpeg": [".jpg", ".jpeg"] }, // Only allow JPG files
    multiple: true, // Allow multiple file selection
  });

  // Handle removing files in the parent component
  const handleRemoveFile = (fileName: string) => {
    const updatedPreviews = filePreviews.filter(
      (f) => f.file.name !== fileName,
    );
    setFilePreviews(updatedPreviews);
  };
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
    <div className="mt-10 w-full">
      {/* Drag and drop area */}
      <div
        {...getRootProps()}
        className={`flex min-h-[300px] w-full flex-col items-center justify-center rounded-lg border-2 border-dashed text-center transition ${
          isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
        }`}
      >
        <input {...getInputProps()} />
        {filePreviews.length > 0 ? (
          <Fragment>
            {/* z-index 996 */}
            <div className="sticky top-[100px] z-[996] ml-auto flex flex-row items-center justify-center p-3">
              <Button
                className={`${filePreviews.length > 0 ? "visible" : "invisible"} sticky top-[100px] mr-3`}
                caption="Convert to PDF"
                handleClick={handleConvertToPdf}
              />
              <div className="relative">
                <p
                  className={`${filePreviews.length > 0 ? "visible opacity-100" : "invisible opacity-0"} absolute left-0 top-0 z-[1] flex h-[30px] w-[30px] items-center justify-center rounded-full border border-white bg-blue-ultramarine text-white`}
                >
                  {filePreviews.length}
                </p>
                <button
                  onClick={open}
                  className={`${filePreviews.length > 0 ? "visible opacity-100" : "invisible opacity-0"} z-[0] ml-[15px] mt-[15px] flex h-[40px] w-[40px] items-center justify-center rounded bg-blue-ultramarine text-white transition-all duration-300 hover:opacity-90 active:opacity-90`}
                >
                  <HeroIcons
                    iconName={IconNames.Plus}
                    className="size-6 font-bold"
                    strokeWidth={1.5}
                  />
                </button>
              </div>
            </div>
            <ImageList
              filePreviews={filePreviews}
              onRemove={handleRemoveFile}
            />
          </Fragment>
        ) : (
          <div className="">
            <Button caption="Select JPG Images" handleClick={open} />
            <p className="mt-3 font-bold text-black-500">
              or drop JPG images here
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropzone;
