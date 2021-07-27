import React from 'react'
import AppLayout from '../../components/AppLayout/AppLayout'

import imgUser from '../../images/login/img-user.svg';
import iconEye from '../../images/login/icon-eye.svg';

import ButtonFilled from '../../components/Button/ButtonFilled';



const ResetPassword = () => {
    return (
        <AppLayout>
            <div className="contenedor-login">
                <div className="reset--container-contenido">
                    <div className="all-content all-content-reset">
                        <div className="center">
                            <img src={imgUser} alt="iniciar-sesion" />  
                            <p className="title-rosa title-reset">¿Olvidaste tu contraseña?</p>
                            <p className="bienvenido reset-password">Este es el último paso para que puedas<br/> restablecer tu contraseña</p>
                        </div>
                        <div className="container-center">
                            <div className="container-form-login container-form-reset">
                                <form>
                                    <div className="wrapper-input">
                                        <label htmlFor="password" >Por favor ingresa una nueva contraseña:</label>
                                        <div className="input-password reset-password">
                                            <input type="password" id="password" name="password" placeholder="Ingresar contraseña" />
                                            <img className="eye-icon" src={iconEye} />
                                        </div>
                                    </div>
                                    <div className="wrapper-input">
                                        <div className="input-password reset-password">
                                            <input type="password" id="new_password" name="new_password" placeholder="Repetir contraseña" />
                                            <img className="eye-icon" src={iconEye} />
                                        </div>
                                    </div>

                                    <div className="btn-only btn-only-reset mt-5">
                                        <div className="hide-desktop">
                                            <ButtonFilled color="pink">
                                                Continuar
                                            </ButtonFilled>
                                        </div>
                                        <div className="show-desktop">
                                            <ButtonFilled color="pink">
                                                Confirmar contraseña
                                            </ButtonFilled>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default ResetPassword
