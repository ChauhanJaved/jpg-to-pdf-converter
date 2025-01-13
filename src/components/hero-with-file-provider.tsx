"use client";

//External Imports
import { useState } from "react";
import { Download, Trash2 } from "lucide-react";

//Internal Imports
import {
  handleConvertToPdf,
  MarginEnum,
  PageOrientationEnum,
  PageSizeEnum,
} from "@/lib/pdf-lib";
import SectionHeader from "@/components/section-header";
import HeroButtonToolbar from "@/components/hero-button-toolbar";
import HeroFileInputButton from "@/components/hero-file-input-button";
import HeroSettingsSheet from "@/components/hero-settings-sheet";
import HeroDropZoneBox from "@/components/hero-drop-zone-box";
import { useFileContext } from "@/context/file-context";
import { useUser } from "@/context/user-context";
import LicenseDialog from "@/components/license-dialog";
import SocialMediaDialog from "@/components/social-media-dialog";
import DialogProcessing from "@/components/dialog-processing";

const HeroWithFileProvider = () => {
  //User status
  const { userStatus, conversionCount, decrementConversion } = useUser();
  const [showLicenseDialog, setShowLicenseDialog] = useState(false);
  const [showRegisterLicenseDialog, setShowRegisterLicenseDialog] =
    useState(false);
  const [showSocialMediaDialog, setShowSocialMediaDialog] = useState(false);

  //FileList----------
  const { fileList, setFileList } = useFileContext();
  const handleClearList = () => {
    setFileList([]);
    window.scrollTo({ top: 0 });
  };

  //Conversion--------
  const [isConvertingFiles, setIsConvertingFiles] = useState(false);
  const [orientation, setOrientation] = useState(PageOrientationEnum.portrait);
  const handleOrientationChange = (value: PageOrientationEnum) => {
    setOrientation(value);
  };
  const [pageSize, setPageSize] = useState(PageSizeEnum.A4);
  const handlePageSizeChange = (newPageSize: PageSizeEnum) => {
    setPageSize(newPageSize);
  };
  const [margin, setMargin] = useState(MarginEnum.None);
  const handleMarginChange = (newMargin: MarginEnum) => {
    setMargin(newMargin);
  };
  const [mergeAllImages, setMergeAllImages] = useState(true);
  const handleMergeAllImagesChange = (shouldMerge: boolean) => {
    setMergeAllImages(shouldMerge);
  };

  const handleConversion = async () => {
    if (userStatus === "trial") {
      if (conversionCount > 0) {
        // Proceed with conversion and decrement the count
        setIsConvertingFiles(true);
        try {
          await handleConvertToPdf(fileList, orientation, pageSize, margin);
          decrementConversion(); // Reduce the count
        } catch (error) {
          console.error("Conversion error:", error);
        } finally {
          setIsConvertingFiles(false);
          setShowSocialMediaDialog(true);
        }
      } else {
        setShowLicenseDialog(true);
      }
    } else if (userStatus === "paid") {
      // Proceed with conversion without decrementing
      setIsConvertingFiles(true);
      try {
        await handleConvertToPdf(fileList, orientation, pageSize, margin);
      } catch (error) {
        console.error("Conversion error:", error);
      } finally {
        setIsConvertingFiles(false);
      }
    }
  };

  // Adding file
  const [isLoadingFiles, setIsLoadingFiles] = useState(false);

  return (
    <>
      <div className="flex flex-col">
        {fileList.length === 0 && (
          <SectionHeader
            className="mb-5 mt-10 lg:mb-10 lg:mt-16"
            caption={`${userStatus === "trial" ? "Free " : ""}JPG to PDF Converter`}
            desc={
              "Combine All JPGs into a Single PDF | Convert Each JPG to a Separate PDF | Easily Adjust Orientation, Page Size, and Margins"
            }
          />
        )}
        {/* Main toolbar with convert and add file buttons */}
        <div className="mt-5 flex w-full flex-wrap items-center justify-end gap-3 py-3">
          {/* Add file button */}
          <HeroFileInputButton
            buttonType="toolbar"
            isDisabled={isConvertingFiles || isLoadingFiles}
            setIsLoadingFiles={setIsLoadingFiles}
          />
          {/* Remove all button */}
          <HeroButtonToolbar
            disabled={
              fileList.length === 0 || isConvertingFiles || isLoadingFiles
            }
            caption="Remove All"
            handleOnClick={handleClearList}
            icon={Trash2}
          ></HeroButtonToolbar>
          {/* Setting button */}
          <HeroSettingsSheet
            disabled={isConvertingFiles || isLoadingFiles}
            orientation={orientation}
            pageSize={pageSize}
            margin={margin}
            mergeAllImages={mergeAllImages}
            onOrientationChange={handleOrientationChange}
            onPageSizeChange={handlePageSizeChange}
            onMarginChange={handleMarginChange}
            onMergeAllImagesChange={handleMergeAllImagesChange}
          />
          {/* Convert button */}
          <HeroButtonToolbar
            disabled={
              fileList.length === 0 || isConvertingFiles || isLoadingFiles
            }
            caption="Convert"
            handleOnClick={handleConversion}
            icon={Download}
          ></HeroButtonToolbar>
        </div>
        {/* Dropzone with file count and preview on/off*/}
        <HeroDropZoneBox
          isDisabled={isConvertingFiles || isLoadingFiles}
          setIsLoadingFiles={setIsLoadingFiles}
        />
      </div>
      <LicenseDialog
        showLicenseDialog={showLicenseDialog}
        setShowLicenseDialog={setShowLicenseDialog}
        showRegisterLicenseDialog={showRegisterLicenseDialog}
        setShowRegisterLicenseDialog={setShowRegisterLicenseDialog}
      />
      <SocialMediaDialog
        showSocialMediaDialog={showSocialMediaDialog}
        setShowSocialMediaDialog={setShowSocialMediaDialog}
      />
      <DialogProcessing
        isConvertingFiles={isConvertingFiles}
        setIsConvertingFiles={setIsConvertingFiles}
      />
    </>
  );
};

export default HeroWithFileProvider;
