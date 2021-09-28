import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import AppLayout from '../../components/AppLayout/AppLayout'


import imgUser from '../../images/login/img-user.svg';
import iconEye from '../../images/login/icon-eye.svg';

import ButtonFilled from '../../components/Button/ButtonFilled';
/* import iconFacebook from '../../images/login/icon-facebook.svg';
import iconGoogle from '../../images/login/icon-google.svg'; */
import { startLogin } from '../../redux/actions/auth';

import './Login.css';

//Validacion
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';

const schemaValidator = yup.object().shape({
  email : yup.string().email('*Correo electrónico incorrecto').required('*Este campo es requerido'),
  password : yup.string().required('*Este campo es requerido'),
})

const Login = () => {
  const dispatch = useDispatch();

  const { register,  handleSubmit , formState : { errors } } = useForm({
    resolver : yupResolver(schemaValidator),
  })

  const submitForm = async (values ) => {
    // console.log(values);
    dispatch( startLogin( values ) );
  };


  const handleRef = () => {
    const type = document.getElementById('password').type;

    type === "password" ? document.getElementById('password').type="text" : document.getElementById('password').type="password"
  }
  return (
    <AppLayout>
      <div className="contenedor-login animated fade-in">
        <div className="container-contenido">
          <div className="all-content">
            <div className="center">
              <img src={imgUser} alt="iniciar-sesion" />
              <p className="title-rosa title-login">Iniciar Sesión</p>
              <p className="bienvenido">¡Hola, Bienvenid@ a Yes Mom!</p>
            </div>
            <div className="container-center">
              <div className="container-form-login">
                <form 
                  onSubmit = { handleSubmit(submitForm)}
                >
                  <div className="separate-inputs">
                    <div className="wrapper-input">
                      <label htmlFor="email" >Dirección de correo electrónico{/*  o numero de teléfono: */}</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        {...register('email')}
                      />
                      <p className="error-input-login">{errors?.email?.message}</p>
                    </div>

                    <div className="wrapper-input">
                      <label htmlFor="password">Contraseña:</label>
                      <div className="input-password">
                        <input 
                          type="password" 
                          id="password" 
                          name="password" 
                          {...register('password')}
                        />
                        <img className="eye-icon" src={iconEye} onClick= { handleRef } />
                      </div>
                      <p className="error-input-login">{errors?.password?.message}</p>
                    </div>
                  </div>

                  <div className="wrapper-checkbox">
                    <div className="container-checkbox">
                      <input
                          type="checkbox"
                          id="checkbox"
                          className="box-styled__checkbox"
                        />
                        <label
                          htmlFor="checkbox"
                          className="box-styled__text"
                        ></label>
                        <label htmlFor="checkbox">
                          <p>Recuerdame</p>
                        </label>
                    </div>
                    <Link to="/recuperar-password">
                      <p className="forgot-password">¿Olvidaste tu contraseña?</p>
                    </Link>
                  </div>

                  <div className="contenedor-boton-pink btn-only">
                    <ButtonFilled color="pink" fxClick={handleSubmit(submitForm)}>
                      Ingresar
                    </ButtonFilled>
                  </div>

                  {/*
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
                  </div> */}
                </form>
              </div>
              <div className="wrapper-end">
                <div className="container-line">
                  <hr />
                  <p>¿Aún no eres parte de<br /> nuestro marketplace?</p>
                  <hr />
                </div>
                <div className="login--container-registrar">
                  <Link to="/registro">
                    <ButtonFilled color="yellow">
                      Regístrate aquí
                    </ButtonFilled>
                  </Link>
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
