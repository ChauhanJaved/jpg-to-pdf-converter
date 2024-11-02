"use client";

//External Imports----------
import { useState } from "react";
import { Download, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

//Internal Imports----------
import {
  handleConvertToPdf,
  MarginEnum,
  PageOrientationEnum,
  PageSizeEnum,
} from "@/lib/pdf-lib";
import { raleway } from "@/lib/font";
import HeroButtonToolbar from "@/components/hero-button-toolbar";
import HeroSettingsSheet from "@/components/hero-settings-sheet";
import { useFileContext } from "@/context/file-context";
import HeroDropZoneBox from "@/components/hero-drop-zone-box";
import HeroFileInputButton from "@/components/hero-file-input-button";
import { TOTAL_CONVERSIONS_PER_DAY, useAuth } from "@/context/auth-context";

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
  const router = useRouter();
  const {
    user,
    conversionCount,
    incrementConversionCount,
    remainingTrialDays,
    isTrial,
  } = useAuth();
  const handleConversion = async () => {
    setIsConvertingFiles(true);

    try {
      if (!user) {
        const canConvert = await handleGuestConversion();
        if (!canConvert) return; // Early return if redirection occurs
      } else {
        const canConvert = await handleLoggedInUserConversion();
        if (!canConvert) return; // Early return if redirection occurs
      }

      // Proceed with the file conversion after checking the user status
      await handleConvertToPdf(fileList, orientation, pageSize, margin);
    } catch (error) {
      console.error("Conversion error:", error);
    } finally {
      setIsConvertingFiles(false);
    }
  };
  const handleGuestConversion = async () => {
    if (conversionCount < TOTAL_CONVERSIONS_PER_DAY) {
      incrementConversionCount();
      return true; // Indicate conversion is allowed
    } else {
      // Redirect to sign-in page if count reaches the limit
      router.push("/signin");
      return false; // Indicate conversion is not allowed
    }
  };
  const handleLoggedInUserConversion = async () => {
    if (isTrial) {
      if (remainingTrialDays > 0) {
        // Allow access if trial days are left
        return true; // Indicate conversion is allowed
      } else {
        // Redirect to purchase page if trial has expired
        router.push("/purchase");
        return false; // Indicate conversion is not allowed
      }
    } else {
      // User is a paid user, allow access
      return true; // Indicate conversion is allowed
    }
  };

  // Adding file
  const [isLoadingFiles, setIsLoadingFiles] = useState(false);

  return (
    <div className="flex flex-col">
      {fileList.length === 0 ? (
        // SEO h1 and desc text
        <div className="flex flex-col items-start gap-2 py-6 sm:pt-10 md:pt-12 lg:items-center lg:pt-16">
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
      ) : (
        // Main toolbar with convert and add file buttons
        <div className="mt-3 flex w-full flex-wrap items-center justify-end gap-3 py-3">
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
      )}
      {/* Dropzone with file count and preview on/off*/}
      <HeroDropZoneBox
        isDisabled={isConvertingFiles || isLoadingFiles}
        setIsLoadingFiles={setIsLoadingFiles}
      />
    </div>
  );
};

export default HeroWithFileProvider;
