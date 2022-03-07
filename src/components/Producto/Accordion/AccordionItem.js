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

import { getDateParsed } from '../../../utils/helpers/getDateParsed';



import './AccordionItem.css';

const AccordionItem = ({ ek, product }) =>  {


	const handleUpdateProduct = async () => {
		const MySwal = withReactContent(Swal);

		const { isConfirmed } = await MySwal.fire({
			title: <p className="update-product-title">Modificar Producto</p>,
			html:
				<>
					<div className="content-modal-update">
							<ModalEditProduct 
								product={ product } 
							/>
					</div>

				</>,
			customClass: { popup: "modal-update-product" },
			showConfirmButton: false,
			// showCancelButton: true,
			allowOutsideClick: true,
		})

		if(isConfirmed){
			submitForm();
		}
	}


	// console.log(formState.errors);

	const submitForm = (value) => {
		alert('Correcto hermano')
	}

	// useEffect(() => {
	// 	if(Object.keys(errors).length > 0 ){
	// 		Swal.fire(
	// 			'Campos incorrectos',
	// 			'Corrige los campos',
	// 			'info'
	// 		  )
	// 		setErrorsUpdate(errors)
	// 		alert('Hay un error hermano')
	// 	}else{
	// 		setErrorsUpdate({});
	// 	}
	// },[errors])
	
	return (
		<>
			<Card>
				<Card.Header>
					<div className="container-products">
						<div className="icon-editar" onClick={handleUpdateProduct}>
							<img src={iconEditar} alt="editar"/>
						</div>
						<div className="header-title">
							<div className="item-details">
								<p>Nombre del producto <span>{product.title}</span></p>
							</div>
							<div className="item-details">
								<p>Creación <span>{getDateParsed(product.createdAt)}</span></p>
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
								<p>Precio <span>s/. {product.price} </span></p>
							</div>
							<div className="item-details">
								<p>Precio promocional <span>s/. {product.precioPromocional} </span></p>
							</div>
							<div className="item-details">
								<p>Inventario <span>{product.cantDisponible}</span></p>
							</div>
							<div className="item-details">
								<p>Aceptado <span>{product.aceptado ? <img src={iconCheckAvailable} alt="check-available" /> : <img src={iconCheckDisable} alt="" />}</span></p>
							</div>
							<div className="item-details">
								<p>Categoria <span>{product.categoria ? <><img src={iconCheckAvailable} alt="check-available" /> <span> {product.categoria}</span> </> : <img src={iconCheckDisable} alt="" />}</span></p>
							</div>
						</div>
					</Card.Body>
				</Accordion.Collapse>
			</Card>

		</>
	)
}

export default AccordionItem
