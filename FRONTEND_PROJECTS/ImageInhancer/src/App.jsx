import React from "react";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-between overflow-x-hidden overflow-y-auto  items-center min-h-screen px-8 py-6 bg-gradient-to-br from-gray-100 to-gray-200">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-extrabold text-gray-800 tracking-tight">
          AI Enhancer ✨
        </h1>
        <p className="text-lg text-gray-600 max-w-lg mx-auto">
          Upload your images and let AI enhance them for you with precision and clarity.
        </p>
      </div>

      {/* Main Content */}
      <Home />

      {/* Footer */}
      <footer className="text-gray-500 text-sm mt-8">
        Powered by <span className="font-semibold text-gray-700">OpenAI</span>
      </footer>
    </div>
  );
};

export default App;
