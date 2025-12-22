import React from 'react';
import Logo from '../../../Components/Logo/Logo';
import { FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-black text-white p-10 mt-10">
            <aside>
                <Logo></Logo>
                <p>
                    TurstEasy Loan Ltd.
                    <br />
                    Providing reliable loan solutions since 1992
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">24/7 Hour Services</a>
                <a className="link link-hover">Easy Process</a>
                <a className="link link-hover">Low InterestRet</a>
                <a className="link link-hover">Best Loans</a>
            </nav>
            <nav>
                <h6 className="footer-title">Social</h6>
                <div className="grid grid-flow-col gap-4">
                    <a className='hover:text-red-500 cursor-pointer'>
                        <FaFacebook size={30}/>
                    </a>
                    <a className='hover:text-red-500 cursor-pointer'>
                        <FaXTwitter size={30} />
                    </a>
                    <a className='hover:text-red-500 cursor-pointer'>
                        <FaInstagram size={30}/>
                    </a>
                </div>
            </nav>

        </footer>
    );
};

export default Footer;