import React from 'react'
import { Link } from 'react-router-dom';
import AppLayout from '../../components/AppLayout/AppLayout'
import TitlePerfil from '../../components/Perfil/TitlePerfil/TitlePerfil'

import './InfoPerfil.css';

const InfoPerfil = () => {

    return (
        <AppLayout>
            <div className="contenedor-info-perfil">
                <div className="info-perfil-contenido">
                    <div className="info-all-content">
                            
                            <div className="info-container-title">
                                <TitlePerfil name="Baby Plaza Store" email="example@babyplaza.com" />
                            </div>

                            <div className="info-perfil-container-options">
                                <ul className="info-list list-group list-group-flush">
                                    <Link to="/informacion-perfil/registro">
                                        <li className="list-group-item">Registro</li> 
                                    </Link>
                                    <Link to="/">
                                        <li className="list-group-item">Productos</li>
                                    </Link>
                                    <Link to="/informacion-perfil/cambiar-password">
                                        <li className="list-group-item">Cambiar contraseña</li>
                                    </Link>
                                    <Link to="/informacion-perfil/perfil-tienda">
                                        <li className="list-group-item">Perfil de tienda</li>
                                    </Link>
                                    <Link to="/">
                                        <li className="list-group-item">Términos y condiciones</li>
                                    </Link>
                                    <Link to="/">
                                        <li className="list-group-item">Desactivar cuenta</li>
                                    </Link>
                                    <Link to="/">
                                        <li className="list-group-item">Cerrar sesión</li>
                                    </Link>
                                </ul>
                            </div> 
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default InfoPerfil
