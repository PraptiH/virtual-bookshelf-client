import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <span className='loading loading-infinity w-50 mx-auto flex items-center'></span>
    }

    if(user){
        return children
    }

    else{
        return <Navigate state={location.pathname} to='/signin'/>
    }
};

export default PrivateRoutes;