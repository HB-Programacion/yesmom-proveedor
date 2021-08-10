import React from 'react'
import { Accordion, Card } from 'react-bootstrap'
import Expand from './Expand'
import Switch from './Switch'

import iconCheckDisable from '../../../images/producto/icon-circle-check-disabled.svg';
import iconCheckAvailable from '../../../images/producto/icon-circle-check.svg';
import iconEditar from '../../../images/header/icon-edit.svg';
import './AccordionItem.css';


function AccordionItem({ ek, nombre, creacion, visible, sku, precio, precioPromocional, inventario, aceptado, categoria }) {
  return (
    <>
      <Card>
        <Card.Header>
          <div className="container-products">
            <div className="icon-editar">
              <img src={iconEditar} />
            </div>
            <div className="header-title">
              <div className="item-details">
                <p>Nombre del producto <span>{nombre}</span></p>
              </div>
              <div className="item-details">
                <p>Creación <span>{creacion}</span></p>
              </div>
              <div className="item-details container-expand">
                <div className="container-visible">
                  <p>Visible</p>
                  <Switch visible={visible} />
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
                <p>SKU del producto <span>{sku}</span></p>
              </div>
              <div className="item-details">
                <p>Precio <span>s/. {precio} </span></p>
              </div>
              <div className="item-details">
                <p>Precio promocional <span>s/. {precioPromocional} </span></p>
              </div>
              <div className="item-details">
                <p>Inventario <span>{inventario}</span></p>
              </div>
              <div className="item-details">
                <p>Aceptado <span>{aceptado ? <img src={iconCheckAvailable} alt="" /> : <img src={iconCheckDisable} alt="" />}</span></p>
              </div>
              <div className="item-details">
                <p>Categoria <span>{categoria ? <><img src={iconCheckAvailable} alt="" /> <span> {categoria}</span> </> : <img src={iconCheckDisable} alt="" />}</span></p>
              </div>
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>

    </>
  )
}

export default AccordionItem
