import React from 'react';
import logo from '../../assets/logo2 (2).png'

const Logo = () => {
    return (
        <div className='w-[200px] flex flex-col md:flex-row lg:flex-row gap-2 items-center '>
            <img className='w-10 md:w-14 lg:w-14' src={logo} alt="" />
            <div className='text-[18px] flex flex-col items-center space-y-1'>
                <div className='flex gap-2 text-[10px] md:text-[18px] lg:text-[18px]'>
                    <p className='font-bold text-[#378cd3]'>TRUSTEASY</p>
                    <p className='text-[#f0e0af] font-bold'>LOAN</p>
                </div>

                <div className='lg:w-[150px] h-1 bg-[#f0e0af] rounded-4xl'></div>
            </div>
        </div>
    );
};

export default Logo;