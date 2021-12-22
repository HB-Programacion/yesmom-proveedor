import React from 'react'

const ImageProducto = ({ type , src , i}) => {

    return (
        <>
            <div className={`container-image ${type && type}`}>
                <img src={`${src}`} alt={`producto-${i}`} />
            </div>

            <style jsx>
                {`
                    .container-image{
                        border: 15px dashed #FFFFFF;
                        box-sizing: border-box;
                        box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
                        border-radius: 10px;

                        cursor:pointer;
                    }
                    .big{
                        width:34.5rem;
                        height:34.5rem;
                    }
                    .small{
                        flex-basis:calc(20% - 1rem);
                        margin-left: 0.5rem;
                    }
                    .container-image img{
                        width:100%;
                    }

                    @media (min-width:1024px){
                        .big{
                            width:100%;
                            height:100%;
                        }
                        .small{
                            flex-basis:20%;
                        }
                    }
                `}
            </style>
        </>
    )
}

export default ImageProducto
