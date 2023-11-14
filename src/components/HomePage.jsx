import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <div className='h-screen w-full flex flex-col items-center gap-32 md:bg-orange-400'>
            <h1 className='text-center mt-10 text-4xl font-bold text-orange-500 md:text-6xl md:text-white'>Burham University</h1>

            <div className='bg-orange-400 w-1/2 h-fit p-8 rounded-3xl mx-auto flex flex-col gap-16 items-center'>
                <h1 className='text-white font-bold text-2xl text-center'>Welcome to Burham University Student Portal</h1>

                <div className='flex flex-col gap-8'>
                    <Link to='/login' className='p-3 text-orange-400 text-xl bg-white rounded-lg font-bold'>Log In</Link>
                    <Link to='/signup' className='p-3 text-orange-400 text-xl bg-white rounded-lg font-bold'>Sign Up</Link>
                </div>
            </div>


        </div>
    )
}

export default HomePage