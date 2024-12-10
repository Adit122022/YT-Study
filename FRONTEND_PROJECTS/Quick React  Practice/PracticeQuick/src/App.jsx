import React from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground'

const App = () => {
  return (
    <div className='w-screen h-screen bg-zinc-800 text-zinc-600  relative'>
<Background/>
<Foreground/>

    </div>

  )
}

export default App