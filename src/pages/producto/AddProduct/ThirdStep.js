import React from 'react'
import './AddProduct';

function AddThirdPart({ handleFileChange }) {
    return (
        <>
            <div className="container-images">
                <div className="container-preview">
                    <img className="icon-close" src={process.env.PUBLIC_URL + "/assets/images/producto/close.svg"} />
                    <div className="preview-image">
                        <img src={process.env.PUBLIC_URL + "/assets/images/producto/preview.svg"} alt="preview-image" />
                        <div className="question-box">
                            <label className="style-label-image" htmlFor="imagenProducto1">
                                Cargar imagen
                            </label>
                            <input
                                type="file"
                                name="imagenProducto1"
                                id="imagenProducto1"
                                className="input-form"
                                accept="image/png, image/jpeg, image/jpg"
                                onChange={handleFileChange}
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className="container-preview">
                    <img className="icon-close" src={process.env.PUBLIC_URL + "/assets/images/producto/close.svg"} />
                    <div className="preview-image">
                        <img src={process.env.PUBLIC_URL + "/assets/images/producto/preview.svg"} alt="preview-image" />
                        <div className="question-box">
                            <label className="style-label-image" htmlFor="imagenProducto2">
                                Cargar imagen
                            </label>
                            <input
                                type="file"
                                name="imagenProducto2"
                                id="imagenProducto2"
                                className="input-form"
                                accept="image/png, image/jpeg, image/jpg"
                                onChange={handleFileChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="container-preview">
                    <img className="icon-close" src={process.env.PUBLIC_URL + "/assets/images/producto/close.svg"} />
                    <div className="preview-image">
                        <img src={process.env.PUBLIC_URL + "/assets/images/producto/preview.svg"} alt="preview-image" />
                        <div className="question-box">
                            <label className="style-label-image" htmlFor="imagenProducto3">
                                Cargar imagen
                            </label>
                            <input
                                type="file"
                                name="imagenProducto3"
                                id="imagenProducto3"
                                className="input-form"
                                accept="image/png, image/jpeg, image/jpg"
                                onChange={handleFileChange}
                            />
                        </div>
                    </div>
                </div>

                <div className="container-preview hidden-images">
                    <img className="icon-close" src={process.env.PUBLIC_URL + "/assets/images/producto/close.svg"} />
                    <div className="preview-image">
                        <img src={process.env.PUBLIC_URL + "/assets/images/producto/preview.svg"} alt="preview-image" />
                        <div className="question-box">
                            <label className="style-label-image" htmlFor="imagenProducto4">
                                Cargar imagen
                            </label>
                            <input
                                type="file"
                                name="imagenProducto4"
                                id="imagenProducto4"
                                className="input-form"
                                accept="image/png, image/jpeg, image/jpg"
                                onChange={handleFileChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="container-preview hidden-images">
                    <img className="icon-close" src={process.env.PUBLIC_URL + "/assets/images/producto/close.svg"} />
                    <div className="preview-image">
                        <img src={process.env.PUBLIC_URL + "/assets/images/producto/preview.svg"} alt="preview-image" />
                        <div className="question-box">
                            <label className="style-label-image" htmlFor="imagenProducto5">
                                Cargar imagen
                            </label>
                            <input
                                type="file"
                                name="imagenProducto5"
                                id="imagenProducto5"
                                className="input-form"
                                accept="image/png, image/jpeg, image/jpg"
                                onChange={handleFileChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="container-preview hidden-images">
                    <img className="icon-close" src={process.env.PUBLIC_URL + "/assets/images/producto/close.svg"} />
                    <div className="preview-image">
                        <img src={process.env.PUBLIC_URL + "/assets/images/producto/preview.svg"} alt="preview-image" />
                        <div className="question-box">
                            <label className="style-label-image" htmlFor="imagenProducto6">
                                Cargar imagen
                            </label>
                            <input
                                type="file"
                                name="imagenProducto6"
                                id="imagenProducto6"
                                className="input-form"
                                accept="image/png, image/jpeg, image/jpg"
                                onChange={handleFileChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="container-preview hidden-images">
                    <img className="icon-close" src={process.env.PUBLIC_URL + "/assets/images/producto/close.svg"} />
                    <div className="preview-image">
                        <img src={process.env.PUBLIC_URL + "/assets/images/producto/preview.svg"} alt="preview-image" />
                        <div className="question-box">
                            <label className="style-label-image" htmlFor="imagenProducto7">
                                Cargar imagen
                            </label>
                            <input
                                type="file"
                                name="imagenProducto7"
                                id="imagenProducto7"
                                className="input-form"
                                accept="image/png, image/jpeg, image/jpg"
                                onChange={handleFileChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="container-preview hidden-images">
                    <img className="icon-close" src={process.env.PUBLIC_URL + "/assets/images/producto/close.svg"} />
                    <div className="preview-image">
                        <img src={process.env.PUBLIC_URL + "/assets/images/producto/preview.svg"} alt="preview-image" />
                        <div className="question-box">
                            <label className="style-label-image" htmlFor="imagenProducto8">
                                Cargar imagen
                            </label>
                            <input
                                type="file"
                                name="imagenProducto8"
                                id="imagenProducto8"
                                className="input-form"
                                accept="image/png, image/jpeg, image/jpg"
                                onChange={handleFileChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-agregar">
                <img className="icon-add" src={process.env.PUBLIC_URL + "/assets/images/producto/add.svg"} />
                <p>Agregar más fotos</p>
            </div>
        </>
    )
}

export default AddThirdPart
