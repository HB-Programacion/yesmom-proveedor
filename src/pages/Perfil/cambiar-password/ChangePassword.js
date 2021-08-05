import React from 'react'
import { Link } from 'react-router-dom';
import AppLayout from '../../../components/AppLayout/AppLayout';
import Description from '../../../components/Perfil/Description/Description';
import TitlePerfil from '../../../components/Perfil/TitlePerfil/TitlePerfil';

import RegistroStep1 from '../../registro/RegistroStep1';
import RegistroStep2 from '../../registro/RegistroStep2';
import RegistroStep3 from '../../registro/RegistroStep3';
import RegistroStep4 from '../../registro/RegistroStep4';

import back from '../../../images/perfil/back.svg';
import iconEditar from '../../../images/header/icon-edit.svg';

import ButtonFilled from '../../../components/Button/ButtonFilled';
import Sidebar from '../../../components/Perfil/Sidebar/Sidebar';

import './ChangePassword.css';
const ChangePassword = () => {
    return (
        <AppLayout>
            <div className="contenedor-info-perfil-registro">
                <div className="info-perfil-contenido">
                    <div className="info-all-content">
                        <div className="info-contenedor-flex">
                                <div className="hide-desktop info-container-back">
                                    <div>
                                        <Link to="/informacion-perfil">
                                            <div className="show return">
                                                <img src={back} alt="volver" />
                                                <p className="info-perfil-back">Volver</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            <div className="flex-left">
                                <div className="info-container-title">
                                    <TitlePerfil name="Baby Plaza Store" email="example@babyplaza.com" />
                                </div>
                                <Sidebar />
                            </div>
                            <div className="flex-right">
                                <Description title="Registro" description="Aquí encontrarás los datos de la empresa" />
                                <div className="info-container-content">
                                    <div className="registro-container-form info-container-form mt-5 mb-2">
                                    <div className="info-icon-editar">
                                        <img src={iconEditar} />
                                    </div>
                                    <RegistroStep1 />
                                    </div>
                                    <div className="registro-container-form info-container-form mt-5 mb-2">
                                    <div className="info-icon-editar">
                                        <img src={iconEditar} />
                                    </div>
                                    <RegistroStep2 />
                                    </div>
                                    <div className="registro-container-form info-container-form mt-5 mb-2">
                                    <div className="info-icon-editar">
                                        <img src={iconEditar} />
                                    </div>
                                    <RegistroStep3 />
                                    </div>
                                    <div className="registro-container-form info-container-form mt-5 mb-2">
                                    <div className="info-icon-editar">
                                        <img src={iconEditar} />
                                    </div>
                                    <RegistroStep4 />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="info-hr" />

                        <div className="info-container-buttons">
                            <div className="info-container-button-only">
                                <ButtonFilled color="pink">
                                    Guardar
                                </ButtonFilled>      
                            </div>
                            <div className="info-container-button-only">
                                <ButtonFilled color="outline-pink">
                                    Cancelar
                                </ButtonFilled>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default ChangePassword
