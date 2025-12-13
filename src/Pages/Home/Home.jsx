import React from 'react';
import Banner from './Banner/Banner';
import AvailableLoans from '../../Components/AvailableLoans/AvailableLoans';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AvailableLoans></AvailableLoans>
        </div>
    );
};

export default Home;