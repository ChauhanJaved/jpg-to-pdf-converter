"use client";

//External Imports----------
import { useState } from "react";
import {
  handleConvertToPdf,
  MarginEnum,
  PageOrientationEnum,
  PageSizeEnum,
} from "@/lib/pdf-lib";
import { Download, X } from "lucide-react";

//Internal Imports----------
import ButtonToolbar from "./button-toolbar";
import SettingsSheet from "./settings-sheet";
import DropZoneButton from "./drop-zone-button";
import { useFileContext } from "@/context/file-context";

import DropZoneBox from "./drop-zone-box";

const Dropzone = () => {
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
  const handleOrientationChange = (value: PageOrientationEnum) => {
    setOrientation(value);
  };
  const handlePageSizeChange = (newPageSize: PageSizeEnum) => {
    setPageSize(newPageSize);
  };
  const handleMarginChange = (newMargin: MarginEnum) => {
    setMargin(newMargin);
  };
  const handleConversion = async () => {
    setIsConvertingFiles(true);
    await handleConvertToPdf(fileList, orientation, pageSize, margin);
    setIsConvertingFiles(false);
  };
  // Adding file
  const [isLoadingFiles, setIsLoadingFiles] = useState(false);

  return (
    <div className={`flex w-full flex-col items-center`}>
      {/* Toolbar */}
      <div className="sticky top-[82px] z-[8] w-full bg-white py-3">
        <div className="flex flex-wrap items-center justify-center space-x-3 rounded-md border bg-white py-3 shadow-sm sm:justify-end sm:pr-3">
          <DropZoneButton
            isDisabled={isConvertingFiles || isLoadingFiles}
            setIsLoadingFiles={setIsConvertingFiles}
          />
          <ButtonToolbar
            disabled={
              fileList.length === 0 || isConvertingFiles || isLoadingFiles
            }
            caption="Clear All"
            handleOnClick={handleClearList}
            icon={X}
          ></ButtonToolbar>
          <SettingsSheet
            disabled={isConvertingFiles || isLoadingFiles}
            orientation={orientation}
            pageSize={pageSize}
            margin={margin}
            onOrientationChange={handleOrientationChange}
            onPageSizeChange={handlePageSizeChange}
            onMarginChange={handleMarginChange}
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
      </div>
      <DropZoneBox
        isDisabled={isConvertingFiles || isLoadingFiles}
        setIsLoadingFiles={setIsLoadingFiles}
      />
    </div>
  );
};

export default Dropzone;
