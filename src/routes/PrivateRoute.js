
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children , logged }) => {

    useEffect(()=>{
        if(window){
            window.scrollTo({
                top: 0,
                behavior:'smooth'
            })
        }
    },[])

    return logged ? children : <Navigate to="/iniciar-sesion" replace/>
}

export default PrivateRoute
