import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Link, Navigate, useLocation } from 'react-router';
import Suspend from '../Pages/Suspend/Suspend';


const PrivateRoute = ({ children }) => {
    const { user, loading, dbuser } = useAuth();
    const location = useLocation();
    console.log('location', location);
    console.log(dbuser);
    




    if (loading) {
        return <span className="loading loading-bars loading-xl"></span>
    }
    if (dbuser?.status === "suspend") {
        return <Suspend></Suspend>
    }
    if (!user) {
        return <Navigate state={location.pathname} to="/login"></Navigate>
    }
    return children;
};

export default PrivateRoute;