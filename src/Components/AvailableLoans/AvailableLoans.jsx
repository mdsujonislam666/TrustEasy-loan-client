import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import LoanCard from '../Card/LoanCard';

const AvailableLoans = () => {
    const axiosSecure = useAxiosSecure();
    const { data: availableLoans = [], isLoading, error } = useQuery({
        queryKey: ['availableLoans'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/availableLoans`)
            return res.data;
        }
    });
    if (isLoading) {
        return <span className="loading loading-bars loading-xl"></span>
    }
    if (error) {
        return toast.error('Failed to load loans');
    }

    return (
        <div>
            <div className='py-10 space-y-5'>
                <h2 className='text-5xl font-bold text-center'>Choose-<span className='text-red-600'>Your Loans</span></h2>
                <p className='text-center font-bold text-2xl'>Your smile is our real achievement — and we work every day to reach that goal.</p>
            </div>
            <div className='grid grid-cols-3 gap-5'>
                {
                    availableLoans.map(loan => (
                        <LoanCard key={loan._id} loan={loan}></LoanCard>
                    ))
                }
            </div>
        </div>
    );
};

export default AvailableLoans;