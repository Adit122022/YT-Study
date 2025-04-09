import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Signup from '../pages/Signup'
import SettingsPage from '../pages/SettingsPage'
import ProfilePage from '../pages/ProfilePage'

const AppRoutes = () => {
  return (
  <Routes>
    <Route path ='/' element={<HomePage/>}/>
    <Route path ='/signup' element={<Signup/>}/>
    <Route path ='/settings' element={<SettingsPage/>}/>
    <Route path ='/profile' element={<ProfilePage/>}/>
  </Routes>
  )
}

export default AppRoutes