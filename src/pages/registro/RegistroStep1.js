import React from 'react'
import eyeIcon from '../../images/registro/eye.svg';
import { Col , Row} from 'react-bootstrap';

const RegistroStep1 = ({register , errors}) => {
    
    //Registrar inputs
    return (
        <>
            <h4 className="registro-title">1. Información del admistrador de la cuenta</h4>
            <div className="registro-box-all-inputs">
                <Row>
                    <Col>
                        <div className="registro-box-input">
                            <label htmlFor="nombreCompletoEncargado">Nombre completo del encargado de la cuenta*:</label>
                            <input 
                                type="text" 
                                id="nombreCompletoEncargado" 
                                name="nombreCompletoEncargado"
                                {...register('nombreCompletoEncargado')}
                            />
                            <p className="error-input">{errors?.nombreCompletoEncargado?.message}</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <div className="registro-box-input mt-0">
                            <label htmlFor="telefono">Teléfono*:</label>
                            <input 
                                type="tel" 
                                id="telefono" 
                                name="telefono"
                                {...register('telefono')}
                            />
                            <p className="error-input">{errors?.telefono?.message}</p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="registro-box-input mt-0">
                            <label htmlFor="nombreTienda">Nombre de la tienda*:</label>
                            <input 
                                type="text" 
                                id="nombreTienda" 
                                name="nombreTienda" 
                                {...register('nombreTienda')}
                            />
                            <p className="error-input">{errors?.nombreTienda?.message}</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <div className="registro-box-input mt-0 mq-mb-0">
                            <label htmlFor="correoElectronico">Dirección de correo electrónico*:</label>
                            <input 
                                type="email" 
                                id="correoElectronico" 
                                name="correoElectronico"
                                {...register('correoElectronico')}
                            />
                            <p className="error-input">{errors?.correoElectronico?.message}</p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="registro-box-input mt-0 mb-0 mq-mb-0">
                            <label htmlFor="contrasenia">Contraseña*:</label>
                            <div className="registro-input-password">
                                <img src={eyeIcon} />
                                <input 
                                    type="password" 
                                    id="contrasenia" 
                                    name="contrasenia"
                                    {...register('contrasenia')}
                                />
                                <p className="error-input">{errors?.contrasenia?.message}</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                    
            </div>
        </>
    )
}

export default RegistroStep1
