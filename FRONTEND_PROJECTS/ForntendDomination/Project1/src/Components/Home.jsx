import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Loading from './Loading';
import { ProductContext } from '../utils/Context';

const Home = () => {
  const [products] = useContext(ProductContext);

  // Function to determine the color class based on the category
  const getCategoryColor = (category) => {
    switch (category) {
      case 'jewelery':
        return 'bg-yellow-500 text-white';
      case "men's clothing":
        return 'bg-blue-400 text-white';
      case "women's clothing":
        return 'bg-pink-400 text-white';
      case 'electronics':
        return 'bg-green-400 text-white';
      default:
        return 'bg-gray-400 text-white';
    }
  };

  return products ? (
    <div className='flex flex-col lg:flex-row  lg:h-screen'>
      <Nav />
      

    <div  className='lg:h-screen w-[90%] bg-slate-100 overflow-hidden'>
      <h1 className="text-3xl font-bold text-gray-800 text-center pt-5">Products</h1>
    <div className="lg:h-screen w-full mx-auto p-6 bg-slate-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-x-hidden overflow-y-scroll scrol">
      
       
      {products.map((product) => (
        
    <Link  to={`/details/${product.id}`}  key={product.id}  className="p-4 border shadow-md rounded-lg flex flex-col items-center transition-transform duration-300 hover:scale-[1.03] hover:border-2 bg-white" >
          <div className="w-full flex justify-between items-center mb-2">
            <span  className={`text-xs px-2 py-[2px] flex items-center justify-center rounded-md animate-bounce ${getCategoryColor( product.category)}`}>
              {product.category} </span>
            <span className="text-gray-800/80 font-bold">${product.price}</span>
          </div>
          {/* Product Image */}
          <div className="w-full h-40 ">
            <img  className="w-full h-full object-contain hover:scale-110 transition-transform duration-300" src={product.image} alt={product.title} />
          </div>

          {/* Product Title */}
          <div className="mt-3 text-center">
            <h1 className="text-sm font-medium line-clamp-1 hover:text-blue-500 transition-colors duration-300"> {product.title} </h1>
          </div>
        </Link>
      ))}
    </div>
    </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Home;
