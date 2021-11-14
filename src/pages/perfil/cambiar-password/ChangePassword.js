import React from 'react'
import { Link } from 'react-router-dom';
import AppLayout from '../../../components/AppLayout/AppLayout';
import Description from '../../../components/Perfil/Description/Description';
import TitlePerfil from '../../../components/Perfil/TitlePerfil/TitlePerfil';

import iconEditar from '../../../images/header/icon-edit.svg';

import ButtonFilled from '../../../components/Button/ButtonFilled';
import Sidebar from '../../../components/Perfil/Sidebar/Sidebar';

import iconEye from '../../../images/perfil/icon-eye.svg';

import './ChangePassword.css';

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import BackComponent from '../../../components/Return/BackComponent';
import Swal from 'sweetalert2';

import { useSelector } from 'react-redux';
import clienteAxiosBusiness from '../../../config/axiosBusiness';
import axios from 'axios';


const schemaValidator = yup.object().shape({
    password : yup.string().required('*Este campo es requerido'),
    new_password : yup.string().required('*Este campo es requerido').min(5,'*Nueva contraseña debe tener mínimo 5 caracteres'),
    confirmPassword : yup.string().oneOf([yup.ref('new_password'),null], '*Las contraseñas no coinciden')
})

const ChangePassword = () => {

    const { token } = useSelector( state => state.auth);
    const { register , handleSubmit , formState : { errors } , reset  } = useForm({
        resolver : yupResolver(schemaValidator),
    })

    const submitForm = async ( values ) => {
        
        try{

            const { password , new_password } = values;
            const payload = {
                actual : password,
                contrasenia : new_password
            }


            Swal.fire({
                title : "Actualizando contraseña...",
                text : "Espera un momento....",
                allowOutsideClick : false,
                didOpen: () => {
                    Swal.showLoading();
                }
            })

            const { data } = await axios.patch(`${process.env.REACT_APP_BACKEND_URL_BUSINESS}/supplier/updatePassword`, payload , {
                headers : {
                    'access-token' : token
                }
            })

            Swal.close();

            if(data?.CodigoRespuesta === '12'){
                window.location.reload();
            }
            if(data?.CodigoRespuesta === '38'){
                return Swal.fire('Contraseña incorrecta', 'Ingresa tu contraseña actual' , 'info');
            }

            if(data?.response?.ok){
                return Swal.fire('Contraseña actualizada', 'La contraseña ha sido actualizada correctamente' , 'success');
            }

        }catch(err){
            Swal.close();
            console.log(err);
            Swal.fire('Error', 'Error inesperado', 'error');
        }finally{
            reset();
        }
    }

    const handleRef = (id) => {
        const type = document.getElementById(id).type;
    
        type === "password" ? document.getElementById(id).type="text" : document.getElementById(id).type="password"
    }

    return (
        <AppLayout>
            <div className="contenedor-info-perfil-registro animated fade-in">
                <div className="info-perfil-contenido">
                    <div className="info-all-content">
                        <div className="info-contenedor-flex">
                                <div className="hide-desktop info-container-back">
                                    <div> 
                                        <BackComponent />
                                    </div>
                                </div>
                            <div className="flex-left">
                                <div className="info-container-title">
                                    <TitlePerfil />
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
                                                    <input 
                                                        type="password" 
                                                        id="password" 
                                                        name="password"
                                                        {...register('password')}
                                                    />
                                                    <img className="eye-icon" src={iconEye} onClick={ () => handleRef('password')}/>
                                                </div>
                                                <p className="error-input">{errors?.password?.message}</p>
                                            </div>
                                            <div className="container-forgot-password">
                                                    <Link to ="/">
                                                        ¿Olvidaste tu contraseña?
                                                    </Link>
                                            </div>
                                            <div className="wrapper-input">
                                                <label htmlFor="new_password" >Nueva contraseña*:</label>
                                                <div className="input-password reset-password">
                                                    <input 
                                                        type="password" 
                                                        id="new_password" 
                                                        name="new_password"    
                                                        {...register('new_password')}
                                                    />
                                                    <img className="eye-icon" src={iconEye} onClick={ () => handleRef('new_password')} />
                                                </div>
                                                <p className="error-input">{errors?.new_password?.message}</p>
                                            </div>
                                            <div className="wrapper-input">
                                                <label htmlFor="confirmPassword">Repetir nueva contraseña*:</label>
                                                <div className="input-password reset-password">
                                                    <input 
                                                        type="password" 
                                                        id="confirmPassword" 
                                                        name="confirmPassword"
                                                        {...register('confirmPassword')}
                                                    />
                                                    <img className="eye-icon" src={iconEye} onClick={ () => handleRef('confirmPassword')}/>
                                                </div>
                                                <p className="error-input">{errors?.confirmPassword?.message}</p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="info-hr" />

                        <div className="info-container-buttons">
                            <div className="info-container-button-only">
                                <ButtonFilled color="pink" fxClick = { handleSubmit(submitForm) }>
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
