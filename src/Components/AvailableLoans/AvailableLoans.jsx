import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const AvailableLoans = () => {
    const axiosSecure = useAxiosSecure();
    const { data: availableLoans = [] } = useQuery({
        queryKey: ['availableLoans'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/loans`)
            return res.data;
        }
    })

    return (
        <div>
            <h1>available loan: {availableLoans.length}</h1>
        </div>
    );
};

export default AvailableLoans;