import React from 'react'

function ButtonFilled({ color, children }) {
    
    return (
        <>
            <div className="boton">
                <p>
                    {children}
                </p>
            </div>
            <style jsx>
                {`
                    .boton{
                        background-color :${color};
                        border-radius:3rem;
                        transition: 0.3s ease-in-out;
                    }
                    .boton:hover{
                        transform:scale(1.02);
                    }
                    .boton p{
                        font-family:"omnes-regular"!important;
                        text-align:center;
                        margin:0;
                        color:#ffffff;
                        padding: 1.5rem;
                        font-size:2.3rem;
                    }
                `}
            </style>
        </>
    
    )
}

export default ButtonFilled
