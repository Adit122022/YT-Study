import React from "react";
import Loading from "./Loading";

const ImagePreview = ({ uploadImage, enhancedImage ,loading }) => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:h-1/2  w-full max-w-4xl">
      {/* Original Image */}
      <div className="bg-white shadow-lg rounded-xl h-full overflow-hidden">
        <h2 className="text-lg font-semibold text-center bg-slate-600 text-white py-2">
          Original Image
        </h2>
        {uploadImage ? (
          <img
            src={uploadImage}
            alt="Original"
            className="w-full h-full object-cover aspect-square"
          />
        ) : (
          <div className="flex items-center justify-center h-80 bg-gray-200 text-gray-500">
            No Image Uploaded
          </div>
        )}
      </div>

      {/* Enhanced Image */}
      <div className="bg-white shadow-lg rounded-xl h-full overflow-hidden">
        <h2 className="text-lg font-semibold text-center bg-emerald-400 text-white py-2">
          Enhanced Image
        </h2>
        {enhancedImage && !loading ?  (
          <img
            src={enhancedImage}
            alt="Enhanced"
            className="w-full h-full object-cover aspect-square"
          />
        ) : ( 
            loading ?( <Loading /> ):
          (<div className="flex items-center justify-center h-80 bg-gray-200 text-gray-500">
            No Enhanced Image
          </div>)
        )}
      </div>
    </div>
  );
};

export default ImagePreview;
