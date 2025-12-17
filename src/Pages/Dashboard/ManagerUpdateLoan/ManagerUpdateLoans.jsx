import React from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const UpdateLoans = () => {
    const { register, handleSubmit } = useForm();
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    const { data: updateLoan = {}, isLoading, error } = useQuery({
        queryKey: ['update-loan', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/update-loan/${id}`)
            return res.data;
        },
        enabled: !!id
    });
    if (isLoading) {
        return <span className="loading loading-bars loading-xl"></span>
    }
    if (error) {
        toast.error('Failed to load loans');
        return null;
    }

    const handleUpdateLoan = data => {
        console.log(data);

        Swal.fire({
            title: "Can you want to apply for loan?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm and Continue Update!"
        }).then((result) => {
            if (result.isConfirmed) {
                const loanInfo = {
                    loanTitle: data.loanTitle,
                    interestRate: data.interestRate,
                    category: data.category,
                    loanLimit: data.loanLimit,
                    emiPlans: data.emiPlans,
                    description: data.description,
                    loanImage: data.loanImage
                }
                console.log(loanInfo);
                axiosSecure.put(`/update-loan/${id}`, loanInfo)
                    .then(res => {
                        if (res.data.result.modifiedCount) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Loan Update successfully",
                                showConfirmButton: false,
                                timer: 2500
                            });
                        }
                    })
            }
        })
    }

    return (
        <div className="card bg-base-100  max-w-sm shrink-0 shadow-2xl mt-10 mx-auto bg-gradient-to-r from-indigo-500 via-sky-300 to-violet-500">
            <form onSubmit={handleSubmit(handleUpdateLoan)} className="card-body">
                <h1 className='mx-auto text-3xl font-bold py-5'>Update Product</h1>
                <fieldset className="fieldset space-y-2">
                    {/* name */}
                    <label className="label font-bold text-sm">Loan Title</label>
                    <input type="text" {...register('loanTitle')} defaultValue={updateLoan.loanTitle} className="input rounded-3xl w-full" placeholder="Name" />


                    {/* Price */}
                    <label className="label font-bold text-sm">Interest</label>
                    <input type="text" {...register('interestRate')} defaultValue={updateLoan.interestRate} className="input rounded-3xl w-full" placeholder="Price" />

                    {/* location */}
                    <label className="label font-bold text-sm">Category</label>
                    <input type="text" {...register('category')} defaultValue={updateLoan.category} className="input rounded-3xl w-full" placeholder="location" />

                    {/* Category */}
                    <label className="label font-bold text-sm">Max Loan Limit</label>
                    <input type="text" {...register('loanLimit')} defaultValue={updateLoan.loanLimit
                    } className="input rounded-3xl w-full" placeholder="Category" />

                    {/* Category */}
                    <label className="label font-bold text-sm">EMI plan</label>
                    <input type="text" {...register('emiPlans')} defaultValue={updateLoan.emiPlans
                    } className="input rounded-3xl w-full" placeholder="Category" />

                    {/* property_image */}
                    <label className="label font-bold text-sm">Loan_image</label>
                    <input type="url" defaultValue={updateLoan.loanImage
                    } {...register('loanImage')} className="input rounded-3xl w-full" placeholder="http://example.com/image.jpg" />

                    {/* description */}
                    <label className="label font-bold text-sm">Description</label>
                    <textarea {...register('description')} required rows="3" defaultValue={updateLoan.description} placeholder='Enter Description' className='textarea w-full h-[150px] rounded-2xl'></textarea>

                    <button className="btn btn-neutral mt-4 rounded-3xl">Update Product</button>
                </fieldset>
            </form>
        </div>
    );
};

export default UpdateLoans;