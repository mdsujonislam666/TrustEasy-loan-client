import React, { useRef, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { toast } from 'react-toastify';

const PendingLoans = () => {
    const axiosSecure = useAxiosSecure();
    const applicationModalRef = useRef();
    const [selectApplication, setSelectApplication] = useState(null);
    const { data: pendingLoans = [], refetch } = useQuery({
        queryKey: ['pendingLoans'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/pendingLoans`)
            return res.data;
        }
    })
    const handleApproved = async (id) => {
        try {
            const res = await axiosSecure.patch(`/pendingLoans/approve/${id}`);
            if (res.data.success) {
                toast.success("Loan Approved Successfully");
                refetch();
            }
        }
        catch (error) {
            toast.error('Approved Failed');
            console.log(error);;
        }
    }
    const handleReject = async (id) => {
        try {
            const res = await axiosSecure.patch(`/pendingLoans/reject/${id}`);
            if (res.data.success) {
                toast.success("Loan Rejected Successfully");
                refetch();
            }
        }
        catch (error) {
            toast.error('Rejected Failed');
            console.log(error);;
        }
    }

    const openApplicationModal = (application) => {
        setSelectApplication(application);
        applicationModalRef.current.showModal();
    }

    return (
        <div>
            pending loans: {pendingLoans.length}
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Loan ID</th>
                            <th>User</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pendingLoans.map((pendingLoan, index) => <tr key={pendingLoan._id}>
                                <th>{index + 1}</th>
                                <td>{pendingLoan._id}</td>
                                <td>
                                    <div className='flex flex-col'>
                                        <div>{pendingLoan.firstName} {pendingLoan.lastName}</div>
                                        <div>
                                            {pendingLoan.email}
                                        </div>
                                    </div>
                                </td>
                                <td>{pendingLoan.loanAmount}</td>
                                <td>{new Date(pendingLoan.createdAt).toLocaleDateString()}</td>
                                <td className='flex gap-2'>
                                    <button onClick={() => handleApproved(pendingLoan._id)} className='btn hover:bg-amber-300'>
                                        Approved
                                    </button>
                                    <button onClick={() => handleReject(pendingLoan._id)} className='btn hover:bg-red-400 hover:text-white'>
                                        Rejected
                                    </button>
                                    <button onClick={() => openApplicationModal(pendingLoan)} className='btn btn-square hover:bg-amber-300'>
                                        <FaMagnifyingGlass />
                                    </button>
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
                                    <div className='flex flex-col gap-2 '>
                                        <p><strong>Loan ID:</strong> {selectApplication._id}</p>
                                        <div className='flex gap-2'>
                                            <strong>Borrower Name:</strong>
                                            <div>{selectApplication.firstName}</div>
                                            <div>{selectApplication.lastName}</div>
                                        </div>
                                        <p><strong>Borrower Email:</strong>{selectApplication.email}</p>
                                        <p><strong>Loan Title:</strong>{selectApplication.loanTitle}</p>
                                        <p><strong>Loan Amount:</strong>{selectApplication.loanAmount}</p>
                                        <p><strong>Status:</strong>{selectApplication.Status}</p>
                                        <p><strong>Interest Rate:</strong>{selectApplication.interestRate}</p>
                                        <p><strong>Contact Number:</strong>{selectApplication.contactNumber}</p>
                                        <p><strong>National ID:</strong>{selectApplication.nationalID}</p>
                                        <p><strong>IncomeSource:</strong>{selectApplication.incomeSource}</p>
                                        <p><strong>Monthly Income:</strong>{selectApplication.monthlyIncome}</p>
                                        <p><strong>Address:</strong>{selectApplication.address}</p>
                                        <p><strong>Extra Note:</strong>{selectApplication.extra}</p>

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

export default PendingLoans;