import React from 'react';
import { Link } from 'react-router';
import forbidden from '../../assets/forbidden.webp';

const Forbidden = () => {
    return (
        <div className='flex flex-col items-center justify-center space-y-3 h-screen p-10 bg-amber-200 text-center'>
            <img className='rounded-2xl mx-auto' src={forbidden} alt="" />
             <h1 className='text-4xl text-black font-bold'>You Are Forbidden to Access This Page</h1>
             <p className='text-gray-800'>please contact the administrator if you believe this is error</p>

             <div>
                <Link to="/" className='btn btn-primary'>Go To Home</Link>
             </div>
        </div>
    );
};

export default Forbidden;