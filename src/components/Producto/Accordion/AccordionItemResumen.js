import React from 'react'
import { Accordion, Card } from 'react-bootstrap'
import Expand from './Expand'

import iconEditar from '../../../images/header/icon-edit.svg';
import './AccordionItem.css';

const AccordionItem = ({ 
    ek, 
    nombre, 
    sku, 
    precio,
    numOrden,
    fechaOrden,
    tipoDocumento,
    metodoPago,
    cant,
    acciones,
    destinatario,
    direccionEnvio
}) => {
    return (
        <>
            <Card>
                <Card.Header>
                    <div className="container-products">
                        <div className="icon-editar">
                            <img src={iconEditar} alt="editar"/>
                        </div>
                        <div className="header-title">
                            <div className="item-details">
                                <p>Numero de órden <span>{numOrden}</span></p>
                            </div>
                            <div className="item-details">
                                <p>Fecha de órden <span>{fechaOrden}</span></p>
                            </div>
                            <div className="item-details container-expand">
                                <div className="item-details">
                                    <p>Precio <span>s/. {precio}</span></p>
                                </div>
                                <Expand eventKey={`${ek}`} />
                            </div>
                        </div>

                    </div>
                </Card.Header>
                <Accordion.Collapse eventKey={`${ek}`}>
                    <Card.Body>
                        <div className="container-products">
                            <div className="item-details">
                                <p>Tipo de documento <span>{tipoDocumento}</span></p>
                            </div>
                            <div className="item-details">
                                <p>Método de pago <span>{metodoPago} </span></p>
                            </div>
                            <div className="item-details">
                                <p># <span>{cant} </span></p>
                            </div>
                            <div className="item-details">
                                <p>Acciones <span>{acciones}</span></p>
                            </div>
                            
                        </div>
                        <div className="container-products">
                            <div className="item-details">
                                <p>Enviar a <span>{destinatario}</span></p>
                            </div>
                            <div className="item-details">
                                <p>Dirección de envio <span>{direccionEnvio}</span></p>
                            </div>
                            <div className="item-details">
                                <p>SKU de producto <span>{sku}</span></p>
                            </div>
                            <div className="item-details">
                                <p>Nombre del producto <span>{nombre}</span></p>
                            </div>
                        </div> 

                    </Card.Body>
                </Accordion.Collapse>
            </Card>

        </>
    )
}

export default AccordionItem
