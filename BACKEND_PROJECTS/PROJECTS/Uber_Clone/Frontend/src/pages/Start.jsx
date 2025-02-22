import React from 'react'
import home from '/public/home.WEBP'
import logo from '/public/uber-logo-white.png'
import { Link } from 'react-router-dom'

const Start = () => {
  // console.log(home)
  return (
    <div>
       <div className='bg-cover bg-center   bg-white/20 h-screen '
       style={{ backgroundImage: `url(${home})` }}>
       <div className=" bg-black/30 h-screen pt-8 w-full flex justify-between flex-col"
           >

       
          <img className=' ml-9 object-cover w-20 ' 
          src= {logo} alt="" />
          <div className='bg-white px-10 py-5  rounded-t-3xl'>
            <h2 className='text-2xl font-bold '>Get Started With Uber</h2>
            <Link to='/login' className='w-full  flex items-center justify-center text-2xl bg-black text-white py-3 rounded-2xl mt-5'>Continue</Link>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Start