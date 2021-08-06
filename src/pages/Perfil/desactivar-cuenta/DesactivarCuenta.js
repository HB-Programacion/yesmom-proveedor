import React from 'react'
import { Link } from 'react-router-dom';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

import AppLayout from '../../../components/AppLayout/AppLayout';
import Description from '../../../components/Perfil/Description/Description';
import TitlePerfil from '../../../components/Perfil/TitlePerfil/TitlePerfil';

import back from '../../../images/perfil/back.svg';

import ButtonFilled from '../../../components/Button/ButtonFilled';
import Sidebar from '../../../components/Perfil/Sidebar/Sidebar';
import iconEye from '../../../images/perfil/icon-eye.svg';

import './DesactivarCuenta.css';

const DesactivarCuenta = () => {


    const handleDesactivar = () => {
        const MySwal = withReactContent(Swal);
        <div className="desactivar">
            {
                MySwal.fire({
                    title: <p className="desactivar-title-swal">¿Seguro que quieres desactivar tu cuenta?<br/>
                            Una vez desactivada no podrás activarla de nuevo</p>,
                    html:
                        <>
                            <form>
                                    <div className="desactivar-box-checkbox">
                                        <input type="checkbox" />
                                        <label>Sí, acepto</label>
                                    </div>
                            </form>
                        </>,
                    showConfirmButton:true ,
                    showCancelButton:true ,
                    confirmButtonText:<p>Aceptar</p>,
                    cancelButtonText:<p>Cancelar</p>,
                })     
              }
        </div>
    }



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
                                <Description title="Desactivar cuenta" description="Aquí podrás desactivar tu cuenta si así lo deseas" />
                                <div className="info-container-content desactivar-container-content">
                                    <div className="registro-container-form desactivar-container-form mt-5">
                                        <p className="desactivar-cuenta">Para desactivar tu cuenta, debes ingresar tu contraseña.<br/> Si has olvidado tu contraseña puedes <span>crear una nueva</span> </p>
                                        <div className="wrapper-input change-password-wrapper-input mt-5">
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
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="info-hr"/>
                        <div className="info-container-buttons">
                            <div className="info-container-button-only">
                                <ButtonFilled color="pink" fxClick={handleDesactivar}>
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
