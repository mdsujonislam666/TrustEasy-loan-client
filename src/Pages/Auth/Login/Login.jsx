import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import useAuth from '../../../Hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import { IoEye, IoEyeOff } from 'react-icons/io5';


const Login = () => {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();
    const { signInUser, signInWithGoogle, resetPassword } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [show, setShow] = useState(false);

    console.log('in the login page', location);

    const handleLogin = (data) => {
        console.log('from data', data);

        const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?`~])[A-Za-z\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?`~]{6,}$/;
        if (!regExp.test(data.password)) {
            toast.error(
                "Password must be at lest 8 character long and include at least one uppercase letter, one lowercase letter, one number, and one special character"
            )
        }

        signInUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
                navigate(location?.state || '/');
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

    const handleResetPassword = (e) => {
        e.preventDefault();
        const email = getValues("email");
        console.log(email);

        resetPassword(email)
            .then(result => {
                console.log(result);
                toast.success("Check your email to reset password");
            })
            .catch(error => {
                toast.error(error.message);
            })

    }


    return (
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl text-center">
            <h3 className="text-3xl text-center pt-5 font-bold">Login Now!</h3>
            <form onSubmit={handleSubmit(handleLogin)} className="card-body">
                <fieldset className="fieldset">
                    {/* email field */}
                    <label className="label text-gray-800">Email</label>
                    <input type="email" {...register('email', { required: true, })} className="input" placeholder="Email" />

                    {
                        errors.email?.type === 'required' && toast.error('email is required')
                    }

                    {/* password field */}
                    <label className="label text-gray-800">Password</label>
                    <div className='relative lg:pr-4'>
                        <input type={show ? "text" : "password"} {...register('password', { required: true, minLength:6 })} className="input" placeholder="Password" />

                        <span onClick={() => setShow(!show)} className='absolute right-[25px] top-2 cursor-pointer z-50'>{show ? <IoEye size={22} /> : <IoEyeOff size={22} />}</span>
                    </div>

                    {
                        errors.password?.type === 'required' && toast.error('password is required')
                    }

                    <div><button type='button' onClick={handleResetPassword} className="cursor-pointer hover:underline font-bold">Forgot password?</button></div>

                    <button className="btn btn-neutral mt-4">Login</button>
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

                    <p>Don't have any account? <span className='text-green-600 font-bold underline'><Link to='/register' state={location?.state}>Register</Link></span> </p>
                </fieldset>
            </form>
        </div>
    );
};

export default Login;