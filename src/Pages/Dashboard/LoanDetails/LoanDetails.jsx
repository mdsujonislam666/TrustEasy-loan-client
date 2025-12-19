import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { Link, useParams } from 'react-router';
import { FaBangladeshiTakaSign } from 'react-icons/fa6';

import useUserRole from '../../../Hooks/useUserRole';

const LoanDetails = () => {
    const {role} = useUserRole();
    console.log(role);
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    const { data: loanDetails = [], isLoading, error } = useQuery({
        queryKey: ['loan-details', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`loan-details/${id}`)
            return res.data;
        },
        enabled: !!id
    });
    if (isLoading) {
        return <span className="loading loading-bars loading-xl"></span>
    }
    if (error) {
        return toast.error('Failed to load loans');
    }
    return (
        <div className='card-body items-center p-5 m-5 mb-5 bg-amber-200 rounded-xl'>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
                <div>
                    <figure className="p-5 inset-shadow-indigo-500/50 ">
                        <img
                            src={loanDetails.loanImage}
                            alt="Shoes"
                            className="rounded-xl w-full h-66 hover:scale-105" />
                    </figure>
                </div>
                <div className="card-body space-y-3">
                    <h2 className="card-title text-2xl font-bold">{loanDetails.loanTitle}</h2>
                    <div className='bg-white px-2 py-3 rounded-xl shadow-lg shadow-white-500/50'>
                        <p className='text-gray-600 '>{loanDetails.description}</p>
                    </div>

                    <h1 className='font-bold flex items-center '>BTD: <span className='text-red-500'><FaBangladeshiTakaSign size={15} /></span><span className='text-blue-600'>{loanDetails.interestRate}</span></h1>
                    <div className='flex justify-between bg-white py-3 rounded-xl px-2 shadow-lg shadow-white-500/50'>
                        <h3 className='font-bold text-indigo-600'>{loanDetails.loanLimit}</h3>
                    </div>
                    <div className="card-actions">
                        {
                            role === "Borrower" && <Link to="/loan-application" state={loanDetails} className="btn bg-gradient-to-r from-indigo-500 via-sky-300 to-violet-500 w-full">Apply Now Button</Link>
                        }
                        
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LoanDetails;