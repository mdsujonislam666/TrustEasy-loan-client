import React from 'react';
import { FaBangladeshiTakaSign } from 'react-icons/fa6';
import { Link } from 'react-router';

const LoanCard = ({loan}) => {
    const {_id, loanTitle, interestRate, loanLimit, emiPlans, loanImage, description, } = loan;
    console.log(_id);
    return (
        <div>
            <div className="card bg-base-100 inset-shadow-sm  inset-shadow-indigo-500/50 hover:scale-105 bg-gradient-to-r from-indigo-500 via-sky-300 to-violet-500">
                <figure className="p-5">
                    <img
                        src={loanImage}
                        className="rounded-xl w-full h-40 lg:h-66" />
                </figure>
                <div className="card-body space-y-3">
                    <h2 className="card-title text-2xl font-bold">{loanTitle}</h2>
                    <p className='text-gray-600'><strong className='text-black'>Description:</strong> {description}</p>
                    <h1 className='font-bold flex items-center '><strong>Loan Limit:</strong><span className='text-white'>{loanLimit}</span></h1>
                    <div className='flex justify-between'>
                        <h3 className='font-bold cursor-pointer text-indigo-600 px-5 py-1 bg-amber-300 rounded-xl'><strong>InterestRate: </strong>{interestRate} %</h3>
                        <h2 className='text-white font-bold'><strong className='text-black'>EMI Plan: </strong>{emiPlans}</h2>
                    </div>
                    <div className="card-actions">
                        <Link to={`/dashboard/loan-details/${_id}`} id={_id} className="btn btn-primary w-full">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoanCard;