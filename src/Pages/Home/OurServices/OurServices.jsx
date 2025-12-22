import React from 'react';
import { FaCode, FaHeadphones } from 'react-icons/fa6';
import { FcProcess } from 'react-icons/fc';
import { IoDocumentText } from 'react-icons/io5';

const OurServices = () => {
    return (
        <div>
            <div className='text-center py-10 lg:w-[600px] flex flex-col mx-auto py10 space-y-3'>
                <h2 className='text-5xl font-bold text-center'>Our-<span className='text-red-600'>Services</span></h2>
                <p>
                    We deliver innovative, reliable, and customer focused services designed to support your goals, simplify processes, and create lasting value through technology, transparency, and professional expertise you can trust
                </p>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:ml-20 mx-2'>
                <div className="card w-80 bg-gradient-to-r from-indigo-500 via-purple-300 to-pink-400 text-white shadow-md hover:shadow-xl transition duration-300">
                    <div className='cursor-pointer relative group overflow-hidden rounded-lg'>
                        <div className="card-body items-center text-center transform transition duration-300 ease-in-out group-hover:scale-110 ">

                            {/* Icon */}
                            <div className="bg-black text-white p-4 rounded-xl mb-4">
                                <FaHeadphones size={24} />
                            </div>

                            {/* Title */}
                            <h2 className="card-title text-2xl font-bold">
                                24/7 CUSTOMER SERVICE
                            </h2>

                            {/* Description */}
                            <p className="text-sm text-black">
                                Friendly 24/7 customer support
                            </p>

                        </div>
                    </div>
                </div>
                <div className="card w-80 bg-gradient-to-r from-indigo-500 via-purple-300 to-pink-400 text-white shadow-md hover:shadow-xl transition duration-300">
                    <div className='cursor-pointer relative group overflow-hidden rounded-lg'>
                        <div className="card-body items-center text-center transform transition duration-300 ease-in-out group-hover:scale-110 ">
                            {/* Icon */}
                            <div className="bg-black text-white p-4 rounded-xl mb-4">
                                <IoDocumentText size={24} />
                            </div>

                            {/* Title */}
                            <h2 className="card-title text-2xl font-bold">
                                Document Verification
                            </h2>

                            {/* Description */}
                            <p className="text-sm text-black">
                                Friendly 24/7 customer support
                            </p>

                        </div>
                    </div>
                </div>
                <div className="card w-80 bg-gradient-to-r from-indigo-500 via-purple-300 to-pink-400 text-white shadow-md hover:shadow-xl transition duration-300">
                    <div className='cursor-pointer relative group overflow-hidden rounded-lg'>
                        <div className="card-body items-center text-center transform transition duration-300 ease-in-out group-hover:scale-110 ">

                            {/* Icon */}
                            <div className="bg-black text-white p-4 rounded-xl mb-4">
                                <FcProcess size={24} />
                            </div>

                            {/* Title */}
                            <h2 className="card-title text-2xl font-bold">
                                Easy Online Process
                            </h2>

                            {/* Description */}
                            <p className="text-sm text-black">
                                Friendly 24/7 customer support
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;