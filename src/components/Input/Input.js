import React from 'react'

import './Input.css';

const Input = ({ placeholder, onChange }) => {
  return (
    <div className="input-container">
      <input
        className="style-input"
        type="text"
        name="search"
        id="search"
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Input
