import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const RestrictedRoute = ( { children }) => {
    
    const { existeTienda = true } = useSelector(state => state.supplier);

    return existeTienda ? children : <Navigate to="/p/store/new" />
}

export default RestrictedRoute