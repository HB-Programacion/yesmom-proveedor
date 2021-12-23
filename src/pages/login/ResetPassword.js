import React from 'react'
import AppLayout from '../../components/AppLayout/AppLayout'

import imgUser from '../../images/login/img-user.svg';
import iconEye from '../../images/login/icon-eye.svg';

import ButtonFilled from '../../components/Button/ButtonFilled';
import './Login.css';

import * as yup from 'yup'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useParams } from 'react-router-dom';


const schemaValidator = yup.object().shape({
    password : yup.string().required('*Este campo es requerido').min(5,'*La contraseña debe tener como mínimo 5 caracteres'),
    confirmPassword: yup.string().oneOf([yup.ref('password'),null],'*Las contraseñas no coinciden'),
})



const ResetPassword = () => {

    const { token } = useParams();
    console.log(token);
    const { register , handleSubmit , formState : { errors } } = useForm({
        resolver : yupResolver(schemaValidator)
    })

    const handleRef = (id) => {
        const type = document.getElementById(id).type;
    
        type === "password" ? document.getElementById(id).type="text" : document.getElementById(id).type="password"
    }

    const submitForm = (data) => {
        console.log(data);
    }

    return (
        <AppLayout>
            <div className="contenedor-login animated fade-in">
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
                                            <input 
                                                type="password" 
                                                id="password" 
                                                name="password" 
                                                placeholder="Ingresar contraseña" 
                                                {...register('password')}
                                            />
                                            <img className="eye-icon" alt="icon-eye" src={iconEye} onClick= {() => handleRef('password') }/>
                                        </div>
                                        { errors?.password?.message && <p className="error-input-login">{errors?.password?.message}</p>}
                                        
                                    </div>
                                    <div className="wrapper-input">
                                        <div className="input-password reset-password">
                                            <input 
                                                type="password" 
                                                id="confirmPassword" 
                                                name="confirmPassword" 
                                                placeholder="Repetir contraseña"
                                                {...register('confirmPassword')} 
                                            />
                                            <img className="eye-icon" alt="icon-eye" src={iconEye} onClick= {() => handleRef('confirmPassword') }/>
                                        </div>
                                        <p className="error-input-login">{errors?.confirmPassword?.message}</p>
                                    </div>

                                    <div className="btn-only btn-only-reset mt-5" onClick = { handleSubmit(submitForm)}>
                                        <div className="reset-hide-desktop">
                                            <ButtonFilled color="pink">
                                                Continuar
                                            </ButtonFilled>
                                        </div>
                                        <div className="reset-show-desktop">
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
