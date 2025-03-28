import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";

import { IoMdArrowRoundBack } from "react-icons/io";
import Nav from "./Nav";

const CategoryPage = () => {
  const { category } = useParams();
  const [products] = useContext(ProductContext);

  // Filter products by category
  const categoryProducts = products?.filter((product) => product.category === category);

  // Function to determine category-specific colors
  const getCategoryColor = (category) => {
    switch (category) {
      case "jewelery":
        return "bg-yellow-100 text-yellow-600 border-yellow-300";
      case "men's clothing":
        return "bg-blue-100 text-blue-600 border-blue-300";
      case "women's clothing":
        return "bg-pink-100 text-pink-600 border-pink-300";
      case "electronics":
        return "bg-green-100 text-green-600 border-green-300";
      default:
        return "bg-gray-100 text-gray-600 border-gray-300";
    }
  };

  return (
    <div className='flex flex-col lg:flex-row  lg:h-screen'>
      <Nav />
    <div className="container mx-auto p-6">
      {/* Header */}
      
            {/* Product Info */}
            <div className="flex items-center w-[60%] px-9 justify-between gap-3 mb-10">
              <Link to="/" className="px-5 py-2 border rounded border-blue-300 flex items-center gap-5 text-blue-400"><IoMdArrowRoundBack />
              Home</Link>
              <h1 className="text-2xl font-semibold text-gray-800"> {category} Collection</h1>
            </div>

      {/* Check if products are available */}
      {categoryProducts?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categoryProducts.map((product) => (
            <Link
              to={`/details/${product.id}`}
              key={product.id}
              className="p-4 border rounded-lg shadow-md flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-white"
            >
              {/* Category Badge */}
              <div className="w-full flex justify-between items-center mb-3">
                <span
                  className={`text-xs px-3 py-1 rounded-md font-semibold ${getCategoryColor(
                    product.category
                  )}`}
                >
                  {product.category}
                </span>
                <span className="text-gray-800 font-bold">${product.price}</span>
              </div>

              {/* Product Image */}
              <div className="w-full h-40 flex justify-center">
                <img
                  className="w-auto h-full object-contain hover:scale-110 transition-transform duration-300"
                  src={product.image}
                  alt={product.title}
                />
              </div>

              {/* Product Title */}
              <div className="mt-3 text-center">
                <h1 className="text-sm font-medium line-clamp-1 hover:text-blue-500 transition-colors duration-300">
                  {product.title}
                </h1>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </div>
    </div>
  );
};

export default CategoryPage;
