import React, { useState } from "react";
import AppLayout from "../../../components/AppLayout/AppLayout";
import Header from "../../../components/Header/Header";
import ButtonFilled from "../../../components/Producto/Button/ButtonFilled";
/* import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content"; */
import clienteAxiosBusiness from '../../../config/axiosBusiness';
import FirstStep from "./FirstStep";
import AddSecondStep from "./SecondStep";
import AddThirdPart from "./ThirdStep";




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

  const [selection,setSelection] = useState(0);


  const handleSelection = ()=> {
    setSelection(selection+1);
  }

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
    console.log("*********");
    e.preventDefault();
    const data = new FormData();
    data.append("nombre", formTextAddProduct.nombre);
    /* data.append("modelo", formTextAddProduct.modelo); */
    data.append("descripcion", formTextAddProduct.descripcion);
    data.append("categoria", formTextAddProduct.categoria);
    data.append("accesorios", formTextAddProduct.accesorios);
    data.append("subcategoria", formTextAddProduct.subcategoria);
    data.append("terminos", formTextAddProduct.terminos);
    data.append("cantDisponible", formTextAddProduct.cantDisponible);
    data.append("precio", formTextAddProduct.precio);
    data.append("color1", formTextAddProduct.color1);
    data.append("color2", formTextAddProduct.color2);
    data.append("color3", formTextAddProduct.color3);
    data.append("color4", formTextAddProduct.color4);
    data.append("color5", formTextAddProduct.color5);
    data.append("color6", formTextAddProduct.color6);
    data.append("talla1", formTextAddProduct.talla1);
    data.append("talla2", formTextAddProduct.talla2);
    data.append("talla3", formTextAddProduct.talla3);
    // data.append("marca", formTextAddProduct.marca);
    /* data.append("sku", formTextAddProduct.sku); */
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
    
    for(var pair of data.entries()) {
      console.log(pair[0]+ ', '+ pair[1]);
   }
    console.log("**************");
    await clienteAxiosBusiness
      .post("/product/new-product?userType=admin", data)
      .then((res) => {
        console.log("RESPUESTA EXITOSA");
        console.log(res, "res");
         /* MySwal.fire({
           position: "center",
           icon: "success",
           title: "Tu blog se guardo exitosamente",
           showConfirmButton: false,
           // timer: 3500,
         });
         window.location.reload(); */
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
        <AppLayout>

            <div className="box-main-proveedor">
            <div className="contenedor-centered">
              <div className="all-content">
                <div className="title-content">
                  <h4 className="title-add-producto">Carga manual</h4>
                  <div className="details-about-product">
                      <p  onClick={()=>setSelection(0)}  className={`${selection === 0 ? "selected" : ""}`}>Datos del producto</p>
                      <p  onClick={()=>setSelection(1)}  className={`${selection === 1 ? "selected" : ""}`}>Precio del producto</p>
                      <p  onClick={()=>setSelection(2)}  className={`${selection === 2 ? "selected" : ""}`}>Imagenes del producto</p>
                  </div>
                </div>
                  {selection == 2 && <h6 className="title-imagenes">* Todas las imagenes tienen que ser en fondo blanco sin marco de agua  / formato de 300 px x 300 px / png o jpg</h6>}
                  <form className="container-form" action="" /* onSubmit={handleSubmit} */ encType="multipart/form-data">
                      {selection === 0 && 
                        <FirstStep 
                          formTextAddProduct={formTextAddProduct} 
                          handleInputChange={handleInputChange} 
                        />
                      }
                      {selection === 1 && 
                        <AddSecondStep 
                          formTextAddProduct={formTextAddProduct} 
                          handleInputChange={handleInputChange} 
                        />
                      }
                      {selection === 2 && <AddThirdPart handleFileChange={handleFileChange}/> }
                  </form>
                  <div className="flex-boton">
                      <div className="container-boton">
                          {selection!==2 ?
                
                            <ButtonFilled color="second" fxClick={handleSelection}>
                              Continuar
                            </ButtonFilled>
                          : 
                            <ButtonFilled color="first" fxClick={handleSubmit}>
                              Continuar
                            </ButtonFilled>
                          }
                      </div> 
                  </div>
              </div>
            </div>
          </div>
        </AppLayout>
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
              
              .selected{
                color:#4B64A4!important;
                text-decoration: underline;
              }
              .box-main-proveedor{
                  padding: 12rem 0;
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
                  cursor:pointer;
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
                  width:100%;
                  font-family: "mont-regular"!important;
                  color:rgba(90, 90, 90, 0.5);
              }
              
              textarea{
                width:calc(100% - 3rem);
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
              .hidden-images{
                display:none;
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
                font-family:"mont-regular"!important;
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
              
              /**FILES */
              
              input[type="file"]{
                width: 0.1px;
                height: 0.1px;
                opacity: 0;
                overflow: hidden;
                position: absolute;
                z-index: -1
              }
              label[class="style-label-image"]{
                  font-family:"mont-semibold";
                  text-decoration:underline;
                  color:#4B64A4;
                  font-size:1.5rem;
              }
              
              @media (min-width:480px){
                  .all-content{
                    min-width:48rem;
                  }
                  .contenedor-centered{
                    display:flex;
                    justify-content:center;
                    align-items:center;
                  }
              }
              @media (min-width:768px){
                  .all-content{
                    max-width:55rem;
                  }
                  .title-add-producto{
                      font-size:2.7rem;
                  }
                  .question-box{
                    display:flex;
                    flex-direction:row;
                  }
                  .question-box label{
                    flex-basis : 25%;
                  }
                  .style-label-image{
                    cursor:pointer;
                    flex-basis:100%!important;
                  }
                  .container-input{
                    flex-grow:1;
                    margin-left:4rem;
                    width:calc(4rem);
                  }
                  textarea{
                    width:100%;
                    height:13rem!important;
                  }
                  input[type="text"],input[type="number"],input[type="datetime-local"],textarea{
                    border: 1px solid #4B64A4!important;
                    box-sizing: border-box;
                    border-radius: 10px;
                    padding:1rem 1.5rem;
                  }
              
                  .container-images{
                    flex-direction:row;
                    flex-wrap: wrap;
                    /* justify-content: center; */
                  }
                  .container-preview{
                    margin:2rem;
                  }
              
                  .hidden-images:nth-child(4){
                    display:block;
                  }
                  .flex-boton{
                    display:flex;
                    align-items: center;
                    justify-content: center;
                  }
                  .container-boton{
                    width:30rem;
                  }
                  
              }
              
              @media (min-width : 1024px){
                  .all-content{
                    min-width:50rem;
                    max-width:77.5rem;
                  }
                  /* .container-preview{
                    flex-basis: 25%;
                    margin:2rem;
                  } */
                  .hidden-images:nth-child(5),
                  .hidden-images:nth-child(6){
                    display:block;
                  }
                  /* .container-preview{
                    width:15rem;
                    height:15rem;
                  }
                  .preview-image{
                    width:100%;
                    height:100%;
                  } */
                  label[class="style-label-image"]{
                    font-size:1.2rem;
                  }
              
                  .container-boton{
                    width:40rem;
                  }
              }
              @media (min-width : 1280px){
                  .all-content{
                    min-width:65rem;
                    max-width:98rem;
                  }
                  .container-preview{
                    margin:1.5rem;
                  }
                  .hidden-images:nth-child(7),
                  .hidden-images:nth-child(8){
                    display:block;
                  }
                  .container-agregar{
                    display:none;
                  }
                  select{
                    width:55%;
                  }
              }
          `}
        </style>
    </>
  );
};

export default AddProduct;