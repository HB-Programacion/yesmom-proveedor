import React from 'react'
import { useHistory } from 'react-router-dom'
import back from '../../images/perfil/back.svg';
const BackComponent = () => {

    const history = useHistory();
    const handleReturn = () => {
        history.goBack();
    }
    return (
        <div onClick= { handleReturn }>
            <div className="show return">
                <img src={back} alt="volver" />
                <p className="info-perfil-back">Volver</p>
            </div>
        </div>
    )
}

export default BackComponent
