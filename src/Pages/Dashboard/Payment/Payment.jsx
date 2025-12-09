import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const Payment = () => {
    const {applicationId} = useParams();
    console.log(applicationId);
    const axiosSecure = useAxiosSecure();

    const {isLoading, data: application } = useQuery({
        queryKey: ['loanApplications', applicationId],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/loanApplications/${applicationId}`);
            return res.data;
        }
    
    })

    const handlePayment = async() =>{
        const paymentInfo = {
            cost: application.cost,
            applicationId: application._id,
            userEmail: application.email,
            loanTitle: application.loanTitle
        }

        const res = await axiosSecure.post('/create-checkout-session', paymentInfo)
        console.log(res.data);
    }

    if(isLoading){
        return <span className="loading loading-bars loading-xl"></span>
    }
    console.log(application);

    return (
        <div>
            <h2>Please Pay ${application.cost} for :{application.loanTitle}</h2>
            <button onClick={handlePayment} className='btn btn-primary text-black'>Pay</button>
        </div>
    );
};

export default Payment;