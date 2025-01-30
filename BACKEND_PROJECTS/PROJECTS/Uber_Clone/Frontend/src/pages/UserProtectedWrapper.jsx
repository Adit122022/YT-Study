import React, { Children, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'

const UserProtectedWrapper = ({children}) => {
const token = localStorage.getItem('token');
   const navigate = useNavigate()
   if(!token) { navigate('/login')}
  return (
 <>
 {children}</>
  )
}

export default UserProtectedWrapper