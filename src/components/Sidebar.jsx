import React from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='w-[14%] min-h-screen border-r-2'>
        <div className='flex flex-col gap-4 pt-6  text-[15px]'> {/** pl-[20%] */}
            <NavLink className='flex items-center justify-center md:justify-start gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l' to='/add'>
                <img src={assets.add_icon} className='w-5 h-5' alt='Add new product'/>
                <p className='hidden md:block'>Add Items</p>
            </NavLink>
            <NavLink className='flex items-center justify-center md:justify-start gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l' to='/list'>
                <img src={assets.order_icon} className='w-5 h-5' alt='Add new product'/>
                <p className='hidden md:block'>List all Items</p>
            </NavLink>
            <NavLink className='flex items-center justify-center md:justify-start gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l' to='/orders'>
                <img src={assets.add_icon} className='w-5 h-5' alt='Add new product'/>
                <p className='hidden md:block'>Orders</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar