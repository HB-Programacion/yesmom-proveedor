import React from 'react'
import "./Select.css"

const Select = ({ idSelect, options, value, onChange }) => {
	return (
		<div className="container-select">
			<select value={value} id={idSelect} onChange={onChange}>
				<option>Selecciona el color</option>
				{options && options}
			</select>
		</div>
	)
}

export default Select
