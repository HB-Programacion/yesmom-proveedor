import React, { useState } from 'react'
import { useSelector } from 'react-redux';

import StoreOptions from './StoreOptions';
import iconSelectStore from '../../../images/icon-select-store.svg';

import './StoreSelect.css';


import { DropdownButton } from 'react-bootstrap';

const StoreSelect = () => {

    const [ isSelected , setIsSelected ] = useState(false);
    const { idActiveStore , stores = [ ] } = useSelector( state => state.store);


    const getNameActiveStore = (stores) => {
        return stores.find( s => s._id === idActiveStore).nombreTienda;
    }

    const handleSelected = () => {
        setIsSelected(s => !s);
    }
    return (
        <div className='store_select-container'>
            <DropdownButton
                disabled={stores?.length === 0}
                id={`dropdown-variants-info`}
                variant={"info"}
                title={`${stores?.length > 0 ? getNameActiveStore(stores) : 'Mis tiendas'}`}
            >   
                <StoreOptions off = { handleSelected } />
            </DropdownButton>
            
        </div>
    )
}

export default StoreSelect
