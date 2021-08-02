import React from 'react'
import { Row, Col} from 'react-bootstrap';
const RegistroStep3 = () => {
    return (
        <>
        <h4 className="registro-title"> 3. Información bancaria</h4>
        <div className="registro-box-all-inputs">
            <Row>
                <Col md={6}>
                    <div className="registro-box-input mb-1">
                        <label htmlFor="titular">Titular de la cuenta*:</label>
                        <input type="text" id="titular" name="titular" />
                    </div>
                </Col>
                <Col md={6}>
                    <div className="registro-box-input ">
                        <label htmlFor="banco">Entidad bancaria*:</label>
                        <input type="text" id="banco" name="banco"/>
                    </div>
                </Col>
            </Row>
            
            <Row>
                <Col md={6}>
                    <div className="registro-box-input mt-0">
                        <label htmlFor="cuenta">Número de cuenta (En soles)*:</label>
                        <input type="number" id="cuenta" name="cuenta" />
                    </div>
                </Col>
                <Col md={6}>
                    <div className="registro-box-input mt-0">
                        <label htmlFor="idTitular">DNI o RUC del titular de la cuenta*:</label>
                        <input type="number" id="idTitular" name="idTitular"/>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="registro-box-input mt-0 mq-mb-0">
                        <label htmlFor="cuentaInterbancaria">Código de cuenta interbancario (CCI)*:</label>
                        <input type="number" id="cuentaInterbancaria" name="cuentaInterbancaria"/>
                    </div>
                </Col>
            </Row>
        </div>
            
        </>
    )
}

export default RegistroStep3
