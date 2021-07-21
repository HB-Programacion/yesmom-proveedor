import React from 'react'
import { Card } from 'react-bootstrap'
import Expand from './Expand'

function AccordionItem() {
    return (
        <>
            <Card>
                <Card.Header>
                    <div className="header-compra">
                        <div className="header-title">
                            <div>
                                <p>Nombre del producto <span>Producto</span></p>
                            </div>
                            <div>
                                <p>Creación <span>2020/07/03</span></p>
                            </div>
                            <div>
                                <p>Visible</p>
                            </div>
                        </div>
                        <Expand eventKey="0" />
                    </div>
                    <p className="title-compra"><span>Fecha de compra:</span></p> 
                </Card.Header>
            </Card>
        </>
    )
}

export default AccordionItem
