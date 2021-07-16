import React from 'react'

function FirstStep({ formTextAddProduct , handleInputChange}) {
    
    return (
        <>
            <div className="question-box">
                <label className="style-label" htmlFor="nameProduct">
                    Nombre de Producto
                </label>
                <div className="container-input">
                    <input
                        className="style-input"
                        type="text"
                        name="nombre"
                        value={formTextAddProduct.nombre}
                        id="nameProduct"
                        onChange={handleInputChange}
                        required
                    />
                    <h6>*Qué producto es</h6>
                </div>
            </div>
            <div className="question-box">
                <label className="style-label" htmlFor="marca">
                    Modelo o Marca
                </label>
                <div className="container-input">
                    <input
                        className="style-input"
                        type="text"
                        name="modelo"
                        value={formTextAddProduct.modelo}
                        id="modelo"
                        onChange={handleInputChange}
                        /* maxLength="210" */
                        required
                    />
                    <h6>*Qué modelo o marca es</h6>
                </div>
            </div>
            <div className="question-box">
                <label className="style-label" htmlFor="modelo">
                    Descripción de producto
                </label>
                <div className="container-input">
                    <textarea
                        className="style-input"
                        type="text"
                        name="descripcion"
                        value={formTextAddProduct.descripcion}
                        id="modelo"
                        onChange={handleInputChange}
                        maxLength="150"
                        required
                    />
                    <h6>*150 palabras como máximo</h6>
                </div>
            </div>
            <div className="question-box">
                <label className="style-label" htmlFor="accesorios">
                    Accesorios
                </label>
                <div className="container-input">
                    <textarea
                        className="style-input"
                        type="text"
                        name="accesorios"
                        value={formTextAddProduct.accesorios}
                        id="accesorios"
                        onChange={handleInputChange}
                        required
                    />
                    <h6>*Solo en caso que el producto incluya accesorios adicionales  </h6>
                </div>
            </div>
            <div className="question-box">
                <label className="style-label" htmlFor="date-blogger">
                    Color
                </label>
                <div className="container-input container-more-options">
                    <input
                        className="style-input"
                        type="color"
                        name="color1"
                        value={formTextAddProduct.color1}
                        id="date-blogger"
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        className="style-input"
                        type="color"
                        name="color2"
                        value={formTextAddProduct.color2}
                        id="date-blogger"
                        onChange={handleInputChange}
                    />
                    <input
                        className="style-input"
                        type="color"
                        name="color3"
                        value={formTextAddProduct.color3}
                        id="date-blogger"
                        onChange={handleInputChange}
                    />
                    <input
                        className="style-input"
                        type="color"
                        name="color4"
                        value={formTextAddProduct.color4}
                        id="date-blogger"
                        onChange={handleInputChange}
                    />
                    <input
                        className="style-input"
                        type="color"
                        name="color5"
                        value={formTextAddProduct.color5}
                        id="date-blogger"
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        className="style-input"
                        type="color"
                        name="color6"
                        value={formTextAddProduct.color6}
                        id="date-blogger"
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="container-agregar">
                    <img className="icon-add" src={process.env.PUBLIC_URL + "/assets/images/producto/add.svg"} />
                    <p>Agregar más colores</p>
                </div>
            </div>
            <div className="question-box">
                <label className="style-label" htmlFor="talla">
                    Talla
                </label>

                <div className="container-input container-more-options">
                    <input
                        className="style-input"
                        type="text"
                        name="talla1"
                        value={formTextAddProduct.talla1}
                        id="talla"
                        onChange={handleInputChange}
                        required
                    />
                    <h6>*Escribe la talla de la prenda</h6>
                    <input
                        className="style-input"
                        type="text"
                        name="talla2"
                        value={formTextAddProduct.talla2}
                        id="talla"
                        onChange={handleInputChange}
                    />
                    <h6>*Escribe la talla de la prenda</h6>
                    <input
                        className="style-input"
                        type="text"
                        name="talla3"
                        value={formTextAddProduct.talla3}
                        id="talla"
                        onChange={handleInputChange}
                    />
                    <h6>*Escribe la talla de la prenda</h6>
                </div>
                <div className="container-agregar">
                    <img className="icon-add" src={process.env.PUBLIC_URL + "/assets/images/producto/add.svg"} />
                    <p>Agregar más tallas</p>
                </div>
            </div>
            <div className="question-box">
                <label className="style-label" htmlFor="categoria">
                    Categoria
                </label>
                <div className="container-input">
                    <select name="categoria" id="categoria"
                        value={formTextAddProduct.categoria}
                        onChange={handleInputChange}
                        required>
                        <option>Ropa</option>

                        <option>Juegos</option>

                        <option>Tecnología</option>

                    </select>
                    <h6>* Selecciona a que categoría pertenece tu producto</h6>
                </div>
            </div>
            <div className="question-box">
                <label className="style-label" htmlFor="subcategoria">
                    Categoria adicional
                </label>
                <div className="container-input">
                    <select name="subcategoria" id="subcategoria"
                        value={formTextAddProduct.subcategoria}
                        onChange={handleInputChange}
                        required>
                        <option>Vestidos</option>

                        <option>Zapatos</option>

                        <option>Abrigo</option>

                    </select>
                </div>
            </div>
            <div className="question-box">
                <label className="style-label" htmlFor="terminos">
                    Términos y condiciones del producto
                </label>
                <div className="container-input">
                    <textarea
                        className="style-input"
                        type="text"
                        name="terminos"
                        value={formTextAddProduct.terminos}
                        id="terminos"
                        onChange={handleInputChange}
                        required
                    />
                    <h6>* Términos y condiciones de la venta del producto  (150 palabras como máximo)</h6>
                </div>
            </div>
            <div className="question-box">
                <label className="style-label" htmlFor="dimensiones">
                    Dimensiones y peso
                </label>
                <div className="container-input">
                    <input
                        className="style-input"
                        type="text"
                        name="dimensiones"/* ESTE NO EXISTE! */
                        /* value={formTextAddProduct.talla2} */
                        id="dimensiones"
                    /* onChange={handleInputChange} */
                    />
                    <h6>* Tamaño del producto largo x ancho en cm ó peso en kg</h6>
                </div>
                <input
                    className="style-input"
                    type="number"
                    name="largo"
                    value={formTextAddProduct.largo}
                    id="dimensiones"
                    onChange={handleInputChange}
                />
                <input
                    className="style-input"
                    type="number"
                    name="ancho"
                    value={formTextAddProduct.ancho}
                    id="dimensiones"
                    onChange={handleInputChange}
                    required
                />
                <input
                    className="style-input"
                    type="number"
                    name="alto"
                    value={formTextAddProduct.alto}
                    id="dimensiones"
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="question-box">
                <label className="style-label" htmlFor="material">
                    Material
                </label>
                <div className="container-input">
                    <input
                        className="style-input"
                        type="text"
                        name="material"
                        value={formTextAddProduct.material}
                        id="material"
                        onChange={handleInputChange}
                        required
                    />
                    <h6>* Material del producto</h6>
                </div>
            </div>
        </>
    )
}

export default FirstStep
