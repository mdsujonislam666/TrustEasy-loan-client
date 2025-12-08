import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import useAuth from '../../../Hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import axios from 'axios';
import { IoEye, IoEyeOff } from 'react-icons/io5';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, signInWithGoogle, updateUserProfile } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [show, setShow] = useState(false);

    console.log('register', location);

    const handleRegistration = (data) => {

        const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?`~])[A-Za-z\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?`~]{6,}$/;
        if (!regExp.test(data.password)) {
            toast.error(
                "Password must be at lest 8 character long and include at least one uppercase letter, one lowercase letter, one number, and one special character"
            )
        }

        console.log('after register', data.photo[0]);

        const profileImg = data.photo[0];

        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user);

                // store the image and get the photo url
                const formData = new FormData();
                formData.append('image', profileImg)
                const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`

                axios.post(image_API_URL, formData)
                    .then(res => {
                        console.log(res.data);
                        console.log('after image upload', res.data.data.url);

                        // update user profile
                        const userProfile = {
                            displayName: data.name,
                            photoURL: res.data.data.url
                        }
                        updateUserProfile(userProfile)
                            .then(() => {
                                console.log('user profile updated done');
                                navigate(location?.state || '/')
                            })
                            .catch(error => console.log(error))
                    })

            })
            .catch(error => {
                console.log(error);
                toast.error(error);
            })
    }

    const handleGoogleSingIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                navigate(location?.state || '/');
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl text-center">
                <h3 className="text-3xl text-center pt-5 font-bold">Register Now!</h3>
                <form onSubmit={handleSubmit(handleRegistration)} className="card-body">
                    <fieldset className="fieldset">
                        {/* name field */}
                        <label className="label text-gray-800">Name</label>
                        <input type="text" {...register('name', { required: true })} className="input" placeholder="Your Name" />

                        {/* photo image field */}
                        <label className="label text-gray-800">Photo</label>
                        <input type="file" {...register('photo', { required: true })} className="file-input" placeholder="Your Photo" />

                        <label className="label text-gray-800">Select Role</label>
                        <select {...register('role')} className="select" defaultValue="Select Role">
                            <option disabled={true}>Select Role</option>
                            <option>Borrower</option>
                            <option>Manager</option>
                        </select>

                        {/* email field */}
                        <label className="label text-gray-800">Email</label>
                        <input type="email" name='email' {...register('email', { required: true })} className="input" placeholder="Email" />

                        {
                            errors.email?.type === 'required' && toast.error('email is required')
                        }

                        {/* password field */}
                        <label className="label text-gray-800">Password</label>
                        <div className='relative lg:pr-4'>
                            <input type={show ? "text" : "password"} {...register('password', { required: true, minLength: 6 })} className="input" placeholder="Password" />

                            <span onClick={() => setShow(!show)} className='absolute right-[25px] top-2 cursor-pointer z-50'>{show ? <IoEye size={22} /> : <IoEyeOff size={22} />}</span>
                        </div>

                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Register</button>

                        <div className='flex items-center justify-center gap-2'>
                            <div className='h-px w-24 bg-black'></div>
                            <span className='text-sm text-black'>OR</span>
                            <div className='h-px w-24 bg-black'></div>
                        </div>

                        {/* Google */}
                        <button onClick={handleGoogleSingIn} className="btn bg-primary text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>

                        <p>Already have any account? <span className='text-green-600 font-bold underline'><Link to='/login' state={location?.state}>Login</Link></span> </p>
                    </fieldset>
                </form>
            </div>
        </div >
    );
};

export default Register;