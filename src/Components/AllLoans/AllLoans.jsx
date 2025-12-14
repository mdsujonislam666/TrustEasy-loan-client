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
        return <span className="loading loading-bars loading-xl"></span>
    }
    if (error) {
        return toast.error('Failed to load loans');
    }
    return (
        <div>
            <h1>available loan: {allLoans.length}</h1>
            <div className='grid grid-cols-3 gap-5'>
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