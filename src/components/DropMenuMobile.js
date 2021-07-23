import React, { useState } from "react";
import { Link } from "react-router-dom";


import close from '../images/header/close.svg';
import cesta from '../images/header/cesta.svg';
import tienda from '../images/header/tienda.svg';
import contacto from '../images/header/contacto.svg';
import iniciarSesion from '../images/header/iniciar-sesion.svg';
import loggedOptions from '../images/header/logged-options.svg';

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
      <style jsx>
        {`
          a{
            text-decoration:none;
          }
          :global(.list-group-flush > .list-group-item) {
            padding: 1.5rem;
          }
          .drop-menu {
            padding: 4rem 0;
            position: fixed;
            z-index: 999999;
            width: 90%;
            height: 100%;
            left: 0;
            background: white;
            transition: 0.3s ease-in-out;
            opacity: 1;
          }
          .drop-menu-off {
            opacity: 0;
            left: -100%;
          }
          .container-close {
            padding: 0 2rem;
            display: flex;
            justify-content: flex-end;
          }

          .container-title {
            margin-top: 2rem;
          }
          .line-under-title {
            border-top: 0.25px solid #ec668d;
          }
          .title-drop-menu {
            margin: 0 0 2rem 6.5rem;
            font-family: "mont-semibold" !important;
            font-size: 2rem;
            text-transform: uppercase;
            color: #ec668d;
          }
          .text-navbar {
            margin: 0;
            font-family: "mont-light" !important;
            font-size: 2rem;
            color: #575756;
          }
          .item-menu-yesmom {
            display: flex;
            align-items: center;
          }
          .item-menu-yesmom h6 {
            margin-left:2rem;
          }
          .container-image-icon img{
            width:3rem;
            height:3rem;
          }
          .contenedor-items{
            margin-top:2rem;
          }
          .options-proveedor{
            display:flex;
          }
          .options-proveedor img{
            margin-left:2rem;
          }
          .expanded-options{
            margin-left:5rem;
          }
          .expanded-options p{
            font-family:"mont-light"!important;
            font-size:1.8rem;
            color:#575650;
          }
          @media (min-width: 993px) {
            .drop-menu {
              visibility: hidden;
            }
          }
        `}
      </style>
    </>
  );
}

export default DropMenuMobile;
