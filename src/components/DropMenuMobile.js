import React from "react";
import { Link } from "react-router-dom";

function DropMenuMobile({ active, setActive }) {
  const publicImages = process.env.PUBLIC_URL;
  return (
    <>
      <div className={`drop-menu ${active ? "" : "drop-menu-off"}`}>
        <div className="container-close">
          <div className="icon-close-sidebar" onClick={setActive}>
            <div className="container-image-icon">
              <img
                className="image-icon"
                src={`${publicImages}/assets/images/header/close.svg`}
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
                          src={`${publicImages}/assets/images/header/cesta.svg`}
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
                          src={`${publicImages}/assets/images/header/tienda.svg`}
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
                            src={`${publicImages}/assets/images/header/contacto.svg`}
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
                          src={`${publicImages}/assets/images/header/iniciar-sesion.svg`}
                          alt="icon iniciar-sesion menu"
                        />
                    </div>
                    <h6 className="text-navbar">Iniciar sesión</h6>
                  </Link>
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
