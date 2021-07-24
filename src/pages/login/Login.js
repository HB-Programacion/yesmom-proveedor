import React from 'react'
import { Link } from 'react-router-dom'
import AppLayout from '../../components/AppLayout/AppLayout'

import './Login.css';

import imgUser from '../../images/login/img-user.svg';
import iconEye from '../../images/login/icon-eye.svg';

import ButtonFilled from '../../components/Button/ButtonFilled';
import iconFacebook from '../../images/login/icon-facebook.svg';
import iconGoogle from '../../images/login/icon-google.svg';


const Login = () => {
    return (
        <AppLayout>
            <div className="contenedor-login">
                <div className="container-contenido">
                    <div className="all-content">
                        <div className="center">
                            <img src={imgUser} alt="iniciar-sesion" />  
                            <p className="title-rosa title-login">Iniciar Sesión</p>
                            <p className="bienvenido">¡Hola, Bienvenid@ a Yes Mom!</p>
                        </div>
                        <div className="container-center">
                            <div className="container-form-login">
                                <form>
                                    <div className="separate-inputs">
                                        <div className="wrapper-input">
                                            <label htmlFor="email" >Dirección de correo electrónico o numero de teléfono:</label>
                                            <input type="email" id="email" name="email" />
                                        </div>

                                        <div className="wrapper-input">
                                            <label htmlFor="password">Contraseña:</label>
                                            <div className="input-password">
                                                <input type="password" id="password" name="password" />
                                                <img className="eye-icon" src={iconEye} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="wrapper-checkbox">
                                        <div className="container-checkbox">
                                            <input type="checkbox" id="checkbox" />
                                            <label htmlFor="checkbox">Recuerdame</label>
                                        </div>
                                        <Link href="recuperar-password">
                                            <p className="forgot-password">¿Olvidaste tu contraseña?</p>
                                        </Link>
                                    </div>

                                    <div className="contenedor-boton-pink btn-only">
                                        <ButtonFilled color="pink">
                                            Ingresar
                                        </ButtonFilled>
                                    </div>
                                    <div className="container-line">
                                        <hr />
                                        <p>O</p>
                                        <hr />
                                    </div>


                                    <div className="btn-only">
                                        <ButtonFilled color="blue" type="icon" icon={iconFacebook}>
                                            Ingresar con Facebook
                                        </ButtonFilled>
                                    </div>
                                    <div className="btn-only">
                                        <ButtonFilled color="outline-black" type="icon" icon={iconGoogle}>
                                            Ingresar con Google
                                        </ButtonFilled>
                                    </div>
                                </form>
                            </div>
                            <div className="wrapper-end">
                                <div className="container-line">
                                    <hr />
                                    <p>¿Aún no eres parte de<br/> nuestro marketplace?</p>
                                    <hr />
                                </div>
                                <div className="login--container-boton-yellow login">
                                    <ButtonFilled color="yellow">
                                        Regístrate aquí
                                    </ButtonFilled>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Login
