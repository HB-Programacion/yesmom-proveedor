import React, { useEffect, useState } from 'react'
import moment from "moment";

import Input from '../../Input/Input'
import Select from '../../Select/Select'
import SelectMultipleColor from '../../SelectMultiple/SelectMultipleColor'
import SelectMultiple from '../../SelectMultiple/SelectMultiple'


import { allowedColors , allowedTallas } from '../../../utils/helpers/getAllowedColors';

import './ModalEditProduct.css'
const ModalEditProduct = ({ register ,  product , errors}) => {

	console.log(errors);

	// const [nombre, setNombre] = useState(product.title)
	// const [descripcion, setDescripcion] = useState(product.description)
	// const [precio, setPrecio] = useState(product.price)
	// const [peso, setPeso] = useState(product.peso)
	const [color, setColor] = useState([...product.color])
	const [colorNew, setColorNew] = useState([])
	const [talla, setTalla] = useState(product.talla)
	const [tallaNew, setTallaNew] = useState([])
	// const [categoria, setCategoria] = useState(product.categoria)
	// const [dimensiones, setDimensiones] = useState({
	// 	largo: product.dimensiones.largo,
	// 	ancho: product.dimensiones.ancho,
	// 	alto: product.dimensiones.alto
	// })
	// const [fechaInicioPromocion, setFechaInicioPromocion] = useState(moment.utc(product.fechaInicioPromocion).format('YYYY-MM-DD'))
	// const [fechaFinPromocion, setFechaFinPromocion] = useState(moment.utc(product.fechaFinPromocion).format('YYYY-MM-DD'))

	const [selectedOptionColor, setSelectedOptionColor] = useState([])
	const [selectedOptionTalla, setSelectedOptionTalla] = useState([])




	const functionCompareColor = () => {
		let newArray = []
		let iguales = 0;
		for (let i in allowedColors) {
			for (let j in allowedColors) {
				if (allowedColors[i].value == color[j]) {
					iguales++;
					newArray.push(allowedColors[parseInt(i)])
				}
			}
		}
		setColorNew(newArray)
	}
	const functionCompareTalla = () => {
		let newArray = []
		let iguales = 0;
		for (let i in allowedTallas) {
			for (let j in allowedTallas) {
				if (allowedTallas[i].value == talla[j]) {
					iguales++;
					newArray.push(allowedTallas[parseInt(i)])
				}
			}
		}
		setTallaNew(newArray)
	}

	useEffect(() => {
		functionCompareColor()
		functionCompareTalla()
	}, [])

	const handleChangeColor = selectedOptionColor => {
		console.log(selectedOptionColor)
		// let arrColors = [...selectedOptionColor];
		// arrColors.push
		setSelectedOptionColor({ ...selectedOptionColor });
	};

	const handleChangeTalla = selectedOptionTalla => {
		setSelectedOptionTalla({ ...selectedOptionTalla });
	};

	return (
		<div className="content-update-product">
			<div className="updprod-section">
				<label htmlFor="nombre">Nombre del producto</label>
				<input 
					name="nombre"
					className="style-input" 
					{...register('nombre')}
				/>
				{/* <Input 
					onChange={(e) => setNombre(e.target.value)} 
					id='name' 
					type='text' 
					value={nombre}
					register= { register }
				/> */}
				<p className="error-input"> { errors?.nombre?.message && '*Campo incorrecto' } </p>
			</div>
			<div className="updprod-section">
				<label htmlFor="decripcion">Decripción del producto</label>
				<input 
					name="descripcion"
					className="style-input" 
					{...register('descripcion')}
				/>
				<p className="error-input"> { errors?.descripcion?.message && '*Campo incorrecto' } </p>
				{/* <Input onChange={(e) => setDescripcion(e.target.value)} id='description' type='text' value={descripcion} /> */}
			</div>
			<div className="updprod-section">
				<label htmlFor="color">Color</label>
				<SelectMultipleColor defaultArray={colorNew} allCollors={allowedColors} onChange={handleChangeColor} />
			</div>
			<div className="updprod-section">
				<label htmlFor="talla">Talla</label>
				<SelectMultiple defaultArray={tallaNew} allSizes={allowedTallas} onChange={handleChangeTalla} />
			</div>
			<div className="updprod-section">
				<label htmlFor="nombre">Precio del producto</label>
				<input 
					name="precio"
					className="style-input" 
					{...register('precio')}
				/>
				<p className="error-input"> { errors?.precio?.message && '*Campo incorrecto' } </p>
				{/* <Input onChange={(e) => setPrecio(e.target.value)} id='' type='number' value={precio} /> */}
			</div>
			<div className="updprod-section">
				<label htmlFor="nombre">Peso del producto</label>
				<input 
					name="peso"
					className="style-input" 
					{...register('peso')}
				/>
				<p className="error-input"> { errors?.peso?.message && '*Campo incorrecto' } </p>
				{/* <Input onChange={(e) => setPeso(e.target.value)} id='' type='number' value={peso} /> */}
			</div>
			<div className="updprod-section">
				<label htmlFor="nombre">Categoría del producto</label>
				<input 
					name="categoria"
					className="style-input" 
					{...register('categoria')}
				/>
				<p className="error-input"> { errors?.categoria?.message && '*Campo incorrecto' } </p>
				{/* <Input onChange={(e) => setCategoria(e.target.value)} id='' type='text' value={categoria} /> */}
			</div>
			<div className="updprod-section updprod-section-dimensiones">
				<div className="updprod-section-item">
					<label htmlFor="nombre">Largo</label>
					<input 
						name="largo"
						type="number"
						className="style-input" 
						{...register('largo')}
					/>
					<p className="error-input"> { errors?.largo?.message && '*Campo incorrecto' } </p>
					{/* <Input onChange={(e) => setDimensiones({ largo: e.target.value })} id='' type='number' value={dimensiones.largo} /> */}
				</div>
				<div className="updprod-section-item">
					<label htmlFor="nombre">Ancho</label>
					<input 
						name="ancho"
						type="number"
						className="style-input" 
						{...register('ancho')}
					/>
					<p className="error-input"> { errors?.ancho?.message && '*Campo incorrecto' } </p>
					{/* <Input onChange={(e) => setDimensiones({ ancho: e.target.value })} id='' type='number' value={dimensiones.ancho} /> */}
				</div>
				<div className="updprod-section-item">
					<label htmlFor="nombre">Alto</label>
					<input 
						name="alto"
						type="number"
						className="style-input" 
						{...register('alto')}
					/>
					<p className="error-input"> { errors?.alto?.message && '*Campo incorrecto' } </p>
					{/* <Input onChange={(e) => setDimensiones({ alto: e.target.value })} id='' type='number' value={dimensiones.alto} /> */}
				</div>
			</div>
			<div className="updprod-section">
				<label htmlFor="nombre">Fecha inicio de promoción</label>
				<input 
					name="fechaInicioPromocion"
					type="date"
					className="style-input" 
					{...register('fechaInicioPromocion')}
				/>
				<p className="error-input"> { errors?.fechaInicioPromocion?.message && '*Campo incorrecto' } </p>
				{/* <Input onChange={(e) => setFechaInicioPromocion(e.target.value)} id='' type='date' value={fechaInicioPromocion} /> */}
			</div>
			<div className="updprod-section">
				<label htmlFor="nombre">Fecha fin de promoción</label>
				<input 
					name="fechaFinPromocion"
					type="date"
					className="style-input" 
					{...register('fechaFinPromocion')}
				/>
				<p className="error-input"> { errors?.fechaFinPromocion?.message && '*Campo incorrecto' } </p>
				{/* <Input onChange={(e) => setFechaFinPromocion(e.target.value)} id='' type='date' value={fechaFinPromocion} /> */}
			</div>
		</div>
	)
}

export default ModalEditProduct
