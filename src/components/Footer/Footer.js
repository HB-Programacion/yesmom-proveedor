import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import './Footer.css';


const Footer = () => {
  return (
    <>
      <div className="footer">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={3} lg={3} xl={3}>
              <div className="padding-left text-left">
                <h6 className="title-footer">
                  <b>CONTENIDO</b>
                </h6>
                <div className="box-contenido-footer">
                  <Link to="/blog">
                    <p>¿Por qué vender en Yes Mom?</p>
                  </Link>
                  <Link to="/construccion">
                    <p>¿Comó vender en Yes Mom? </p>
                  </Link>
                  <Link to="/construccion">
                    <p>Contacto</p>
                  </Link>
                  {/* <Link href="/nosotros">
                  <a>Términos y condiciones</a>
                </Link> */}
                  {/* <Link href="/nosotros">
                  <a>Política de privacidad</a>
                </Link> */}
                  {/* <Link href="/nosotros">
                  <a>Libro de reclamaciones</a>
                </Link> */}
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3} xl={3}>
              <div className="padding-left text-left pb-1">
                <h6 className="title-footer">
                  <b className="p-1"></b>
                </h6>
                <div className="box-contenido-footer">

                  <Link to="/construccion">
                  <p>Términos y condiciones</p>
                </Link>
                  <Link to="/construccion">
                  <p>Política de privacidad</p>
                </Link>
                  <Link to="/construccion">
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
                  target="blank"
                >
                  <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                </a>
                <a className="icon-redes">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="icon-redes"
                  ></FontAwesomeIcon>
                </a>
                <a
                  className="icon-redes"
                  href="https://www.instagram.com/yesmomperu/"
                  target="blank"
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
