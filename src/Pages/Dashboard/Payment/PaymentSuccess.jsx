import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const PaymentSuccess = () => {
    const [searchParams] = useSearchParams();
    const [paymentInfo, setPaymentInfo] = useState({});
    const sessionId = searchParams.get('session_id');
    const axiosSecure = useAxiosSecure();

    console.log(sessionId);

    useEffect(() => {
        if (sessionId) {
            axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
                .then(res => {
                    console.log(res.data);
                    setPaymentInfo({
                        transactionId: res.data.transactionId,
                        trackingId: res.data.trackingId
                    })
                })
        }
    }, [sessionId, axiosSecure])

    return (
        <div className='bg-amber-200 h-screen'>
            <div className='w-[500px] rounded-2xl mx-auto flex flex-col justify-center items-center mt-10 p-10 bg-violet-300 shadow-xl/30'>
                <h2 className="text-4xl text-black">Payment Successful</h2>
                <p className='text-white'><strong className='text-black'>Your TransactionId:</strong> {paymentInfo.transactionId}</p>
                <p className='text-white'><strong className='text-black'>Your Application TrackingId:</strong> {paymentInfo.trackingId}</p>
            </div>
        </div>
    );
};

export default PaymentSuccess;