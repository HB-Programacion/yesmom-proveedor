import React from 'react'
import AppLayout from '../../components/AppLayout/AppLayout'

import imgUser from '../../images/login/img-user.svg';
import iconEye from '../../images/login/icon-eye.svg';

import ButtonFilled from '../../components/Button/ButtonFilled';
import './Login.css';

import * as yup from 'yup'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';


const schemaValidator = yup.object().shape({
    password : yup.string().required('*Este campo es requerido').min(5,'*La contraseña debe tener como mínimo 5 caracteres'),
    password_2 : yup.string().required('*Este campo es requerido').min(5,'*La contraseña debe tener como mínimo 5 caracteres'),
})



const ResetPassword = () => {

    const { register , handleSubmit , formState : { errors } } = useForm({
        resolver : yupResolver(schemaValidator)
    })

    const handleRef = (id) => {
        const type = document.getElementById(id).type;
    
        type === "password" ? document.getElementById(id).type="text" : document.getElementById(id).type="password"
    }

    const submitForm = (data) => {
        const { password , password_2 } = data;

        if(password !== password_2){
            alert('Las password no coinciden')
        }else{
            alert('okssss')
        }
    }

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
                                            <input 
                                                type="password" 
                                                id="password" 
                                                name="password" 
                                                placeholder="Ingresar contraseña" 
                                                {...register('password')}
                                            />
                                            <img className="eye-icon" src={iconEye} onClick= {() => handleRef('password') }/>
                                        </div>
                                        <p className="error-input-login">{errors?.password?.message}</p>
                                    </div>
                                    <div className="wrapper-input">
                                        <div className="input-password reset-password">
                                            <input 
                                                type="password" 
                                                id="password_2" 
                                                name="password_2" 
                                                placeholder="Repetir contraseña"
                                                {...register('password_2')} 
                                            />
                                            <img className="eye-icon" src={iconEye} onClick= {() => handleRef('password_2') }/>
                                        </div>
                                        <p className="error-input-login">{errors?.password_2?.message}</p>
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
