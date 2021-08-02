import React from 'react'
import eyeIcon from '../../images/registro/eye.svg';
const RegistroStep1 = () => {
    return (
        <>
            <h4 className="registro-title">1. Información del admistrador de la cuenta</h4>
            <div className="registro-box-all-inputs">
                <div className="registro-box-input">
                    <label htmlFor="name">Nombre completo del encargado de la cuenta*:</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div className="row">
                    <div className="col-md-6 registro-box-input mt-0">
                        <label htmlFor="phone">Teléfono*:</label>
                        <input type="tel" id="phone" name="phone"/>
                    </div>
                    <div className="col-md-6 registro-box-input">
                        <label htmlFor="nombreTienda">Nombre de la tienda*:</label>
                        <input type="text" id="nombreTienda" name="nombreTienda" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 registro-box-input mt-0">
                        <label htmlFor="email">Dirección de correo electrónico*:</label>
                        <input type="email" id="email" name="email"/>
                    </div>
                    <div className="col-md-6 registro-box-input">
                        <label htmlFor="password">Contraseña*:</label>
                        <div className="registro-input-password">
                            <img src={eyeIcon} />
                            <input type="password" id="password" name="password"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegistroStep1
