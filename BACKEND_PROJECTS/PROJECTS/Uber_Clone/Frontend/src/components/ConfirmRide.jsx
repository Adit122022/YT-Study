import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import taxi from '/public/taxi.png';

const ConfirmRide = ({confirmRidePannel ,setConfirmRidePannel}) => {
    const vehcileRef = useRef(null)
    const vehcileCloseRef = useRef(null)

    useGSAP(() => {
        gsap.to(vehcileCloseRef.current, {
             opacity: confirmRidePannel ? 1:0,
              duration: 0.8, 
             ease: "power2.inOut"
           });
         
             gsap.to(vehcileRef.current,{
                 transform: confirmRidePannel ? 'translateY(0)': 'translateY(100%)',
             });
               
         }, [confirmRidePannel])
 return (
   <div ref={vehcileRef} className="fixed bottom-0 w-full translate-y-full  bg-white  rounded-t-lg px-3 py-6 shadow-md z-50"> 
   <div className='mb-5 flex justify-start pl-1'>
   <h5 ref={vehcileCloseRef}  onClick={()=>{ setConfirmRidePannel(false)}} className='absolute opacity-1 top-6 right-6 text-2xl font-bold'><i className="ri-arrow-down-wide-fill"></i></h5>
       <h1 className='text-2xl font-bold font-sans'>Confirm your Ride</h1>
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
     <button className='w-full  py-3 bg-green-400 text-white font-bold   text-lg rounded-2xl'>Confirm</button>
   </div>
 );
}

export default ConfirmRide