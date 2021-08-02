import React from 'react'

import './Stepper.css';

function Stepper({selected,setSelected}) {
    return (
        <div className="stepper-container">
            <div 
                className={`stepper-item ${selected===0 && "stepper-active-step"}`}
                onClick={()=> setSelected(0)}
            >
                1
            </div>
            <div 
                className={`stepper-item ${selected===1 && "stepper-active-step"}`}
                onClick={()=> setSelected(1)}
            >
                2
            </div>
            <div 
                className={`stepper-item ${selected===2 && "stepper-active-step"}`}
                onClick={()=> setSelected(2)}
            >
                3
            </div>
            <div
                className={`stepper-item ${selected===3 && "stepper-active-step"}`}
                onClick={()=> setSelected(3)}
            >
                4
            </div>
        </div>
    )
}

export default Stepper
