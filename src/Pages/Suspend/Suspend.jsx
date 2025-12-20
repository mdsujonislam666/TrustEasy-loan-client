import React, { useRef, useState } from 'react';
import suspend from '../../assets/suspend.png'
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';
import { Link } from 'react-router';

const Suspend = () => {
    const axiosSecure = useAxiosSecure();
    const applicationModalRef = useRef();
    const {dbuser} = useAuth();

    const [selectApplication, setSelectApplication] = useState(null);

    const openApplicationModal = async (user) => {
        const res = await axiosSecure.get(`/suspends/${user._id}`)
        setSelectApplication(res.data);
        applicationModalRef.current.showModal();
    }

    return (
        <div className='max-w-11/12 mx-auto mt-30'>
            <div className="card lg:card-side bg-base-300 shadow-sm lg:w-[600px] mx-auto my-auto lg:h-[400px]">
                <figure>
                    <img
                        src={suspend}
                        alt="Album" />
                </figure>
                <div className="card-body mx-auto">
                    <h2 className="card-title text-center text-3xl text-red-500">Your Account Has Been Suspended!</h2>
                    <p className='text-center'>Do you want to know why your account is suspended?</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => openApplicationModal(dbuser)} className="btn btn-primary">Suspend Reason</button>
                        <Link to="/login" className='btn btn-primary'>login</Link>
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
                                        <p className="py-4 text-xl font-bold text-center">Your Suspend Reasons</p>

                                        <p className='text-white'><strong className='text-black'>Suspend Reason: </strong>{selectApplication.suspendReason}</p>

                                        <p className='text-white'><strong className='text-black'>Suspend Feedback: </strong>{selectApplication.suspendFeedback}</p>
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

export default Suspend;