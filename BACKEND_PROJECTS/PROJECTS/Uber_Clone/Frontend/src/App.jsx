import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/User/UserLogin'
import UserSignUp from './pages/User/UserSignUp'
import CaptainLogin from './pages/Captain/CaptainLogin'
import CaptainSignUp from './pages/Captain/CaptainSignUp'
import { UserDataContext } from './context/UserContext'
import Start from './pages/Start'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import UserLogout from './pages/User/UserLogout'
import CaptainHome from './pages/Captain/CaptainHome'
import CaptainProtectedWrapper from './pages/Captain/CaptainProtectedWrapper'
import CaptainLogout from './pages/Captain/CaptainLogout'

const App = () => {
   const data =useContext(UserDataContext)
  return (
    <div >
<Routes>
  <Route path='/' element={<Start/>}/>
  <Route path='/home' element={
    <UserProtectedWrapper><Home/></UserProtectedWrapper>
  }/>
  <Route path='/login' element={<UserLogin/>}/>
  <Route path='/signup' element={<UserSignUp/>}/>
  <Route path='/captain-login' element={<CaptainLogin/>}/>
  <Route path='/captain-signup' element={<CaptainSignUp/>}/>
  <Route path='users/logout' element={
    <UserProtectedWrapper>  <UserLogout/>  </UserProtectedWrapper> }/>
    <Route path='/captain-home' element={<CaptainProtectedWrapper> <CaptainHome/> </CaptainProtectedWrapper>}/>
    <Route path='/captain-logout' element={<CaptainProtectedWrapper> <CaptainLogout/> </CaptainProtectedWrapper>}/>
</Routes>
    </div>
  )
}

export default App