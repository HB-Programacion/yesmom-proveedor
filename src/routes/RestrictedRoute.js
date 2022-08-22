import React, { useEffect }  from 'react'
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const RestrictedRoute = ( { children }) => {
    
    const location = useLocation();
    useEffect(()=>{
        if(window){
            window.scrollTo({
                top: 0,
                behavior:'smooth'
            })
        }
    },[location])
    
    const { stores = [{}]} = useSelector(state => state.store);
    // const { existeTienda = true } = useSelector(state => state.supplier);


    // return existeTienda? children : <Navigate to="/p/store/new" />
    return stores.length > 0 ? children : <Navigate to="/p/store/new" />
}

export default RestrictedRoute
