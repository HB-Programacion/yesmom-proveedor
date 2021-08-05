import React from 'react'

import './TitlePerfil.css';

function TitlePerfil({name , email}) {
    return (
        <div className="info-perfil-title">
            ¡Hola! <br/>
            {name}<br/>
            <span>{email}</span>
        </div>
    )
}

export default TitlePerfil
