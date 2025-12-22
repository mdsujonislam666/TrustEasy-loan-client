import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../Hooks/useAuth';
import { useNavigate } from 'react-router';


const MyProfile = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: users = {} } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user?email=${user?.email}`)
            return res.data;
        }
    })

    const { signOutUser } = useAuth();
    const navigate = useNavigate();

    const handleLogOut = () => {
        signOutUser()
            .then(() => {
                navigate('/login');
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='card-body items-center p-5 m-5 mb-5 bg-amber-300 text-black rounded-xl'>
            <h1 className='text-2xl font-bold'>My Profile</h1>
            <div>
                <img className='w-40 h-40 rounded-full' src={users.photoURL} alt="" />
            </div>
            <p className='font-bold'><strong>Name: </strong> <span>{users.displayName}</span></p>
            <p className='font-bold'><strong>Role: </strong> <span>{users.role}</span></p>
            <p className='font-bold'><strong>Email: </strong><span>{users.email}</span></p>
            <a onClick={handleLogOut} className="btn border-none bg-gradient-to-r from-indigo-500 via-purple-300 to-pink-400 text-black">Log Out</a>
        </div>
    );
};

export default MyProfile;