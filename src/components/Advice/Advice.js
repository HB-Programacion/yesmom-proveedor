import React from 'react'

import './Advice.css';

const Advice = ( { color , text}) => {
    return (
        <div className={`bg-advice-${color} container_advice`}>
            <p className={`text-advice-${color} container_advice-text`}>{ text }</p>
        </div>
    )
}

export default Advice
