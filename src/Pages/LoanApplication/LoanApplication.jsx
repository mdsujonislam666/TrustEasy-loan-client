import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router';


const LoanApplication = () => {
    const { register, handleSubmit, setValue } = useForm();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const navigate = useNavigate();


    const { state } = useLocation();
    const loanDetails = state || {};
    useEffect(() => {
        if (loanDetails?.loanTitle) {
            setValue('loanTitle', loanDetails.loanTitle);
            setValue('interestRate', loanDetails.interestRate);
        }
    }, [loanDetails, setValue]);

    const handleLoanApplication = data => {
        console.log(data);
        data.cost = 10;
        data.Status = "Pending";
        data.FeeStatus = "unpaid";

        Swal.fire({
            title: "Can you want to apply for loan?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm and Continue Payment!"
        }).then((result) => {
            if (result.isConfirmed) {

                // save the application info to database
                axiosSecure.post('/loanApplications', data)
                    .then(res => {
                        console.log('after saving application', res.data);
                        navigate('/dashboard/my-application')
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Parcel has created. Please Pay",
                            showConfirmButton: false,
                            timer: 2500
                        });
                    })
            }
        });
    }
    return (
        <div className='flex flex-col items-center'>
            <h2 className='text-5xl font-bold'>Loan Application</h2>
            <p></p>
            <form onSubmit={handleSubmit(handleLoanApplication)}>
                <div className="card bg-gradient-to-r from-indigo-500 via-purple-300 to-pink-400 text-white w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <div>
                                <label className="label font-bold text-white text-sm">Email</label>
                                <input type="email" {...register('email', { required: true })}
                                    defaultValue={user?.email} className="input" placeholder="Email" readOnly />

                                <label className="label font-bold text-white text-sm">Loan Title</label>
                                <input type="text" {...register('loanTitle')} className="input"  placeholder="Loan Title" />

                                <label className="label font-bold text-white text-sm">Interest Rate</label>
                                <input type="number" {...register('interestRate')} className="input"  placeholder="Interest Rate" />
                            </div>
                            <div>
                                <label className="label font-bold text-white text-sm">First Name</label>
                                <input type="text" {...register('firstName', { required: true })} className="input" placeholder="First Name" />

                                <label className="label">Last Name</label>
                                <input type="text" {...register('lastName', { required: true })} className="input" placeholder="Last Name" />

                                <label className="label font-bold text-white text-sm">Contact Number</label>
                                <input type="number" {...register('contactNumber', { required: true })} className="input" placeholder="Contact number" />

                                <label className="label font-bold text-white text-sm">National ID / Passport Number</label>
                                <input type="Number" {...register('nationalID', { required: true })} className="input" placeholder="National Id / Passport Number" />

                                <label className="label font-bold text-white text-sm">Income Source</label>
                                <input type="text" {...register('incomeSource')} className="input" placeholder="Income Source" />

                                <label className="label font-bold text-white text-sm">Monthly Income</label>
                                <input type="text" {...register('monthlyIncome', { required: true })} className="input" placeholder="Monthly Income" />

                                <label className="label">Loan Amount</label>
                                <input type="number" {...register('loanAmount', { required: true })} className="input" placeholder="Loan Amount" />

                                <label className="label font-bold text-white text-sm">Address</label>
                                <input type="text" {...register('address')} className="input" placeholder="Address" />

                                {/* receiver Instruction */}
                                <label className="label mt-4 font-bold text-white text-sm">Extra Notes</label>
                                <textarea name="textArea" {...register('extra')} className="input h-24 w-full" id=""></textarea>
                                <input type="submit" className='btn btn-primary w-full mt-2 text-black' value="LoanApplication" />
                            </div>

                        </fieldset>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LoanApplication;