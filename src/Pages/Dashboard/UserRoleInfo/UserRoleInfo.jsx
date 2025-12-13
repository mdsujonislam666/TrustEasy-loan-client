import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const UserRoleInfo = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users`)
            return res.data;
        }
    })
    return (
        <div>
            <h1>this is user role info</h1>
            <h1>{users.email}</h1>
            
        </div>
    );
};

export default UserRoleInfo;