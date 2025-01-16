"use client";

//External Imports
import { useState } from "react";
import { Download, Trash2 } from "lucide-react";

//Internal Imports
import { handleConvertToPdf } from "@/lib/pdf-lib";
import { useSettings } from "@/context/settings-context";
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
import { Checkbox } from "@/components/ui/check-box";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

const HeroWithFileProvider = () => {
  //Preview On/off----------
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
  const { settings } = useSettings();
  const handleConversion = async () => {
    if (userStatus === "trial") {
      if (conversionCount > 0) {
        // Proceed with conversion and decrement the count
        setIsConvertingFiles(true);
        try {
          await handleConvertToPdf(
            fileList,
            settings.orientation,
            settings.pageSize,
            settings.margin,
          );
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
        await handleConvertToPdf(
          fileList,
          settings.orientation,
          settings.pageSize,
          settings.margin,
        );
      } catch (error) {
        console.error("Conversion error:", error);
      } finally {
        setIsConvertingFiles(false);
      }
    }
  };
  // Adding file----------
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
            <HeroSettingsSheet />
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
            {/* Total files count */}
            {fileList.length > 0 && (
              <div className={`flex items-center justify-center gap-2`}>
                <Badge className="">{`${fileList.length}`}</Badge>
                <Label>Total Files</Label>
              </div>
            )}
            {/* File preview on/off */}
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
