import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProductContext } from '../utils/Context'




const Nav = () => {
  const [products] = useContext(ProductContext)

  let categories = products && products.reduce((acc, cv) => [...acc,cv.category],[]);
  categories = [...new Set(categories)]
  console.log(categories)

  // Extract unique categories
//  const categories = [...new Set(products.map(products => products.category))]


 const getCategoryColor = (category) => {
    switch (category) {
      case "jewelery":
        return "bg-yellow-100 text-yellow-600 border-yellow-300";
      case "women's clothing":
        return "bg-pink-100 text-pink-600 border-pink-300";
     case "electronics":
        return "bg-green-100 text-green-600 border-green-300";
      case "men's clothing":
        return "bg-blue-100 text-blue-600 border-blue-300";
      default:
        return "bg-gray-100 text-gray-600 border-gray-300";
    }
  }
  return (
    <nav className='md:w-[20%] md:h-full h-fit bg-zinc-100 flex flex-col items-center pt-5 px-4 shadow-md'>
      {/* Add New Product Button */}
      <Link 
        to="/create" 
        className='px-5 py-2 border rounded border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out'>
        + Add New Product
      </Link>

      <hr className='my-4 w-full border-gray-300' />

      {/* Category Filter Section */}
      <h1 className='text-2xl font-serif mb-3 w-full text-center text-gray-800'>Category Filter</h1>
      
      <ul className=" space-y-2 px-2 sm:px-4 categoryUl">
  {categories.length > 0 ? (
    categories.map((category, index) => (
      <li 
        key={index} 
        className={`p-3 flex items-center gap-3 rounded-md shadow-sm hover:shadow-md transition 
                   active:scale-95 cursor-pointer sm:hover:scale-105 ${getCategoryColor(category)}`}
      >
        <span className="w-4 h-4 border border-gray-500  rounded-full flex-shrink-0"></span>
        <Link 
          to={`/category/${category}`} 
          className={` hover:underline capitalize text-sm sm:text-base ${getCategoryColor(category)}`}
        >
          {category}
        </Link>
      </li>
    ))
  ) : (
    <p className="text-gray-500 text-center text-sm sm:text-base">No categories available</p>
  )}
</ul>

    </nav>
  )
}

export default Nav
