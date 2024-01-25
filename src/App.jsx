import React from 'react'
import { Navbar } from './components/Navbar'
import { Login } from './pages/Login'
import { Register } from './pages/Register'

export const App = () => {
  return (
    <>
    <div className='container'>
        <Navbar />
    </div>

        <div className='register-form'>
            <Login /> 
            {/* <Register /> */}
        </div>
    </>    
  )
}
