import React from 'react'
import AppLayout from '../../components/AppLayout/AppLayout'

import pig from '../../images/ventas/pig.svg';
import bell from '../../images/ventas/bell.svg';
import bannerMobile from '../../images/ventas/resumen-mobile.png';
import bannerDesktop from '../../images/ventas/resumen-desktop.png';

import './ResumenVenta.css';
import CardResumen from '../../components/Venta/CardResumen';
import CardPendiente from '../../components/Venta/CardPendiente';

const ResumenVenta = () => {
    return (
        <AppLayout>
            <div className="contenedor-resumen-venta">
                <div className="resumen-venta-contenido">
                    <div className="resumen-venta-all-content">
                        <div className="resumen-venta-banner">
                            <img className="hide-desktop" src={bannerMobile} />
                            <img className="show-desktop" src={bannerDesktop} />
                            <p>Resumen de venta</p>
                        </div>

                        <section className="resumen-seguimiento-ventas">
                            <div className="resumen-subtitles">
                                <img src={pig}  alt="pig"/>
                                <p>Seguimiento de ventas:</p>
                            </div>
                            <div className="resumen-container-cards">
                                <CardResumen 
                                    color="primary" 
                                    text="Venta de hoy" 
                                    amount="525.90" 
                                />
                                <CardResumen 
                                    color="normal" 
                                    text="Esta semana" 
                                    amount="2160.00" 
                                />
                                <CardResumen 
                                    color="normal" 
                                    text="Este mes" 
                                    amount="6458.90" 
                                />
                            </div>
                            <div className="resumen-subtitles">
                                <img src={bell}  alt="bell"/>
                                <p>Órdenes pendientes:</p>
                            </div>

                            <div className="resumen-container-card-pendiente">
                                <CardPendiente />
                            </div>

                        </section>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default ResumenVenta
