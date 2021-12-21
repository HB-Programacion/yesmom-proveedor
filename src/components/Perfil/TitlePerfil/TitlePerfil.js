import React from 'react'
import { useSelector } from 'react-redux';

import './TitlePerfil.css';

const TitlePerfil = () => {

    const { store  } = useSelector( state => state.store);
    return (
        <div className="info-perfil-title">
            ¡Hola! <br/>
            {store?.nombreTienda}<br/>
            {/* <span>{correoElectronico}</span> */}
        </div>
    )
}

export default TitlePerfil
