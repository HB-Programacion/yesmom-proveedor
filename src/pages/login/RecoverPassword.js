import React from 'react'
import AppLayout from '../../components/AppLayout/AppLayout'
import imgUser from '../../images/login/img-user.svg';
import ButtonFilled from '../../components/Button/ButtonFilled';



const ResetPassword = () => {
    return (
        <AppLayout>
            <div className="contenedor-login">
                <div className="container-contenido">
                    <div className="all-content all-content-reset">
                        <div className="center">
                            <img src={imgUser} alt="iniciar-sesion" />  
                            <p className="title-rosa title-recover">¿Olvidaste tu contraseña?</p>
                            <p className="bienvenido reset-password">Te enviaremos un correo electrónico con los pasos a <br />seguir para que puedas restablecer tu contraseña</p>
                        </div>
                        <div className="container-center">
                            <div className="container-form-login container-form-reset">
                                <form>
                                    <div className="separate-inputs">
                                        <div className="wrapper-input">
                                            <label htmlFor="email" >Por favor ingresa tu correo electrónico:</label>
                                            <input type="email" id="email" name="email" />
                                        </div>
                                    </div>

                                    <div className="btn-only btn-only-reset">
                                        <ButtonFilled color="pink">
                                            Continuar
                                        </ButtonFilled>
                                    </div>
                                    <div className="btn-only btn-only-reset">
                                        <ButtonFilled color="yellow">
                                            Cancelar
                                        </ButtonFilled>
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
