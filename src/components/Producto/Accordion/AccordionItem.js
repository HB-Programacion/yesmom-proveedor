import React from 'react'
import { Accordion, Card } from 'react-bootstrap'

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import Expand from './Expand'
import Switch from './Switch'

import iconCheckDisable from '../../../images/producto/icon-circle-check-disabled.svg';
import iconCheckAvailable from '../../../images/producto/icon-circle-check.svg';
import iconEditar from '../../../images/header/icon-edit.svg';
import ModalEditProduct from '../ModalProduct/ModalEditProduct';

import './AccordionItem.css';

function AccordionItem({ ek, product }) {

	const handleUpdateProduct = () => {
		const MySwal = withReactContent(Swal);

		<div className="container-update-product">
			{
				MySwal.fire({
					title: <p className="update-product-title">Modificar Producto</p>,
					html:
						<>
							<div className="content-modal-update">
								<ModalEditProduct product={product} />
							</div>
						</>,
					customClass: { popup: "modal-update-product" },
					showConfirmButton: false,
					showCancelButton: true,
					allowOutsideClick: false,
					confirmButtonText: <p>Aceptar</p>,
					cancelButtonText: <p>Cancelar</p>,
				})
			}
		</div>
	}

	return (
		<>
			<Card>
				<Card.Header>
					<div className="container-products">
						<div className="icon-editar" onClick={handleUpdateProduct}>
							<img src={iconEditar} />
						</div>
						<div className="header-title">
							<div className="item-details">
								<p>Nombre del producto <span>{product.nombre}</span></p>
							</div>
							<div className="item-details">
								<p>Creación <span>{product.creacion}</span></p>
							</div>
							<div className="item-details container-expand">
								<div className="container-visible">
									<p>Visible</p>
									<Switch visible={product.visible} />
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
								<p>SKU del producto <span>{product.sku}</span></p>
							</div>
							<div className="item-details">
								<p>Precio <span>s/. {product.precio} </span></p>
							</div>
							<div className="item-details">
								<p>Precio promocional <span>s/. {product.precioPromocional} </span></p>
							</div>
							<div className="item-details">
								<p>Inventario <span>{product.inventario}</span></p>
							</div>
							<div className="item-details">
								<p>Aceptado <span>{product.aceptado ? <img src={iconCheckAvailable} alt="" /> : <img src={iconCheckDisable} alt="" />}</span></p>
							</div>
							<div className="item-details">
								<p>Categoria <span>{product.categoria ? <><img src={iconCheckAvailable} alt="" /> <span> {product.categoria}</span> </> : <img src={iconCheckDisable} alt="" />}</span></p>
							</div>
						</div>
					</Card.Body>
				</Accordion.Collapse>
			</Card>

		</>
	)
}

export default AccordionItem
