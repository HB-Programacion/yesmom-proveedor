import React from 'react'
import AppLayout from '../../../components/AppLayout/AppLayout'
import StepperNewStore from '../../../components/PerfilTienda/StepperNewStore'


import './LoadProduct.css';

const LoadProducts = () => {
    return (
        <AppLayout>
            <div className="contenedor-load_product-store animated fade-in">
                <div className="load_product-store-container-contenido">
                    <div className="load_product-store-all-content">
                        <p className="title-rosa">Mi Tienda</p>

                        <div className="load_product-container-stepper">
                            <StepperNewStore selected={1}/>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default LoadProducts
