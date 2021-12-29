import React from 'react'

import './CardResumen.css';
const CardResumen = ({ color, text , amount}) => {
    return (
        <div className={`card-resumen ${color==="primary" ? "color-primary" : "color-normal"} `}>
            <p className="card-title-text">{text}</p>
            <p className="card-title-amount">S/ {amount}</p>
        </div>
    )
}

export default CardResumen
