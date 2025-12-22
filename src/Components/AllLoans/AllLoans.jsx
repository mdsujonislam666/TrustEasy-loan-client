import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import LoanCard from '../Card/LoanCard';

const AllLoans = () => {
    const axiosSecure = useAxiosSecure();
    const { data: allLoans = [], isLoading, error } = useQuery({
        queryKey: ['allLoans'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/allLoans`)
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
        <div>
            <div className='text-center py-10 lg:w-[600px] flex flex-col mx-auto py10 space-y-3'>
                <h2 className='text-5xl font-bold text-center'>All-<span className='text-red-600'>Loans</span></h2>
                <p>
                    Take a step closer to achieving your dreams—apply today for the loan you need through a simple process, transparent terms, and trusted services.
                </p>

            </div>
            <div className='grid mx-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    allLoans.map(loan => (
                        <LoanCard key={loan._id} loan={loan}></LoanCard>
                    ))
                }
            </div>
        </div>
    );
};

export default AllLoans;