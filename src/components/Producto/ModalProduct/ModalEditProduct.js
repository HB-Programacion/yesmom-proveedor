import React, { useEffect, useState } from 'react'
import moment from "moment";
import Input from '../../Input/Input'
import Select from '../../Select/Select'
import SelectMultipleColor from '../../SelectMultiple/SelectMultipleColor'
import SelectMultiple from '../../SelectMultiple/SelectMultiple'
import './ModalEditProduct.css'

const ModalEditProduct = ({ product }) => {
	const [nombre, setNombre] = useState(product.nombre)
	const [descripcion, setDescripcion] = useState(product.descripcion)
	const [precio, setPrecio] = useState(product.precio)
	const [peso, setPeso] = useState(product.peso)
	const [color, setColor] = useState([...product.color])
	const [colorNew, setColorNew] = useState([])
	const [talla, setTalla] = useState([...product.talla])
	const [tallaNew, setTallaNew] = useState([])
	const [categoria, setCategoria] = useState(product.categoria)
	const [dimensiones, setDimensiones] = useState({
		largo: product.dimensiones.largo,
		ancho: product.dimensiones.ancho,
		alto: product.dimensiones.alto
	})
	const [fechaInicioPromocion, setFechaInicioPromocion] = useState(moment.utc(product.fechaInicioPromocion).format('YYYY-MM-DD'))
	const [fechaFinPromocion, setFechaFinPromocion] = useState(moment.utc(product.fechaFinPromocion).format('YYYY-MM-DD'))

	const [selectedOptionColor, setSelectedOptionColor] = useState(null)
	const [selectedOptionTalla, setSelectedOptionTalla] = useState(null)

	let arrayColoresGen = [
		{ value: 'verde', label: 'verde', color: 'green' },
		{ value: 'morado', label: 'morado', color: '#8512BE' },
		{ value: 'turqueza', label: 'turqueza', color: '#87E4EC' },
		{ value: 'rosado', label: 'rosado', color: 'pink' },
		{ value: 'amarillo', label: 'amarillo', color: '#F9EB37' },
		{ value: 'anaranjado', label: 'anaranjado', color: '#FF8C00' },
		{ value: 'rojo', label: 'rojo', color: '#FF0000' },
		{ value: 'azul', label: 'azul', color: '#0000CD' }
	];

	const arrayTallasGen = [
		{ value: '0', label: '0' },
		{ value: '2', label: '2' },
		{ value: '4', label: '4' },
		{ value: '6', label: '6' },
		{ value: '8', label: '8' },
		{ value: '10', label: '10' },
	];

	const functionCompareColor = () => {
		let newArray = []
		let iguales = 0;
		for (let i in arrayColoresGen) {
			for (let j in arrayColoresGen) {
				if (arrayColoresGen[i].value == color[j]) {
					iguales++;
					newArray.push(arrayColoresGen[parseInt(i)])
				}
			}
		}
		setColorNew(newArray)
	}
	const functionCompareTalla = () => {
		let newArray = []
		let iguales = 0;
		for (let i in arrayTallasGen) {
			for (let j in arrayTallasGen) {
				if (arrayTallasGen[i].value == talla[j]) {
					iguales++;
					newArray.push(arrayTallasGen[parseInt(i)])
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
		setSelectedOptionColor({ selectedOptionColor });
	};

	const handleChangeTalla = selectedOptionTalla => {
		setSelectedOptionTalla({ selectedOptionTalla });
	};

	return (
		<div className="content-update-product">
			<div className="updprod-section">
				<label htmlFor="nombre">Nombre del producto</label>
				<Input onChange={(e) => setNombre(e.target.value)} id='name' type='text' value={nombre} />
			</div>
			<div className="updprod-section">
				<label htmlFor="decripcion">Decripción del producto</label>
				<Input onChange={(e) => setDescripcion(e.target.value)} id='description' type='text' value={descripcion} />
			</div>
			<div className="updprod-section">
				<label htmlFor="color">Color</label>
				<SelectMultipleColor defaultArray={colorNew} allCollors={arrayColoresGen} onChange={handleChangeColor} />
			</div>
			<div className="updprod-section">
				<label htmlFor="talla">Talla</label>
				<SelectMultiple defaultArray={tallaNew} allSizes={arrayTallasGen} onChange={handleChangeTalla} />
			</div>
			<div className="updprod-section">
				<label htmlFor="nombre">Nombre del producto</label>
				<Input onChange={(e) => setPrecio(e.target.value)} id='' type='number' value={precio} />
			</div>
			<div className="updprod-section">
				<label htmlFor="nombre">Peso del producto</label>
				<Input onChange={(e) => setPeso(e.target.value)} id='' type='number' value={peso} />
			</div>
			<div className="updprod-section">
				<label htmlFor="nombre">Categoría del producto</label>
				<Input onChange={(e) => setCategoria(e.target.value)} id='' type='text' value={categoria} />
			</div>
			<div className="updprod-section updprod-section-dimensiones">
				<div className="updprod-section-item">
					<label htmlFor="nombre">Largo</label>
					<Input onChange={(e) => setDimensiones({ largo: e.target.value })} id='' type='number' value={dimensiones.largo} />
				</div>
				<div className="updprod-section-item">
					<label htmlFor="nombre">Ancho</label>
					<Input onChange={(e) => setDimensiones({ ancho: e.target.value })} id='' type='number' value={dimensiones.ancho} />
				</div>
				<div className="updprod-section-item">
					<label htmlFor="nombre">Alto</label>
					<Input onChange={(e) => setDimensiones({ alto: e.target.value })} id='' type='number' value={dimensiones.alto} />
				</div>
			</div>
			<div className="updprod-section">
				<label htmlFor="nombre">Fecha inicio de promoción</label>
				<Input onChange={(e) => setFechaInicioPromocion(e.target.value)} id='' type='date' value={fechaInicioPromocion} />
			</div>
			<div className="updprod-section">
				<label htmlFor="nombre">Fecha fin de promoción</label>
				<Input onChange={(e) => setFechaFinPromocion(e.target.value)} id='' type='date' value={fechaFinPromocion} />
			</div>
		</div>
	)
}

export default ModalEditProduct
