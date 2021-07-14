import React from 'react'

function ButtonFilled({ color, children }) {


    /* 
        FIRST : #DC6A8D
        SECOND : #FEBF41
        THIRD : #DADADA
     */
    return (
        <>
            <div className={`boton ${color}`}>
                <p>
                    {children}
                </p>
            </div>
            <style jsx>
                {`
                    .boton{
                        cursor:pointer;
                        background-color :#DC6A8D;
                        border-radius:3rem;
                        transition: 0.3s ease-in-out;
                    }
                    .second{
                        background-color:#FEBF41;
                    }
                    .third{
                        background-color:#DADADA;
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

                    @media (min-width:768px){
                        .boton{
                            border-radius:1.5rem;
                        }
                        .boton p{
                            font-family:"omnes-bold"!important;
                            font-size:1.8rem;
                        }
                    }
                    @media (min-width:1024px){
                        .boton p{
                            font-size:2rem;
                        }
                    }
                    @media (min-width:1280px){
                        .boton p{
                            font-size:2.3rem;
                        }
                    }
                `}
            </style>
        </>
    
    )
}

export default ButtonFilled
