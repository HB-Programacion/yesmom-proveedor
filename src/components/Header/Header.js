import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import DropMenuMobile from '../DropMenuMobile';

import './Header.css';
function Header({logged}) {

    const publicImages = `${process.env.PUBLIC_URL}/assets/images/header`;
    const [active, setActive] = useState(false);

    const handleClick = () => {
        console.log("click", active);
        setActive(!active);
    };

    return (
        <>
            <div className="box-yesmom">
                <div className="box-nav">
                    <nav className="navbar-yesmom">
                        <div className="burger-yesmom" onClick={handleClick}>
                            <img
                                className="img-burger"
                                src={`${publicImages}/burger.svg`}
                                alt="burger yesmom"
                            />
                        </div>
                        <div className="container-icon">
                            <img
                                className="img-navbar"
                                src={`${publicImages}/logo-yesmom.svg`}
                                alt="logo yesmom"
                            />
                        </div>

                        <div className="container-icon hide">
                            <img
                                className="img-burger"
                                src={`${publicImages}/iniciar-sesion.svg`}
                                alt="login yesmom"
                            />
                        </div>

                        <div
                            className={`box-items-menu ${active ? "" : "box-items-menu-desktop"
                                }`}
                        >
                            <div className="box-items-menu-responsive">
                                <div>
                                    <Link to="/" className="item-menu-yesmom">
                                        <div className="container-icon">
                                            <img
                                                className="image-icon"
                                                src={`${publicImages}/cesta.svg`}
                                                alt="icon cesta menu"
                                            />
                                        </div>
                                        <h6 className="text-navbar">¿Por qué Yes Mom?</h6>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/" className="item-menu-yesmom">
                                        <div className="container-icon">
                                            <img
                                                className="image-icon"
                                                src={`${publicImages}/tienda.svg`}
                                                alt="icon tienda menu"
                                            />
                                        </div>
                                        <h6 className="text-navbar">¿Cómo vender?</h6>
                                    </Link>
                                </div>
                                <div >
                                    <Link to="/" className="item-menu-yesmom">
                                        <div className="container-icon">
                                            <img
                                                className="image-icon"
                                                src={`${publicImages}/contacto.svg`}
                                                alt="icon contacto menu"
                                            />
                                        </div>
                                        <h6 className="text-navbar">Contacto</h6>
                                    </Link>
                                </div>
                                <div >
                                    <Link  to="/" className="item-menu-yesmom">
                                       <div className="container-icon">
                                            <img
                                            className="image-icon"
                                            src={`${publicImages}/iniciar-sesion.svg`}
                                            alt="icon iniciar-sesion menu"
                                            />
                                        </div>
                                        <h6 className="text-navbar">Iniciar sesión</h6>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <DropMenuMobile logged={logged} active={active} setActive={handleClick} />
            </div>
        </>
    )
}

export default Header
