import React, { useContext, useState } from 'react'
import black from '/public/uber-driver-logo.webp';
import { Link, useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../../context/CaptainContext';
import axios from 'axios';

const CaptainSignUp = () => {
    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')

    const [vehicleColor, setVehicleColor] = useState('');
    const [vehiclePlate, setVehiclePlate] = useState('');
    const [vehicleCapacity, setVehicleCapacity] = useState('');
    const [vehicleType, setVehicleType] = useState('');

    const navigate = useNavigate()
const {captain ,setCaptain} = useContext(CaptainDataContext)

    const submithandler = async(e)=>{
      e.preventDefault();
      const newCaptain ={
        fullname:{  firstname,  lastname,  },
        email, password,
        vehicle:{  color:vehicleColor, plate:vehiclePlate ,capacity:vehicleCapacity, vehicleType:vehicleType  }
      }
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,newCaptain)
     
      console.log("Response:", response);  

      if(response.status === 200 || response.status===201) {
        const data = response.data
        setCaptain(data.captain)
        localStorage.setItem('token',data.token)
        navigate('/captain-home')
      }else {
        console.error("Unexpected response:", response);
      }

   
      setfirstname('')
      setlastname('')
      setPassword('')
      setemail('')
      setVehicleColor('')
      setVehiclePlate('')
      setVehicleCapacity('')
      setVehicleType('')
    }
  return (
    <div>
         <div className='p-7   h-screen flex flex-col  justify-between'>
       <div>
       <img className=' mb-10 object-cover w-fit h-16' 
               src= {black} alt="" />
      <form onSubmit={ submithandler} action="" > 
  <h3 className='text-lg font-medium mb-2'>What's Your Name</h3>
 <div className='flex justify-between gap-4'>
 <input value={firstname} onChange={ e =>{ setfirstname(e.target.value);}}
   className='bg-[#eeee] mb-7 rounded px-4 py-2 border border-gray-300 w-1/2 text-lg placeholder:text-base' name='firstname' type="text" required placeholder=' First Name' />
 <input value={lastname} onChange={ e =>{ setlastname(e.target.value);}}
   className='bg-[#eeee] mb-7 rounded px-4 py-2 border border-gray-300 w-1/2 text-lg placeholder:text-base' name='lastname' type="text" required placeholder='  Last Name' />

 </div>


        <h3 className='text-lg font-medium mb-2'>What's Your email</h3>
        <input
        value={email}
        onChange={e => setemail(e.target.value)} className='bg-[#eeee] mb-7 rounded px-4 py-2 border border-gray-300 w-full text-lg placeholder:text-base' name='email' type="email" required placeholder='Enter your mail' />
        <h3 className='text-lg font-medium mb-2'>Enter Passowrd</h3>
        <input
        value={password}
        onChange={e => setPassword(e.target.value)} className='bg-[#eeee] mb-7 rounded px-4 py-2 border border-gray-300 w-full text-lg placeholder:text-base' name='password' type="password" required placeholder='Enter your password' />
        <h3 className='text-lg font-medium mb-2'>Vehicle's Information</h3>
     <div className="flex justify-between gap-2">
     <input
          value={vehicleColor}
          onChange={e => setVehicleColor(e.target.value)}
          className='bg-[#eeee] mb-7 rounded px-4 py-2 border border-gray-300 w-1/2 text-lg placeholder:text-sm'
          name='vehicleColor'
          type="text"
          required
          placeholder='vehicle color'
        />

        <input
          value={vehiclePlate}
          onChange={e => setVehiclePlate(e.target.value)}
          className='bg-[#eeee] mb-7 rounded px-4 py-2 border border-gray-300 w-1/2 text-lg placeholder:text-sm'
          name='vehiclePlate'
          type="text"
          required
          placeholder='vehicle plate number'
        />
     </div>

       
     <div className="flex justify-between gap-2">   <input
          value={vehicleCapacity}
          onChange={e => setVehicleCapacity(e.target.value)}
          className='bg-[#eeee] mb-7 rounded px-4 py-2 border border-gray-300 w-1/2 text-lg placeholder:text-sm'
          name='vehicleCapacity'
          type="number"
          required
          placeholder='vehicle capacity'
        />

        <select
          value={vehicleType}
          onChange={e => setVehicleType(e.target.value)}
          className='bg-[#eeee] mb-7 rounded px-4 py-2 border border-gray-300 w-1/2 text-sm placeholder:text-xs'
          name='vehicleType'
          required
        >
          <option value="" disabled>Select vehicle type</option>
          <option value="car">Car</option>
          <option value="auto">Auto</option>
          <option value="moto">Moto</option>
        </select></div>
      <button className='bg-[#111] text-white text-lg  mb-3 font-semibold rounded-xl py-2 w-full' >Create Captain's Account</button>
     <p className='text-center text-sm mb-8'>Already have account ?  <Link to='/captain-login' className='  text-blue-600'>Login here</Link></p>
      </form>
       </div>
       <div>
        <p className='text-center text-sm leading-tight mb-4'>
         This site is protected bt reCAPTCHA and the <span className='underline text-blue-400'>Google Privacy Policy</span> and
           <span className='underline mx-0.5 text-blue-400'>Terms of Service</span> apply.
        </p>
       </div>
    </div>
    </div>
  )
}

export default CaptainSignUp