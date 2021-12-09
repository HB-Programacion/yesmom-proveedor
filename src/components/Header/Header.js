import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import burger from "../../images/header/burger.svg";
import cesta from "../../images/header/cesta.svg";
import tienda from "../../images/header/tienda.svg";
import contacto from "../../images/header/contacto.svg";
import iniciarSesion from "../../images/header/iniciar-sesion.svg";
import logoYesmom from "../../images/header/logo-yesmom.svg";

import AvatarLogged from "./AvatarLogged";
import DropMenuMobile from "./DropMenuMobile";
import NavMenu from "./NavMenu";

import "./Header.css";


const Header = () => {

  const { logged = false } = useSelector(state => state.auth);
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  const sections = {
    porqueVender: "porque-vender-yesmom",
    comoVender: "como-vender",
    contacto: "contacto",
  };
  return (
    <div className="">
      <div className="header-box-yesmom ">
        <div className="box-nav">
          <nav className="navbar-yesmom">
            <div className="burger-yesmom" onClick={handleClick}>
              <img className="img-burger" src={burger} alt="burger yesmom" />
            </div>
            <div className="container-icon">
              <Link to="/">
                <img
                  className="img-navbar"
                  src={logoYesmom}
                  alt="logo yesmom"
                />
              </Link>
            </div>
            <div className="container-icon hide">
              {logged ? (
                <Link to="/p/informacion-perfil/registro">
                  <AvatarLogged />
                </Link>
              ) : (
                <Link to="/iniciar-sesion" className="item-menu-yesmom">
                  <div className="container-icon">
                    <img
                      className="image-icon"
                      src={iniciarSesion}
                      alt="icon iniciar-sesion menu"
                    />
                  </div>
                </Link>
              )}
            </div>
            <div
              className={`box-items-menu ${
                active ? "" : "box-items-menu-desktop"
              }`}
            >
              <div className="box-items-menu-responsive">
                <div className="header-to-id">
                  <HashLink
                    to={`/#${sections.porqueVender}`}
                    className="item-menu-yesmom"
                  >
                    <div className="container-icon">
                      <img
                        className="image-icon"
                        src={cesta}
                        alt="icon cesta menu"
                      />
                    </div>
                    <h6 className="text-navbar">¿Por qué Yes Mom?</h6>
                  </HashLink>
                </div>
                <div className="header-to-id">
                  <HashLink
                    to={`/#${sections.comoVender}`}
                    className="item-menu-yesmom"
                  >
                    <div className="container-icon">
                      <img
                        className="image-icon"
                        src={tienda}
                        alt="icon tienda menu"
                      />
                    </div>
                    <h6 className="text-navbar">¿Cómo vender?</h6>
                  </HashLink>
                </div>
                <div className="header-to-id">
                  <HashLink
                    to={`/#${sections.contacto}`}
                    className="item-menu-yesmom"
                  >
                    <div className="container-icon">
                      <img
                        className="image-icon"
                        src={contacto}
                        alt="icon contacto menu"
                      />
                    </div>
                    <h6 className="text-navbar">Contacto</h6>
                  </HashLink>
                </div>
                <div>
                  {logged ? (
                    <AvatarLogged/>
                  ) : (
                    <Link to="/iniciar-sesion" className="item-menu-yesmom">
                      <div className="container-icon">
                        <img
                          className="image-icon"
                          src={iniciarSesion}
                          alt="icon iniciar-sesion menu"
                        />
                      </div>
                      <h6 className="text-navbar">Iniciar sesión</h6>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </nav>
          <NavMenu />
        </div>
        <DropMenuMobile
          active={active}
          setActive={handleClick}
        />
      </div>
    </div>
  );
}
export default Header;
