import React from 'react'
import black from '/public/uber-logo-black.png'
import mapImage from '/public/map-image.webp'

const Home = () => {
  return (
    <div className='h-screen w-screen relative'>
      <img className=' object-cover w-16 absolute left-5 top-5' src={black} alt="Uber Logo" />
      <div className="h-screen w-screen">
        {/* image for temporary image */}
        <img className='h-full w-full object-cover' src={mapImage} alt="" />
      </div>
      <div className='bg-white p-5 absolute top-0'>
        <h4>Find a Trip</h4>
        <form action="">
          <input type="text" placeholder='Enter Pickup Location' />
          <input type="text" placeholder='Enter Dropoff Location' />
          <button>Find a Trip</button>
        </form>
      </div>
    
    </div>
  )
}

export default Home