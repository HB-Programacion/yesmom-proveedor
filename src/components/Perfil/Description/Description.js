import React from 'react'

import './Description.css';

const Description = ({ title , description}) => {
    return (
        <div className="description-container">
           <h5 className="text-description-title">{title}</h5>
           <p className="text-description-subtitle">{description}</p>
           <hr className="hr-description"/>
        </div>
    )
}

export default Description
