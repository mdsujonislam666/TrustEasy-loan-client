import React from 'react';
import Banner from './Banner/Banner';
import AvailableLoans from '../../Components/AvailableLoans/AvailableLoans';
import CustomerFeedback from './CustomerFeedback/CustomerFeedback';
import HowItWork from './HowItWork/HowItWork';
import OurServices from './OurServices/OurServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AvailableLoans></AvailableLoans>
            <CustomerFeedback></CustomerFeedback>
            <HowItWork></HowItWork>
            <OurServices></OurServices>
        </div>
    );
};

export default Home;