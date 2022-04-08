import React from 'react'
import './ButtonFilled.css';
const ButtonFilled = ({ children , fxClick , color , type ,icon , disabled = false}) => {
    
    /* 
        COLOR:
        - Amarillo
        - Rosado
        - Azul
        - Gray
        - Black
    */
    return (
        <>
            <div 
                className={`boton ${disabled ? 'disabled' : ''} ${color!==undefined ? color : ""} ${type==="icon" ? "icon-boton" : ""}`}
                onClick={!disabled ? fxClick : null}
            >
                {type==="icon" && <img className="icon-element" src={icon} alt="icon-button" />}
                <p>
                    {children}
                </p>
            </div>
        </>
    
    )
}

export default ButtonFilled
