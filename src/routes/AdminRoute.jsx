import React from 'react';
import useAuth from '../Hooks/useAuth';
import useUserRole from '../Hooks/useUserRole';
import Forbidden from '../Components/Forbidden/Forbidden';

const AdminRoute = ({children}) => {
    const {loading} = useAuth();
    const {role, roleLoading} = useUserRole();
    if(loading || roleLoading){
        return <span className="loading loading-bars loading-xl"></span>;
    }
    if(role !== 'Admin'){
        return <Forbidden></Forbidden>;
    }
    return children;
};

export default AdminRoute;