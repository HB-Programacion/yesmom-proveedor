import React from 'react';
import chroma from 'chroma-js';
import Select from 'react-select';

import './SelectMultipleColor.css';

const SelectMultipleColor = ({ allCollors, defaultArray, onChange }) => {

	const colourStyles = {
		control: styles => ({ ...styles, backgroundColor: 'white' }),
		option: (styles, { data, isDisabled, isFocused, isSelected }) => {
			const color = chroma(data.color);
			return {
				...styles,
				backgroundColor: isDisabled
					? null
					: isSelected
						? data.color
						: isFocused
							? color.alpha(0.1).css()
							: null,
				color: isDisabled
					? '#ccc'
					: isSelected
						? chroma.contrast(color, 'white') > 2
							? 'white'
							: 'black'
						: data.color,
				cursor: isDisabled ? 'not-allowed' : 'default',

				':active': {
					...styles[':active'],
					backgroundColor:
						!isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
				},
			};
		},
		multiValue: (styles, { data }) => {
			const color = chroma(data.color);
			return {
				...styles,
				backgroundColor: color.alpha(0.1).css(),
			};
		},
		multiValueLabel: (styles, { data }) => ({
			...styles,
			color: data.color,
		}),
		multiValueRemove: (styles, { data }) => ({
			...styles,
			color: data.color,
			':hover': {
				backgroundColor: data.color,
				color: 'white',
			},
		}),
	};

	return (
		<>
			{defaultArray.length !== 0 ?
				<Select
					closeMenuOnSelect={false}
					defaultValue={defaultArray}
					isMulti
					options={allCollors}
					styles={colourStyles}
					isSearchable={true}
					onChange={onChange}
					placeholder='Selecciona...'
				/> : null}
		</>
	);


}

export default SelectMultipleColor
