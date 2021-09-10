import React from 'react'
import { useState } from 'react';
import { Col,Row } from 'react-bootstrap';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import AppLayout from '../../components/AppLayout/AppLayout'
import ButtonFilled from '../../components/Button/ButtonFilled';
import Stepper from '../../components/Registro/Stepper';

import RegistroStep1 from './RegistroStep1';
import RegistroStep2 from './RegistroStep2';
import RegistroStep3 from './RegistroStep3';
import RegistroStep4 from './RegistroStep4';
import './Registro.css';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

//Some regex
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const dniRegExp = /^\d{8}(?:[-\s]\d{4})?$/;
const urlRegExp = /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/

//Schema global
const schemaValidator = yup.object().shape({
    //Registro 1
    nombreCompletoEncargado : yup.string().required('*Este campo es requerido'),
    telefono: yup.string().required('*Este campo es requerido').matches(phoneRegExp, '*Teléfono incorrecto'),
    nombreTienda : yup.string().required('*Este campo es requerido'),
    correoElectronico : yup.string().email('*Correo electrónico inválido').required('*Este campo es requerido'),
    contrasenia : yup.string().required('*Este campo es requerido').min(5,'*La contraseña debe tener como mínimo 5 caracteres'),
})

const schemaValidatorStep2 = yup.object().shape({
    //Registro 2
    nombreCompletoRepresentante: yup.string().required('*Este campo es requerido'),
    documentoRepresentante: yup.string().required('*Este campo es requerido').matches(dniRegExp,' *DNI incorrecto'),
    razonSocial : yup.string().required('*Este campo es requerido'),
    ruc : yup.string().required('Este campo es requerido').matches(/^[0-9]+$/,'*RUC incorrecto')
            .min(11, '*Deben ser exactamente 11 digitos')
            .max(11, 'Deben ser exactamente 11 digitos'),
    telefonoEmpresa: yup.string().required('*Este campo es requerido').matches(phoneRegExp, '*Teléfono incorrecto'),
    pais: yup.string().required('*Este campo es requerido'),
    ciudad: yup.string().required('*Este campo es requerido'),
    distrito: yup.string().required('*Este campo es requerido'),
    direccion: yup.string().required('*Este campo es requerido'),
    paginaWeb: yup.string().required('*Este campo es requerido').matches(urlRegExp,'*Pagina web incorrecta'),
})

const schemaValidatorStep3 = yup.object().shape({
    //Registro 3
    titularCuenta : yup.string().required('*Este campo es requerido'),
    entidadBancaria: yup.string().required('*Este campo es requerido'),
    numeroCuentaSoles: yup.string().required('*Este campo es requerido')
            .matches(/^[0-9]+$/, "*Solo ingresa digitos"),
    dniRucTitular: yup.string().required('*Este campo es requerido').matches(dniRegExp,' *DNI incorrecto'),
    cciCuenta: yup.string().required('*Este campo es requerido')
                .matches(/^[0-9]+$/, "*Solo ingresa digitos")
                .min(20, '*Deben ser exactamente 20 digitos')
                .max(20, 'Deben ser exactamente 20 digitos'),
})

const schemaValidatorStep4 = yup.object().shape({
    //Registro 4
    nombreEncargadoAlmacen : yup.string().required('*Este campo es requerido'),
    correoEncargadoAlmacen : yup.string().email('*Correo electrónico inválido').required('*Este campo es requerido'),
    telefonoAlmacen : yup.string().required('*Este campo es requerido').matches(phoneRegExp, '*Teléfono incorrecto'),
    direccionAlmacen : yup.string().required('*Este campo es requerido'),
    referenciaAlmacen : yup.string().required('*Este campo es requerido'),
    ciudadAlmacen : yup.string().required('*Este campo es requerido'),
})

