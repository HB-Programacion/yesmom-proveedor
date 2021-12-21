import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

import AppLayout from '../../../components/AppLayout/AppLayout';
import Description from '../../../components/Perfil/Description/Description';
import TitlePerfil from '../../../components/Perfil/TitlePerfil/TitlePerfil';

import back from '../../../images/perfil/back.svg';

import ButtonFilled from '../../../components/Button/ButtonFilled';
import Sidebar from '../../../components/Perfil/Sidebar/Sidebar';
import iconEye from '../../../images/perfil/icon-eye.svg';
import iconEyeBlue from '../../../images/registro/eye-blue.svg';

import './DesactivarCuenta.css';
import { useForm } from 'react-hook-form';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import clienteAxiosBusiness from '../../../config/axiosBusiness';
import { startDisablingSupplier } from '../../../redux/actions/supplier';

const schemaValidator = yup.object().shape({
    password : yup.string().required('*Este campo es requerido'),
})
const DesactivarCuenta = () => {


    const dispatch = useDispatch();
    const { register , handleSubmit , formState : { errors } } = useForm({
        resolver : yupResolver(schemaValidator)
    });


    const handleDesactivar = async ( values ) => {
        const MySwal = withReactContent(Swal);
        const { isConfirmed } = await MySwal.fire({
            title: <p className="desactivar-title-swal">¿Seguro que quieres desactivar tu cuenta?<br/>
                    Una vez desactivada no podrás activarla de nuevo</p>,
            // html:
            //     <>
            //         <form>
            //                 <div className="desactivar-box-checkbox">
            //                     <input type="checkbox" />
            //                     <label>Sí, acepto</label>
            //                 </div>
            //         </form>
            //     </>,
            showConfirmButton:true ,
            showCancelButton:true ,
            confirmButtonText:<p>Aceptar</p>,
            cancelButtonText:<p>Cancelar</p>,
        })    

        if(isConfirmed){

           dispatch( startDisablingSupplier(values))
        }

    }

    const handleRef = () => {
        const type = document.getElementById('password').type;
        type==='password' ?  document.getElementById('password').type = 'text':  document.getElementById('password').type='password';
    }

    return (
        <AppLayout>
            <div className="contenedor-info-perfil-registro animated fade-in">
                <div className="info-perfil-contenido">
                    <div className="info-all-content">
                        <div className="info-contenedor-flex">
                            <div className='flex-container-center center-text-description'>
                                <Description title="Desactivar cuenta" description="Aquí podrás desactivar tu cuenta si así lo deseas" />
                                <div className="info-container-content desactivar-container-content">
                                    <div className="registro-container-form desactivar-container-form mt-5">
                                        <p className="desactivar-cuenta">Para desactivar tu cuenta, debes ingresar tu contraseña.<br/> Si has olvidado tu contraseña puedes <span>crear una nueva</span> </p>
                                        <div className="wrapper-input change-password-wrapper-input mt-5">
                                            <label htmlFor="password" >Ingresa la contraseña actual*:</label>
                                            <div className="input-password reset-password">
                                                <input 
                                                    type="password" 
                                                    id="password" 
                                                    name="password"
                                                    {...register('password')}
                                                />
                                                <img className="registro-hide-desktop eye-icon" src={iconEye} onClick={ handleRef } />
                                                <img className="show-only-desktop eye-icon" src={iconEyeBlue} onClick={ handleRef } />
                                            </div>
                                            <p className="error-input">{errors?.password?.message}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="info-hr"/>
                        <div className="info-container-buttons">
                            <div className="info-container-button-only">
                                <ButtonFilled color="pink" fxClick={handleSubmit(handleDesactivar)}>
                                    Siguiente
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

export default DesactivarCuenta
