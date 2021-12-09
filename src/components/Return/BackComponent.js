import React from 'react'

import { useNavigate } from 'react-router-dom'

import back from '../../images/perfil/back.svg';

const BackComponent = () => {

    const navigate = useNavigate();
    const handleReturn = () => {
        navigate(-1);
    }
    return (
        <div className="container-back-component">
            <div onClick= { handleReturn }>
                <div className="show return">
                    <img src={back} alt="volver" />
                    <p className="info-perfil-back">Volver</p>
                </div>
            </div>
        </div>
    )
}

export default BackComponent
