import React, { useEffect, useState } from 'react'


import './Stepper.css';

function StepperNewStore({selected}) {

    return (
        <div className="stepper-container">
            <div 
                className={`stepper-item ${selected===0 && "stepper-active-step"}`}
            >
                1
            </div>
            <div 
                className={`stepper-item ${selected===1 && "stepper-active-step"}`}
            >
                2
            </div>

        </div>
    )
}

export default StepperNewStore