const Registro = () => {

    //Primer form
    const { register , handleSubmit , formState:{errors} } = useForm({
        resolver : yupResolver(schemaValidator)
    });
    //Segundo form
    const { register: register_2 , handleSubmit : handleSubmit_2 , formState: formState_2 } = useForm({
        resolver : yupResolver(schemaValidatorStep2)
    });
    //Tercer form
    const { register: register_3 , handleSubmit : handleSubmit_3 , formState: formState_3 } = useForm({
        resolver : yupResolver(schemaValidatorStep3)
    });
    //Cuarto form
    const { register: register_4 , handleSubmit : handleSubmit_4 , formState: formState_4 } = useForm({
        resolver : yupResolver(schemaValidatorStep4)
    });

    const [ infoPersona , setInfoPersona] = useState({});
    const [selected,setSelected]= useState(0);
    

    const handleSelection = async (data) => {
        setInfoPersona({
            ...infoPersona,
            ...data
        })
        //Si es el ultimo paso enviar el form
        if(selected === 3){
            //Asegurarse que no hay errores
            if( 
                Object.keys(errors).length === 0 &&
                Object.keys(formState_2.errors).length === 0 &&
                Object.keys(formState_3.errors).length === 0 &&
                Object.keys(formState_4.errors).length === 0 
            ){
                const { isConfirmed } = await submitForm();
                if(isConfirmed){
                    alert("DATOS OK Y ACEPTÓ");
                    console.log("Los datos son : 26",infoPersona);
                }else{
                    alert("DATOS OK PERO NO ACEPTÓ")
                }
            }
        }else{
            setSelected( selected => {
                if(selected!==3){
                    return selected+1;
                }
                return selected;
            } );
        }
    }
    
    const submitForm = async() => {
        const MySwal = withReactContent(Swal);
        const resp = await MySwal.fire({
            title: <p className="registro-title-swal">Términos y condiciones</p>,
            html:
                <>
                    <form>
                        <Row>
                            <Col md={6} >
                                <div className="registro-box-checkbox">
                                    <input type="checkbox" />
                                    <label>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        A mattis nisi, vitae amet, eleifend etiam dolor. 
                                        Quisque quam amet neque at maecenas ornare sagittis sed.</label>
                                </div>
                                <div className="registro-box-checkbox">
                                    <input type="checkbox" />
                                    <label>Lorem ipsum dolor sit amet,<br/> consectetur.</label>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="registro-box-checkbox">
                                    <input type="checkbox" />
                                    <label>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        A mattis nisi, vitae amet, eleifend etiam dolor. 
                                        Quisque quam amet neque at maecenas ornare sagittis sed.</label>
                                </div>

                                <div className="registro-box-checkbox">
                                    <input type="checkbox" />
                                    <label>Lorem ipsum dolor sit amet,<br/> consectetur.</label>
                                </div>
                            </Col>
                        </Row>
                    </form>
                    <div className="registro-politics">
                        <p className="to-politics">Ver comisiones y políticas de pago</p>
                    </div>
                </>,
            showConfirmButton:true ,
            confirmButtonText:<p>Aceptar</p>,
          })
        return resp;
    }

    return (
        <AppLayout>
                <div className="contenedor-registro">
                    <div className="registro-container-contenido">
                        <div className="registro-all-content">
                            <p className="title-rosa">Formulario de registro</p>

                            <div className="registro-container-stepper">
                                <Stepper selected={selected} setSelected={setSelected}/>
                            </div>

                            <div className="registro-container-form">
                                <form>
                                    {selected === 0 && 
                                        <RegistroStep1 
                                            register = { register }
                                            errors = { errors }
                                        />
                                    }
                                    {selected === 1 && 
                                        <RegistroStep2 
                                            register = { register_2 }
                                            errors = { formState_2.errors }
                                        />
                                    }
                                    {selected === 2 && 
                                        <RegistroStep3 
                                            register = { register_3 }
                                            errors = { formState_3.errors }
                                        />
                                    }
                                    {selected === 3 && 
                                        <RegistroStep4 
                                            register ={ register_4 }
                                            errors = { formState_4.errors }
                                        />
                                    }

                                    <div className="registro-hide-desktop">
                                        <ButtonFilled 
                                            color="yellow" 
                                            fxClick={
                                                selected === 0 && handleSubmit(handleSelection)   ||   
                                                selected === 1 && handleSubmit_2(handleSelection)   ||
                                                selected === 2 && handleSubmit_3(handleSelection)   ||
                                                selected === 3 && handleSubmit_4(handleSelection)   
                                            }
                                        >
                                            Continuar
                                        </ButtonFilled>                                    
                                    </div>
                                </form>
                                
                            </div>
                            <div className="registro-show-desktop registro-container-button">
                                <ButtonFilled 
                                    color="yellow" 
                                    fxClick={
                                        selected === 0 && handleSubmit(handleSelection)   ||   
                                        selected === 1 && handleSubmit_2(handleSelection)   ||
                                        selected === 2 && handleSubmit_3(handleSelection)   ||
                                        selected === 3 && handleSubmit_4(handleSelection)   
                                    }
                                >
                                    Continuar
                                </ButtonFilled>  
                            </div>
                        </div>
                    </div>
                </div>
        </AppLayout>
    )
}

export default Registro
