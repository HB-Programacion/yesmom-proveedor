import React from 'react';

import { Row, Col} from 'react-bootstrap'

const RegistroStep2 = () => {
    return (
        <>
           <h4 className="registro-title"> 2. Información de la empresa</h4>
            <div className="registro-box-all-inputs">
                <div className="row">
                    <div className="col-md-6 registro-box-input">
                        <label htmlFor="nameRepresentante">Nombre completo del representante legal*:</label>
                        <input type="text" id="nameRepresentante" name="nameRepresentante" />
                    </div>
                    <div className="col-md-6 registro-box-input mq-mt-2">
                        <label htmlFor="documentoRepresentate">Documento de identidad del representante legal*:</label>
                        <input type="number" id="documentoRepresentate" name="documentoRepresentate"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 registro-box-input mt-0">
                        <label htmlFor="razon">Razón social*:</label>
                        <input type="number" id="razon" name="razon"/>
                    </div>
                    <div className="col-md-6 registro-box-input">
                        <label htmlFor="ruc">RUC*:</label>
                        <input type="number" id="ruc" name="ruc" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 registro-box-input mt-0">
                        <label htmlFor="phoneEmpresa">Teléfono de la empresa*:</label>
                        <input type="tel" id="phoneEmpresa" name="phoneEmpresa"/>
                    </div>
                    <div className="col-md-6 registro-box-input">
                        <label htmlFor="pais">Pais*:</label>
                        <input type="text" id="pais" name="pais" />
                    </div>
                </div>

                <Row>
                    <Col md={6}>
                        <div className="registro-box-input mt-0">
                            <label htmlFor="ciudad">Ciudad*:</label>
                            <input type="text" id="ciudad" name="ciudad" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="registro-box-input mt-0">
                            <label htmlFor="distrito">Distrito*:</label>
                            <input type="text" id="distrito" name="distrito" />
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <div className="registro-box-input mt-0">
                            <label htmlFor="direccion">Dirección*:</label>
                            <input type="text" id="direccion" name="direccion" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="registro-box-input mt-0">
                            <label htmlFor="pagina">Página web*:</label>
                            <input type="text" id="pagina" name="pagina" />
                        </div>
                    </Col>
                </Row>

            </div> 
        </>
    )
}

export default RegistroStep2
