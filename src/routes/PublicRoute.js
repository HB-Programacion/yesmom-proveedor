
import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children , logged }) => {

    const location = useLocation();
    useEffect(()=>{
        if(window){
            window.scrollTo({
                top: 0,
                behavior:'smooth'
            })
        }
    },[location])
    
    return !logged ? children : <Navigate to="/p/info/registro" replace/>
}

export default PublicRoute
