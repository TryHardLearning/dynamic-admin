import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Create from './pages/Create'
import ListAll from './pages/ListAll'
import Orders from './pages/Orders'

const App = () => {
  return (
    <div className='bg-gray-50 min-h-screen'>
        <>
          <Navbar/>
          <hr/>
          <div className='flex w-full'>
            <Sidebar/>
            <div className='w-[70%] mx-auto ml-[max(5w,25px)] my-8 text-gray-600 text-base'>
              <Routes>
                <Route path='/add' element={<Create/>}/>
                <Route path='/list' element={<ListAll/>}/>
                <Route path='/orders' element={<Orders/>}/>
              </Routes>
            </div>
          </div>
        </>
        
       
    </div>
  )
}

export default App