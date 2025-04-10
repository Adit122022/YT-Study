import React, { useEffect } from 'react'
import AppRoutes from './Routes/AppRoutes'
import Navbar from './components/Navbar'
import ClickSpark from './assets/REACT BITE/ClickSpark'


const App = () => {

  return (
<div className='w-screen h-screen'>

<ClickSpark
  sparkColor='#fff'
  sparkSize={10}
  sparkRadius={15}
  sparkCount={8}
  duration={400}
>

<Navbar/>
 <AppRoutes/>
</ClickSpark>
 </div>
 
  )
}

export default App