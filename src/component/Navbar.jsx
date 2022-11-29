import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'

const Navbar = () => {

  const { user, logOut } = UserAuth()
  const navigate = useNavigate()

  const handleLogOut = async () => {
    try {
      await logOut()
      navigate('/')
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex items-center justify-between p-4 z-[100] absolute w-full bg-black'>
      <Link to='/'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer uppercase'>netflix</h1>
      </Link>
      {
        user?.email ? (
          <div>
            <Link to='/account'>
              <button className='text-white pr-4 font-bold text-lg'>Account</button>
            </Link>
            <Link to='/signIn' onClick={handleLogOut}>
              <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white font-bold'>Logout</button>
            </Link>
          </div>
        )
          :
          (
            <div>
              <Link to='/login'>
                <button className='text-white pr-4 font-bold text-lg'>Sign In</button>
              </Link>
              <Link to='/signup'>
                <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white font-bold'>Sign Up</button>
              </Link>
            </div>
          )
      }
    </div>
  )
}

export default Navbar
