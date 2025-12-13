import React from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import axios from 'axios';

const AddLoan = () => {
    const { register, handleSubmit } = useForm();
    const axiosSecure = useAxiosSecure();


    const handleLoans = data => {
        const profileImg = data.photo[0];
        console.log(data);

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

                const formData = new FormData();
                formData.append('image', profileImg)
                const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`

                axios.post(image_API_URL, formData)
                    .then(res => {
                        const photoURL = res.data.data.url;

                        // create user in the database
                        const usersInfo = {
                            loanTitle: data.loanTitle,
                            interestRate: data.interestRate,
                            loanLimit: data.loanLimit,
                            documents: data.documents,
                            emiPlans: data.emiPlans,
                            loanImage: photoURL,
                            description: data.description,
                            showHome: data.showHome
                        }

                        axiosSecure.post('/loans', usersInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "Parcel has created. Please Pay",
                                        showConfirmButton: false,
                                        timer: 2500
                                    });
                                }
                            })
                    })
            }

        });
    }

    return (
        <div className='flex flex-col items-center'>
            <h2 className='text-5xl font-bold'>Loan Application</h2>
            <form onSubmit={handleSubmit(handleLoans)}>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <div>

                                <label className="label">Loan Title</label>
                                <input type="text" {...register('loanTitle')} className="input" placeholder="Loan Title" />

                                <label className="label">Interest Rate</label>
                                <input type="text" {...register('interestRate')} className="input" placeholder="Interest Rate" />

                                <label className="label">Max Loan Limit</label>
                                <input type="number" {...register('loanLimit', { required: true })} className="input" placeholder="Max Loan Limit" />

                                <label className="label">Required Documents</label>
                                <input type="text" {...register('documents', { required: true })} className="input" placeholder="Required Documents" />


                                <label className="label text-gray-800">EMI Plans</label>
                                <select {...register('emiPlans')} className="select" defaultValue="Select plans">
                                    <option disabled={true}>Select Plans</option>
                                    <option>6 Months</option>
                                    <option>12 Months</option>
                                    <option>24 Months</option>
                                    
                                </select>

                                <label className="label text-gray-800">Show On Home</label>
                                <select {...register('showHome')} className="select" defaultValue="Select plans">
                                    <option disabled={true}>Select Plans</option>
                                    <option>Yes</option>
                                    <option>On</option>
                                </select>

                                {/* photo image field */}
                                <label className="label text-gray-800">Photo</label>
                                <input type="file" {...register('photo', { required: true })} className="file-input" placeholder="Your Photo" />

                                <label className="label mt-4">Description</label>
                                <textarea name="textArea" className="input h-24 w-full" {...register('description')} id=""></textarea>

                                <input type="submit" className='btn btn-primary w-full mt-2 text-black' value="Add Loan" />

                            </div>

                        </fieldset>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddLoan;