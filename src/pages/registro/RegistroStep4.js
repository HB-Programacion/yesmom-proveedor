import React from 'react'
import { Row,  Col } from 'react-bootstrap'

const RegistroStep4 = () => {
    return (
        <>
            <h4 className="registro-title"> 4. Información del almacén</h4>
            <div className="registro-box-all-inputs">

                <Row>
                    <Col md={6}>
                        <div className="registro-box-input">
                            <label htmlFor="name">Nombre del encargado del almacén*:</label>
                            <input type="text" id="name" name="name" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="registro-box-input">
                            <label htmlFor="emailEncargado">Dirección de correo electrónico del encargado*:</label>
                            <input type="email" id="emailEncargado" name="emailEncargado"/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <div className="registro-box-input mq-mt-0">
                            <label htmlFor="telefono">Teléfono*:</label>
                            <input type="tel" id="telefono" name="telefono" />
                        </div>
                    </Col>
                    <Col md={6}>
                            <div className="registro-box-input mq-mt-0">
                                <label htmlFor="direccion">Dirección del almacén*:</label>
                                <input type="email" id="direccion" name="direccion"/>
                            </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <div className="registro-box-input mq-mt-0">
                            <label htmlFor="refeDir">Referencia de la dirección*:</label>
                            <input type="text" id="refeDir" name="refeDir"/>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="registro-box-input mq-mt-0">
                            <label htmlFor="ciudad">Ciudad*:</label>
                            <input type="text" id="ciudad" name="ciudad"/>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default RegistroStep4
