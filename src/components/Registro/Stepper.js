import React, { useEffect, useState } from 'react'

import './Stepper.css';

const Stepper = ({selected,setSelected}) => {

    const [ maxStep , setMaxStep] = useState(0);


    useEffect(()=>{

        if(selected >= maxStep){
            setMaxStep(selected);
        }
        //eslint-disable-next-line
    },[selected])

    const handleSelected = ( current ) => {
        //Permitir retroceder , siempre y cuando sea menor o igual que mi paso actual
        if(current <= maxStep){
            setSelected(current)
        }
    }

    return (
        <div className="stepper-container">
            <div 
                className={`stepper-item ${selected===0 && "stepper-active-step"}`}
                onClick={()=> handleSelected(0)}
            >
                1
            </div>
            <div 
                className={`stepper-item ${selected===1 && "stepper-active-step"}`}
                onClick={()=> handleSelected(1)}
            >
                2
            </div>
            <div 
                className={`stepper-item ${selected===2 && "stepper-active-step"}`}
                onClick={()=> handleSelected(2)}
            >
                3
            </div>
            <div
                className={`stepper-item ${selected===3 && "stepper-active-step"}`}
                onClick={()=> handleSelected(3)}
            >
                4
            </div>
        </div>
    )
}

export default Stepper
