import React from 'react'
import { useSelector } from 'react-redux';

import './TitlePerfil.css';

function TitlePerfil({name , email}) {

    const { nombreTienda = "" , correoElectronico = "" } = useSelector( state => state.supplier);
    return (
        <div className="info-perfil-title">
            ¡Hola! <br/>
            {nombreTienda}<br/>
            {/* <span>{correoElectronico}</span> */}
        </div>
    )
}

export default TitlePerfil
