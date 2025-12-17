import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaMagnifyingGlass } from 'react-icons/fa6';

const PendingLoans = () => {
    const axiosSecure = useAxiosSecure();
    const { data: pendingLoans = [] } = useQuery({
        queryKey: ['pendingLoans'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/pendingLoans`)
            return res.data;
        }
    })
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
                                    <button className='btn hover:bg-amber-300'>
                                        Approved
                                    </button>
                                    <button className='btn hover:bg-amber-300'>
                                        Rejected
                                    </button>
                                    <button className='btn btn-square hover:bg-amber-300'>
                                        <FaMagnifyingGlass />
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PendingLoans;