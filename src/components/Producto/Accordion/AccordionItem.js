import React from 'react'
import { Accordion, Card } from 'react-bootstrap'
import Expand from './Expand'
import Switch from './Switch'

import './AccordionItem.css';

function AccordionItem({ ek, nombre, creacion, visible, sku, precio, precioPromocional, inventario, aceptado, categoria }) {
    return (
        <>
            <Card>
                <Card.Header>
                    <div className="container-products">
                        <div className="icon-editar">
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.4394 1.83147C18.5582 1.95063 18.6249 2.11204 18.6249 2.28031C18.6249 2.44857 18.5582 2.60998 18.4394 2.72915L17.1132 4.0566L14.5702 1.51359L15.8964 0.18614C16.0156 0.0669545 16.1773 0 16.3459 0C16.5145 0 16.6761 0.0669545 16.7954 0.18614L18.4394 1.83019V1.83147ZM16.2143 4.95428L13.6713 2.41127L5.00852 11.0753C4.93854 11.1453 4.88586 11.2306 4.85467 11.3245L3.83111 14.3939C3.81255 14.4499 3.80991 14.5099 3.8235 14.5673C3.83708 14.6246 3.86636 14.6771 3.90805 14.7188C3.94973 14.7605 4.00219 14.7897 4.05956 14.8033C4.11693 14.8169 4.17695 14.8143 4.2329 14.7957L7.30231 13.7722C7.39611 13.7413 7.48143 13.6891 7.55153 13.6196L16.2143 4.95555V4.95428Z" fill="#575650" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 16.5299C0 17.0357 0.200942 17.5209 0.558622 17.8785C0.916302 18.2362 1.40142 18.4372 1.90726 18.4372H15.8938C16.3996 18.4372 16.8847 18.2362 17.2424 17.8785C17.6001 17.5209 17.801 17.0357 17.801 16.5299V8.90088C17.801 8.73227 17.7341 8.57056 17.6148 8.45134C17.4956 8.33211 17.3339 8.26513 17.1653 8.26513C16.9967 8.26513 16.835 8.33211 16.7158 8.45134C16.5965 8.57056 16.5295 8.73227 16.5295 8.90088V16.5299C16.5295 16.6985 16.4626 16.8602 16.3433 16.9794C16.2241 17.0987 16.0624 17.1657 15.8938 17.1657H1.90726C1.73864 17.1657 1.57694 17.0987 1.45771 16.9794C1.33848 16.8602 1.2715 16.6985 1.2715 16.5299V2.54336C1.2715 2.37475 1.33848 2.21305 1.45771 2.09382C1.57694 1.97459 1.73864 1.90761 1.90726 1.90761H10.172C10.3406 1.90761 10.5023 1.84063 10.6216 1.7214C10.7408 1.60218 10.8078 1.44047 10.8078 1.27186C10.8078 1.10325 10.7408 0.941542 10.6216 0.822316C10.5023 0.703089 10.3406 0.636108 10.172 0.636108H1.90726C1.40142 0.636108 0.916302 0.837051 0.558622 1.19473C0.200942 1.55241 0 2.03753 0 2.54336V16.5299Z" fill="#575650" />
                            </svg>
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
                                    <Switch visible={visible}/>
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
                                <p>Aceptado</p>
                            </div>
                            <div className="item-details">
                                <p>Categoria</p>
                            </div>
                        </div>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>

        </>
    )
}

export default AccordionItem
