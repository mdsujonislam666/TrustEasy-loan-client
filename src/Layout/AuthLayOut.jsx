import React from 'react';
import Logo from '../Components/Logo/Logo';
import { Outlet } from 'react-router';
import loginImage from '../assets/login.png';

const AuthLayOut = () => {
    return (
        <div className='max-w-7xl mx-auto mt-2'>
            <Logo></Logo>
            <div className='bg-primary mt-5 py-10 rounded-2xl'>
                <div className='flex flex-col lg:flex-row items-center gap-5 px-2'>
                    <div className='flex-1 '>
                        <Outlet></Outlet>
                    </div>
                    <div className='flex-1'>
                        <img className='w-[400px] h-[450px] rounded-2xl shadow-amber-100 shadow-2xl' src={loginImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthLayOut;