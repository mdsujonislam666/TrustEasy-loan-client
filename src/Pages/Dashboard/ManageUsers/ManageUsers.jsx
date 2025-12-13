import React, { useRef } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { RxUpdate } from "react-icons/rx";
import { Link } from 'react-router';

const ManageUsers = () => {
    const axiosSecure = useAxiosSecure();
    const userModalRef = useRef();
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users`)
            return res.data;
        }
    })


    return (
        <div>
            <h2 className='text-5xl'>Manage Role: {users.length}</h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.displayName}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    <Link to="/dashboard/userRole-info" className='btn btn-square hover:bg-amber-300'>
                                        <RxUpdate />
                                    </Link>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

            <dialog ref={userModalRef} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">UserInfo!</h3>

                        <div>
                            <div>
                                <img src={users.photoURL} alt="" />
                                <h1>{users.displayName}</h1>
                            </div>
                        </div>

                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

        </div>
    );
};

export default ManageUsers;