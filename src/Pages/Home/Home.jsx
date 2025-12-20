import React from 'react';
import Banner from './Banner/Banner';
import AvailableLoans from '../../Components/AvailableLoans/AvailableLoans';
import CustomerFeedback from './CustomerFeedback/CustomerFeedback';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AvailableLoans></AvailableLoans>
            <CustomerFeedback></CustomerFeedback>
        </div>
    );
};

export default Home;