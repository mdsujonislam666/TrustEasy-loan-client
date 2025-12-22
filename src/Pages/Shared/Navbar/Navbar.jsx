import React, { useEffect, useState } from 'react';
import Logo from '../../../Components/Logo/Logo';
import useAuth from '../../../Hooks/useAuth';
import { Link, useNavigate } from 'react-router';
import MyLink from '../MyLink/MyLink';

const Navbar = () => {
    const { user, signOutUser } = useAuth();
    const navigate = useNavigate();
    const [theme, setTheme] = useState(localStorage.getItem('theme') || "light")

    useEffect(() => {
        const html = document.querySelector('html')
        html.setAttribute("data-theme", theme)
        localStorage.setItem("theme", theme)
    }, [theme])

    const handleTheme = (checked) => {
        setTheme(checked ? "dark" : "light")
    }

    const handleLogOut = () => {
        signOutUser()
            .then(() => {
                navigate('/');
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="navbar bg-base-300 shadow-sm px-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><MyLink to='/'>Home</MyLink></li>
                        <li><MyLink to='/loan-application'>Loan-Request</MyLink></li>
                        <li><MyLink to='/allLoans'>All-Loans</MyLink></li>
                        <li><MyLink>About Us</MyLink></li>
                        <li><MyLink>Contact</MyLink></li>
                        {
                            user && <>
                                <li><MyLink to="/dashboard/my-application">My Applications</MyLink></li>
                            </>
                        }
                    </ul>
                </div>
                <span className=" lg:bg-none hidden lg:block">
                    <Logo></Logo>
                </span>
            </div>
            <div className="navbar-center">
                <div className='hidden lg:flex'>
                    <ul className="menu menu-horizontal px-1">
                        <li><MyLink to='/'>Home</MyLink></li>
                        <li><MyLink to='/loan-application'>Loan-Request</MyLink></li>
                        <li><MyLink to='/allLoans'>All-Loans</MyLink></li>
                        <li><MyLink to='/aboutUs'>About Us</MyLink></li>
                        <li><MyLink to='contact'>Contact</MyLink></li>
                        {
                            user && <>
                                <li><MyLink to="/dashboard/dashboardHome">Dashboard</MyLink></li>
                            </>
                        }
                    </ul>
                </div>


            </div>
            <div className="navbar-end flex gap-5">
                <div>
                    <input onChange={(e) => handleTheme(e.target.checked)} type="checkbox" defaultChecked={localStorage.getItem('theme') === "dark"} className='toggle' />
                </div>
                <div>
                    {
                        user ?
                            <div className='flex gap-5'>
                                <div className='dropdown dropdown-end z-50 '>
                                    <div tabIndex={0} role='button' className='btn btn-ghost btn-circle avatar'>
                                        <div className='w-20 rounded-full border-2 border-gray-200 '>
                                            <img alt="Tailwind css navbar component" referrerPolicy='no-referrer' src={user.photoURL || "https://i.ibb.co/tMCRQ5Gk/tanzid.jpg"} />
                                        </div>
                                    </div>
                                    <ul tabIndex={-1} className='menu menu-sm dropdown-content bg-blue-500 w-[250px] space-y-3 rounded-xl'>
                                        <div className='space-y-3'>
                                            <li className='text-sm font-bold bg-neutral-200 shadow-amber-100 shadow-2xl text-black py-2 px-3 rounded-xl'>Name: {user.displayName
                                            }</li>
                                            <li className='text-xs text-black bg-neutral-200 shadow-amber-100 shadow-2xl py-2 rounded-xl'><strong>Email:</strong>{user.email}</li>
                                        </div>
                                        <div>
                                            <a onClick={handleLogOut} className="btn btn-primary w-full">Sign Out</a>
                                        </div>
                                    </ul>
                                </div>

                            </div>

                            :
                            <Link to="/login" className="btn btn-primary">Login</Link>

                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;