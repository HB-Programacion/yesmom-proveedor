
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children , logged }) => {

    useEffect(()=>{
        if(window){
            window.scrollTo({
                top: 0,
                behavior:'smooth'
            })
        }
    },[])
    
    return !logged ? children : <Navigate to="/p/info/registro" replace/>
}

export default PublicRoute
