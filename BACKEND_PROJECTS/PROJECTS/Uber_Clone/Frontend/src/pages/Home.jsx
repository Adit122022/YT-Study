import React, { useRef, useState } from 'react'
import black from '/public/uber-logo-black.png'
import mapImage from '/public/map-image.webp'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap' 
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VechileInformation from '../components/VechileInformation';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';

gsap.registerPlugin(useGSAP);

const Home = () => {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const [vehiclePanel, setVehiclePanel] = useState(false)
 const [confirmRidePannel, setConfirmRidePannel] = useState(false)
 const [vehicleFound, setVehicleFound] = useState(false)

  const pannelReff = useRef(null)
  
  const panelCloseRef = useRef(null)
  const submithandler = (e)=>{
e.preventDefault()
  }
  useGSAP(() => {
    gsap.to(pannelReff.current, { 
      height: panelOpen ? '70%' : '0%', 
      padding: panelOpen ? 24 : 0, 
      opacity: panelOpen ? 1 : 0.01, 
      duration: 0.8, 
      ease: "power2.inOut"
    });
    gsap.to(panelCloseRef.current, {
      opacity: panelOpen ? 1:0,
       duration: 0.8, 
      ease: "power2.inOut"
    });
  },[panelOpen ]);

  
    
 
  return (
    <div className='h-screen w-screen relative overflow-x-hidden overflow-y-scroll'>
      <img className=' object-cover w-16 absolute left-5 top-5' src={black} alt="Uber Logo" />
      <div  className="h-screen w-screen">
        {/* image for temporary image */}
        <img className='h-full w-full object-cover' src={mapImage} alt="" />
      </div>

      <div  className='  flex flex-col justify-end h-screen absolute top-0 w-full rounded-t-3xl'>

       <div className='h-[30%] bg-white p-5 relative'>
       <h5 ref={panelCloseRef} onClick={()=>{setPanelOpen(false)}} className='absolute opacity-0 top-6 right-6 text-2xl font-bold'><i className="ri-arrow-down-wide-fill"></i></h5>
       <h4 className='text-3xl font-bold'>Find a Trip</h4>
        <form onSubmit={submithandler} className=''>
          <div className='line absolute h-16   w-1 top-[45%] left-[10%] bg-gray-800 rounded-tl-full rounded-br-full'> </div>
          <input value={pickup}  onChange={e =>{setPickup(e.target.value)}} onClick={()=>{setPanelOpen(true)}}
           className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"' type="text" placeholder='Enter Pickup Location' />
          <input value={destination}  onChange={e =>{setDestination(e.target.value)}}  onClick={()=>{setPanelOpen(true)}}
           className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"' type="text" placeholder='Enter Dropoff Location' />
        </form>
       </div>

       <div ref={pannelReff} className=' opacity-0 h-[70%] bg-white  '>
     <LocationSearchPanel setPanelOpen ={setPanelOpen}  setVehiclePanel = {setVehiclePanel}/>
       </div>
      </div>
      <VechileInformation setConfirmRidePannel={setConfirmRidePannel} vehiclePanel ={vehiclePanel} setVehiclePanel ={setVehiclePanel}/>
      <ConfirmRide  confirmRidePannel={confirmRidePannel} setConfirmRidePannel={setConfirmRidePannel}  setVehicleFound={setVehicleFound}/>
     <LookingForDriver vehicleFound ={vehicleFound} setConfirmRidePannel={setConfirmRidePannel} setVehicleFound={setVehicleFound} />
    </div>
  )
}

export default Home