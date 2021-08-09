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


const Registro = () => {

    const [selected,setSelected]= useState(0);
    

    const handleSelection = () => {
        setSelected( selected => {
            if(selected!==3){
                return selected+1;
            }
            return selected;
        } );
    }
    
    const handleSubmit = () => {
        const MySwal = withReactContent(Swal);
        MySwal.fire({
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
                                    {selected === 0 && <RegistroStep1 />}
                                    {selected === 1 && <RegistroStep2 />}
                                    {selected === 2 && <RegistroStep3 />}
                                    {selected === 3 && <RegistroStep4 />}

                                    <div className="hide-desktop">
                                        <ButtonFilled 
                                            color="yellow" 
                                            fxClick={selected===3 ? handleSubmit : handleSelection}
                                        >
                                            Continuar
                                        </ButtonFilled>                                    
                                    </div>
                                </form>
                                
                            </div>
                            <div className="show-desktop registro-container-button">
                                <ButtonFilled 
                                    color="yellow" 
                                    fxClick={selected===3 ? handleSubmit : handleSelection}
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
