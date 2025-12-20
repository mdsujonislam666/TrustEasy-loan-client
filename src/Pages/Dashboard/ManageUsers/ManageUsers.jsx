import React, { useRef, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { RxUpdate } from "react-icons/rx";
import { Link } from 'react-router';
import { GrUserAdmin } from "react-icons/gr";
import { FaUserLock } from "react-icons/fa";
import Swal from 'sweetalert2';

const ManageUsers = () => {
    const axiosSecure = useAxiosSecure();
    const applicationModalRef = useRef();

    const [searchText, setSearchText] = useState('')
    const [selectApplication, setSelectApplication] = useState(null);


    const { data: users = [], refetch } = useQuery({
        queryKey: ['users', searchText],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users?searchText=${searchText}`)
            return res.data;
        }
    })

    const handleMakeAdmin = user => {
        Swal.fire({
            title: "Do you want to give admin approval to this user?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm and Continue Approval!"
        }).then((result) => {
            if (result.isConfirmed) {
                const roleInfo = { role: 'Admin' }
                axiosSecure.patch(`/users/${user._id}/role`, roleInfo)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.modifiedCount) {
                            refetch();
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: `${user.displayName} Marked as Admin`,
                                showConfirmButton: false,
                                timer: 2500
                            });
                        }
                    })

            }
        })
    }

    const handleRemoveAdmin = user => {
        Swal.fire({
            title: "Do you want to Remove admin approval to this user?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm and Continue Remove!"
        }).then((result) => {
            if (result.isConfirmed) {
                const roleInfo = { role: 'Borrower' }
                axiosSecure.patch(`/users/${user._id}/role`, roleInfo)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.modifiedCount) {
                            refetch();
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: `${user.displayName} Marked as Borrower`,
                                showConfirmButton: false,
                                timer: 2500
                            });
                        }
                    })
            }
        })

    }

    const openApplicationModal = async(user) => {
        const res = await axiosSecure.get(`/suspends/${user._id}`)
        setSelectApplication(res.data);
        applicationModalRef.current.showModal();
    }



    return (
        <div>
            <div className='py-10 space-y-5 bg-amber-200'>
                <h2 className='text-5xl font-bold text-center'>Search-<span className='text-red-600'>User</span></h2>

                <form className='mt-5 flex gap-2 justify-center'>
                    <label className="input rounded-full mb-2">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input onChange={(e) => setSearchText(e.target.value)} name='search' type="search" placeholder="Search" />
                    </label>
                    <button className='btn btn-primary rounded-full'>Search</button>
                </form>
            </div>

            <div className="overflow-x-auto">
                <table className="table table-zebra ">
                    {/* head */}
                    <thead className='bg-gradient-to-r from-slate-600 via-zinc-400 to-violet-400'>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Admin Action</th>
                            <th>User-Status</th>
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
                                    {
                                        user.role === 'Admin' ? <button onClick={() => handleRemoveAdmin(user)} className='bg-green-500 btn btn-square hover:bg-amber-300'><GrUserAdmin /></button> :
                                            <button onClick={() => handleMakeAdmin(user)} className='bg-red-500 btn btn-square hover:bg-amber-300'><FaUserLock /></button>
                                    }
                                </td>
                                <td>{ user.Status }
                                </td>
                                <td className='flex gap-2'>
                                    <Link to={`/dashboard/userRole-info/${user._id}`} id={user._id} className='btn btn-square hover:bg-amber-300'>
                                        <RxUpdate />
                                    </Link>
                                    {
                                        user.status === "suspend" && <button onClick={() => openApplicationModal(user)} className='btn  hover:bg-amber-300'>Reason</button>
                                    }
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

            <dialog ref={applicationModalRef} className="modal modal-bottom sm:modal-middle ">
                <div className="modal-box bg-blue-200">
                    <div className="overflow-x-auto">
                        <div>
                            {
                                selectApplication && (
                                    <div className="modal-box mx-auto inset-shadow-sm inset-shadow-indigo-500/50 bg-gradient-to-r from-indigo-500 via-sky-300 to-violet-500">
                                        <p className="py-4 text-xl font-bold text-center">Your Suspend Reasons</p>

                                        <p className='text-gray-700'><strong className='text-black'>Suspend Reason: </strong>{selectApplication.suspendReason }</p>

                                        <p className='text-gray-700'><strong className='text-black'>Suspend Feedback: </strong>{selectApplication.suspendFeedback }</p>
                                    </div>
                                )
                            }

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