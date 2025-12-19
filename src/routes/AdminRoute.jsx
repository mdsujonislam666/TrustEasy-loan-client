import React from 'react';
import useAuth from '../Hooks/useAuth';
import useUserRole from '../Hooks/useUserRole';
import { useNavigate } from 'react-router';

const AdminRoute = ({children}) => {
    const {loading} = useAuth();
    const {role, roleLoading} = useUserRole();
    const navigate = useNavigate();
    if(loading || roleLoading){
        return "this is loading";
    }
    if(role !== 'Admin'){
        return navigate('/login');
    }
    return children;
};

export default AdminRoute;