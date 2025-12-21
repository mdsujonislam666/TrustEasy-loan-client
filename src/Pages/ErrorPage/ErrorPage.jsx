import React from 'react';
import error from "../../assets/error404.png";
import { BiError } from 'react-icons/bi';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <div className='max-w-11/12 mx-auto text-center space-y-5 text-black py-5 bg-gradient-to-r from-indigo-500 via-sky-300 to-violet-500'>
                <h1 className='text-5xl font-bold flex justify-center text-red-600'><BiError />404</h1>
                <p className='text-2xl w-[600px] mx-auto'>Oops! Our astronaut is tired of searching for this link. It seems to have been lost in a black hole. Let's go back to Earth or the homepage.</p>
                <Link to="/" className='btn btn-primary'>Back Home</Link>
                <img className='w-[500px] h-[350px] mx-auto rounded-bl-4xl rounded-tr-4xl' src={error} alt="" />
            </div>
        </div>
    );
};

export default ErrorPage;