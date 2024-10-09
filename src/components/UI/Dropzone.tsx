"use client";
import { useDropzone } from "react-dropzone";
import { handleConvertToPdf } from "@/lib/pdf-lib";
import { Button } from "./Button";
import SortableImageList from "./SortableImageList";
import { useFileContext } from "@/context/FileContext";
import { Menubar } from "./menubar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/UI/tabs";
import { Card } from "./card";
import { Download, Plus, X } from "lucide-react";

const Dropzone = () => {
  const { fileList, setFileList } = useFileContext();

  const onDrop = (acceptedFiles: File[]) => {
    setFileList((prevFileList) => [
      ...prevFileList,
      ...acceptedFiles.map((file) => ({
        file,
        id: `${file.name}-${file.size}-${file.lastModified}`,
      })),
    ]);
  };
  const handleClearList = () => {
    setFileList([]);
  };
  // Set up the dropzone, restricting to JPG files only
  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    noClick: true,
    noKeyboard: true,
    accept: { "image/jpeg": [".jpg", ".jpeg"] }, // Only allow JPG files
    multiple: true, // Allow multiple file selection
  });

  return (
    <div
      className={`mb-5 mt-5 flex w-full max-w-[400px] flex-col items-center`}
    >
      <Menubar className="mb-3 flex w-full flex-row justify-center px-3 py-7">
        <Button variant="outline" onClick={open}>
          <Plus className="mr-1 hidden h-4 w-4 min-[370px]:block" />
          Add Files
        </Button>
        <Button variant="outline" onClick={handleClearList}>
          <X className="mr-1 hidden h-4 w-4 min-[370px]:block" />
          Clear List
        </Button>
        <Button variant="outline" onClick={() => handleConvertToPdf(fileList)}>
          <Download className="mr-1 hidden h-4 w-4 min-[370px]:block" />
          Convert
        </Button>
      </Menubar>
      <Tabs defaultValue="filelist" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="filelist">File List</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="filelist">
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <Card
              className={`flex min-h-[150px] w-full flex-col items-center justify-center rounded-lg border text-center transition sm:min-h-[300px] ${isDragActive && "border-blue-500 bg-blue-50"}`}
            >
              {fileList.length > 0 ? (
                <SortableImageList />
              ) : (
                <div>
                  <p className="text-base text-black-500">
                    Click &rdquo;Add Files&rdquo; or
                  </p>
                  <p className="text-base text-black-500">
                    drop files here and
                  </p>
                  <p className="text-base text-black-500">
                    Click &rdquo;Convert&rdquo;
                  </p>
                </div>
              )}
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="settings">
          <Card className="min-h-[150px] w-full sm:min-h-[300px]"></Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dropzone;
