import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";


import close from '../../images/header/close.svg';
import cesta from '../../images/header/cesta.svg';
import tienda from '../../images/header/tienda.svg';
import contacto from '../../images/header/contacto.svg';
import iniciarSesion from '../../images/header/iniciar-sesion.svg';
import loggedOptions from '../../images/header/logged-options.svg';

import './DropMenuMobile.css';
function DropMenuMobile({ active, setActive , logged}) {

  const { pathname } = useLocation();
  const [ expand , setExpand] = useState(false);

  const pushLinks=[
    { name : "Registro" , to : "/informacion-perfil/registro" , active:"/informacion-perfil/registro"},
    { name : "Productos" , to : "/" , active:"/"},
    { name : "Cambiar contraseña" , to : "/informacion-perfil/cambiar-password" , active:"/informacion-perfil/cambiar-password"},
    { name : "Perfil de tienda" , to : "/informacion-perfil/perfil-tienda" , active:"/informacion-perfil/perfil-tienda"},
    { name : "Términos y condiciones" , to : "/informacion-perfil/terminos" , active:"/informacion-perfil/terminos"},
    { name : "Desactivar cuenta" , to : "/informacion-perfil/desactivar-cuenta" , active:"/informacion-perfil/desactivar-cuenta"},
]

  const sections = {
    porqueVender : "porque-vender-yesmom",
    comoVender : "como-vender",
    contacto :"contacto",
  }

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
                  <a href={`/#${sections.porqueVender}`} className="item-menu-yesmom">
                    <div className="container-image-icon">
                        <img
                          className="image-icon"
                          src={cesta}
                          alt="icon cesta menu"
                        />
                    </div>
                    <h6 className="text-navbar">¿Por qué Yes Mom?</h6>
                  </a>
                </div>
              </li>

              <li className="list-group-item">
                <div>
                  <a href={`/#${sections.comoVender}`} className="item-menu-yesmom">
                    <div className="container-image-icon">
                        <img
                          className="image-icon"
                          src={tienda}
                          alt="icon tienda menu"
                        />
                    </div>
                    <h6 className="text-navbar">¿Cómo vender?</h6>
                  </a>
                </div>
              </li>

              <li className="list-group-item">
                <div>
                  <a href={`/#${sections.contacto}`} className="item-menu-yesmom">
                    <div className="container-image-icon">
                        <img
                            className="image-icon"
                            src={contacto}
                            alt="icon conctaco menu"
                        />
                    </div>
                    <h6 className="text-navbar">Contacto</h6>
                  </a>
                </div>
              </li>

              <li className="list-group-item">
                <div>
                    
                      {logged ?
                        <div className="item-menu-yesmom">
                          <div className="container-image-icon">
                              <img
                                className="image-icon"
                                src={iniciarSesion}
                                alt="icon iniciar-sesion menu"
                              />
                          </div>
                          <div className="box-expand">
                            <div className="options-proveedor">
                              <h6 className="text-navbar">Baby Plaza</h6>
                              <div className="expand-options" onClick={()=>setExpand( expand => !expand)}>
                                <img src={loggedOptions} />
                              </div>

                            </div>
                          </div>
                        </div>

                      
                        :
                        <Link to="/iniciar-sesion" className="item-menu-yesmom">
                          <div className="container-image-icon">
                              <img
                                className="image-icon"
                                src={iniciarSesion}
                                alt="icon iniciar-sesion menu"
                              />
                          </div>
                            <h6 className="text-navbar">Iniciar sesión</h6>
                        </Link>
                       }
                       
                    {expand && 
                      <div className="expanded-options">

                        {pushLinks.map((link,i) => (
                          <Link key={i} to ={link.to} className={`dropmenu__link ${pathname ===  link.active ? "active-item-drop-menu" : ""}`} >{ link.name }</Link>
                        ))}
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
