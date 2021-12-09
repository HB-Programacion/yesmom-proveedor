import React from 'react';
import { useSelector } from 'react-redux'
import './Advice.css';

const Advice = ( { color , text}) => {

    const { existeTienda } = useSelector( state => state.supplier);
    return !existeTienda ? (
        <div className={`bg-advice-${color} container_advice`}>
            <p className={`text-advice-${color} container_advice-text`}>{ text }</p>
        </div>
    ) : <div></div>
}

export default Advice
