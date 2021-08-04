import React from 'react'

import arrow from '../../images/ventas/arrow.svg';
import './CardPendiente.css';

function CardPendiente() {
    return (
        <div className="card-pendiente">
            <div className="card-pendiente-text">
                <p>Hoy</p>
                <img src={arrow} alt="arrow-ordenes" />
                <p>3</p>
            </div>
            <div className="card-ver-pendientes">
                <p>Ver</p>
            </div>
        </div>
    )
}

export default CardPendiente
