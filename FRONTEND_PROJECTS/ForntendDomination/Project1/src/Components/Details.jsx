import React from 'react';
import { Link } from 'react-router-dom';

const Details = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-100 py-10">
      {/* Container */}
      <div className="w-[90%] lg:w-[70%] bg-white rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row">
        {/* Product Image */}
        <div className="w-full lg:w-1/2 h-96 flex items-center justify-center bg-gray-200">
          <img
            className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
            src="https://via.placeholder.com/400"
            alt="Product"
          />
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-1/2 p-6 lg:p-10 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">Product Title</h1>
            <h2 className="text-xl font-bold text-blue-500 mb-6">$99.99</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              This is a sample product description. It provides detailed information about the product, highlighting its features and benefits to attract potential buyers.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 mt-6">
            <Link
              to="/edit"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Edit
            </Link>
            <button
              className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300"
              onClick={() => alert('Product deleted successfully!')}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
