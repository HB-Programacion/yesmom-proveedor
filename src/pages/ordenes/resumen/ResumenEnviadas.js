import React from 'react'
import AccordionResumen from '../../../components/Producto/Accordion/AccordionResumen'

const ResumenListas = () => {

    const products = [
        { 
            nombre:"Set de biberones Avent",
            numOrden: 101010, 
            fechaOrden: "2020/07/03", 
            precio:50,
            tipoDocumento: "Factura", 
            metodoPago: "Tarjeta Online", 
            cant: 20, 
            acciones: "Enviado",
            destinatario:"Adriana Brenis Castro",
            direccionEnvio:"Cll. José Larco 123",
            sku: 34242342,
        },
        { 
            nombre:"Set de biberones Avent",
            numOrden: 101010, 
            fechaOrden: "2020/07/03", 
            precio:50,
            tipoDocumento: "Factura", 
            metodoPago: "Tarjeta Online", 
            cant: 20, 
            acciones: "Enviado",
            destinatario:"Adriana Brenis Castro",
            direccionEnvio:"Cll. José Larco 123",
            sku: 34242342,
        },
        { 
            nombre:"Set de biberones Avent",
            numOrden: 101010, 
            fechaOrden: "2020/07/03", 
            precio:50,
            tipoDocumento: "Factura", 
            metodoPago: "Tarjeta Online", 
            cant: 20, 
            acciones: "Enviado",
            destinatario:"Adriana Brenis Castro",
            direccionEnvio:"Cll. José Larco 123",
            sku: 34242342,
        },
        { 
            nombre:"Set de biberones Avent",
            numOrden: 101010, 
            fechaOrden: "2020/07/03", 
            precio:50,
            tipoDocumento: "Factura", 
            metodoPago: "Tarjeta Online", 
            cant: 20, 
            acciones: "Enviado",
            destinatario:"Adriana Brenis Castro",
            direccionEnvio:"Cll. José Larco 123",
            sku: 34242342,
        },
        { 
            nombre:"Set de biberones Avent",
            numOrden: 101010, 
            fechaOrden: "2020/07/03", 
            precio:50,
            tipoDocumento: "Factura", 
            metodoPago: "Tarjeta Online", 
            cant: 20, 
            acciones: "Enviado",
            destinatario:"Adriana Brenis Castro",
            direccionEnvio:"Cll. José Larco 123",
            sku: 34242342,
        },
        { 
            nombre:"Set de biberones Avent",
            numOrden: 101010, 
            fechaOrden: "2020/07/03", 
            precio:50,
            tipoDocumento: "Factura", 
            metodoPago: "Tarjeta Online", 
            cant: 20, 
            acciones: "Enviado",
            destinatario:"Adriana Brenis Castro",
            direccionEnvio:"Cll. José Larco 123",
            sku: 34242342,
        },

    ]

    return (
        <AccordionResumen data={products} />
    )
}

export default ResumenListas
