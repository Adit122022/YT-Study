import React, { useContext, useState } from 'react'
import black from '/public/uber-logo-black.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext, { UserDataContext } from '../../context/UserContext';


const UserSignUp = () => {
  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const [email, setemail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setuserData] = useState({})

   const navigate= useNavigate()
   const {user ,setUser } = useContext(UserDataContext)
  
  const submithandler = async(e)=>{
    e.preventDefault();
  
 const newUser ={
  fullname:{
    firstname,
    lastname,
  },
  email,
  password,
}
const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)
if(response.status ===201){
 const data = response.data
 setUser(data.user)
 localStorage.setItem('token', data.token)
  navigate('/home')
}   console.log(userData)
  }
  return (
    <div className='p-7   h-screen flex flex-col  justify-between'>
       <div>
       <img className=' mb-15 mt-7 object-cover w-16' 
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
        onChange={e => setemail(e.target.value)} className='bg-[#eeee] mb-5 rounded px-4 py-2 border border-gray-300 w-full text-lg placeholder:text-base' name='email' type="email" required placeholder='Enter your mail' />
        <h3 className='text-lg font-medium mb-2'>Enter Passowrd</h3>
        <input
        value={password}
        onChange={e => setPassword(e.target.value)} className='bg-[#eeee] mb-7 rounded px-4 py-2 border border-gray-300 w-full text-lg placeholder:text-base' name='password' type="password" required placeholder='Enter your password' />
      <button className='bg-[#111] text-white text-xl  mb-3 font-semibold rounded-xl py-2 w-full' >Create Account</button>
     <p className='text-center text-base'>Already have account ?  <Link to='/login' className='  text-blue-600'>Login here</Link></p>
      </form>
       </div>
       <div>
        <p className='text-center text-sm leading-tight'>
         This site is protected bt reCAPTCHA and the <span className='underline text-blue-400'>Google Privacy Policy</span> and
           <span className='underline mx-0.5 text-blue-400'>Terms of Service</span> apply.
        </p>
       </div>
    </div>
  )
}


export default UserSignUp