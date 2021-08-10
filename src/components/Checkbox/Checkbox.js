import React from 'react'

import './Checkbox.css'

const Checkbox = ({ content }) => {
  return (
    <div className="checkbox-container">
      <input className="checkbox-item" type="checkbox" />
      <label className="checkbox-option" for="cb1">{content}</label>
    </div>
  )
}

export default Checkbox
