import React from 'react'
import Select from "react-select";

import './SelectMultiple.css';

const SelectMultiple = ({ allSizes, defaultArray, onChange }) => {

	return (
		<>
			{defaultArray.length !== 0 ?
				<Select
					closeMenuOnSelect={false}
					defaultValue={defaultArray}
					isMulti
					name="colors"
					options={allSizes}
					isSearchable={true}
					placeholder='Selecciona...'
					onChange={onChange}
				/> : null}
		</>
	)
}

export default SelectMultiple
