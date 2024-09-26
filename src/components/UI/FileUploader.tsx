import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import ImageList from './ImageList';


interface FileUploaderProps {
  onFilesSelected: (files: File[]) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onFilesSelected }) => {
  const [filePreviews, setFilePreviews] = useState<{ file: File, preview: string }[]>([]);

  // Handle file drop or selection
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.map(file => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setFilePreviews(prev => [...prev, ...newFiles]);
    onFilesSelected([...filePreviews.map(f => f.file), ...acceptedFiles]);
  }, [filePreviews, onFilesSelected]);

 
  // Set up the dropzone, restricting to JPG files only
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/jpeg': ['.jpg', '.jpeg'] }, // Only allow JPG files
    multiple: true, // Allow multiple file selection
  });

  const handleRemoveFile = (fileName: string) => {
    const updatedPreviews = filePreviews.filter(f => f.file.name !== fileName);
    setFilePreviews(updatedPreviews);
  };

  return (
    <div className="mt-10 w-full">
      {/* Drag and drop area */}
      <div
        {...getRootProps()}
        className={`h-[300px] w-full border-2 border-dashed rounded-lg p-6 text-center transition ${
          isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 cursor-pointer'
        }`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-blue-500">Drop the JPG files here...</p>
        ) : (
          <p className="text-gray-500">
            Drag & drop some JPG files here, or click to select files from your device.
          </p>
        )}
         <ImageList filePreviews={filePreviews} onRemove={handleRemoveFile} />
      </div>
     
    </div>
  );
};

export default FileUploader;
