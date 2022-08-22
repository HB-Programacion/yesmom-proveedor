import React from 'react'
import { useState } from 'react';
import { Col,Row } from 'react-bootstrap';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import AppLayout from '../../components/AppLayout/AppLayout'
import ButtonFilled from '../../components/Button/ButtonFilled';
import Stepper from '../../components/Registro/Stepper';

import RegistroStep1 from '../../components/Registro/RegistroSteps/RegistroStep1';
import RegistroStep2 from '../../components/Registro/RegistroSteps/RegistroStep2';
import RegistroStep3 from '../../components/Registro/RegistroSteps/RegistroStep3';
import RegistroStep4 from '../../components/Registro/RegistroSteps/RegistroStep4';

import './Registro.css';

import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import clienteAxiosBusiness from '../../config/axiosBusiness';
import { 
    schemaValidator, 
    schemaValidatorStep2,
    schemaValidatorStep3,
    schemaValidatorStep4,
} from '../../utils/validateRegistro/ValidationSchemas';


const Registro = () => {

    const navigate = useNavigate();
    //Primer form
    const { register , handleSubmit , formState:{errors} , reset  } = useForm({
        resolver : yupResolver(schemaValidator)
    });
    //Segundo form
    const { register: register_2 , handleSubmit : handleSubmit_2 , formState: formState_2 , reset : reset_2 } = useForm({
        resolver : yupResolver(schemaValidatorStep2)
    });
    //Tercer form
    const { register: register_3 , handleSubmit : handleSubmit_3 , formState: formState_3 , reset : reset_3} = useForm({
        resolver : yupResolver(schemaValidatorStep3)
    });
    //Cuarto form
    const { register: register_4 , handleSubmit : handleSubmit_4 , formState: formState_4 , reset : reset_4} = useForm({
        resolver : yupResolver(schemaValidatorStep4)
    });

    const [ infoPersona , setInfoPersona] = useState({});
    const [selected,setSelected]= useState(0);
    

    const handleSelection = async (data) => {
        // console.log(data);

        const payload = {
            ...infoPersona,
            ...data
        }
        setInfoPersona(payload);
        //Si es el ultimo paso enviar el form
        if(selected === 3){
            //Asegurarse que no hay errores
            if( 
                (Object.keys(errors).length === 0) &&
                (Object.keys(formState_2.errors).length === 0) &&
                (Object.keys(formState_3.errors).length === 0) && 
                (Object.keys(formState_4.errors).length === 0)
            ){
                const { isConfirmed } = await submitForm();
                if(isConfirmed){
                    // alert("DATOS OK Y ACEPTÓ");
                    // console.log("Los datos son : 26",infoPersona);
                    try{
                        Swal.fire({
                            title : "Registrando datos...",
                            text : "Espera un momento....",
                            allowOutsideClick : false,
                            didOpen: () => {
                                Swal.showLoading();
                            }
                        })
                        const response = await clienteAxiosBusiness.post('/supplier',payload);
                        Swal.close();
                        // console.log(infoPersona);
                        const { data } = response;

                        if(data?.response?.ok){
                            reset();
                            reset_2();
                            reset_3();
                            reset_4();
                            setSelected(0);
                            Swal.fire('Solicitud enviada', 'La solicitud de proveedor ha sido enviada' , 'success');
                            if(window){
                                setTimeout(()=>{
                                    navigate('/login');
                                },[1000])
                            }
                            // alert("Proveedor guardado satisfactoriamente")
                        }else if(data.CodigoRespuesta === "31"){
                            Swal.fire('El usuario ya existe', 'Ingrese otro correo electrónico','info')
                        }
                        else{
                            Swal.fire('Campos incorrectos','Revisa que los campos esten correctamente completados','info')
                        }
                    }catch(e){
                        Swal.fire('Error', 'Hubo un error' , 'error');
                        // alert(e.message);
                    }
                }else{
                    // alert("DATOS OK PERO NO ACEPTÓ")
                }
            }
        }else{
            setSelected( selected => {
                if(selected!==3){
                    return selected+1;
                }
                return selected;
            } );

            window.scrollTo(0,0);
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
                            {/* <Col md={6} >
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
                            </Col> */}
                            <Col sm={12}>
                                <div className="registro-box-checkbox">
                                    <input type="checkbox" />
                                    <label>Autorizas a YES MOM para que utilice la información que proporciones en este formulario.</label>
                                </div>

                                {/* <div className="registro-box-checkbox">
                                    <input type="checkbox" />
                                    <label>Lorem ipsum dolor sit amet,<br/> consectetur.</label>
                                </div> */}
                            </Col>
                        </Row>
                    </form>
                    {/* <div className="registro-politics">
                        <p className="to-politics">Ver comisiones y políticas de pago</p>
                    </div> */}
                </>,
            showConfirmButton:true ,
            confirmButtonText:<p>Enviar solicitud</p>,
          })
        return resp;
    }

    const handleRef = () => {
        const type = document.getElementById('contrasenia').type;

        type==='password' ?  document.getElementById('contrasenia').type = 'text':  document.getElementById('contrasenia').type='password';
    }

    return (
        <AppLayout>
                <div className="contenedor-registro animated fade-in">
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
                                            showPassword = { handleRef }
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
                                            customNumber={4}
                                            register ={ register_4 }
                                            errors = { formState_4.errors }
                                        />
                                    }

                                    <div className="registro-hide-desktop">
                                        <ButtonFilled 
                                            color="yellow" 
                                            fxClick={
                                                (selected === 0 && handleSubmit(handleSelection) )   ||   
                                                (selected === 1 && handleSubmit_2(handleSelection) )   ||
                                                (selected === 2 && handleSubmit_3(handleSelection)  ) || 
                                                (selected === 3 && handleSubmit_4(handleSelection)  )
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
                                        (selected === 0 && handleSubmit(handleSelection) )  ||   
                                        (selected === 1 && handleSubmit_2(handleSelection))   ||
                                        (selected === 2 && handleSubmit_3(handleSelection))  ||
                                        (selected === 3 && handleSubmit_4(handleSelection))
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
