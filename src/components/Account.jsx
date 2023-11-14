import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function Account() {
    // const [modal, setModal] = useState(false);

    const auth = getAuth();
    const navigate = useNavigate()

    const handleLogout = async (e) => {
        e.preventDefault();
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate('/home')
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <div className='w-full h-screen bg-orange-400 text-white flex flex-col py-10'>
            <div className='flex text-2xl md:3xl gap-4 capitalize shadow-lg py-8 px-6'>
                <p>user picture goes here</p>
                <p>user name goes here</p>
            </div>
            <div className='px-6 py-8'>
                <h1 className='text-4xl'>Your Curated Course</h1>
                {/* {Courses} */}
            </div>
            <button onClick={(e) => { handleLogout(e) }} className='p-4 text-xl text-orange-400 bg-white rounded-xl md:w-[10%] w-1/2 mx-auto md:mt-20 mt-32'>LogOut</button>
        </div>
    )
}

export default Account