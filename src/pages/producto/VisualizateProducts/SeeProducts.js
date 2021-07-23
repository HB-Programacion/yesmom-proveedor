import React from 'react';
import AppLayout from '../../../components/AppLayout/AppLayout';
import AccordionItem from '../../../components/Producto/Accordion/AccordionItem';
import AccordionProduct from '../../../components/Producto/Accordion/AccordionProduct';

import './SeeProduct.css';

const SeeProducts = () => {
    return (
        <>
            <AppLayout>
                    <div className="see-product--box-main-proveedor">
                        <div className="see-product--contenedor-centered">
                            <div className="see-product--all-content">
                                <div className="see-product--container-contenido">
                                    <div className="see-product--container-title">
                                        <div className="see-product--container-advice">
                                            <h5>Gracias por registrar tu producto, en las próximas horas será evaluado para mostrarlo en tienda</h5>
                                        </div>

                                        <h4 className="see-product--title-product">Visualización de productos</h4>
                                    </div>
                                    <div className="see-product--container-select">
                                        <select>
                                            <option>Ordenar por </option>
                                            <option>Precio de mayor a menor</option>
                                            <option>Precio de menor a mayor</option>
                                            <option>A-Z (alfabéticamente)</option>
                                            <option>Z-A (alfabéticamente)</option>
                                            <option>Últimos 30 días)</option>
                                            <option>Últimos 6 meses</option>
                                        </select> 
                                    </div>
                                    <div className="see-product--container-cards">
                                        <AccordionProduct />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </AppLayout>
        </>
    )
}

export default SeeProducts
