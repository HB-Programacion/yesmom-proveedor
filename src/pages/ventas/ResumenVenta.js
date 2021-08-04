import React from 'react'
import AppLayout from '../../components/AppLayout/AppLayout'
import { Row,Col } from 'react-bootstrap';

import pig from '../../images/ventas/pig.svg';
import bell from '../../images/ventas/bell.svg';
import ondaBlanca from '../../images/onda-blanca.svg';
import bannerMobile from '../../images/ventas/resumen-mobile.png';
import bannerDesktop from '../../images/ventas/resumen-desktop.png';
import CardResumen from '../../components/Venta/CardResumen';
import CardPendiente from '../../components/Venta/CardPendiente';

import './ResumenVenta.css';

const ResumenVenta = () => {
    return (
        <AppLayout>
            <div className="contenedor-resumen-venta">
                <div className="resumen-venta-contenido">
                    <div className="resumen-venta-all-content">
                        <div className="resumen-venta-banner">
                            <img className="img-banner hide-desktop" src={bannerMobile} />
                            <img className="img-banner show-desktop" src={bannerDesktop} />
                            <div className="resumen-venta-container-title">
                                <img className="onda-blanca" src={ondaBlanca} alt="ondas-blanca" />
                                <p>Resumen de venta</p>
                                <img className="onda-blanca" src={ondaBlanca} alt="ondas-blanca" />
                            </div>
                        </div>
                        <div className="resumen-contenido-centered">

                            <section className="resumen-seguimiento-ventas">
                                <div className="resumen-subtitles">
                                    <img src={pig}  alt="pig"/>
                                    <p>Seguimiento de ventas:</p>
                                </div>
                                <div className="resumen-container-cards">
                                    <Row className="mt-3 mb-3">
                                        <Col md={12} xl={4}>
                                            <CardResumen 
                                                color="primary" 
                                                text="Venta de hoy" 
                                                amount="525.90" 
                                            />
                                        </Col>
                                        <Col md={6} xl={4}>
                                            <CardResumen 
                                                color="normal" 
                                                text="Esta semana" 
                                                amount="2160.00" 
                                            />
                                        </Col>
                                        <Col md={6} xl={4}>
                                            <CardResumen 
                                                color="normal" 
                                                text="Este mes" 
                                                amount="6458.90" 
                                            />
                                        </Col>
                                    </Row>
                                </div>
                                <div className="resumen-container-pendientes">

                                    <div className="resumen-subtitles">
                                        <img src={bell}  alt="bell"/>
                                        <p>Órdenes pendientes:</p>
                                    </div>

                                    <div className="resumen-container-card-pendiente">
                                        <CardPendiente />
                                    </div>
                                </div>

                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default ResumenVenta
