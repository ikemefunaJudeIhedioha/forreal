import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [data, setData] = useState({});

    const navigate = useNavigate();

    const handleInput = (event) => {
        let newInput = { [event.target.name]: event.target.value };

        setData({ ...data, ...newInput })
        console.log(data)
    };

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                navigate('/account')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    }

    const googleCreate = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                navigate('/account')
                console.log('its done')
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    return (

        <div className='w-full h-screen flex flex-col justify-center items-center bg-orange-400'>
            <h1 className='text-white font-bold text-3xl mb-8 text-center md:text-5xl'>Burham University</h1>
            <div className='shadow-xl py-8 px-4 border rounded-xl w-3/4 md:w-[40%] mx-auto flex flex-col'>
                <h1 className='text-white font-bold text-3xl mb-8 text-center'>Sign Up</h1>
                <form className='flex-col flex gap-8' onSubmit={handleLogin}>
                    <p className='text-white'>Email Address</p>
                    <input
                        type="email" name='email' className='text-lg bg-transparent placeholder:text-white border-b-[1px] p-2 outline-none -mt-8' onChange={(event) => handleInput(event)} />

                    <p className='text-white'>Password</p>
                    <input type="password" name='password' className='text-lg bg-transparent placeholder:text-white border-b-[1px] p-2 outline-none -mt-8' onChange={(event) => handleInput(event)} />

                    <button className='p-3 bg-white text-orange-400 font-bold text-lg transition ease-in-out duration-200 hover:bg-transparent hover:text-white rounded-xl'>Log In</button>

                    <p className='text-center text-white font-bold'>OR</p>


                </form>

                <button className='p-3 bg-white text-orange-400 font-bold text-lg transition ease-in-out duration-200 hover:bg-transparent hover:text-white rounded-xl mt-6' onClick={googleCreate}>Continue With Google</button>

            </div>
        </div>
    )
}

export default Login