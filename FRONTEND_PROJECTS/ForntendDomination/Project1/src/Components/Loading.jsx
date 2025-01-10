import React from 'react';

const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-500">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <h1 className="text-lg font-semibold text-gray-700 animate-pulse">
          Loading...
        </h1>
      </div>
    </div>
  );
};

export default Loading;
