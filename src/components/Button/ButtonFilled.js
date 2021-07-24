import React from 'react'
import './ButtonFilled.css';
function ButtonFilled({ children , fxClick , color , type ,icon}) {
    
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
                className={`boton ${color!==undefined ? color : ""} ${type==="icon" ? "icon-boton" : ""}`}
                onClick={fxClick}
            >
                {type==="icon" && <img className="icon-element" src={icon} />}
                <p>
                    {children}
                </p>
            </div>
        </>
    
    )
}

export default ButtonFilled
