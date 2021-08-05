import React from 'react'
import close from '../../images/producto/close.svg';

import './DragnDrop.css';

const DragnDrop = ({ name, id, onChange, image, required }) => {
  return (
    <div>
      <div className="add--container-preview">
        <img className="add--icon-close" src={close} />
        <div className="add--preview-image">
          <img src={image} alt="preview-image" />
          <div className="add--question-box">
            <label className="add--style-label-image" htmlFor={id}>
              Cargar imagen
            </label>
            <input
              type="file"
              name={name}
              id={id}
              className="add--input-form"
              accept="image/png, image/jpeg, image/jpg"
              onChange={onChange}
              required={required}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DragnDrop
