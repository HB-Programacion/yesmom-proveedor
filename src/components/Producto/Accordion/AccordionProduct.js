import React from 'react'
import { Row, Accordion, Col } from 'react-bootstrap'
import AccordionItem from './AccordionItem'

function AccordionProduct() {
    const products = [
        { nombre: "Producto", creacion: "2020/07/03", visible: "yet", sku: 34242342, precio: 45, precioPromocional: 20, inventario: 10, aceptado: true, categoria: "Destacados" },
        { nombre: "Producto", creacion: "2020/07/03", visible: true, sku: 34242342, precio: 45, precioPromocional: 20, inventario: 10, aceptado: true, categoria: "Destacados" },
        { nombre: "Producto", creacion: "2020/07/03", visible: false, sku: 34242342, precio: 45, precioPromocional: 20, inventario: 10, aceptado: true, categoria: "Destacados" },
        { nombre: "Producto", creacion: "2020/07/03", visible: true, sku: 34242342, precio: 45, precioPromocional: 20, inventario: 10, aceptado: true, categoria: "Destacados" },
        { nombre: "Producto", creacion: "2020/07/03", visible: false, sku: 34242342, precio: 45, precioPromocional: 20, inventario: 10, aceptado: true, categoria: "Destacados" },
        { nombre: "Producto", creacion: "2020/07/03", visible: "yet", sku: 34242342, precio: 45, precioPromocional: 20, inventario: 10, aceptado: true, categoria: "Destacados" },
    ]
    return (
        <Accordion>
            <Row>
            {
                products.map((el,i)=>(
                    <Col key={i} xs={12} md={6} xl={4}>
                        <AccordionItem ek={i} {...el} />
                    </Col>
                ))
            }
            </Row>
        </Accordion>
    )
}

export default AccordionProduct
