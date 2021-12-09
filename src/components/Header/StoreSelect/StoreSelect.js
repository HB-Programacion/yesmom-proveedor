import React, { useState } from 'react'
import { useSelector } from 'react-redux';

import StoreOptions from './StoreOptions';
import iconSelectStore from '../../../images/icon-select-store.svg';

import './StoreSelect.css';

const StoreSelect = () => {

    const [ showSelect , setShowSelect ] = useState(false);
    const { idActiveStore , stores } = useSelector( state => state.store);


    const getNameActiveStore = (stores) => {
        return stores.find( s => s._id === idActiveStore).nombreTienda;
    }

    const handleSelection = () => {
        setShowSelect(s => !s);
    }
    return (
        <div className='store_select-container'>
            <div className="store_select-container-select" onClick={ handleSelection }>
                <p className='store_select-text'>
                    { idActiveStore ? getNameActiveStore(stores) : 'Mis tiendas' }
                </p>
                <div className='store_select-image'>
                    <img src={iconSelectStore} alt ="icon-select-store" /> 
                </div>
            </div>
            { showSelect && <StoreOptions off={ setShowSelect}/>}
            
        </div>
    )
}

export default StoreSelect
