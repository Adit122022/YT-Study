import React, { useState } from 'react'
import black from '/public/uber-driver-logo.webp';
import { Link } from 'react-router-dom';

const CaptainSignUp = () => {
    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setuserData] = useState({})
    const submithandler =(e)=>{
      e.preventDefault();
      setuserData({
        fullname:{
          firstname,
          lastname,
        },
        email,
        password,
      })
      setfirstname('')
      setlastname('')
      setPassword('')
      setemail('')
  
      console.log(userData)
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
      <button className='bg-[#111] text-white text-xl  mb-3 font-semibold rounded-xl py-2 w-full' >Login</button>
     <p className='text-center text-base'>Already have account ?  <Link to='/captain-login' className='  text-blue-600'>Login here</Link></p>
      </form>
       </div>
       <div>
        <p className='text-center text-sm leading-tight'>
         This site is protected bt reCAPTCHA and the <span className='underline text-blue-400'>Google Privacy Policy</span> and
           <span className='underline mx-0.5 text-blue-400'>Terms of Service</span> apply.
        </p>
       </div>
    </div>
    </div>
  )
}

export default CaptainSignUp