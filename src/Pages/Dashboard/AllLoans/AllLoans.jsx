import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { FaTrashCan } from 'react-icons/fa6';
import { RxUpdate } from 'react-icons/rx';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const AdminAllLoans = () => {
    const axiosSecure = useAxiosSecure();
    const { data: adminAllLoans = [], isLoading, error, refetch } = useQuery({
        queryKey: ['adminAllLoans'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/adminAllLoans`)
            return res.data;
        }
    });
    if (isLoading) {
        return <span className="loading loading-bars loading-xl"></span>
    }
    if (error) {
        return toast.error('Failed to load loans');
    }


    const handleLoanDelete = id => {

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
                axiosSecure.delete(`/loans/${id}`)
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

    const handleShowHome = (id, currentValue) => {
        const loanInfo = {
            showHome: currentValue === 'Yes'? "No" : "Yes"
        }
        axiosSecure.put(`/adminAllLoans/${id}`, loanInfo)
            .then(res => {
                if (res.data.result.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Show on Home set Updated!",
                        showConfirmButton: false,
                        timer: 2500
                    });
                }
            })
            .catch(() =>{
                toast.error("Failed to update showHome");
            })
    }



    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                Serial
                            </label>
                        </th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Interest</th>
                        <th>Category</th>
                        <th>Created By</th>
                        <th>Show on Home</th>
                        <th>Actions</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        adminAllLoans.map((allLoan, index) => <tr key={allLoan._id}>
                            <th>
                                <label>
                                    {index + 1}
                                    {/* <input type="checkbox" className="checkbox" /> */}
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={allLoan.loanImage}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <h3>{allLoan.loanTitle}</h3>
                            </td>
                            <td>{allLoan.interestRate}</td>
                            <th>
                                <p>{allLoan.category}</p>
                            </th>
                            <th>
                                <p>{allLoan.createdBy}</p>
                            </th>
                            <th>
                                <p>{allLoan.showHome}</p>
                            </th>
                            <th className='flex gap-2'>

                                {
                                    allLoan.showHome === "Yes" ?
                                        <button onClick={()=> handleShowHome(allLoan._id, allLoan.showHome)} className='btn btn-square hover:bg-amber-300'>
                                            No
                                        </button> :
                                        <button onClick={()=> handleShowHome(allLoan._id, allLoan.showHome)} className='btn btn-square hover:bg-amber-300'>
                                            Yes
                                        </button>
                                }

                                <button onClick={() => handleLoanDelete(allLoan._id)} className='btn btn-square hover:bg-amber-300'>
                                    <FaTrashCan />
                                </button>

                                <Link to={`/dashboard/update-loans/${allLoan._id}`} className='btn btn-square hover:bg-amber-300'>
                                    <RxUpdate />
                                </Link>
                            </th>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AdminAllLoans;