import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const MyApplication = () => {

    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: application = []} = useQuery({
        queryKey: ['myApplication', user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/loanApplications?.email=${user.email}`)
            return res.data;
        }
    })

    return (
        <div>
            <h1>this is my application: {application.length}</h1>
        </div>
    );
};

export default MyApplication;