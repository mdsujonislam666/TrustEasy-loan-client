import React from 'react';

const DashboardHome = () => {
    return (
        <div className='bg-amber-200 pb-5'>
            <div className=' gap-5 px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pl-16 py-10'>
                <div className='flex flex-col items-center text-center  w-[300px] py-10 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-300 to-pink-400 shadow-xl/20 transform transition duration-300 ease-in-out hover:scale-110'>
                    <h2 className='text-xl font-bold text-black'>Total Users</h2>
                    <p className='font-bold text-4xl text-red-500'>200</p>
                </div>
                <div className='flex flex-col items-center text-center w-[300px] py-10 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-300 to-pink-400 shadow-xl/20 transform transition duration-300 ease-in-out hover:scale-110'>
                    <h2 className='text-xl font-bold text-black'>Approved Users</h2>
                    <p className='font-bold text-4xl text-red-500'>190</p>
                </div>
                <div className='flex flex-col items-center text-center w-[300px] py-10 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-300 to-pink-400 shadow-xl/20 transform transition duration-300 ease-in-out hover:scale-110'>
                    <h2 className='text-xl font-bold text-black'>Suspend Users</h2>
                    <p className='font-bold text-4xl text-red-500'>10</p>
                </div>
            </div>
            <div className=' max-w-3xl mx-auto bg-gradient-to-r from-indigo-500 via-purple-300 to-pink-400 shadow-xl/20 rounded-2xl mb-10'>
                <div className='text-center py-10 lg:w-[600px] flex flex-col mx-auto py10 space-y-3'>
                    <h2 className='text-5xl font-bold text-center text-black'>Loan-<span className='text-red-600'>Requirement</span></h2>
                    <p className='text-black'>
                        If a user wants to take a loan, they must comply with the following conditions
                    </p>

                </div>
                <div className='pb-10 flex flex-col items-center gap-5'>
                    <p className=' bg-white w-[550px] text-black py-3 rounded-2xl text-start font-semibold shadow-xl/20'>
                        <strong className='ml-10'>1.</strong> The user must be a citizen of Bangladesh.
                    </p>
                    <p className=' bg-white w-[550px] py-3 text-black rounded-2xl text-start font-semibold shadow-xl/20'>
                        <strong className='ml-10'>2.</strong> The user must be at least 18 years old.
                    </p>
                    <p className=' bg-white w-[550px] py-3 text-black rounded-2xl text-start font-semibold shadow-xl/20'>
                        <strong className='ml-10'>3.</strong> The user must have a valid National ID (NID) card.
                    </p>
                    <p className=' bg-white w-[550px] py-3 text-black rounded-2xl text-start font-semibold shadow-xl/20'>
                        <strong className='ml-10'>4.</strong> A passport-size photograph is required
                    </p>
                    <p className=' bg-white w-[550px] py-3 text-black rounded-2xl text-start font-semibold shadow-xl/20'>
                        <strong className='ml-10'>5.</strong> Other supporting documents may be required
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;