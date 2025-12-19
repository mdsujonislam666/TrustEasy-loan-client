import React from 'react';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useUserRole = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: role = "Borrower", isLoading: roleLoading} = useQuery({
        queryKey: ['user-role', user?.email],
        queryFn:async() =>{
            const res = await axiosSecure.get(`/users/${user.email}/role`);
            return res.data?.role || "Borrower";
        }
    })
    return {role, roleLoading};
};

export default useUserRole;