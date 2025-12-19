import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';

const UserRoleInfo = () => {
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    const { data: users = [], isLoading, error } = useQuery({
        queryKey: ['userDetails', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/userDetails/${id}`)
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
        <div className='bg-amber-200 py-20'>
            <div className="card bg-cyan-500 w-96 shadow-sm mx-auto">
                <figure className="px-10 pt-10">
                    <img
                        src={users.photoURL}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title"><strong>Name</strong>{users.displayName}</h2>
                    <h2 className="card-title"><strong>Role</strong>{users.role}</h2>
                    <p><strong>Email: </strong>{users.email}</p>
                    <div className="card-actions flex gap-5">
                        <button className="btn">Approve</button>
                        <button className="btn">Suspend</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UserRoleInfo;