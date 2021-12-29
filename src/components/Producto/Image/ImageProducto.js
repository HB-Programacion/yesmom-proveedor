import React from 'react'

import './ImageProducto.css';
const ImageProducto = ({ type , src , i}) => {

    return (
        <>
            <div className={`.img-producto_container-image .img-producto_${type && type}`}>
                <img src={`${src}`} alt={`producto-${i}`} />
            </div>
        </>
    )
}

export default ImageProducto
