import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';
import { useNavigate } from 'react-router';


const LoanApplication = () => {
    const { register, handleSubmit } = useForm();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleLoanApplication = data => {
        console.log(data);
        data.cost = 10;
        data.Status = "Pending";
        data.FeeStatus = "unpaid";

        Swal.fire({
            title: "Can you wnat to apply for loan?",
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
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <div>
                                <label className="label">Email</label>
                                <input type="email" {...register('email', { required: true })}
                                    defaultValue={user?.email} className="input" placeholder="Email" readOnly />

                                <label className="label">Loan Title</label>
                                <input type="text" {...register('loanTitle')} className="input" placeholder="Loan Title" />

                                <label className="label">Interest Rate</label>
                                <input type="text" {...register('interestRate')} className="input" placeholder="Interest Rate" />
                            </div>
                            <div>
                                <label className="label">First Name</label>
                                <input type="text" {...register('firstName', { required: true })} className="input" placeholder="First Name" />

                                <label className="label">Last Name</label>
                                <input type="text" {...register('lastName', { required: true })} className="input" placeholder="Last Name" />

                                <label className="label">Contact Number</label>
                                <input type="number" {...register('contactNumber', { required: true })} className="input" placeholder="Contact number" />

                                <label className="label">National ID / Passport Number</label>
                                <input type="Number" {...register('nationalID', { required: true })} className="input" placeholder="National Id / Passport Number" />

                                <label className="label">Income Source</label>
                                <input type="text" {...register('incomeSource')} className="input" placeholder="Income Source" />

                                <label className="label">Monthly Income</label>
                                <input type="text" {...register('monthlyIncome', { required: true })} className="input" placeholder="Monthly Income" />

                                <label className="label">Loan Amount</label>
                                <input type="number" {...register('loanAmount', { required: true })} className="input" placeholder="Loan Amount" />

                                <label className="label">Address</label>
                                <input type="text" {...register('address')} className="input" placeholder="Address" />

                                {/* <label className="label">Status</label>
                                <input type="text" {...register('status')} className="input" placeholder="Status" defaultValue={"Pending"} readOnly />

                                <label className="label">Application Fee</label>
                                <input type="text" {...register('applicationFee')} className="input"  defaultValue={"unpaid"} readOnly /> */}


                                {/* receiver Instruction */}
                                <label className="label mt-4">Extra Notes</label>
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