"use client";
//External Imports
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the type for a file object
export interface FileObject {
  file: File;
  id: string;
}

interface FileContextProps {
  fileList: FileObject[];
  setFileList: React.Dispatch<React.SetStateAction<FileObject[]>>;
  removeFile: (id: string) => void;
}

// Create the context
const FileContext = createContext<FileContextProps | undefined>(undefined);

// Create a provider component
export const FileProvider = ({ children }: { children: ReactNode }) => {
  const [fileList, setFileList] = useState<FileObject[]>([]);

  const removeFile = (id: string) => {
    setFileList((prevFileList) =>
      prevFileList.filter((file) => file.id !== id),
    );
  };

  return (
    <FileContext.Provider value={{ fileList, setFileList, removeFile }}>
      {children}
    </FileContext.Provider>
  );
};

// Custom hook to use the FileContext
export const useFileContext = () => {
  const context = useContext(FileContext);
  if (!context) {
    throw new Error("useFileContext must be used within a FileProvider");
  }
  return context;
};
