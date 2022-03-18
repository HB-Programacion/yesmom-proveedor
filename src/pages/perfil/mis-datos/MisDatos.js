import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import AppLayout from '../../../components/AppLayout/AppLayout'
import ButtonFilled from '../../../components/Button/ButtonFilled'
import Loading from '../../../components/Loading/Loading'
import Description from '../../../components/Perfil/Description/Description'
import RegistroStep1 from '../../../components/Registro/RegistroSteps/RegistroStep1'
import RegistroStep2 from '../../../components/Registro/RegistroSteps/RegistroStep2'
import RegistroStep3 from '../../../components/Registro/RegistroSteps/RegistroStep3'
import { startLoadingInfoSupplier, startUpdatingInfoSupplier } from '../../../redux/actions/supplier'
import { mergedSchemaWithoutPassword } from '../../../utils/validateRegistro/ValidationSchemas'

import './MisDatos.css';

const MisDatos = () => {

    const navigate = useNavigate();
    const { loading } = useSelector( state => state.ui);
    const supplier = useSelector( state => state.supplier);
    const dispatch = useDispatch();
    //Primer form
    const { register , handleSubmit , formState:{errors} , reset  } = useForm({
        resolver : yupResolver(mergedSchemaWithoutPassword)
    });

    
    useEffect(()=>{
        dispatch( startLoadingInfoSupplier());
    },[dispatch])

    useEffect(()=>{
        if(Object.keys(supplier).length > 0 ){
           reset(supplier);
        }
    },[supplier , reset])

    const submitForm = ( values ) => {
        
        dispatch( startUpdatingInfoSupplier(values));
    }
    return (
        <AppLayout>
            { loading && <Loading />}
            <div className='contenedor-info-perfil-registro animated fade-in'>
                <div className='info-perfil-contenido'>
                    <div className='info-all-content'>
                        <div className='info-contenedor-flex'>
                            <div className='flex-container-center center-text-description'>
                                <Description title="Mis datos" description="Aquí encontrarás los datos de la empresa" />
                                <div className='info-container-content mis-datos-container-content'>
                                    <div className='registro-container-form mis-datos-form'>
                                        <RegistroStep1 
                                            register={ register}
                                            errors={ errors }
                                            edited={ true }
                                        />
                                    </div>
                                    <div className='registro-container-form mis-datos-form'>
                                        <RegistroStep2 
                                            register={ register}
                                            errors={ errors }
                                        />
                                    </div>
                                    <div className='registro-container-form mis-datos-form'>
                                        <RegistroStep3 
                                            register={ register}
                                            errors={ errors }
                                        />
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
                                <ButtonFilled color="outline-pink" fxClick={ () => navigate('/p/info/registro',{ replace : true}) }>
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

export default MisDatos
