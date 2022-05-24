import React, { useEffect }  from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const RestrictedRoute = ( { children }) => {
    
    useEffect(()=>{
        if(window){
            const timer = window.scrollTo(0,0);
            const timeout = setTimeout(timer,1000);

            return () => clearTimeout(timeout);
        }   
    },[])

    const { stores = [{}]} = useSelector(state => state.store);
    // const { existeTienda = true } = useSelector(state => state.supplier);


    // return existeTienda? children : <Navigate to="/p/store/new" />
    return stores.length > 0 ? children : <Navigate to="/p/store/new" />
}

export default RestrictedRoute
