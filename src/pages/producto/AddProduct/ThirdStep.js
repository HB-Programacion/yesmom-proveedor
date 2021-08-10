import React from 'react'

import previewImage from '../../../images/producto/preview.svg';
import close from '../../../images/producto/close.svg';

import iconAddProduct from '../../../images/producto/add.svg';
import DragnDrop from '../../../components/DragnDrop/DragnDrop';

function AddThirdPart({ handleFileChange }) {
  return (
    <>
      <div className="add--container-images">
        {/* 
        <DragnDrop image={previewImage} name="imagenProducto1" id="imagenProducto1" onChange={handleFileChange} required='true' />
        <DragnDrop image={previewImage} name="imagenProducto2" id="imagenProducto2" onChange={handleFileChange} required='false' />
        <DragnDrop image={previewImage} name="imagenProducto3" id="imagenProducto3" onChange={handleFileChange} required='false' />
        <DragnDrop image={previewImage} name="imagenProducto4" id="imagenProducto4" onChange={handleFileChange} required='false' />
        <DragnDrop image={previewImage} name="imagenProducto5" id="imagenProducto5" onChange={handleFileChange} required='false' />
        <DragnDrop image={previewImage} name="imagenProducto6" id="imagenProducto6" onChange={handleFileChange} required='false' />
        <DragnDrop image={previewImage} name="imagenProducto7" id="imagenProducto7" onChange={handleFileChange} required='false' />
        <DragnDrop image={previewImage} name="imagenProducto8" id="imagenProducto8" onChange={handleFileChange} required='false' />
         */}
        <div className="add--container-preview">
          <img className="add--icon-close" src={close} />
          <div className="add--preview-image">
            <img src={previewImage} alt="preview-image" />
            <div className="add--question-box">
              <label className="add--style-label-image" htmlFor="imagenProducto1">
                Cargar imagen
              </label>
              <input
                type="file"
                name="imagenProducto1"
                id="imagenProducto1"
                className="add--input-form"
                accept="image/png, image/jpeg, image/jpg"
                onChange={handleFileChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="add--container-preview">
          <img className="add--icon-close" src={close} />
          <div className="add--preview-image">
            <img src={previewImage} alt="preview-image" />
            <div className="add--question-box">
              <label className="add--style-label-image" htmlFor="imagenProducto2">
                Cargar imagen
              </label>
              <input
                type="file"
                name="imagenProducto2"
                id="imagenProducto2"
                className="add--input-form"
                accept="image/png, image/jpeg, image/jpg"
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>
        <div className="add--container-preview">
          <img className="add--icon-close" src={close} />
          <div className="add--preview-image">
            <img src={previewImage} alt="preview-image" />
            <div className="add--question-box">
              <label className="add--style-label-image" htmlFor="imagenProducto3">
                Cargar imagen
              </label>
              <input
                type="file"
                name="imagenProducto3"
                id="imagenProducto3"
                className="add--input-form"
                accept="image/png, image/jpeg, image/jpg"
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>

        <div className="add--container-preview add--hidden-images">
          <img className="add--icon-close" src={close} />
          <div className="add--preview-image">
            <img src={previewImage} alt="preview-image" />
            <div className="add--question-box">
              <label className="add--style-label-image" htmlFor="imagenProducto4">
                Cargar imagen
              </label>
              <input
                type="file"
                name="imagenProducto4"
                id="imagenProducto4"
                className="add--input-form"
                accept="image/png, image/jpeg, image/jpg"
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>
        <div className="add--container-preview add--hidden-images">
          <img className="add--icon-close" src={close} />
          <div className="add--preview-image">
            <img src={previewImage} alt="preview-image" />
            <div className="add--question-box">
              <label className="add--style-label-image" htmlFor="imagenProducto5">
                Cargar imagen
              </label>
              <input
                type="file"
                name="imagenProducto5"
                id="imagenProducto5"
                className="add--input-form"
                accept="image/png, image/jpeg, image/jpg"
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>
        <div className="add--container-preview add--hidden-images">
          <img className="add--icon-close" src={close} />
          <div className="add--preview-image">
            <img src={previewImage} alt="preview-image" />
            <div className="add--question-box">
              <label className="add--style-label-image" htmlFor="imagenProducto6">
                Cargar imagen
              </label>
              <input
                type="file"
                name="imagenProducto6"
                id="imagenProducto6"
                className="add--input-form"
                accept="image/png, image/jpeg, image/jpg"
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>
        <div className="add--container-preview add--hidden-images">
          <img className="add--icon-close" src={close} />
          <div className="add--preview-image">
            <img src={previewImage} alt="preview-image" />
            <div className="add--question-box">
              <label className="add--style-label-image" htmlFor="imagenProducto7">
                Cargar imagen
              </label>
              <input
                type="file"
                name="imagenProducto7"
                id="imagenProducto7"
                className="add--input-form"
                accept="image/png, image/jpeg, image/jpg"
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>
        <div className="add--container-preview add--hidden-images">
          <img className="add--icon-close" src={close} />
          <div className="add--preview-image">
            <img src={previewImage} alt="preview-image" />
            <div className="add--question-box">
              <label className="add--style-label-image" htmlFor="imagenProducto8">
                Cargar imagen
              </label>
              <input
                type="file"
                name="imagenProducto8"
                id="imagenProducto8"
                className="add--input-form"
                accept="image/png, image/jpeg, image/jpg"
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>

      </div>
      <div className="add--container-agregar">
        <img className="add--icon-add" src={iconAddProduct} />
        <p>Agregar más fotos</p>
      </div>
    </>
  )
}

export default AddThirdPart
