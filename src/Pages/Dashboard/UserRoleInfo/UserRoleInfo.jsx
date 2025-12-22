import React, { useRef, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const UserRoleInfo = () => {
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const applicationModalRef = useRef();
    const { register, handleSubmit } = useForm();
    const [selectApplication, setSelectApplication] = useState(null);

    const { data: users = [], isLoading, error, refetch } = useQuery({
        queryKey: ['userDetails', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/userDetails/${id}`)
            return res.data;
        },
        enabled: !!id
    });
    if (isLoading) {
        return <span className="loading loading-bars loading-xl"></span>
    }
    if (error) {
        return toast.error('Failed to load loans');
    }

    const openApplicationModal = (users) => {
        setSelectApplication(users);
        applicationModalRef.current.showModal();
    }

    const handleSuspendData = (data) => {
        const suspendInfo = {
            userId: id,
            email: users.email,
            suspendReason: data.suspendReason,
            suspendFeedback: data.suspendFeedback
        }
        // save the application info to database
        axiosSecure.post('/suspends', suspendInfo)
            .then(res => {
                navigate('/dashboard/manage-users')
                console.log('after saving application', res.data);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Parcel has created. Please Pay",
                    showConfirmButton: false,
                    timer: 2500
                });
            })
    }

    const handleApprovedData = async(id) => {
        try {
            const res = await axiosSecure.patch(`/users/${id}/approve`);
            if (res.data.success) {
                refetch();
                toast.success("Loan Approved Successfully");
                navigate('/dashboard/manage-users');
            }
        }
        catch (error) {
            toast.error('Approved Failed');
            console.log(error);;
        }
    }


    return (
        <div className='bg-amber-200 py-20'>
            <div className="card bg-cyan-500 w-96 shadow-sm mx-auto">
                <figure className="px-10 pt-10">
                    <img
                        src={users.photoURL}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title"><strong>Name</strong>{users.displayName}</h2>
                    <h2 className="card-title"><strong>Role</strong>{users.role}</h2>
                    <p><strong>Email: </strong>{users.email}</p>
                    <div className="card-actions flex gap-5">
                        <button onClick={() => handleApprovedData(users._id)} className="btn bg-gradient-to-r from-indigo-500 via-purple-300 to-pink-400  text-black">Approve</button>
                        <button onClick={() => openApplicationModal(users)} className="btn bg-gradient-to-r from-indigo-500 via-purple-300 to-pink-400 text-black">Suspend</button>
                    </div>
                </div>
            </div>
            <dialog ref={applicationModalRef} className="modal modal-bottom sm:modal-middle ">
                <div className="modal-box bg-blue-200">
                    <div className="overflow-x-auto">
                        <div>
                            {
                                selectApplication && (
                                    <div className="modal-box mx-auto inset-shadow-sm inset-shadow-indigo-500/50 bg-gradient-to-r from-indigo-500 via-sky-300 to-violet-500">
                                        <p className="py-4 text-xl font-bold text-center">Please explain the reason why you want to suspend</p>

                                        <form onSubmit={handleSubmit(handleSuspendData)}>
                                            <fieldset className="fieldset">

                                                {/* Suspend reason */}
                                                <label className="label text-black font-bold text-sm">Suspend reason</label>
                                                <input type="text" {...register('suspendReason')} className="input rounded-3xl w-full" placeholder="Suspend reason" />

                                                {/* description */}
                                                <label className="label text-black font-bold text-sm">Suspend feedback</label>
                                                <textarea {...register('suspendFeedback')} required rows="3" placeholder='Suspend feedback' className='textarea w-full h-[150px] rounded-2xl'></textarea>


                                                <button className="btn btn-neutral mt-4">Submit</button>
                                            </fieldset>
                                        </form>
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

export default UserRoleInfo;