import React from 'react'

const Nav = () => {
  return (
    <nav className='w-[20%] h-full bg-zinc-100 flex flex-col items-center pt-5'>
    <a href="/create" className='px-5 py-2 border rounded border-blue-300 text-blue-400'>Add New Product</a>
    <hr className='my-3 w-[80%]' />
    <h1 className='text-2xl font-serif  mb-3 w-[80%]'>Category Filter</h1>
    <ul className=' w-[80%]'>
      <li className='mb-3 bg-red-100 p-2 flex items-center gap-5'> 
        <span className=' w-[30px] h-[30px] bg-blue-100 rounded-full'></span>Cart1</li>
    
    </ul>
          </nav>
  )
}

export default Nav