import React from 'react'
import { useSelector } from 'react-redux';

import './TitlePerfil.css';

const TitlePerfil = () => {

    const { idActiveStore , stores } = useSelector( state => state.store);

    const getActiveName = () => {
        return stores?.find( s => s._id === idActiveStore).nombreTienda || ""
    }
    return (
        <div className="info-perfil-title">
            ¡Hola! <br/>
            {getActiveName()}<br/>
            {/* <span>{correoElectronico}</span> */}
        </div>
    )
}

export default TitlePerfil
