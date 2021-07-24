import React, { useState } from "react";
import { Link } from "react-router-dom";


import close from '../../images/header/close.svg';
import cesta from '../../images/header/cesta.svg';
import tienda from '../../images/header/tienda.svg';
import contacto from '../../images/header/contacto.svg';
import iniciarSesion from '../../images/header/iniciar-sesion.svg';
import loggedOptions from '../../images/header/logged-options.svg';

import './DropMenuMobile.css';
function DropMenuMobile({ active, setActive , logged}) {

  const [ expand , setExpand] = useState(false);
  return (
    <>
      <div className={`drop-menu ${active ? "" : "drop-menu-off"}`}>
        <div className="container-close">
          <div className="icon-close-sidebar" onClick={setActive}>
            <div className="container-image-icon">
              <img
                className="image-icon"
                src={close}
                alt="icon close menu"
              />
            </div>
          </div>
        </div>

        <div className="contenedor-items">
          <div className="container-options">

            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div>
                  <Link to="/" className="item-menu-yesmom">
                    <div className="container-image-icon">
                        <img
                          className="image-icon"
                          src={cesta}
                          alt="icon cesta menu"
                        />
                    </div>
                    <h6 className="text-navbar">¿Por qué Yes Mom?</h6>
                  </Link>
                </div>
              </li>

              <li className="list-group-item">
                <div>
                  <Link to="/" className="item-menu-yesmom">
                    <div className="container-image-icon">
                        <img
                          className="image-icon"
                          src={tienda}
                          alt="icon tienda menu"
                        />
                    </div>
                    <h6 className="text-navbar">¿Cómo vender?</h6>
                  </Link>
                </div>
              </li>

              <li className="list-group-item">
                <div>
                  <Link to="/" className="item-menu-yesmom">
                    <div className="container-image-icon">
                        <img
                            className="image-icon"
                            src={contacto}
                            alt="icon conctaco menu"
                        />
                    </div>
                    <h6 className="text-navbar">Contacto</h6>
                  </Link>
                </div>
              </li>

              <li className="list-group-item">
                <div>
                  <Link to="/" className="item-menu-yesmom">
                    <div className="container-image-icon">
                        <img
                          className="image-icon"
                          src={iniciarSesion}
                          alt="icon iniciar-sesion menu"
                        />
                    </div>
                      {logged ?
                        <div className="box-expand">
                          <div className="options-proveedor">
                            <h6 className="text-navbar">Baby Plaza</h6>
                            <div className="expand-options" onClick={()=>setExpand( expand => !expand)}>
                              <img src={loggedOptions} />
                            </div>

                          </div>
                        </div>

                      
                        :
                        <h6 className="text-navbar">Iniciar sesión</h6>
                       }
                       
                  </Link>
                    {expand && 
                      <div className="expanded-options">
                          <p>Registro</p>
                          <p>Productos</p>
                          <p>Cambiar de contraseña</p>
                          <p>Perfil de tienda</p>
                          <p>Términos y condiciones</p>
                          <p>Desactivar cuenta</p>
                          <p>Cerrar sesión</p>
                      </div>
                    }
                    
                </div>
              </li>

            </ul>

          </div>
        </div>
      </div>
    </>
  );
}

export default DropMenuMobile;
