import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {

  const { logout } = useContext(AuthContext);

  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
      <img src={assets.logo} alt='Logo' className='w-[max(10%,80px)]' />
      <button onClick={ () => logout() } className='bg-red-400 text-white px-5 py-2 sm:py-2 rounded-[8px] text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar