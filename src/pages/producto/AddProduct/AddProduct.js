import React, { useState } from "react";
import AppLayout from "../../../components/AppLayout/AppLayout";
import ButtonFilled from "../../../components/Button/ButtonFilled";
import clienteAxiosBusiness from '../../../config/axiosBusiness';
import FirstStep from "./FirstStep";
import AddSecondStep from "./SecondStep";
import AddThirdPart from "./ThirdStep";


import './AddProduct.css';


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

            <div className="add--box-main-proveedor">
            <div className="add--contenedor-centered">
              <div className="add--all-content">
                <div className="add--title-content">
                  <h4 className="title-rosa">Carga manual</h4>
                  <div className="add--details-about-product">
                      <p  onClick={()=>setSelection(0)}  className={`${selection === 0 ? "selected" : ""}`}>Datos del producto</p>
                      <p  onClick={()=>setSelection(1)}  className={`${selection === 1 ? "selected" : ""}`}>Precio del producto</p>
                      <p  onClick={()=>setSelection(2)}  className={`${selection === 2 ? "selected" : ""}`}>Imagenes del producto</p>
                  </div>
                </div>
                  {selection == 2 && <h6 className="add--title-imagenes">* Todas las imagenes tienen que ser en fondo blanco sin marco de agua  / formato de 300 px x 300 px / png o jpg</h6>}
                  <form className="add--container-form" action="" /* onSubmit={handleSubmit} */ encType="add--multipart/form-data">
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
                  <div className="add--flex-boton">
                      <div className="add--container-boton">
                          {selection!==2 ?
                
                            <ButtonFilled color="yellow" fxClick={handleSelection}>
                              Continuar
                            </ButtonFilled>
                          : 
                            <ButtonFilled color="pink" fxClick={handleSubmit}>
                              Continuar
                            </ButtonFilled>
                          }
                      </div> 
                  </div>
              </div>
            </div>
          </div>
        </AppLayout>
    </>
  );
};

export default AddProduct;