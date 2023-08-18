import React from 'react'
import { Navigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';

const ForAdmin = ({children}) => {
    
    let {user} = useUserAuth();

    if(user){
        return <Navigate to='/dashboard' />;
    }
  return children;
}

export default ForAdmin
