import React from 'react'
import { Link } from 'react-router-dom';
import AppLayout from '../../../components/AppLayout/AppLayout';
import Description from '../../../components/Perfil/Description/Description';
import TitlePerfil from '../../../components/Perfil/TitlePerfil/TitlePerfil';

import back from '../../../images/perfil/back.svg';
import iconEditar from '../../../images/header/icon-edit.svg';

import ButtonFilled from '../../../components/Button/ButtonFilled';
import Sidebar from '../../../components/Perfil/Sidebar/Sidebar';

import iconEye from '../../../images/perfil/icon-eye.svg';

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
                            <div className="flex-right flex-right-ml">
                                <Description title="Cambiar contraseña" description="Aquí encontrarás tu contraseña. Si la quieres modificar asegúrate de que sea segura" />
                                <div className="info-container-content change-container-content">
                                    <div className="registro-container-form info-container-form mt-5 mb-2">
                                        <div className="info-icon-editar">
                                            <img src={iconEditar} />
                                        </div>
                                        <form>

                                            <div className="wrapper-input change-password-wrapper-input">
                                                <h4 className="registro-title op-8 mb-4">Cambiar contraseña actual</h4>
                                                
                                                <label htmlFor="password" >Ingresa la contraseña actual*:</label>
                                                <div className="input-password reset-password">
                                                    <input type="password" id="password" name="password"/>
                                                    <img className="eye-icon" src={iconEye} />
                                                </div>
                                            </div>
                                            <div className="container-forgot-password">
                                                    <Link to ="/">
                                                        ¿Olvidaste tu contraseña?
                                                    </Link>
                                            </div>
                                            <div className="wrapper-input">
                                                <label htmlFor="password" >Nueva contraseña*:</label>
                                                <div className="input-password reset-password">
                                                    <input type="password" id="new_password" name="new_password"    />
                                                    <img className="eye-icon" src={iconEye} />
                                                </div>
                                            </div>
                                            <div className="wrapper-input">
                                                <label htmlFor="password">Repetir nueva contraseña*:</label>
                                                <div className="input-password reset-password">
                                                    <input type="password" id="new_password" name="new_password"/>
                                                    <img className="eye-icon" src={iconEye} />
                                                </div>
                                            </div>
                                        </form>
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
