import React from 'react'

function AddProductTwo() {
    return (
        <div>
            <div className="question-box">
                    <label className="style-label" htmlFor="nameProduct">
                      Nombre de Producto
                    </label>
                    <input
                      className="style-input"
                      type="text"
                      name="nombre"
                      value={formTextAddProduct.nameProduct}
                      id="nameProduct"
                      onChange={handleInputChange}
                      required
                    />
                    <h6>*Qué producto es</h6>
            </div>
        </div>
    )
}

export default AddProductTwo
