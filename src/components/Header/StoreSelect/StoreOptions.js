import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setActiveStore } from '../../../redux/actions/store';

const StoreOptions = ( { off }) => {

    const dispatch = useDispatch();
    const { stores } = useSelector( state => state.store);

    const handleActiveStore = (id) => {
        off();
        dispatch(setActiveStore(id))
    }
    return (
        <>
            {
                stores?.length >0 ? 
                <div className="store_options-container">
                    {
                        stores.map(( {_id, nombreTienda} )=>(
                            <div key={_id} className='store_option-container' onClick={ () => handleActiveStore(_id)}>
                                <p className='store_option'>{nombreTienda}</p> 
                            </div>
                        ))
                    }
                        
                </div> : <></>

            }
        </>
    )
}

export default StoreOptions
