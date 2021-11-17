import React from 'react'
import { Row, Col} from 'react-bootstrap';


const RegistroStep3 = ({register , errors}) => {

    return (
        <>
        <h4 className="registro-title"> 3. Información bancaria</h4>
        <div className="registro-box-all-inputs">
            <Row>
                <Col md={6}>
                    <div className="registro-box-input mb-1">
                        <label htmlFor="titularCuenta">Titular de la cuenta*:</label>
                        <input 
                            type="text" 
                            id="titularCuenta" 
                            name="titularCuenta" 
                            {...register('titularCuenta')}
                        />
                        <p className="error-input">{errors?.titularCuenta?.message}</p>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="registro-box-input ">
                        <label htmlFor="entidadBancaria">Entidad bancaria*:</label>
                        <input 
                            type="text" 
                            id="entidadBancaria" 
                            name="entidadBancaria"
                            {...register('entidadBancaria')}
                        />
                        <p className="error-input">{errors?.entidadBancaria?.message}</p>
                    </div>
                </Col>
            </Row>
            
            <Row>
                <Col md={6}>
                    <div className="registro-box-input mt-0">
                        <label htmlFor="numeroCuentaSoles">Número de cuenta (En soles)*:</label>
                        <input 
                            type="text" 
                            id="numeroCuentaSoles" 
                            name="numeroCuentaSoles" 
                            {...register('numeroCuentaSoles')}
                        />
                        <p className="error-input">{errors?.numeroCuentaSoles?.message}</p>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="registro-box-input mt-0">
                        <label htmlFor="dniRucTitular">DNI o RUC del titular de la cuenta*:</label>
                        <input 
                        maxLength="11"
                            type="text" 
                            id="dniRucTitular" 
                            name="dniRucTitular"
                            {...register('dniRucTitular')}
                        />
                        <p className="error-input">{errors?.dniRucTitular?.message}</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="registro-box-input mt-0 mb-0 mq-mb-0">
                        <label htmlFor="cciCuenta">Código de cuenta interbancario (CCI)*:</label>
                        <input 
                        maxLength="20"
                            type="text" 
                            id="cciCuenta" 
                            name="cciCuenta"
                            {...register('cciCuenta')}
                        />
                        <p className="error-input">{errors?.cciCuenta?.message}</p>
                    </div>
                </Col>
            </Row>
        </div>
            
        </>
    )
}

export default RegistroStep3
