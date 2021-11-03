
import React from 'react'
import { Row, Accordion, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import AccordionItem from './AccordionItem'


const AccordionProduct =  () => {

	const { products } = useSelector(state => state.supplierProducts );

	// console.log(products);

	// const products = [
	// 	{ sku: 34242342, nombre: "Producto1", descripcion: 'descripcion1', accesorios: 'accesorio1', color: ['morado', 'rosado', 'verde'], talla: ['0', '2', '4'], categoria: "Destacados", categoriaadicional: "Lo + vendido", dimensiones: { largo: 1, ancho: 2, alto: 1 }, creacion: "2020/07/03", visible: "yet", precio: 45, precioPromocional: 20, inventario: 10, aceptado: true, fechaInicioPromocion: "2020/07/03", fechaFinPromocion: "2020/07/07" },
	// 	{ sku: 34242342, nombre: "Producto2", descripcion: 'descripcion2', accesorios: 'accesorio2', color: ['turqueza', 'amarillo', 'morado'], talla: ['0', '2', '4'], categoria: "Destacados", categoriaadicional: "Lo + vendido", dimensiones: { largo: 1, ancho: 2, alto: 1 }, creacion: "2020/07/03", visible: true, precio: 45, precioPromocional: 20, inventario: 10, aceptado: true, fechaInicioPromocion: "2020/07/03", fechaFinPromocion: "2020/07/03" },
	// 	{ sku: 34242342, nombre: "Producto3", descripcion: 'descripcion3', accesorios: 'accesorio3', color: ['rosado', 'morado', 'verde'], talla: ['0', '2', '4'], categoria: "Destacados", categoriaadicional: "Lo + vendido", dimensiones: { largo: 1, ancho: 2, alto: 1 }, creacion: "2020/07/03", visible: false, precio: 45, precioPromocional: 20, inventario: 10, aceptado: true, fechaInicioPromocion: "2020/07/03", fechaFinPromocion: "2020/07/03" },
	// 	{ sku: 34242342, nombre: "Producto4", descripcion: 'descripcion4', accesorios: 'accesorio4', color: ['azul', 'turqueza', 'verde'], talla: ['0', '2', '4'], categoria: "Destacados", categoriaadicional: "Lo + vendido", dimensiones: { largo: 1, ancho: 2, alto: 1 }, creacion: "2020/07/03", visible: true, precio: 45, precioPromocional: 20, inventario: 10, aceptado: true, fechaInicioPromocion: "2020/07/03", fechaFinPromocion: "2020/07/03" },
	// 	{ sku: 34242342, nombre: "Producto5", descripcion: 'descripcion5', accesorios: 'accesorio5', color: ['turqueza', 'anaranjado', 'verde'], talla: ['0', '2', '4'], categoria: "Destacados", categoriaadicional: "Lo + vendido", dimensiones: { largo: 1, ancho: 2, alto: 1 }, creacion: "2020/07/03", visible: false, precio: 45, precioPromocional: 20, inventario: 10, aceptado: true, fechaInicioPromocion: "2020/07/03", fechaFinPromocion: "2020/07/03" },
	// 	{ sku: 34242342, nombre: "Producto6", descripcion: 'descripcion6', accesorios: 'accesorio6', color: ['rosado', 'rojo', 'verde'], talla: ['0', '2', '4'], categoria: "Destacados", categoriaadicional: "Lo + vendido", dimensiones: { largo: 1, ancho: 2, alto: 1 }, creacion: "2020/07/03", visible: "yet", precio: 45, precioPromocional: 20, inventario: 10, aceptado: true, fechaInicioPromocion: "2020/07/03", fechaFinPromocion: "2020/07/03" },
	// ]
	return (
		<Accordion>
			<Row>
				{
					products.map((el, i) => (
						<Col key={i} xs={12} md={6} xl={4}>
							<AccordionItem ek={i} product={el} />
						</Col>
					))
				}
			</Row>
		</Accordion>
	)
}

export default AccordionProduct
