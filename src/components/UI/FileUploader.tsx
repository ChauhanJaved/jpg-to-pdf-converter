import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const FileUploader: React.FC<{ onFilesSelected: (files: File[]) => void }> = ({ onFilesSelected }) => {
  // Handle dropped or selected files
  const onDrop = useCallback((acceptedFiles: File[]) => {
    onFilesSelected(acceptedFiles);
  }, [onFilesSelected]);

  // Set up the dropzone, restricting to JPG files only
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {'image/jpeg':['.jpg', '.jpeg'] },  // Only allow JPG files
    multiple: true,        // Allow multiple file selection
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-lg p-6 text-center transition ${
        isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
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
    </div>
  );
};

export default FileUploader;
