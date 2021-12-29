import React from 'react'
import AppLayout from '../../../components/AppLayout/AppLayout';
import Description from '../../../components/Perfil/Description/Description';
import TitlePerfil from '../../../components/Perfil/TitlePerfil/TitlePerfil';

import iconEditar from '../../../images/header/icon-edit.svg';

import ButtonFilled from '../../../components/Button/ButtonFilled';
import Sidebar from '../../../components/Perfil/Sidebar/Sidebar';



import './Terminos.css';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import BackComponent from '../../../components/Return/BackComponent';


const schemaValidator = yup.object().shape({
    terminos : yup.string().required('*Este campo es requerido').max(1200,'*Máximo 1200 caracteres permitidos')
})
const Terminos = () => {

    const { register , handleSubmit , formState : { errors }} = useForm({
        resolver : yupResolver(schemaValidator)
    });

    const submitForm = () => {
        alert('Test terminos guardados')
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
                                <Description title="Términos y condiciones" description="Aquí podrás llenar los términos y condiciones de tu tienda" />
                                <div className="info-container-content terminos-container-content">
                                    <div className="registro-container-form terminos-container-form mt-5">
                                        <div className="info-icon-editar">
                                            <img src={iconEditar} />
                                        </div>
                                        <div className="flex-terminos">
                                            <label htmlFor="terminos">
                                                <h4 className="registro-title op-8 mb-4">Agregar términos y condiciones</h4>
                                            </label>
                                            <div className="w-100">
                                                <textarea
                                                    id="terminos"
                                                    name="terminos"
                                                    placeholder="Escriba aquí los terminos y condiciones generales de la tienda para el comprador..."
                                                    className="w-100 terminos-text-area" 
                                                    {...register('terminos')}
                                                />
                                                <p className="error-input">{errors?.terminos?.message}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="info-hr"/>
                        <div className="info-container-buttons">
                            <div className="info-container-button-only">
                                <ButtonFilled color="pink" fxClick={ handleSubmit (submitForm )}>
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

export default Terminos
