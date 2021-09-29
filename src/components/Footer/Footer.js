import React from 'react';
/* import { Link , NavLink} from 'react-router-dom'; */
import { HashLink as Link } from 'react-router-hash-link';
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import './Footer.css';


const Footer = () => {

  const sections = {
    porqueVender : "porque-vender-yesmom",
    comoVender : "como-vender",
    contacto :"contacto",
  }

  return (
    <>
      <div className="footer animated fade-in">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={3} lg={3} xl={3}>
              <div className="padding-left text-left">
                <h6 className="title-footer">
                  <b>CONTENIDO</b>
                </h6>
                <div className="box-contenido-footer">
                  <Link to={`/#${sections.porqueVender}`}>
                    <p>¿Por qué vender en Yes Mom?</p>
                  </Link>
                  <Link to={`/#${sections.comoVender}`}>
                    <p>¿Comó vender en Yes Mom? </p>
                  </Link>
                  <Link to={`/#${sections.contacto}`}>
                    <p>Contacto</p>
                  </Link>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3} xl={3}>
              <div className="padding-left text-left pb-1">
                <h6 className="title-footer">
                  <b className="p-1 hide-mobile"></b>
                </h6>
                <div className="box-contenido-footer">

                  <Link to="/">
                  <p>Términos y condiciones</p>
                </Link>
                  <Link to="/">
                  <p>Política de privacidad</p>
                </Link>
                  <Link to="/">
                  <p>Libro de reclamaciones</p>
                </Link>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3} xl={3}>
              <div className="padding-left text-center">
                <h6 className="title-footer">
                  <b>CONTÁCTANOS</b>
                </h6>
                {/* <a href="info@yesmom.com.pe">info@yesmom.com.pe</a> */}
                <p>mibebe@gmail.com</p>
                <p>+51 947 234 452</p>
                <p>123 Los Robles, Miraflores</p>
              </div>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3} xl={3}>
              <div className="padding-left text-center">
                <h6 className="title-footer">
                  <b>SÍGUENOS</b>
                </h6>
                <a
                  className="icon-redes"
                  href="https://www.facebook.com/Yes-Mom-Per%C3%BA-104308198182894"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                </a>
                <a
                  className="icon-redes"
                  href="https://www.instagram.com/yesmomperu/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                </a>
              </div>
            </Col>
          </Row>
          
        </Container>
      </div>
    </>
  );
};

export default Footer;
