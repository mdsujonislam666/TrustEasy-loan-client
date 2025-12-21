import React from 'react';
import banner from '../../../assets/banner.jpg';
import { Link } from 'react-router';

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
                        <h2 className='text-4xl font-bold text-center pb-5'>Your Needs,<span className='text-red-600'>Our Priority</span></h2>
                        <p className="mb-5 text-black lg:text-gray-700">
                            Important decisions in life shouldn’t be delayed—get the right support at the right time. With TrustEase Loan’s simple and secure service, move confidently toward achieving your goals today
                        </p>
                        <Link to="/loan-application" className="btn bg-radial-[at_50%_75%] from-sky-300 via-blue-400 to-indigo-800 to-90%">Apply for Loan</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;