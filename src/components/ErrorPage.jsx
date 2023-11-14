import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div className='w-full h-screen flex flex-col justify-center items-center p-8 gap-8 bg-orange-400 text-white transition-all duration-400 ease-in-out'>
            <h1 className='text-3xl md:text-5xl text-center'>Error!!! This Page is not available for viewing.</h1>
            <p className='text-xl font-bold'>Click the button below to go back to the homepage</p>
            <Link to='home' className='p-3 rounded-lg bg-white text-orange-400 transition duration-400 ease-in hover:bg-transparent hover:text-white text-xl font-bold'>Back to Homepage</Link>
        </div>
    )
}

export default ErrorPage