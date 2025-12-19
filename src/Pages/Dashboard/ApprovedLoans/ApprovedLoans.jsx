import React, { useRef, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaMagnifyingGlass, FaTrashCan } from 'react-icons/fa6';
import Swal from 'sweetalert2';

const ApprovedLoans = () => {
    const axiosSecure = useAxiosSecure();
    const applicationModalRef = useRef();
    const [selectApplication, setSelectApplication] = useState(null);
    const { data: approvedLoans = [], refetch } = useQuery({
        queryKey: ['approvedLoans'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/approvedLoans`)
            return res.data;
        }
    })

    const openApprovedLoanModal = (approvedLoans) => {
        setSelectApplication(approvedLoans);
        applicationModalRef.current.showModal();
    }

    const handleApproveLoanDelete = id => {
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
                axiosSecure.delete(`/approvedLoans/${id}`)
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
                            approvedLoans.map((approvedLoan, index) => <tr key={approvedLoan._id}>
                                <th>{index + 1}</th>
                                <td>{approvedLoan._id}</td>
                                <td>
                                    <div className='flex flex-col'>
                                        <div>{approvedLoan.firstName} {approvedLoan.lastName}</div>
                                        <div>
                                            {approvedLoan.email}
                                        </div>
                                    </div>
                                </td>
                                <td>{approvedLoan.loanAmount}</td>
                                <td>{new Date(approvedLoan.createdAt).toLocaleDateString()}</td>
                                <td className='flex gap-2'>
                                    <button onClick={() => handleApproveLoanDelete(approvedLoan._id)} className='btn btn-square hover:bg-amber-300'>
                                        <FaTrashCan />
                                    </button>
                                    <button onClick={() => openApprovedLoanModal(approvedLoan)} className='btn btn-square hover:bg-amber-300'>
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

export default ApprovedLoans;