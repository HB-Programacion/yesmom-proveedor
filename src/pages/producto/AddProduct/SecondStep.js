import React from "react";

function AddSecondStep({ formTextAddProduct , handleInputChange }) {
    return (
        <>
            <div className="add--question-box">
                <label className="add--style-label" htmlFor="sku">
                    SKU del producto
                </label>
                <div className="add--container-input">
                    <input
                        className="add--style-input"
                        type="text"
                        name="sku"
                        value={formTextAddProduct.sku}
                        id="sku"
                        onChange={handleInputChange}
                        placeholder="xxxxxxxxxxx"
                        required
                    />
                </div>
            </div>
            <div className="add--question-box">
                <label className="add--style-label" htmlFor="cantDisponible">
                    Cantidad disponible
                </label>
                <div className="add--container-input">
                    <input
                        className="add--style-input"
                        type="text"
                        name="cantDisponible"
                        value={formTextAddProduct.cantDisponible}
                        id="cantDisponible"
                        onChange={handleInputChange}
                        required
                    />
                    <h6>*Número en stock</h6>
                </div>
            </div>
            <div className="add--question-box">
                <label className="add--style-label" htmlFor="precio">
                    Precio
                </label>
                <div className="add--container-input">
                    <input
                        className="add--style-input"
                        type="number"
                        name="precio"
                        value={formTextAddProduct.precio}
                        id="precio"
                        onChange={handleInputChange}
                        required
                    />
                    <h6>* El precio debe estar en soles </h6>
                </div>
            </div>
            <div className="add--question-box">
                <label className="add--style-label" htmlFor="precioPromocional">
                    Precio promocional
                </label>
                <div className="add--container-input">
                    <input
                        className="add--style-input"
                        type="number"
                        name="precioPromocional"
                        value={formTextAddProduct.precioPromocional}
                        id="precioPromocional"
                        onChange={handleInputChange}
                        required
                    />
                    <h6>* El precio debe estar en soles </h6>
                </div>
            </div>
            <div className="add--question-box">
                <label className="add--style-label" htmlFor="fechaInicioPromocion">
                    Fecha inicio de la promoción
                </label>
                <div className="add--container-input">
                    <input
                        type="datetime-local"
                        name="fechaInicioPromocion"
                        id="fechaInicioPromocion"
                        className="add--input-form"
                        onChange={handleInputChange}
                        value={formTextAddProduct.fechaInicioPromocion}
                        required
                    />
                </div>
            </div>
            <div className="add--question-box">
                <label className="add--style-label" htmlFor="fechaFinPromocion">
                    Fecha fin de la promoción
                </label>
                <div className="add--container-input">
                    <input
                        type="datetime-local"
                        name="fechaFinPromocion"
                        id="fechaFinPromocion"
                        className="add--input-form"
                        onChange={handleInputChange}
                        value={formTextAddProduct.fechaFinPromocion}
                        required
                    />
                </div>
            </div>
            <br />

        </>
    );
}

export default AddSecondStep;
