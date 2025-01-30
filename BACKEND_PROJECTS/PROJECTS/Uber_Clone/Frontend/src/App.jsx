import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/User/UserLogin'
import UserSignUp from './pages/User/UserSignUp'
import CaptainLogin from './pages/Captain/CaptainLogin'
import CaptainSignUp from './pages/Captain/CaptainSignUp'

const App = () => {
  return (
    <div >
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/login' element={<UserLogin/>}/>
  <Route path='/signup' element={<UserSignUp/>}/>
  <Route path='/captain-login' element={<CaptainLogin/>}/>
  <Route path='/captain-signup' element={<CaptainSignUp/>}/>
</Routes>
    </div>
  )
}

export default App