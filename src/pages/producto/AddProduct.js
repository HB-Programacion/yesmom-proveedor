import React, { useState } from "react";
import ButtonFilled from "../../components/Button/ButtonFilled";
// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";
import clienteAxiosBusiness from '../../config/axiosBusiness';


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
    <>
        <div className="box-main-proveedor">
        <div className="contenedor-centered">
          <div>
            <div className="title-content">
              <h4 className="title-add-producto">Carga manual</h4>
              <div className="details-about-product">
                  <p>Datos del producto</p>
                  <p>Precio del producto</p>
                  <p>Imagenes del producto</p>
              </div>
            </div>

            <div className="container-form">
              <form action="" onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="box-new-blog">
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
                  <div className="question-box">
                    <label className="style-label" htmlFor="marca">
                      Modelo o Marca
                    </label>
                    <input
                      className="style-input"
                      type="text"
                      name="marca"
                      value={formTextAddProduct.marca}
                      id="marca"
                      onChange={handleInputChange}
                      /* maxLength="210" */
                      required
                    />
                    <h6>*Qué modelo o marca es</h6>
                  </div>
                  <div className="question-box">
                    <label className="style-label" htmlFor="modelo">
                      Descripción de producto
                    </label>
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
                  <div className="question-box">
                    <label className="style-label" htmlFor="accesorios">
                      Accesorios
                    </label>
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
                  <div className="question-box">
                    <label className="style-label" htmlFor="date-blogger">
                      Color
                    </label>
                    <div className="container-more-options">
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
                  </div>
                  <div className="question-box">
                    <label className="style-label" htmlFor="talla">
                      Talla
                    </label>
                    
                    <div className="container-more-options">
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
                      {/* <input
                        className="style-input"
                        type="text"
                        name="talla2"
                        value={formTextAddProduct.talla2}
                        id="talla"
                        onChange={handleInputChange}
                      />
                      <input
                        className="style-input"
                        type="text"
                        name="talla3"
                        value={formTextAddProduct.talla3}
                        id="talla"
                        onChange={handleInputChange}
                      /> */}
                    </div>
                  </div>
                  <div className="question-box">
                    <label className="style-label" htmlFor="categoria">
                      Categoria
                    </label>
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
                  <div className="question-box">
                    <label className="style-label" htmlFor="subcategoria">
                      Categoria adicional
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
                    <label className="style-label" htmlFor="terminos">
                      Términos y condiciones del producto
                    </label>
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
                  <div className="question-box">
                    <label className="style-label" htmlFor="dimensiones">
                      Dimensiones y peso
                    </label>
                    <input
                        className="style-input"
                        type="text"
                        name="dimensiones"/* ESTE NO EXISTE! */
                        /* value={formTextAddProduct.talla2} */
                        id="dimensiones"
                        /* onChange={handleInputChange} */
                      />
                    <h6>* Tamaño del producto largo x ancho en cm ó peso en kg</h6>
                    {/* <input
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
                    /> */}
                  </div>
                  <div className="question-box">
                    <label className="style-label" htmlFor="material">
                      Material
                    </label>
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
                  <div className="question-box">
                    <label className="style-label" htmlFor="sku">
                      SKU del producto
                    </label>
                    <input
                      className="style-input"
                      type="text"
                      name="sku"
                      value={formTextAddProduct.sku}
                      id="sku"
                      onChange={handleInputChange}
                      placeholder="xxxxxxxxxxx"
                      required
                    />
                  </div>
                  <div className="question-box">
                    <label className="style-label" htmlFor="cantDisponible">
                      Cantidad disponible
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
                    <h6>*Número en stock</h6>
                  </div>
                  <div className="question-box">
                    <label className="style-label" htmlFor="precio">
                      Precio
                    </label>
                    <input
                      className="style-input"
                      type="number"
                      name="precio"
                      value={formTextAddProduct.precio}
                      id="precio"
                      onChange={handleInputChange}
                      required
                    />
                    <h6>* El precio debe estar en soles </h6>
                  </div>
                  <div className="question-box">
                    <label className="style-label" htmlFor="precioPromocional">
                      Precio promocional
                    </label>
                    <input
                      className="style-input"
                      type="number"
                      name="precioPromocional"
                      value={formTextAddProduct.precioPromocional}
                      id="precioPromocional"
                      onChange={handleInputChange}
                      required
                    />
                    <h6>* El precio debe estar en soles </h6>
                  </div>
                  <div className="question-box">
                    <label className="style-label" htmlFor="fechaInicioPromocion">
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
                    <label className="style-label" htmlFor="fechaFinPromocion">
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
                  <p>Imagenes</p>
                  <h6 className="title-imagenes">* Todas las imagenes tienen que ser en fondo blanco sin marco de agua  / formato de 300 px x 300 px / png o jpg</h6>
                  
                  <div className="container-images">
                      <div className="container-preview">
                        <img className="icon-close" src={process.env.PUBLIC_URL+"/assets/images/producto/close.svg"} />
                          <div className="preview-image">
                              <img src={process.env.PUBLIC_URL+"/assets/images/producto/preview.svg"} alt="preview-image" />
                              <p>Cargar imagen</p>
                          </div>
                      </div>
                      <div className="container-preview">
                        <img className="icon-close" src={process.env.PUBLIC_URL+"/assets/images/producto/close.svg"}  />
                          <div className="preview-image">
                            <img src={process.env.PUBLIC_URL+"/assets/images/producto/preview.svg"} alt="preview-image" />
                              <p>Cargar imagen</p>
                          </div>
                      </div>
                      <div className="container-preview">
                        <img className="icon-close" src={process.env.PUBLIC_URL+"/assets/images/producto/close.svg"} />
                          <div className="preview-image">
                            <img src={process.env.PUBLIC_URL+"/assets/images/producto/preview.svg"} alt="preview-image" />
                              <p>Cargar imagen</p>
                          </div>
                      </div>

                      <div className="container-agregar">
                        <img className="icon-add" src={process.env.PUBLIC_URL+"/assets/images/producto/add.svg"} />
                        <p>Agregar más fotos</p>
                      </div>
                  </div>
                  {/* <div className="question-box">
                    <label className="style-label" htmlFor="imagenProducto1">
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
                    <label className="style-label" htmlFor="imagenProducto2">
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
                    <label className="style-label" htmlFor="imagenProducto3">
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
                    <label className="style-label" htmlFor="imagenProducto4">
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
                    <label className="style-label" htmlFor="imagenProducto5">
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
                    <label className="style-label" htmlFor="imagenProducto6">
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
                    <label className="style-label" htmlFor="imagenProducto7">
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
                    <label className="style-label" htmlFor="imagenProducto8">
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
                  </div> */} 

                </div>
              </form>

            </div>
            <div className="container-boton">
              <ButtonFilled color="#FEBF41">
                Continuar
              </ButtonFilled>
            </div>
              {/* <div className="button-box">
                <button type="submit" className="button-blue">
                  Crear
                </button>
                <button className="button-white">Cancelar</button>
              </div> */}
          </div>
        </div>
      </div>
      <style jsx>
          {`
              /* globals */

              h4{
                  margin:2rem 0;
              }
              h6{
                  margin:0;
                  margin-top:1rem;
                  margin-bottom:2rem;
              }

              .box-main-proveedor{
                  padding: 8rem 0;
              }

              .contenedor-centered{
                  /* display:flex;
                  justify-content: center;
                  align-items: center; */
                  margin:0 2.5rem;
              }

              /* TITLE */
              .title-add-producto{
                  font-family: "mont-semibold"!important;
                  font-size:2.5rem;
                  color:#DC6A8D;
              }
              .title-content{
                  display:flex;
                  flex-direction: column;
                  align-items: center;
                  margin-bottom:2rem;
              }
              .details-about-product{
                  width:100%;
                  display:flex;
                  flex-direction: row;
                  justify-content: space-between;
              }
              .details-about-product p{
                  margin:0;

                  font-family: "mont-semibold";
                  text-align: center;
                  width:33.3%;
                  color:#5A5A5A;
                  font-size:1.3rem;
                  line-height: 1.7rem;
                  border-right: 1px solid #5A5A5A;
              }
              .details-about-product p:last-of-type{
                  border:none;
              }
              .details-product-about p{
                  font-size:1.3rem;

              }

              /*FORM*/
              .container-form{
                  background: #FFFFFF;
                  border: 10px solid #FFFFFF;
                  box-shadow: 0px 0px 33px rgba(0, 0, 0, 0.13);
                  border-radius: 20px;
                  padding:2rem 1.5rem 5rem 1.5rem;
                  margin-bottom:5rem;
              }

              .question-box{
                  display:flex;
                  flex-direction: column;
                  margin-top:1.5rem;
              }

              .question-box label{
                  font-family: "mont-semibold"!important;
                  color: #5A5A5A;
                  margin-bottom:1rem;
                  font-size:1.4rem;
              }
              .question-box input,textarea,select{
                  font-family: "mont-regular"!important;
                  color:rgba(90, 90, 90, 0.5);
              }
              input::placeholder{
                  color:rgba(90, 90, 90, 0.5);
              }
              .question-box input[type="text"],input[type="number"]{
                  
                  border:none;
                  border-bottom:1px solid #DADADA;
              }
              .question-box textarea{
                  border:1px solid #DADADA;
                  border-radius:20px;
                  height:15rem;
                  padding:1.5rem;
              }
              .question-box select{
                  background: #FFFFFF;
                  border: 1px solid #4B64A4;
                  box-sizing: border-box;
                  border-radius: 10px;
                  padding:1rem 1.5rem;

                  background: url(https://i.ibb.co/FV44fdF/image.png) no-repeat right #ffffff;
                  background-size: 1.25rem;
                  -webkit-appearance: none;
                  -moz-appearance: none;
                  appearance: none;
                  background-position-x: 95% ;
              }
              .question-box h6{
                  margin-bottom:0;
                  font-family: "mont-regular"!important;
                  font-size:1.2rem;
                  letter-spacing: 0.03rem;
                  color:rgba(90, 90, 90, 0.5);
              }
              .question-box input:focus,textarea:focus,select:focus{
                  outline: none;
              }

              .container-boton{
                  margin: 0 3rem;
              }

              /**SECOND STEP */
              
              /**THIRD */
              .container-images{
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:center;
              }
              .container-preview{
                position:relative;
                background: #FFFFFF;
                border: 1px solid #FFFFFF;
                box-sizing: border-box;
                box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.15), -4px -4px 4px rgba(0, 0, 0, 0.15);
                border-radius: 10px;
                padding:0.75rem;
                margin: 1rem 0;
              }
              .icon-close{
                position:absolute;
                top:-0.75rem;
                right:-0.75rem;
                
              }
              
              .title-imagenes{
                font-family:"mont-semibold"!important;
                font-size:1.3rem;
                color:#575650;
                
              }
              .preview-image{
                width:18rem;
                height:18rem;
                border: 2px dashed #4B64A4;
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:center;
              }
              .preview-image p{
                font-family:"mont-semibold";
                text-decoration:underline;
                color:#4B64A4;
                font-size:1.5rem;
              }

              .container-agregar{
                display:flex;
                align-items:center;
                justify-content:center;
                margin-top:1rem;
              
              }
              .container-agregar p{
                font-family: 'mont-regular';
                font-size: 1.4rem;
                line-height: 18px;
                text-decoration:underline;
                color: #4B64A4;
                margin-left:0.5rem;
              }


          `}
      </style>
    </>
  );
};

export default AddProduct;