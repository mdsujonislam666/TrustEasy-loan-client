import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

import userProfile1 from '../../../assets/profile1.avif';
import userProfile2 from '../../../assets/profile2.jpg';
import userProfile3 from '../../../assets/profile3.jpg';
import userProfile4 from '../../../assets/profile4.webp';
import userProfile5 from '../../../assets/profile5.jpg';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6';

const CustomerFeedback = () => {
    return (
        <div className='mb-10 mx-2'>
            <div className='text-center py-10 lg:w-[600px] flex flex-col mx-auto py10 space-y-3'>
                <h2 className='text-5xl font-bold text-center'>Customer-<span className='text-red-600'>Feedback</span></h2>
                <p>
                    Our customers’ feedback inspires us to grow, improve services, build lasting trust, and help people achieve financial stability with confidence, transparency, care, and long term commitment.
                </p>

            </div>
            <Swiper
                loop={true}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                breakpoints={{
                    0: {
                        slidesPerView: 1,   // 📱 small device → 1 card
                    },
                    640: {
                        slidesPerView: 2,   // 📱 tablet → 2 cards
                    },
                    1024: {
                        slidesPerView: 3,   // 💻 laptop/desktop → 3 cards
                    },
                }}
                coverflowEffect={{
                    rotate: 30,
                    stretch: '50%',
                    depth: 200,
                    modifier: 1,
                    scale: 0.75,
                    slideShadows: true,
                }}
                autoplay={
                    {
                        delay: 2000,
                        disableOnInteraction: false,
                    }
                }
                pagination={true}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='max-w-sm bg-base-100 shadow-lg rounded-xl p-6 border border-gray-400'>
                        <div className='flex justify-between'>
                            <FaQuoteLeft className='text-primary text-2xl mb-4' />
                            <FaQuoteRight className='text-primary  text-2xl mb-4' />
                        </div>

                        {/* profile */}
                        <div className='flex flex-col items-center gap-4 text-center'>
                            <div>
                                <img className='w-20 h-20 rounded-full' src={userProfile1} alt="" />
                            </div>
                            <div>
                                <h2 className='font-semibold text-lg'>Md Sujon Islam</h2>
                                <p className='text-sm text-gray-500'>Fast approval, transparent terms, and helpful support made the loan process simple and stress free</p>
                            </div>
                        </div>

                        {/* divider */}
                        <div className='border-t border-dashed border-gray-300 my-4'></div>

                        <div>
                            <div className='flex flex-col items-center'>
                                <p className='mb-2'>
                                    this is helpfull
                                </p>
                                <div className="rating w-20 lg:w-40">
                                    <div className="mask mask-star" aria-label="1 star"></div>
                                    <div className="mask mask-star" aria-label="2 star"></div>
                                    <div className="mask mask-star" aria-label="3 star"></div>
                                    <div className="mask mask-star" aria-label="4 star"></div>
                                    <div className="mask mask-star" aria-label="5 star" aria-current="true"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='max-w-sm bg-base-100 shadow-lg rounded-xl p-6 border border-gray-400'>
                        <div className='flex justify-between'>
                            <FaQuoteLeft className='text-primary text-2xl mb-4' />
                            <FaQuoteRight className='text-primary  text-2xl mb-4' />
                        </div>

                        {/* profile */}
                        <div className='flex flex-col items-center gap-4 text-center'>
                            <div>
                                <img className='w-20 h-20 rounded-full' src={userProfile2} alt="" />
                            </div>
                            <div>
                                <h2 className='font-semibold text-lg'>Md Fahim Ali
                                </h2>
                                <p className='text-sm text-gray-500'>Very smooth experience with clear communication and timely updates throughout my entire loan journey.</p>
                            </div>
                        </div>

                        {/* divider */}
                        <div className='border-t border-dashed border-gray-300 my-4'></div>

                        <div>
                            <div className='flex flex-col items-center'>
                                <p className='mb-2'>
                                    this is helpfull
                                </p>
                                <div className="rating w-20 lg:w-40">
                                    <div className="mask mask-star" aria-label="1 star"></div>
                                    <div className="mask mask-star" aria-label="2 star"></div>
                                    <div className="mask mask-star" aria-label="3 star"></div>
                                    <div className="mask mask-star" aria-label="4 star" aria-current="true"></div>
                                    <div className="mask mask-star" aria-label="5 star"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='max-w-sm bg-base-100 shadow-lg rounded-xl p-6 border border-gray-400'>
                        <div className='flex justify-between'>
                            <FaQuoteLeft className='text-primary text-2xl mb-4' />
                            <FaQuoteRight className='text-primary  text-2xl mb-4' />
                        </div>

                        {/* profile */}
                        <div className='flex flex-col items-center gap-4 text-center'>
                            <div>
                                <img className='w-20 h-20 rounded-full' src={userProfile3} alt="" />
                            </div>
                            <div>
                                <h2 className='font-semibold text-lg'>Md Nahid Islam</h2>
                                <p className='text-sm text-gray-500'>Trusted platform with honest policies, quick responses, and excellent customer support at every step.</p>
                            </div>
                        </div>

                        {/* divider */}
                        <div className='border-t border-dashed border-gray-300 my-4'></div>

                        <div>
                            <div className='flex flex-col items-center'>
                                <p className='mb-2'>
                                    this is helpfull
                                </p>
                                <div className="rating w-20 lg:w-40">
                                    <div className="mask mask-star" aria-label="1 star"></div>
                                    <div className="mask mask-star" aria-label="2 star"></div>
                                    <div className="mask mask-star" aria-label="3 star"></div>
                                    <div className="mask mask-star" aria-label="4 star"></div>
                                    <div className="mask mask-star" aria-label="5 star" aria-current="true"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='max-w-sm bg-base-100 shadow-lg rounded-xl p-6 border border-gray-400'>
                        <div className='flex justify-between'>
                            <FaQuoteLeft className='text-primary text-2xl mb-4' />
                            <FaQuoteRight className='text-primary  text-2xl mb-4' />
                        </div>

                        {/* profile */}
                        <div className='flex flex-col items-center gap-4 text-center'>
                            <div>
                                <img className='w-20 h-20 rounded-full' src={userProfile4} alt="" />
                            </div>
                            <div>
                                <h2 className='font-semibold text-lg'>Md Shakh Sadi
                                </h2>
                                <p className='text-sm text-gray-500'>Easy application, fair conditions, and fast approval helped me achieve my financial goals confidently.</p>
                            </div>
                        </div>

                        {/* divider */}
                        <div className='border-t border-dashed border-gray-300 my-4'></div>

                        <div>
                            <div className='flex flex-col items-center'>
                                <p className='mb-2'>
                                    this is helpfull
                                </p>
                                <div className="rating w-20 lg:w-40">
                                    <div className="mask mask-star" aria-label="1 star"></div>
                                    <div className="mask mask-star" aria-label="2 star"></div>
                                    <div className="mask mask-star" aria-label="3 star"></div>
                                    <div className="mask mask-star" aria-label="4 star" aria-current="true"></div>
                                    <div className="mask mask-star" aria-label="5 star"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='max-w-sm bg-base-100 shadow-lg rounded-xl p-6 border border-gray-400'>
                        <div className='flex justify-between'>
                            <FaQuoteLeft className='text-primary text-2xl mb-4' />
                            <FaQuoteRight className='text-primary  text-2xl mb-4' />
                        </div>

                        {/* profile */}
                        <div className='flex flex-col items-center gap-4 text-center'>
                            <div >
                                <img className='w-20 h-20 rounded-full' src={userProfile5} alt="" />
                            </div>
                            <div>
                                <h2 className='font-semibold text-lg'>Md Obaidullah</h2>
                                <p className='text-sm text-gray-500'>Professional service, reliable guidance, and hassle free loan processing exceeded my expectations completely.</p>
                            </div>
                        </div>

                        {/* divider */}
                        <div className='border-t border-dashed border-gray-300 my-4'></div>

                        <div>
                            <div className='flex flex-col items-center'>
                                <p className='mb-2'>
                                    this is helpfull
                                </p>
                                <div className="rating w-20 lg:w-40">
                                    <div className="mask mask-star" aria-label="1 star"></div>
                                    <div className="mask mask-star" aria-label="2 star"></div>
                                    <div className="mask mask-star" aria-label="3 star" aria-current="true"></div>
                                    <div className="mask mask-star" aria-label="4 star"></div>
                                    <div className="mask mask-star" aria-label="5 star"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default CustomerFeedback;