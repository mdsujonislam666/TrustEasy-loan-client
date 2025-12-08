import React from 'react';
import Logo from '../../../Components/Logo/Logo';
import useAuth from '../../../Hooks/useAuth';
import { Link, NavLink, useNavigate } from 'react-router';

const Navbar = () => {
    const { user, signOutUser } = useAuth();
    const navigate = useNavigate();

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
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><NavLink>Home</NavLink></li>
                        <li><NavLink to='/loan-application'>Loan-Request</NavLink></li>
                        <li><NavLink>All-Loans</NavLink></li>
                        <li><NavLink>About Us</NavLink></li>
                        <li><NavLink>Contact</NavLink></li>
                        {
                            user && <>
                                <li><NavLink to="/dashboard/my-application">My Applications</NavLink></li>
                            </>
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost lg:bg-none hidden lg:block">
                    <Logo></Logo>
                </a>
            </div>
            <div className="navbar-end">
                <div className='hidden lg:flex'>
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink>Home</NavLink></li>
                        <li><NavLink to='/loan-application'>Loan-Request</NavLink></li>
                        <li><NavLink>All-Loans</NavLink></li>
                        <li><NavLink>About Us</NavLink></li>
                        <li><NavLink>Contact</NavLink></li>
                        {
                            user && <>
                                <li><NavLink to="/dashboard/my-application">My Applications</NavLink></li>
                            </>
                        }
                    </ul>
                </div>
                <div>
                    {
                        user ? <a onClick={handleLogOut} className="btn">Log Out</a> :
                            <Link to="/login" className="btn">Login</Link>
                    }
                    <Link to="/manager" className='btn btn-primary text-black mx-4'>Manager</Link>

                </div>

            </div>
        </div>
    );
};

export default Navbar;