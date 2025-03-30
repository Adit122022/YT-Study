import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import taxi from '/public/taxi.png';
import 'remixicon/fonts/remixicon.css'

const LookingForDriver = ({vehicleFound ,setVehicleFound ,setConfirmRidePannel}) => {

  const vehicleFoundRef = useRef(null)
   const vehcileFoundCloseRef = useRef(null)
  

  useGSAP(function(){
      if(vehicleFound){
        gsap.to(vehicleFoundRef.current,{
          transform:"translateY(0)"
        })
      }else {
        gsap.to(vehicleFoundRef.current,{
          transform:"translateY(100%)"
        })
      }
    }, [vehicleFound])
  return (
     <div ref={vehicleFoundRef}  className="fixed bottom-0 w-full translate-y-full  bg-white  rounded-t-lg px-3 py-6 shadow-md z-50"> 
       <div className='mb-5 flex justify-start pl-1'>
       <h5 ref={vehcileFoundCloseRef}  
       onClick={()=>{ 
        setVehicleFound(false)
         setConfirmRidePannel(true)}}
          className='absolute top-6 right-6 text-2xl font-bold '><i className="ri-arrow-down-wide-fill"></i></h5>
           <h1 className='text-2xl font-bold font-sans'>Looking For a  Driver</h1>
       </div>
         <div className="flex flex-col items-center justify-between px-2 mb-4   border-2 border-transparent active:border-gray-800   rounded-md">
          <div className='w-full  overflow-hidden'>
          <img src={taxi} alt="Taxi Icon" className="w-full aspect-[2/1]  object-cover " /> 
          </div>
          {/*  */}
           <div className='w-full  gap-4  border-gray-600 border-t-2'> 
             <div className="text-lg font-semibold flex gap-5">
              <span className='flex justify-center items-center text-base' ><i className="ri-map-pin-line"></i> </span>
              <div className='border-gray-400 border-b-2 w-full py-3 px-6'> 
                <h1 className="text-lg text-gray-800"> 562/11-A</h1>
                <h2 className="text-sm text-gray-500 mt-2">Kaikondrahalli , Bengaluru ,Karnataka</h2>
               </div>
              </div>
           </div>
           
           {/*  */}
           <div className='w-full  gap-4  '> 
             <div className="text-lg font-semibold flex gap-5">
              <span className='flex justify-center items-center text-base' ><i className="ri-square-fill"></i> </span>
              <div className='border-gray-400 border-b-2 w-full py-3 px-6'> 
                <h1 className="text-lg text-gray-800"> Third Wave Cofffe</h1>
                <h2 className="text-sm text-gray-500 mt-2">17th Cross Rd , PWD Quarters , 1st Sector , HSR Layout , Bengaluru , Karnataka</h2>
               </div>
              </div>
           </div>
          {/*  */}
          <div className='w-full  gap-4  '> 
             <div className="text-lg font-semibold flex gap-5">
              <span className='flex justify-center items-center text-base' ><i className="ri-wallet-fill"></i></span>
              <div className='w-full py-3 px-6'> 
                <h1 className="text-lg text-gray-800">₹ 193.20</h1>
                <h2 className="text-sm text-gray-500 mt-2">Cash Cash</h2>
               </div>
              </div>
           </div>
         </div>
         
      </div>
  )
}

export default LookingForDriver