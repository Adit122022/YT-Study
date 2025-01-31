import React, { useContext, useState } from 'react'
import black from '/public/uber-driver-logo.webp';
import { Link, useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../../context/CaptainContext';
import axios from 'axios';

const CaptainLogin = () => {
  const [email, setemail] = useState('')
  const [password, setPassword] = useState('')
 

  const navigate = useNavigate()
  const {setCaptain} = useContext(CaptainDataContext)
  const submithandler = async(e)=>{
    e.preventDefault();
  const CaptainLogin ={  email:email,   password:password }
 const response =await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`,CaptainLogin)
 if(response.status === 200){
   const {token, captain} = response.data;
   setCaptain(captain)
   localStorage.setItem('token', token)
   navigate('/captain-home')
 }
    setPassword('')
    setemail('')


  }
  return (
    <div className='p-7   h-screen flex flex-col  justify-between'>
       <div>
       <img className=' mb-10 object-cover w-fit h-16' 
               src= {black} alt="" />
      <form onSubmit={ submithandler} action="" > 
        <h3 className='text-lg font-medium mb-2'>What's Your email</h3>
        <input
        value={email}
        onChange={e => setemail(e.target.value)} className='bg-[#eeee] mb-7 rounded px-4 py-2 border border-gray-300 w-full text-lg placeholder:text-base' name='email' type="email" required placeholder='Enter your mail' />
        <h3 className='text-lg font-medium mb-2'>Enter Passowrd</h3>
        <input
        value={password}
        onChange={e => setPassword(e.target.value)} className='bg-[#eeee] mb-7 rounded px-4 py-2 border border-gray-300 w-full text-lg placeholder:text-base' name='password' type="password" required placeholder='Enter your password' />
      <button className='bg-[#111] text-white text-xl  mb-3 font-semibold rounded-xl py-2 w-full' >Login</button>
     <p className='text-center'>Join a fleet ?  <Link to='/captain-signup' className='  text-blue-600'>Register as a Captain</Link></p>
      </form>
       </div>
       <div>
        <Link to='/login' className='bg-sky-300 flex items-center justify-center text-[#484848ee] text-xl  font-semibold rounded-lg py-3 w-full' >
        Sign in as User
        </Link>
       </div>
    </div>
  )
}

export default CaptainLogin