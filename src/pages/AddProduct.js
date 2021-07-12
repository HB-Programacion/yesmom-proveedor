import React, { useState } from "react";
// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";
import clienteAxiosBusiness from './../config/axiosBusiness';
const AddProduct = () => {
  const [formDimensiones, setFormDimensiones] = useState([{
    largo: "",
    ancho: "",
    altura: ""

  }])
  const [formTextAddProduct, setFormTextAddProduct] = useState({
    nombre: "",
    modelo: "",
    descripcion: "",
    accesorios: "",
    color1: "",
    color2: "",
    color3: "",
    color4: "",
    color5: "",
    color6: "",
    talla1: "",
    talla2: "",
    talla3: "",
    categoria: "",
    subcategoria: "",
    terminos: "",
    material:"",
    sku: "",
    cantDisponible: "",
    precio: "",
    precioPromocional: "",
    fechaInicioPromocion: "",
    fechaFinPromocion: "",
    largo:"",
    ancho:"",
    alto:""
  });
  const [selectedFile, setSelectedFile] = useState({
    imagenProducto1: "",
    imagenProducto2: "",
    imagenProducto3: "",
    imagenProducto4: "",
    imagenProducto5: "",
    imagenProducto6: "",
    imagenProducto7: "",
    imagenProducto8: "",
  });
  const handleInputChange = (e) => {
    e.preventDefault();
    if (!e.target.value.trim()) {
      // setError("Agregar texto de nombre, marca, descripción y  autor");
      setFormTextAddProduct({
        ...formTextAddProduct,
        [e.target.name]: "",
      });
    }  else  {
      setFormTextAddProduct({
        ...formTextAddProduct,
        [e.target.name]: e.target.value,
      });
      // setError(null);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("nombre", formTextAddProduct.nombre);
    // data.append("modelo", formTextAddProduct.modelo);
    data.append("descripcion", formTextAddProduct.descripcion);
    data.append("accesorios", formTextAddProduct.accesorios);
    data.append("color1", formTextAddProduct.color1);
    data.append("color2", formTextAddProduct.color2);
    data.append("color3", formTextAddProduct.color3);
    data.append("color4", formTextAddProduct.color4);
    data.append("color5", formTextAddProduct.color5);
    data.append("color6", formTextAddProduct.color6);
    data.append("talla1", formTextAddProduct.talla1);
    data.append("talla2", formTextAddProduct.talla2);
    data.append("talla3", formTextAddProduct.talla3);
    data.append("categoria", formTextAddProduct.categoria);
    data.append("subcategoria", formTextAddProduct.subcategoria);
    data.append("terminos", formTextAddProduct.terminos);
    // data.append("marca", formTextAddProduct.marca);
    data.append("sku", formTextAddProduct.sku);
    data.append("cantDisponible", formTextAddProduct.cantDisponible);
    data.append("precio", formTextAddProduct.precio);
    data.append("precioPromocional", formTextAddProduct.precioPromocional);
    data.append("sku", formTextAddProduct.sku);
    data.append("fechaInicioPromocion", formTextAddProduct.fechaInicioPromocion);
    data.append("fechaFinPromocion", formTextAddProduct.fechaFinPromocion);
    data.append("largo", formTextAddProduct.largo);
    data.append("ancho", formTextAddProduct.ancho);
    data.append("alto", formTextAddProduct.alto);
    data.append("imagenProducto1", selectedFile.imagenProducto1);
    data.append("imagenProducto2", selectedFile.imagenProducto2);
    data.append("imagenProducto3", selectedFile.imagenProducto3);
    data.append("imagenProducto4", selectedFile.imagenProducto4);
    data.append("imagenProducto5", selectedFile.imagenProducto5);
    data.append("imagenProducto6", selectedFile.imagenProducto6);
    data.append("imagenProducto7", selectedFile.imagenProducto7);
    data.append("imagenProducto8", selectedFile.imagenProducto8);
    console.log(formDimensiones, "dimensiones")
    console.log(formTextAddProduct, "texto");
    console.log(selectedFile, "imagenes")

    await clienteAxiosBusiness
      .post("/product/new-product?userType=admin", data)
      .then((res) => {
        console.log(res, "res");
        // MySwal.fire({
        //   position: "center",
        //   icon: "success",
        //   title: "Tu blog se guardo exitosamente",
        //   showConfirmButton: false,
        //   // timer: 3500,
        // });
        // window.location.reload();
      })
      .catch((e) => {
        console.log(e, "error");
        alert(e);
        // window.location.reload();
      });
  };

  const handleFileChange = (event) => {
    event.preventDefault();
    let input = event.target;
    if (input.files && input.files[0]) {
      const sizeByte = input.files[0].size;
      const sizeMegaByte = parseFloat(sizeByte / (1024 * 1024)).toFixed(2);
      let reader = new FileReader();
      reader.onload = (e) => {
        if (sizeMegaByte > 1) {
          console.log("El tamaño máximo es de 1mb")
        } else {
          // setAlertError(null)
          setSelectedFile({
            ...selectedFile,
            [input.name]: input.files[0],
            // imgOfertaPantalla: e.target.result,
          });
        }

      };
      reader.readAsDataURL(input.files[0]);

    }
  };

  return (
    <div>
      <h4>Agregar Nuevo Producto</h4>
      <form action="" onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="box-new-blog">
          <h6 className="subtitle">Datos del Blog</h6>
          <div className="question-box">
            <label className="style-label" htmlFor="titulo-articulo">
              Nombre de Producto:
            </label>
            <input
              className="style-input"
              type="text"
              name="nombre"
              value={formTextAddProduct.nameProduct}
              id="nameProduct"
              onChange={handleInputChange}
              placeholder="Nombre de Producto"
              required
            />
          </div>
          {/* <div className="question-box">
            <label className="style-label" htmlFor="descripción-articulo">
              Modelo o Marca:
            </label>
            <textarea
              className="style-input"
              type="text"
              name="marca"
              value={formTextAddProduct.marca}
              id="marca"
              onChange={handleInputChange}
              placeholder="Modelo o Marca"
              maxLength="210"
              required
            />
          </div> */}
          <div className="question-box">
            <label className="style-label" htmlFor="descripción-articulo">
              Descripción de producto:
            </label>
            <textarea
              className="style-input"
              type="text"
              name="descripcion"
              value={formTextAddProduct.descripcion}
              id="modelo"
              onChange={handleInputChange}
              placeholder="Descripción de producto"
              maxLength="210"
              required
            />
          </div>
          <div className="question-box">
            <label className="style-label" htmlFor="date-blogger">
              Accesorios:
            </label>
            <textarea
              className="style-input"
              type="text"
              name="accesorios"
              value={formTextAddProduct.accesorios}
              id="date-blogger"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="question-box">
            <label className="style-label" htmlFor="date-blogger">
              Color:
            </label>
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
          <div className="question-box">
            <label className="style-label" htmlFor="date-blogger">
              Talla:
            </label>
            <input
              className="style-input"
              type="text"
              name="talla1"
              value={formTextAddProduct.talla1}
              id="date-blogger"
              onChange={handleInputChange}
              required
            />
            <input
              className="style-input"
              type="text"
              name="talla2"
              value={formTextAddProduct.talla2}
              id="date-blogger"
              onChange={handleInputChange}
            />
            <input
              className="style-input"
              type="text"
              name="talla3"
              value={formTextAddProduct.talla3}
              id="date-blogger"
              onChange={handleInputChange}
            />
          </div>
          <div className="question-box">
            <label className="style-label" htmlFor="date-blogger">
              Categoria:
            </label>
            <select name="categoria" id="categoria"
              value={formTextAddProduct.categoria}
              onChange={handleInputChange}
              required>
              <option>Ropa</option>

              <option>Juegos</option>

              <option>Tecnología</option>

            </select>
          </div>
          <div className="question-box">
            <label className="style-label" htmlFor="date-blogger">
              Sub Categoria:
            </label>
            <select name="subcategoria" id="subcategoria"
              value={formTextAddProduct.subcategoria}
              onChange={handleInputChange}
              required>
              <option>Vestidos</option>

              <option>Zapatos</option>

              <option>Abrigo</option>

            </select>
          </div>
          <div className="question-box">
            <label className="style-label" htmlFor="date-blogger">
              Terminos:
            </label>
            <textarea
              className="style-input"
              type="text"
              name="terminos"
              value={formTextAddProduct.terminos}
              id="date-blogger"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="question-box">
            <label className="style-label" htmlFor="date-blogger">
              Dimensiones
            </label>
            <input
              className="style-input"
              type="number"
              name="largo"
              value={formTextAddProduct.largo}
              id="date-blogger"
              onChange={handleInputChange}
            />
            <input
              className="style-input"
              type="number"
              name="ancho"
              value={formTextAddProduct.ancho}
              id="date-blogger"
              onChange={handleInputChange}
              required
            />
            <input
              className="style-input"
              type="number"
              name="alto"
              value={formTextAddProduct.alto}
              id="date-blogger"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="question-box">
            <label className="style-label" htmlFor="titulo-articulo">
              Material:
            </label>
            <input
              className="style-input"
              type="text"
              name="material"
              value={formTextAddProduct.material}
              id="nameProduct"
              onChange={handleInputChange}
              placeholder="Material"
              required
            />
          </div>
          <div className="question-box">
            <label className="style-label" htmlFor="titulo-articulo">
              SKU del producto:
            </label>
            <input
              className="style-input"
              type="text"
              name="sku"
              value={formTextAddProduct.sku}
              id="sku"
              onChange={handleInputChange}
              placeholder="SKU"
              required
            />
          </div>
          <div className="question-box">
            <label className="style-label" htmlFor="titulo-articulo">
              Cantidad Disponible:
            </label>
            <input
              className="style-input"
              type="text"
              name="cantDisponible"
              value={formTextAddProduct.cantDisponible}
              id="cantDisponible"
              onChange={handleInputChange}
              placeholder="Cantidad Disponible"
              required
            />
          </div>
          <div className="question-box">
            <label className="style-label" htmlFor="titulo-articulo">
              Precio:
            </label>
            <input
              className="style-input"
              type="number"
              name="precio"
              value={formTextAddProduct.precio}
              id="precio"
              onChange={handleInputChange}
              placeholder="Precio"
              required
            />
          </div>
          <div className="question-box">
            <label className="style-label" htmlFor="titulo-articulo">
              Precio Promocional:
            </label>
            <input
              className="style-input"
              type="number"
              name="precioPromocional"
              value={formTextAddProduct.precioPromocional}
              id="precioPromocional"
              onChange={handleInputChange}
              placeholder="Precio Promocional"
              required
            />
          </div>
          <div className="question-box">
            <label className="style-label" htmlFor="titulo-articulo">
              Fecha inicio de la promoción
            </label>
            <input
              type="datetime-local"
              name="fechaInicioPromocion"
              id="fechaInicioPromocion"
              className="input-form"
              onChange={handleInputChange}
              value={formTextAddProduct.fechaInicioPromocion}
              required
            />
          </div>
          <div className="question-box">
            <label className="style-label" htmlFor="titulo-articulo">
              Fecha fin de la promoción
            </label>
            <input
              type="datetime-local"
              name="fechaFinPromocion"
              id="fechaFinPromocion"
              className="input-form"
              onChange={handleInputChange}
              value={formTextAddProduct.fechaFinPromocion}
              required
            />
          </div>
          <div className="question-box">
            <label className="style-label" htmlFor="titulo-articulo">
              Imagen 1
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
          <div className="question-box">
            <label className="style-label" htmlFor="titulo-articulo">
              Imagen 2
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
          <div className="question-box">
            <label className="style-label" htmlFor="titulo-articulo">
              Imagen 3
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
          <div className="question-box">
            <label className="style-label" htmlFor="titulo-articulo">
              Imagen 4
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
          <div className="question-box">
            <label className="style-label" htmlFor="titulo-articulo">
              Imagen 5
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
          <div className="question-box">
            <label className="style-label" htmlFor="titulo-articulo">
              Imagen 6
            </label>
            <input
              type="file"
              name="imageProducto6"
              id="imagenProducto6"
              className="input-form"
              accept="image/png, image/jpeg, image/jpg"
              onChange={handleFileChange}
            />
          </div>
          <div className="question-box">
            <label className="style-label" htmlFor="titulo-articulo">
              Imagen 7
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
          <div className="question-box">
            <label className="style-label" htmlFor="titulo-articulo">
              Imagen 8
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

          <div className="button-box">
            <button type="submit" className="button-blue">
              Crear
            </button>
            <button className="button-white">Cancelar</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;