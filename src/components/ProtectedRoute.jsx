import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthcontext';

const ProtectedRoute = ({children}) => {
   const {user} = useUserAuth();
   const navigate =useNavigate();
   if(!user){
    return navigate("/")
   }
  return children ;
}

export default ProtectedRoute
