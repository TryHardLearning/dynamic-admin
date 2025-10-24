import React, { useContext, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthContext, AuthContextProvider } from './context/AuthContext';

import { ToastContainer } from 'react-toastify';

import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Create from './pages/Create'
import ListAll from './pages/ListAll'
import Orders from './pages/Orders'
import Login from './components/Login'

export const backend_url = import.meta.env.VITE_BACKEND_URL
export const currency = '$'
const App = () => {
  
  const { token } = useContext(AuthContext);

  return (
      <div className='bg-gray-50 min-h-screen'>
        <ToastContainer />
        {token == null || token === '' ?
          <Login />
          :
          <>
            <Navbar />
            <hr />
            <div className='flex w-full'>
              <Sidebar />
              <div className='w-[70%] mx-auto ml-[max(5w,25px)] my-8 text-gray-600 text-base'>
                <Routes>
                  <Route path='/add' element={<Create />} />
                  <Route path='/list' element={<ListAll />} />
                  <Route path='/orders' element={<Orders />} />
                </Routes>
              </div>
            </div>
          </>
        }
      </div>
  )
}

export default App