import React from 'react'
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import withReactContent from 'sweetalert2-react-content';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Swal from 'sweetalert2';


import AppLayout from '../../../components/AppLayout/AppLayout';
import ButtonFilled from '../../../components/Button/ButtonFilled';
import Description from '../../../components/Perfil/Description/Description';
import Sidebar from '../../../components/Perfil/Sidebar/Sidebar';
import TitlePerfil from '../../../components/Perfil/TitlePerfil/TitlePerfil';
import BackComponent from '../../../components/Return/BackComponent';

import iconEye from '../../../images/perfil/icon-eye.svg';

import './EliminarTienda.css';

import { startDisablingStore } from '../../../redux/actions/supplier';


const schemaValidator = yup.object().shape({
    password : yup.string().required('*Este campo es requerido').min('5','*Contraseña muy corta'),
})


const EliminarTienda = () => {


    const dispatch = useDispatch();
    const { register , handleSubmit , formState : { errors }  } = useForm({
        resolver : yupResolver(schemaValidator),
    })

    const handleRef = (id) => {
        const type = document.getElementById(id).type;
    
        type === "password" ? document.getElementById(id).type="text" : document.getElementById(id).type="password"
    }

    const submitForm = async (values) => {
        const MySwal = withReactContent(Swal);
        const { isConfirmed } = await MySwal.fire({
            title: <p className="desactivar-title-swal">¿Seguro que quieres desactivar tu tienda?<br/>
                    Una vez desactivada no podrás activarla de nuevo</p>,
            showConfirmButton:true ,
            showCancelButton:true ,
            confirmButtonText:<p>Aceptar</p>,
            cancelButtonText:<p>Cancelar</p>,
        }) 

        if(isConfirmed){  
            dispatch(startDisablingStore( values.password ));
        }
    }
    return (
        <AppLayout>
            <div className='contenedor-info-perfil-registro animated fade-in'>
                <div className="info-perfil-contenido">
                    <div className="info-all-content">
                        <div className="info-contenedor-flex">
                            <div className="hide-desktop info-container-back">
                                <div className="back-component-container">
                                    <BackComponent />
                                </div>
                            </div>
                            <div className="flex-left">
                                <div className="info-container-title">
                                    <TitlePerfil />
                                </div>
                                <Sidebar />
                            </div>
                            <div className='flex-right'>
                                <Description title="Eliminar tienda" description="Aquí podrás eliminar tu tienda si asi lo deseas" />
                                <div className='info-container-content eliminar_store-container-content'>
                                    <div className='registro-container-form info-container-form mt-5 mb-2 pb-5'>
                                        <p className='text_eliminar-store'>Para eliminar tu tienda, debes ingresar tu contraseña.</p>
                                        <div className="wrapper-input change-password-wrapper-input mt-2">
                                            <label htmlFor="password" >Ingresa la contraseña actual*:</label>
                                            <div className="input-password reset-password">
                                                <input 
                                                    type="password" 
                                                    id="password" 
                                                    name="password"
                                                    {...register('password')}
                                                />
                                                <img className="eye-icon" src={iconEye} alt="icon-eye" onClick={ () => handleRef('password')}/>
                                            </div>
                                            <p className="error-input">{errors?.password?.message}</p>
                                        </div>
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

export default EliminarTienda
