import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/netflix-logo.png'
import png from "../assets/images/hero.png"

const SignUpPage = () => {
    return (
        <div className=' h-screen w-full  2xl:bg-img   bg-black '>
          
            <header className='max-w-6xl  mx-auto px-2 py-5 flex items-center justify-between'>
                <Link to={"/"}>
                    <img src={logo} alt='logo' className='w-24 md:w-52 my-auto' />
                </Link>
            </header>

            <div className='flex items-center justify-center mx-3 mt-20'>
                <div className='w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg'>
                    <h1 className='text-3xl text-white font-bold text-center mb-4 mt-2'>SignUP</h1>
                    <form className='space-y-4'>
                        <div >

                            <label htmlFor='email' className='text-gray-300'>Email</label>
                            <input type='email' className='w-full px-3 py-2 rounded-md  bg-transparent text-white border  border-gray-700 focus:outline-none focus:ring'/>
                        </div>
                        <div >

                            <label htmlFor='username' className='text-gray-300'>Username</label>
                            <input type='text' className='w-full px-3 py-2 rounded-md bg-transparent text-white border  border-gray-700 focus:outline-none focus:ring'/>
                        </div>
                        <div >

                            <label htmlFor='password' className='text-gray-300'>password</label>
                            <input type='password' className='w-full px-3 py-2 rounded-md bg-transparent text-white border border-gray-700 focus:outline-none focus:ring'/>
                        </div>
                        <div>
                            <button className='w-full py-2 bg-red-600 text-lg font-semibold text-white rounded-md'>Sign Up</button>
                        </div>
                        <div>
                         <h3 className='text-gray-300'>Already have an account ? <Link to={'/'} className='text-red-500 underline'>Sign in</Link></h3>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage