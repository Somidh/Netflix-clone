import { Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import { AuthContextProvider } from './Context/AuthContext'
import Account from './Pages/Account'
import Home from './Pages/Home'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import About from './Pages/About'
import ProtectedRoute from './component/ProtectedRoute'

function App() {

  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/account' element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>} />
          <Route path='/movie/:id' element={<About />} />
        </Routes>
      </AuthContextProvider>

    </>
  )
}

export default App
