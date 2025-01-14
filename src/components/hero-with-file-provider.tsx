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
import { Checkbox } from "./ui/check-box";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";

const HeroWithFileProvider = () => {
  //Preview On/off
  const [isPreviewVisible, setIsPreviewVisible] = useState<boolean>(true);
  const togglePreview = () => {
    setIsPreviewVisible((prevState) => !prevState);
  };
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
      <div className="relative flex flex-col">
        {fileList.length === 0 && (
          <SectionHeader
            className="mt-10 md:mb-5 lg:mb-10 lg:mt-16"
            caption={`${userStatus === "trial" ? "Free " : ""}JPG to PDF Converter`}
            desc={
              "Combine All JPGs into a Single PDF | Convert Each JPG to a Separate PDF | Easily Adjust Orientation, Page Size, and Margins"
            }
          />
        )}
        {/* Main toolbar with convert and add file buttons */}
        <div
          className={`${fileList.length > 0 && "sticky top-[80px] z-30"} flex flex-col border-b-2 border-dashed bg-background`}
        >
          <div
            className={`flex w-full flex-wrap items-center justify-end gap-3 py-3 pt-5`}
          >
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
          <div className="flex items-center justify-end gap-5 p-3 text-sm sm:text-base">
            {fileList.length > 0 && (
              <div className={`flex items-center justify-center gap-2`}>
                <Badge className="">{`${fileList.length}`}</Badge>
                <Label>Total Files</Label>
              </div>
            )}

            <div className="flex items-center justify-center gap-1">
              <Checkbox
                id="preview"
                className="mr-1"
                checked={isPreviewVisible}
                onCheckedChange={togglePreview}
              />
              <Label htmlFor="preview" className="cursor-pointer">
                File Preview
              </Label>
            </div>
          </div>
        </div>
        {/* Dropzone with file count and preview on/off*/}
        <HeroDropZoneBox
          isDisabled={isConvertingFiles || isLoadingFiles}
          setIsLoadingFiles={setIsLoadingFiles}
          isPreviewVisible={isPreviewVisible}
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
