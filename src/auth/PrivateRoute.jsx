import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router-dom';
import { p } from 'framer-motion/client';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <p>loading</p>
    }

    if(!user){
        return <Navigate to="/login"></Navigate>
    }


    return children;
};

export default PrivateRoute;