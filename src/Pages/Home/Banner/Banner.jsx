import React from 'react';
import banner from '../../../assets/banner.jpg';

const Banner = () => {
    return (
        <div className="hero min-h-screen rounded-2xl mt-10 px-2"
            style={{
                backgroundImage:
                    `url(${banner})`,
            }}>

            <div className='lg:pr-[700px]'>
                <div className="hero-overlay"></div>
                <div className="hero-content text-black text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold text-[#378cd3]">Your Needs, <span className='text-green-600'>Our Priority</span></h1>
                        <p className="mb-5 text-black lg:text-gray-700">
                            Important decisions in life shouldn’t be delayed—get the right support at the right time. With TrustEase Loan’s simple and secure service, move confidently toward achieving your goals today
                        </p>
                        <button className="btn bg-radial-[at_50%_75%] from-sky-300 via-blue-400 to-indigo-800 to-90%">Apply for Loan</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;