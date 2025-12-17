import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaTrashCan } from 'react-icons/fa6';
import { RxUpdate } from 'react-icons/rx';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const ManageLoans = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: managerLoans = [], refetch } = useQuery({
        queryKey: ['managerLoans', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/managerLoans?email=${user.email}`)
            return res.data;
        }
    })

    const handleApplicationDelete = id => {
        console.log(id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/managerLoans/${id}`)
                    .then(res => {
                        console.log(res.data);

                        if (res.data.deletedCount) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }

    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='bg-green-300 shadow-cyan-500'>
                        <tr>
                            <th>Serial</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Interest</th>
                            <th>Category</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            managerLoans.map((managerLoan, index) => <tr key={managerLoan._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>

                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={managerLoan.loanImage}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>

                                </td>
                                <td>
                                    {managerLoan.loanTitle}
                                </td>
                                <td>{managerLoan.interestRate}</td>
                                <td>{managerLoan.category}</td>
                                <th>
                                    <button onClick={() => handleApplicationDelete(managerLoan._id)} className='btn btn-square hover:bg-amber-300'>
                                        <FaTrashCan />
                                    </button>
                                    <Link to={`/dashboard/update-loan/${managerLoan._id}`} className='btn btn-square mx-2 hover:bg-amber-300'>
                                        <RxUpdate />
                                    </Link>
                                </th>
                            </tr>)
                        }

                    </tbody>
                    {/* foot */}

                </table>
            </div>
        </div>
    );
};

export default ManageLoans;