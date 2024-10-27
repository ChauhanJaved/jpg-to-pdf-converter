"use client";

//External Imports----------
import { useState } from "react";
import { Download, Trash2 } from "lucide-react";

//Internal Imports----------
import {
  handleConvertToPdf,
  MarginEnum,
  PageOrientationEnum,
  PageSizeEnum,
} from "@/lib/pdf-lib";
import { raleway } from "@/lib/font";
import ButtonToolbar from "@/components/ui/button-toolbar";
import SettingsSheet from "@/components/ui/settings-sheet";
import { useFileContext } from "@/context/file-context";
import DropZoneBox from "@/components/ui/drop-zone-box";
import FileInputButton from "@/components/ui/file-input-button";

const HeroWithFileProvider = () => {
  //FileList----------
  const { fileList, setFileList } = useFileContext();
  const handleClearList = () => {
    setFileList([]);
    window.scrollTo({ top: 0 });
  };

  //Conversion--------
  const [isConvertingFiles, setIsConvertingFiles] = useState(false);
  const [orientation, setOrientation] = useState(PageOrientationEnum.portrait);
  const [pageSize, setPageSize] = useState(PageSizeEnum.A4);
  const [margin, setMargin] = useState(MarginEnum.None);
  const [imagePreview, setImagePreview] = useState(true);
  const handleOrientationChange = (value: PageOrientationEnum) => {
    setOrientation(value);
  };
  const handlePageSizeChange = (newPageSize: PageSizeEnum) => {
    setPageSize(newPageSize);
  };
  const handleMarginChange = (newMargin: MarginEnum) => {
    setMargin(newMargin);
  };
  const handleImagePreviewChange = (isImgPreview: boolean) => {
    setImagePreview(isImgPreview);
  };
  const handleConversion = async () => {
    setIsConvertingFiles(true);
    await handleConvertToPdf(fileList, orientation, pageSize, margin);
    setIsConvertingFiles(false);
  };
  // Adding file
  const [isLoadingFiles, setIsLoadingFiles] = useState(false);

  return (
    <div className="flex flex-col">
      {/* Box----------1 */}
      {fileList.length === 0 && (
        <div className="flex flex-col items-center justify-center gap-2 px-6 pb-6 pt-6 lg:pt-10">
          <h1
            className={`${raleway.className} text-4xl font-extrabold lg:text-5xl`}
          >
            Fee JPG to PDF Converter
          </h1>
          <p
            className={`text-lg leading-7 text-secondary-foreground lg:text-xl`}
          >
            Combine all JPG images into multi Page PDF or Convert each JPG into
            single page PDF
          </p>
        </div>
      )}
      {/* Box----------2 */}
      {fileList.length > 0 && (
        <div className="mt-3 flex w-full flex-wrap items-center justify-end gap-3 p-3">
          <FileInputButton
            buttonType="toolbar"
            isDisabled={isConvertingFiles || isLoadingFiles}
            setIsLoadingFiles={setIsConvertingFiles}
          />
          <ButtonToolbar
            disabled={
              fileList.length === 0 || isConvertingFiles || isLoadingFiles
            }
            caption="Remove All"
            handleOnClick={handleClearList}
            icon={Trash2}
          ></ButtonToolbar>
          <SettingsSheet
            disabled={isConvertingFiles || isLoadingFiles}
            orientation={orientation}
            pageSize={pageSize}
            margin={margin}
            imgPreview={imagePreview}
            onOrientationChange={handleOrientationChange}
            onPageSizeChange={handlePageSizeChange}
            onMarginChange={handleMarginChange}
            onImgPreviewChange={handleImagePreviewChange}
          />
          <ButtonToolbar
            disabled={
              fileList.length === 0 || isConvertingFiles || isLoadingFiles
            }
            caption="Convert"
            handleOnClick={handleConversion}
            icon={Download}
          ></ButtonToolbar>
        </div>
      )}
      {/* Box----------3 */}
      <DropZoneBox
        isDisabled={isConvertingFiles || isLoadingFiles}
        setIsLoadingFiles={setIsLoadingFiles}
      />
    </div>
  );
};

export default HeroWithFileProvider;
