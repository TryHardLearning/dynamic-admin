import axios from 'axios'
import React, { useContext } from 'react'
import { handleLogin } from '../services/authService'
import { AuthContext } from '../context/AuthContext'

import {backend_url} from '../App'
import { toast } from 'react-toastify'
const Login = () => {

    const { setToken } = useContext(AuthContext);

    const[email, setEmail] = React.useState('')
    const[password, setPassword] = React.useState('')

    const onSumidHandler = async (e)  => {
        e.preventDefault();

        const token = await handleLogin(email, password);
        if (token) {
           setToken(token);;
        }
    }


  return (
    <div className='flex justify-center items-center min-h-screen w-full'>
        <div className='bg-white shadow-xl border border-gray-200 rounded-[8px] px-8 py-6 max-w-md'>
            <h1 className='text-2xl font-bold mb-4'>Admin Panel</h1>
            <form onSubmit={onSumidHandler}>
                <div className='mb-3 min-w-73'>
                    <p className='text-sm font-medium text-gray-700 mb-2'>Email Address</p>
                    <input onChange={(e)=> setEmail(e.target.value)} value={email} type='email' className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' placeholder='Enter your email' />
                </div>
                <div>
                    <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
                    <input onChange={(e)=> setPassword(e.target.value)} value={password} type='text' className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' placeholder='Enter your password' />
                </div>
                <button type='submit' className='mt-2 w-full py-2 px-4 rounded-md text-white bg-black mt-8'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login