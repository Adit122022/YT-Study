import React, { useEffect } from 'react'
import AppRoutes from './Routes/AppRoutes'
import Navbar from './components/Navbar'


const App = () => {

  return (
<div className='w-screen h-screen'>
<Navbar/>
 <AppRoutes/>
 </div>
 
  )
}

export default App