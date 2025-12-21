import React from 'react';
import { FaWpforms } from 'react-icons/fa6';
import { PiFileMagnifyingGlassFill } from "react-icons/pi";
import { FcApproval } from "react-icons/fc";
import { ImUserCheck } from "react-icons/im";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';


const HowItWork = () => {
    return (
        <div className='mx-2 mb-10'>
            <div className='text-center py-10 lg:w-[600px] flex flex-col mx-auto py10 space-y-3'>
                <h2 className='text-5xl font-bold text-center'>How It-<span className='text-red-600'>Work</span></h2>
                <p>
                    Our simple step-by-step process helps you apply easily, verify securely, get approved quickly, and receive funds confidently with full transparency, guidance, and trusted support throughout your financial journey.
                </p>

            </div>
            <Swiper
                breakpoints={{
                    0: {
                        slidesPerView: 1,   // 📱 small device → 1 card
                    },
                    640: {
                        slidesPerView: 2,   // 📱 tablet → 2 cards
                    },
                    1024: {
                        slidesPerView: 4,   // 💻 laptop/desktop → 3 cards
                    },
                }}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                autoplay={
                    {
                        delay: 2000,
                        disableOnInteraction: false,
                    }
                }
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>{/* apply */}
                    <div className='max-w-sm bg-base-100 shadow-lg rounded-xl p-6 border border-gray-400'>
                        <div className='flex flex-col items-center gap-4 text-center'>
                            <div className='p-5 bg-blue-500 rounded-full'>
                                <FaWpforms size={40} />
                            </div>
                            <div className='space-y-3'>
                                <h2 className='font-semibold text-xl'>Apply</h2>
                                <p className='text-sm text-gray-500'>Take the first step toward your financial goals by applying today with confidence, transparency, and support you can trust.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='max-w-sm bg-base-100 shadow-lg rounded-xl p-6 border border-gray-400'>
                        {/* verify */}
                        <div className='flex flex-col items-center gap-4 text-center'>
                            <div className='p-5 bg-blue-500 rounded-full'>
                                <PiFileMagnifyingGlassFill size={40} />
                            </div>
                            <div className='space-y-3'>
                                <h2 className='font-semibold text-xl'>Verify</h2>
                                <p className='text-sm text-gray-500'>Take the next step by verifying your details securely to ensure accuracy, faster approval, and a smooth loan application process.</p>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='max-w-sm bg-base-100 shadow-lg rounded-xl p-6 border border-gray-400'>
                        {/* approved */}
                        <div className='flex flex-col items-center gap-4 text-center'>
                            <div className='p-5 bg-blue-500 rounded-full'>
                                <FcApproval size={40} />
                            </div>
                            <div className='space-y-3'>
                                <h2 className='font-semibold text-xl'>Approved</h2>
                                <p className='text-sm text-gray-500'>Take the next step as your loan gets approved, bringing you closer to your goals with confidence, clarity, and trusted financial support.</p>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='max-w-sm bg-base-100 shadow-lg rounded-xl p-6 border border-gray-400'>
                        {/* receive funds */}
                        <div className='flex flex-col items-center gap-4 text-center'>
                            <div className='p-5 bg-blue-500 rounded-full'>
                                <ImUserCheck size={40} />
                            </div>
                            <div className='space-y-3'>
                                <h2 className='font-semibold text-xl'>Receive Funds</h2>
                                <p className='text-sm text-gray-500'>Take the final step and receive your funds securely, empowering your plans with timely support, confidence, and complete financial peace.</p>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default HowItWork;