import React from 'react'

import './Input.css';

const Input = ({ placeholder, onChange, id, type = 'text', value  }) => {
	return (
		<div className="input-container">
			<input
				className="style-input"
				type={type}
				name={id}
				id={id}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				// {...register(id)}
			/>
		</div>
	)
}

export default Input
