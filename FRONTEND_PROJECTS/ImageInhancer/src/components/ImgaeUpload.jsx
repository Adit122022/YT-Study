import React, { useState } from "react";
import { CloudArrowUpIcon } from "@heroicons/react/24/outline"; // Import an icon for UI enhancement

// wxa26uhwe49lfsw15
const ImageUpload = ({uploadImageHandler}) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
  if(file){
    uploadImageHandler(file)
  }
    setSelectedFile(file);
  };
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl flex flex-col items-center space-y-4">
      {/* Upload Icon */}
      <CloudArrowUpIcon className="h-12 w-12 text-gray-400" />

      {/* Upload Button */}
      <label className="cursor-pointer bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition">
        Upload Image
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>

      {/* Display Selected File Name */}
      {selectedFile && (
     <  div className="text-gray-700 mt-4">
         <img src={selectedFile} alt="" />
        <p className="text-gray-600 text-sm font-medium">
          Selected: {selectedFile.name}
        </p>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
