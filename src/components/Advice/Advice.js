import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { finishLoading } from '../../redux/actions/ui';

import Loading from '../Loading/Loading';

import './Advice.css';

const Advice = ( { color , text}) => {

    const dispatch = useDispatch();
    const { loading } = useSelector( state => state.ui);
    const { stores } = useSelector( state => state.store);

    useEffect(()=>{
        if(stores){
            dispatch(finishLoading())
        }
    },[stores])

    return (
        <>
            { loading && <Loading />}
            {stores && !stores?.length>0 ? (
                <div className={`bg-advice-${color} container_advice`}>
                <p className={`text-advice-${color} container_advice-text`}>{ text }</p>
            </div>
            ) : <></>}
            
        </>
    )
    
}

export default Advice
