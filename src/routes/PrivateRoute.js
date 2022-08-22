
import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children , logged }) => {

    const location = useLocation();
    useEffect(()=>{
        if(window){
            window.scrollTo({
                top: 0,
                behavior:'smooth'
            })
        }
    },[location])

    return logged ? children : <Navigate to="/iniciar-sesion" replace/>
}

export default PrivateRoute
