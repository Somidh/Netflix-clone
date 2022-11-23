import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import { AuthContextProvider } from './Context/AuthContext'
import Account from './Pages/Account'
import Home from './Pages/Home'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/account' element={<Account />} />
        </Routes>
      </AuthContextProvider>

    </>
  )
}

export default App
