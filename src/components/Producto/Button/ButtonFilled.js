import React from 'react'

function ButtonFilled({ color, children ,fsize,outline}) {


    /* 
        FIRST : #DC6A8D
        SECOND : #FEBF41
        THIRD : #DADADA
        blue: #4B64A4
     */
    return (
        <>
            <div className={`boton ${color? color : ""} ${outline ? "outline" : ""} ${fsize ? "fsize" : ""}`}>
                <p>
                    {children}
                </p>
            </div>
            <style jsx>
                {`
                    .boton{
                        width:100%;
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
                    .blue{
                        background-color:#4B64A4;
                    }
                    .outline{
                        background-color:#ffffff;
                        border:1px solid #556EA1;
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
                    .fsize p{
                        font-size:2rem;
                    }
                    .outline p{
                        color:#556EA1;   
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
                    }
                `}
            </style>
        </>
    
    )
}

export default ButtonFilled
