import React, { useRef } from 'react';
import taxi from '/public/taxi.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'


const VechileInformation = ({setVehiclePanel ,vehiclePanel}) => {
     const vehcileRef = useRef(null)
     const vehcileCloseRef = useRef(null)

     useGSAP(() => {
         gsap.to(vehcileCloseRef.current, {
              opacity: vehiclePanel ? 1:0,
               duration: 0.8, 
              ease: "power2.inOut"
            });
          
              gsap.to(vehcileRef.current,{
                  transform: vehiclePanel ? 'translateY(0)': 'translateY(100%)',
              });
                
          }, [vehiclePanel])
  return (
    <div ref={vehcileRef} className="fixed bottom-0 w-full translate-y-full  bg-white  rounded-t-lg px-3 py-6 shadow-md z-50"> 
    <div className='mb-5 flex justify-start pl-1'>
    <h5 ref={vehcileCloseRef}  onClick={()=>{ setVehiclePanel(false)}} className='absolute opacity-1 top-6 right-6 text-2xl font-bold'><i className="ri-arrow-down-wide-fill"></i></h5>
        <h1 className='text-3xl font-bold font-sans'>Chose your Ride</h1>
    </div>
      <div className="flex items-center justify-between px-2 mb-4   border-2 border-transparent active:border-gray-800   rounded-md">
       <div className='w-24 overflow-hidden'>
       <img src={taxi} alt="Taxi Icon" className="w-full  object-cover " /> 
       </div>
        <div className='w-1/2'>
          <h4 className="text-lg font-semibold">UberGO <span className="text-sm text-gray-500"><i className="ri-user-3-fill"></i> 4</span></h4>
          <h5 className="text-sm font-medium text-gray-400">2 mins away <span className="font-semibold">15:24</span></h5>
          <p className="text-xs font-medium text-gray-500">Affordable, compact rides</p>
        </div>
        <h2 className="text-lg font-bold">$19</h2> 
      </div>
    </div>
  );
};

export default VechileInformation;