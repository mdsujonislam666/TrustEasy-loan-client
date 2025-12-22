import React from 'react';
import { Link, NavLink, Outlet } from 'react-router';
import { FaFileInvoiceDollar } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { FcManager } from "react-icons/fc";
import { FaAddressCard } from 'react-icons/fa6';
import { IoIosApps } from "react-icons/io";
import { MdOutlineManageHistory } from "react-icons/md";
import { MdPending } from "react-icons/md";
import { ImPieChart, ImUserCheck } from "react-icons/im";
import { FaCircleUser } from "react-icons/fa6";
import useUserRole from '../Hooks/useUserRole';
import Logo from '../Components/Logo/Logo';
import DashboardNavLink from '../Components/DashboardNavLink/DashboardNavLink';
import Footer from '../Pages/Shared/Footer/Footer';
import logo from '../assets/logo2 (2).png'


const DashboardLayout = () => {
    const { role } = useUserRole();
    return (
        <div className="drawer lg:drawer-open max-w-7xl mx-auto">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                {/* Navbar */}
                <nav className="navbar w-full bg-violet-300">
                    <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        {/* Sidebar toggle icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
                    </label>
                    <div className="px-4"><Logo></Logo></div>
                </nav>
                {/* Page content here */}
                <Outlet></Outlet>
                <div className='mt-10'>
                    <Footer></Footer>
                </div>
            </div>

            <div className="drawer-side is-drawer-close:overflow-visible">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="flex min-h-full flex-col bg-cyan-800 items-start is-drawer-close:w-14 is-drawer-open:w-64">
                    {/* Sidebar content here */}
                    <ul className="menu w-full grow space-y-1">
                        {/* List item */}
                        <li>
                            <Link to="/" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
                                <img className='w-14' src={logo} alt="" />
                            </Link>
                        </li>
                        {/* our dashboard links */}
                        <li>
                            <DashboardNavLink
                                to="/dashboard/dashboardHome"
                                icon={IoHome }
                                label="Dashboard Home"
                                tip="Dashboard Home"
                            />
                        </li>


                        {
                            role === "Borrower" && (
                                <>
                                    {/* our dashboard links */}
                                    <li>
                                        <DashboardNavLink
                                            to="/dashboard/my-application"
                                            icon={FaFileInvoiceDollar}
                                            label="My Applications"
                                            tip="My Applications"
                                        />
                                    </li>
                                    {/* My profile */}
                                    <li>
                                        <DashboardNavLink
                                            to="/dashboard/myProfile"
                                            icon={FaCircleUser}
                                            label="My Profile"
                                            tip="My Profile"
                                        />
                                    </li>
                                </>
                            )
                        }

                        {
                            role === "Admin" && (<>
                                {/* manage role */}
                                <li>
                                    <DashboardNavLink
                                        to="/dashboard/manage-users"
                                        icon={FcManager}
                                        label="Manage Role"
                                        tip="Manage Role"
                                    />
                                </li>
                                {/* All loans */}
                                <li>
                                    <DashboardNavLink
                                        to="/dashboard/all-loans"
                                        icon={FaAddressCard}
                                        label="All Loan"
                                        tip="All Loan"
                                    />
                                </li>
                                {/* All Applications */}
                                <li>
                                    <DashboardNavLink
                                        to="/dashboard/allLoanApplications"
                                        icon={IoIosApps}
                                        label="All Applications"
                                        tip="All Applications"
                                    />
                                </li>
                            </>
                            )
                        }

                        {
                            role === 'Manager' && (
                                <>
                                    {/* Add loans */}
                                    <li>
                                        <DashboardNavLink
                                            to="/dashboard/add-loan"
                                            icon={FaAddressCard}
                                            label="Add Loan"
                                            tip="Add Loan"
                                        />
                                    </li>


                                    {/* manage loans */}
                                    <li>
                                        <DashboardNavLink
                                            to="/dashboard/manageLoans"
                                            icon={MdOutlineManageHistory}
                                            label="Manage Loans"
                                            tip="Manage Loans"
                                        />
                                    </li>
                                    {/* pending loans */}
                                    <li>
                                        <DashboardNavLink
                                            to="/dashboard/pendingLoans"
                                            icon={MdPending}
                                            label="Pending Loans"
                                            tip="Pending Loans"
                                        />
                                    </li>
                                    {/* Approved Applications */}
                                    <li>
                                        <DashboardNavLink
                                            to="/dashboard/approvedLoans"
                                            icon={ImUserCheck}
                                            label="Approved Applications"
                                            tip="Approved Applications"
                                        />
                                    </li>
                                    {/* Manager profile */}
                                    <li>
                                        <DashboardNavLink
                                            to="/dashboard/myProfile"
                                            icon={FaCircleUser}
                                            label="My Profile"
                                            tip="My Profile"
                                        />
                                    </li>
                                </>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;