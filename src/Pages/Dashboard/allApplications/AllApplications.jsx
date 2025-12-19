import React, { useRef, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { FaMagnifyingGlass, FaTrashCan } from 'react-icons/fa6';
import LoanCard from '../../../Components/Card/LoanCard';
import Swal from 'sweetalert2';

const AllApplications = () => {
    const axiosSecure = useAxiosSecure();
    const applicationModalRef = useRef();
    const [selectApplication, setSelectApplication] = useState(null);
    const { data: applications = [], isLoading, error } = useQuery({
        queryKey: ['allLoanApplications'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/allLoanApplications`)
            return res.data;
        }
    });
    if (isLoading) {
        return <span className="loading loading-bars loading-xl"></span>
    }
    if (error) {
        return toast.error('Failed to load loans');
    }


    const openApplicationModal = (application) => {
        setSelectApplication(application);
        applicationModalRef.current.showModal();
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Serials</th>
                            <th>Name</th>
                            <th>Loan Category</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applications.map((application, index) => <tr key={application._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className='flex flex-col'>
                                        <div>{application.firstName} {application.lastName}</div>
                                        <div>
                                            {application.email}
                                        </div>
                                    </div>
                                </td>
                                <td>{application.loanTitle}</td>
                                <td>{application.loanAmount}</td>
                                <td>
                                    <p className={`${application.Status === 'Approved' ? 'text-green-500 font-bold': 'text-red-500'}`}>{application.Status}</p>
                                </td>
                                <td>
                                    <button onClick={() => openApplicationModal(application)} className='btn btn-square hover:bg-amber-300'>
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

export default AllApplications;