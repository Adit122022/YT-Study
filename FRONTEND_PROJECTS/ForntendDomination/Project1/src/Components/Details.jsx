import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from '../utils/axios';
import Loading from './Loading';
import { IoMdArrowRoundBack } from "react-icons/io";

const Details = () => {
  const [p, setP] = useState(null);
  const { id } = useParams();

  const getProduct = async () => {
    try {
      const { data } = await axios.get(`products/${id}`);
      console.log(data); 
      setP(data);
    } catch (e) {
      console.error(e.message);
    }
  };

  useEffect(() => {
    getProduct();
  }, []); 

  return p ? (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-100 py-10">
      {/* Product Info */}
      <div className="flex items-center w-full px-9 justify-between gap-3 mb-10">
        <Link to="/" className="px-5 py-2 border rounded border-blue-300 flex items-center gap-5 text-blue-400"><IoMdArrowRoundBack />
        Back</Link>
        <h1 className="text-2xl font-semibold text-gray-800">Product Details</h1>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>{p.category}</span>
          <span>{p.price.toFixed(2)}</span>
        </div>
      </div>
      {/* Container */}
      <div className="w-[90%] lg:w-[70%] bg-white rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row">
        {/* Product Image */}
        <div className="w-full lg:w-1/2 h-96 flex items-center justify-center p-10">
          <img
            className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
            src={p.image || 'https://via.placeholder.com/400'} // Fallback image if product image is missing
            alt={p.title}
          />
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-1/2 p-6 lg:p-10 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800 ">{p.title}</h1> 
              <span className="text-sm text-gray-500 mb-4 inline-block"> {p.category}</span>
            <h1 className="text-xl font-bold text-blue-500 mb-6">${p.price.toFixed(2)}</h1> 
            <p className="text-gray-600 leading-relaxed mb-6 line-clamp-4">{p.description}</p> 
          
            <div className="mt-2 flex items-center">
              {/* Product Rating */}
              <span className="text-sm text-gray-600 mr-2">Rating: {p.rating.rate} / 5</span>
              <div className="flex">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={`text-yellow-400 ${index < p.rating.rate ? 'text-yellow-500' : ''}`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 mt-6">
            <Link
              to={`/edit/${p.id}`} // Navigate to the edit page for the current product
              className="border border-blue-500 text-blue-500 px-5 py-1 rounded-lg hover:text-white hover:bg-blue-600 transition-colors duration-300"
            >
              Edit
            </Link>
            <button
              className="border border-red-500 text-red-500 px-5 py-1 rounded-lg hover:text-white hover:bg-red-600 transition-colors duration-300"
              onClick={() => alert('Product deleted successfully!')} // You can integrate actual delete functionality here
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
