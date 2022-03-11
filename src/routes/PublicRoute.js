
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children , logged }) => {

    useEffect(()=>{
        if(window){
            const timer = window.scrollTo(0,0);
            const timeout = setTimeout(timer,1000);

            return () => clearTimeout(timeout);
        }   
    },[])
    return !logged ? children : <Navigate to="/p/info/registro" replace/>
}

export default PublicRoute
