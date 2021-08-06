import React from 'react'
import AppLayout from '../../../components/AppLayout/AppLayout'

import proveedor from '../../../images/perfil/proveedor.png';
import proveedorBanner from '../../../images/perfil/proveedor-banner.png';

import './Previsualizacion.css';

const Previsualizacion = () => {
    return (
        <AppLayout>
               <div className="contenedor-info-perfil-prev">
                    <div className="prev-contenido">
                        <div className="prev-all-content">
                            <div className="container-title">
                                <p className="title-rosa">Previsualización</p>
                            </div>

                            <div className="prev-container-contenido">
                                <div className="prev-sidebar">

                                </div>
                                <div className="prev-first-part">
                                    <div className="prev-container-image">
                                        <img src={proveedor} alt ="img-proveedor" />
                                    </div>
                                    <div className="prev-container-banner">
                                        <img src={proveedorBanner} alt ="banner-proveedor" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>             
        </AppLayout>
    )
}

export default Previsualizacion
