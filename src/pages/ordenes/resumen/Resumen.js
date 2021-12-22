import React from 'react'
import { useState } from 'react';
import AppLayout from '../../../components/AppLayout/AppLayout'

import ResumenListas from './ResumenListas';
import ResumenPendientes from './ResumenPendientes';
import ResumenEnviadas from './ResumenEnviadas';

import './Resumen.css';
const Resumen = () => {

    const [selection , setSelection ]=useState(0);
    return (
        <AppLayout>
            <div className="resumen--box-main-proveedor animated fade-in">
                <div className="resumen--contenedor-centered">
                    <div className="resumen--all-content">
                        <div className="resumen--container-contenido">
                            <div className="resumen--container-title">
                                <h4 className="title-rosa title-resumen">Resumen de órdenes</h4>
                                <div className="add--details-about-product resumen-details">
                                    <p  onClick={()=>setSelection(0)}  className={`${selection === 0 ? "detail-selected" : ""}`}>Listos para enviar</p>
                                    <p  onClick={()=>setSelection(1)}  className={`${selection === 1 ? "detail-selected" : ""}`}>Pendientes</p>
                                    <p  onClick={()=>setSelection(2)}  className={`${selection === 2 ? "detail-selected" : ""}`}>Enviados</p>
                                </div>

                            </div>
                            <div className="resumen--container-select">
                                <select className="select-ordenar">
                                    <option>Filtrar por tienda </option>
                                    {/* <option>Precio de mayor a menor</option>
                                    <option>Precio de menor a mayor</option>
                                    <option>A-Z (alfabéticamente)</option>
                                    <option>Z-A (alfabéticamente)</option>
                                    <option>Últimos 30 días)</option>
                                    <option>Últimos 6 meses</option> */}
                                </select> 
                            </div>
                            <div className="resumen--container-cards">
                                {selection === 0 && <ResumenListas />}
                                {selection === 1 && <ResumenPendientes />}
                                {selection === 2 && <ResumenEnviadas />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Resumen
