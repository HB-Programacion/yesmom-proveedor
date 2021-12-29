import React from 'react'
import { Row,  Col } from 'react-bootstrap'

const RegistroStep4 = ({register , errors , customNumber = 1}) => {

    return (
        <>
            <h4 className="registro-title"> {customNumber}. Información del almacén</h4>
            <div className="registro-box-all-inputs">

                <Row>
                    <Col md={6}>
                        <div className="registro-box-input">
                            <label htmlFor="nombreEncargadoAlmacen">Nombre del encargado del almacén*:</label>
                            <input 
                                type="text" 
                                id="nombreEncargadoAlmacen" 
                                name="nombreEncargadoAlmacen" 
                                {...register('nombreEncargadoAlmacen')}
                            />
                            <p className="error-input">{errors?.nombreEncargadoAlmacen?.message}</p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="registro-box-input mt-25">
                            <label htmlFor="correoEncargadoAlmacen">Dirección de correo electrónico del encargado*:</label>
                            <input 
                                type="email" 
                                id="correoEncargadoAlmacen" 
                                name="correoEncargadoAlmacen"
                                {...register('correoEncargadoAlmacen')}
                            />
                            <p className="error-input">{errors?.correoEncargadoAlmacen?.message}</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <div className="registro-box-input mt-0">
                            <label htmlFor="telefonoAlmacen">Teléfono*:</label>
                            <input 
                                type="tel" 
                                id="telefonoAlmacen" 
                                name="telefonoAlmacen" 
                                {...register('telefonoAlmacen')}
                            />
                            <p className="error-input">{errors?.telefonoAlmacen?.message}</p>
                        </div>
                    </Col>
                    <Col md={6}>
                            <div className="registro-box-input mt-0">
                                <label htmlFor="direccionAlmacen">Dirección del almacén*:</label>
                                <input 
                                    type="text" 
                                    id="direccionAlmacen" 
                                    name="direccionAlmacen"
                                    {...register('direccionAlmacen')}
                                />
                                <p className="error-input">{errors?.direccionAlmacen?.message}</p>
                            </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <div className="registro-box-input mt-0 mq-mb-0">
                            <label htmlFor="referenciaAlmacen">Referencia de la dirección*:</label>
                            <input 
                                type="text" 
                                id="referenciaAlmacen" 
                                name="referenciaAlmacen"
                                {...register('referenciaAlmacen')}
                            />
                            <p className="error-input">{errors?.referenciaAlmacen?.message}</p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="registro-box-input mt-0 mb-0 mq-mb-0">
                            <label htmlFor="ciudadAlmacen">Ciudad*:</label>
                            <input 
                                type="text" 
                                id="ciudadAlmacen" 
                                name="ciudadAlmacen"
                                {...register('ciudadAlmacen')}
                            />
                            <p className="error-input">{errors?.ciudadAlmacen?.message}</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default RegistroStep4
