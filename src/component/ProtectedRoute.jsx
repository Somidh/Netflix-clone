import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'

const ProtectedRoute = ({children}) => {

  const {user} = UserAuth()

 return !user ? <Navigate to='/' /> : children

}

export default ProtectedRoute
