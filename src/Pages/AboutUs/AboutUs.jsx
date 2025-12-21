import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6';

const AboutUs = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], isLoading, error } = useQuery({
        queryKey: ['aboutUsUser'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/aboutUsUser`)
            return res.data;
        }
    });
    if (isLoading) {
        return <span className="loading mx-auto text-6xl flex justify-center items-center loading-bars text-amber-400 loading-xl"></span>
    }
    if (error) {
        return toast.error('Failed to load loans');
    }
    return (
        <div className='my-10 mx-2'>
            <div className='text-center py-10 lg:w-[600px] flex flex-col mx-auto py10 space-y-3'>
                <h2 className='text-5xl font-bold text-center'>Our-<span className='text-red-600'>Borrower's</span></h2>
                <p>
                    Our borrowers are driven individuals who trust our platform to achieve goals, grow confidently, and build stronger financial futures together.
                </p>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {
                    users.map(user => {
                        return (
                            <div key={user._id} className='max-w-sm bg-base-100 shadow-lg rounded-xl p-6 border border-gray-400'>
                                <div className='flex justify-between'>
                                    <FaQuoteLeft className='text-primary text-2xl mb-4' />
                                    <FaQuoteRight className='text-primary  text-2xl mb-4' />
                                </div>

                                {/* profile */}
                                <div className='flex flex-col items-center gap-4 text-center'>
                                    <div>
                                        <img className='w-20 h-20 rounded-full' src={user.photoURL} alt="" />
                                    </div>
                                    <div>
                                        <h2 className='font-semibold text-lg text-black'><span className='text-white'>Name:</span> {user.displayName}</h2>
                                        <p className='text-sm text-gray-500'><span className='text-white'>Email:</span> {user.email}</p>
                                        <h2 className='font-semibold text-lg text-black'><span className='text-white'>Role:</span> {user.role}</h2>
                                    </div>
                                </div>

                                {/* divider */}
                                <div className='border-t border-dashed border-gray-300 my-4'></div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default AboutUs;