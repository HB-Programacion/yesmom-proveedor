import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/auth";


import close from '../../images/header/close.svg';
import cesta from '../../images/header/cesta.svg';
import tienda from '../../images/header/tienda.svg';
import contacto from '../../images/header/contacto.svg';
import iniciarSesion from '../../images/header/iniciar-sesion.svg';
import loggedOptions from '../../images/header/logged-options.svg';

import './DropMenuMobile.css';
function DropMenuMobile({ active, setActive}) {

  const { logged=false } = useSelector(state => state.auth);  
  const { name } = useSelector(state => state.supplier);
  const { pathname } = useLocation();
  const [ expand , setExpand] = useState(false);
  const dispatch = useDispatch();

  const pushLinks=[
    { name : "Registro" , to : "/p/informacion-perfil/registro"},
    { name : "Productos" , to : "/p/informacion-perfil/productos-activos" },
    { name : "Cambiar contraseña" , to : "/p/informacion-perfil/cambiar-password" },
    { name : "Perfil de tienda" , to : "/p/informacion-perfil/perfil-tienda" },
    { name : "Términos y condiciones" , to : "/p/informacion-perfil/terminos" },
    { name : "Desactivar cuenta" , to : "/p/informacion-perfil/desactivar-cuenta"},
]

  const sections = {
    porqueVender : "porque-vender-yesmom",
    comoVender : "como-vender",
    contacto :"contacto",
  }

  const handleLogout = () => {
    dispatch(logout());
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
                  <HashLink to={`/#${sections.porqueVender}`} className="item-menu-yesmom">
                    <div className="container-image-icon">
                        <img
                          className="image-icon"
                          src={cesta}
                          alt="icon cesta menu"
                        />
                    </div>
                    <h6 className="text-navbar">¿Por qué Yes Mom?</h6>
                  </HashLink>
                </div>
              </li>

              <li className="list-group-item">
                <div>
                  <HashLink to={`/#${sections.comoVender}`} className="item-menu-yesmom">
                    <div className="container-image-icon">
                        <img
                          className="image-icon"
                          src={tienda}
                          alt="icon tienda menu"
                        />
                    </div>
                    <h6 className="text-navbar">¿Cómo vender?</h6>
                  </HashLink>
                </div>
              </li>

              <li className="list-group-item">
                <div>
                  <HashLink to={`/#${sections.contacto}`} className="item-menu-yesmom">
                    <div className="container-image-icon">
                        <img
                            className="image-icon"
                            src={contacto}
                            alt="icon conctaco menu"
                        />
                    </div>
                    <h6 className="text-navbar">Contacto</h6>
                  </HashLink>
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
                              <h6 className="text-navbar">{name}</h6>
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
                       
                    {(expand && logged) && 
                      <div className="expanded-options">

                        {pushLinks.map((link,i) => (
                          <Link key={i} to ={link.to} className={`dropmenu__link ${pathname ===  link.to ? "active-item-drop-menu" : ""}`} >{ link.name }</Link>
                        ))}
                      </div>
                    }

                    
                </div>
              </li>
              {
                (logged && expand) &&

                <li className="list-group-item">
                  <div className="group-logout">
                    <h6 className="text-navbar text-added-logout" onClick= { handleLogout }>Cerrar sesión</h6>
                  </div>
                </li>
              }

            </ul>

          </div>
        </div>
      </div>
    </>
  );
}

export default DropMenuMobile;
