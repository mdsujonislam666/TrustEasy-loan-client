import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { FaMagnifyingGlass, FaTrashCan } from "react-icons/fa6";
import { MdPayments } from "react-icons/md";
import Swal from 'sweetalert2';
import { BiCheck } from "react-icons/bi";
import { Link } from 'react-router';


const MyApplication = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: applications = [], refetch } = useQuery({
        queryKey: ['myApplication', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/loanApplications?email=${user.email}`)
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
                axiosSecure.delete(`/loanApplications/${id}`)
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

    const handlePayment = async(application) => {
        const paymentInfo = {
            cost: application.cost,
            applicationId: application._id,
            userEmail: application.email,
            loanTitle: application.loanTitle
        }
        const res = await axiosSecure.post('/payment-checkout-session', paymentInfo)
        console.log(res.data.url);
        window.location.assign(res.data.url);
    }

    return (
        <div>
            <h1>this is my application: {applications.length}</h1>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Loan ID</th>
                            <th>Loan Info</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Application Fee</th>
                            <th>Fee Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applications.map((application, index) =>
                                <tr key={application._id}>
                                    <th>{index + 1}</th>
                                    <td>{application._id}</td>
                                    <td>{application.loanTitle}</td>
                                    <td>{application.loanAmount}</td>
                                    <td>{application.Status}</td>
                                    <td>{application.cost}</td>
                                    <td>{application.FeeStatus}</td>
                                    <td className='flex gap-2'>
                                        <button className='btn btn-square hover:bg-amber-300'>
                                            <FaMagnifyingGlass />
                                        </button>
                                        {
                                            application.Status === 'Pending' ? <button onClick={() => handleApplicationDelete(application._id)} className='btn btn-square hover:bg-amber-300'>
                                                <FaTrashCan />
                                            </button> : ""
                                        }
                                        {
                                            application.FeeStatus === 'unpaid' ?

                                                <button onClick={() => handlePayment(application)} className='btn btn-square hover:bg-amber-300'>
                                                    <MdPayments />
                                                </button>
                                                : <button className='btn btn-square hover:bg-amber-300'>
                                                    <BiCheck />
                                                </button>
                                        }
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyApplication;