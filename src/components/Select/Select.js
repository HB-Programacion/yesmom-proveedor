import React from 'react'

import "./Select.css"
const Select = ({ htmlFor, idSelect }) => {
  return (
    <div className="container-select">
      <label className="select-label" htmlFor={htmlFor}>Color</label>
      <select id={idSelect}>
        <option>Selecciona el color</option>
      </select>
    </div>
  )
}

export default Select
