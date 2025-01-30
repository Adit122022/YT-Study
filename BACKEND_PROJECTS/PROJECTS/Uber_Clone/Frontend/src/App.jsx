import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/User/UserLogin'
import UserSignUp from './pages/User/UserSignUp'
import CaptainLogin from './pages/Captain/CaptainLogin'
import CaptainSignUp from './pages/Captain/CaptainSignUp'
import { UserDataContext } from './context/UserContext'

const App = () => {
   const data =useContext(UserDataContext)
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