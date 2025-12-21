import React from 'react';
import { FaLocationDot, FaPhoneVolume, FaXTwitter } from 'react-icons/fa6';
import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (
        <div>
            <div class="lg:mx-40 py-5 roboto-slab text-white">
                <div class="my-10">
                    <div class="space-y-7">
                        <h3 class="text-4xl text-center  font-extrabold">Contact <span class="text-red-500">With Us</span>
                        </h3>
                        <p class="max-w-3xl mx-auto text-center">There are many variations of passages of Lorem Ipsum
                            available, but
                            the majority have suffered alteration in some form, by injected humour.</p>
                    </div>
                </div>
                <div class="hero bg-amber-400 min-h-screen rounded-2xl">
                    <div class="hero-content flex gap-10 flex-col lg:flex-row">
                        <div class="grid flex-2 grid-cols-1 lg:grid-cols-2">
                            <div class="text-center lg:text-left flex-1">
                                <div
                                    class="lg:p-10 space-y-5 bg-gradient-to-r from-slate-500 to-slate-900 p-10 bg-transparent border-b-2 border-r-2 border-black outline-none">
                                    <div className='flex justify-center'>
                                        <FaLocationDot size={25} />
                                    </div>
                                    <h3 class="font-bold text-2xl text-center text-white hover:text-black cursor-pointer">
                                        Location</h3>
                                    <p class="text-white text-center">pA108 Adam Street,
                                        New York, NY 535022</p>
                                </div>
                            </div>
                            <div class="text-center lg:text-left flex-1">
                                <div class="bg-blue-300 lg:p-10 space-y-5">
                                    <div className='flex justify-center'>
                                        <FaPhoneVolume size={25} />
                                    </div>
                                    <h3 class="font-bold text-2xl text-white hover:text-black cursor-pointer text-center">
                                        Phone</h3>
                                    <p class="text-white text-center">pA108 Adam Street,
                                        New York, NY 535022</p>
                                </div>
                            </div>
                            <div class="text-center lg:text-left flex-1">
                                <div class="bg-blue-300 lg:p-10 space-y-5">
                                    <div className='flex justify-center'>
                                        <MdEmail size={25} />
                                    </div>
                                    <h3 class="font-bold text-2xl text-white hover:text-black cursor-pointer text-center">
                                        Massage</h3>
                                    <p class="text-white text-center">pA108 Adam Street,
                                        New York, NY 535022</p>
                                </div>
                            </div>
                            <div class="text-center lg:text-left flex-1">
                                <div class="bg-blue-300 lg:p-10 space-y-5
                bg-gradient-to-r from-slate-900 to-slate-500 p-10 bg-transparent border-l-2 border-black outline-none">
                                    <div className='flex justify-center'>
                                        <FaXTwitter size={25} />
                                    </div>
                                    <h3 class="font-bold text-2xl text-white hover:text-black cursor-pointer text-center">
                                        Twitter</h3>
                                    <p class="text-white text-center">pA108 Adam Street,
                                        New York, NY 535022</p>
                                </div>
                            </div>
                        </div>

                        <div class="flex-1 card bg-base-100 lg:w-[500px]  shrink-0 shadow-2xl">
                            <form class="card-body">
                                <div class="form-control">
                                    <input type="text" placeholder="Your Name" class="input input-bordered" required />
                                </div>
                                <div class="form-control">
                                    <input type="text" placeholder="Subject" class="input input-bordered" required />
                                </div>
                                <div class="form-control">
                                    <input type="email" placeholder="Your Email" class="input input-bordered" required />
                                </div>
                                <div class="form-control">
                                    <input type="text" placeholder="Your Message" class="h-40 input input-bordered"
                                        required />
                                </div>
                                <div class="form-control mt-6">
                                    <button class="btn btn-primary">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;