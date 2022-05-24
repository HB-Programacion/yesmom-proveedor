import React from 'react'

import './CircleImage.css';

const CircleImage = ({id, img , circleYellow , description}) => {
    return (
        <div className="item-circle">
            <div className="container-image-step">
                <img className="img-excel" src={img} alt={`paso ${id} excel`}/>
                <div className="container-circle">
                    <div className="position-number">
                        <img className="circle-yellow" src={circleYellow} alt="circle-yellow" />
                        <p>{id}</p>
                    </div>
                </div>
            </div>
            <p>{description}</p>
        </div>
    )
}

export default CircleImage
