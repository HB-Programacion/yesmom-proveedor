import React from 'react'
import { Link } from 'react-router-dom';
import AppLayout from '../../../components/AppLayout/AppLayout';
import Description from '../../../components/Perfil/Description/Description';
import TitlePerfil from '../../../components/Perfil/TitlePerfil/TitlePerfil';

import back from '../../../images/perfil/back.svg';
import iconEditar from '../../../images/header/icon-edit.svg';

import ButtonFilled from '../../../components/Button/ButtonFilled';
import Sidebar from '../../../components/Perfil/Sidebar/Sidebar';



import './Terminos.css';

const Terminos = () => {
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
                            <div className="flex-right flex-right-ml">
                                <Description title="Términos y condiciones" description="Aquí podrás llenar los términos y condiciones de tu tienda" />
                                <div className="info-container-content terminos-container-content">
                                    <div className="registro-container-form terminos-container-form mt-5">
                                        <div className="info-icon-editar">
                                            <img src={iconEditar} />
                                        </div>
                                        <div className="flex-terminos">
                                            <h4 className="registro-title op-8 mb-4">Agregar términos y condiciones</h4>
                                            <textarea
                                                placeholder="Escriba aquí los terminos y condiciones generales de la tienda para el comprador..."
                                                className="w-100 terminos-text-area" 
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="info-hr"/>
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

export default Terminos
