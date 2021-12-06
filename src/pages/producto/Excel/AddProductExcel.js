import React, { useState } from "react";
import AppLayout from "../../../components/AppLayout/AppLayout";
import ButtonFilled from "../../../components/Button/ButtonFilled";
import { Col, Row } from "react-bootstrap";

import bannerMobile from "../../../images/banner.png";
import bannerDesktop from "../../../images/banner-desktop.png";
import ondaBlanca from "../../../images/onda-blanca.svg";
import excelFirst from "../../../images/producto/excel/ExcelFirst.png";
import excelSecond from "../../../images/producto/excel/ExcelSecond.png";
import excelThird from "../../../images/producto/excel/ExcelThird.png";

import circleYellow from "../../../images/producto/excel/circle-yellow.svg";
import arrow from "../../../images/producto/excel/arrow.svg";
import download from "../../../images/producto/excel/download.svg";

import CircleImage from "../../../components/CircleImage/CircleImage";
import "./AddProductExcel.css";
import axios from "axios";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { saveAs } from "file-saver";
import StepperNewStore from "../../../components/PerfilTienda/StepperNewStore";
import { loadProducts } from "../../../redux/actions/store";


const AddProductExcel = () => {
  const initialState = {
    fileProducts: "",
    fileImages: "",
  };
  const dispatch = useDispatch();
  const [files, setFiles] = useState(initialState);
  const { token } = useSelector((state) => state.auth);
  const { idActiveStore } = useSelector( state => state.store);

  const steps = [
    {
      id: 1,
      img: excelFirst,
      description: "Descarga nuestro formato Excel para la carga de productos",
    },
    {
      id: 2,
      img: excelSecond,
      description:
        "Completa la información de tus productos en el formato y súbelo en nuestra web",
    },
    {
      id: 3,
      img: excelThird,
      description:
        "¡Listo! Solo debes esperar a nuestra confirmación para comenzar a vender",
    },
  ];

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFiles({
        ...files,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setFiles({
        ...files,
        [e.target.name]: "",
      });
    }
  };

  const handleUploadProducts = async () => {
    if (files?.fileImages != "" && files?.fileProducts != "") {
      //Existen datos
      const { fileImages, fileProducts } = files;
      const formData = new FormData();

      formData.append("fileImages", fileImages);
      formData.append("fileProducts", fileProducts);
      //TODO: antes de entrar a esta vista debe estar seteado el idActiveStore
      formData.append('storeId', idActiveStore);

      dispatch(loadProducts(formData));

    } else {
      Swal.fire("Campos Obligatorios","Asegurate que los archivos esten correctamente cargados","info");
    }
  };

  const saveFile = () => {
    saveAs("https://d37eaoa53g7y5g.cloudfront.net/yesmom/formats/excelProductos_format.xlsx", "formato-excel.xlsx");
  };


  return (
    <div className="animated fade-in">
      <AppLayout>
        <div className="excel--box-main-proveedor">
          <div className="excel--contenedor-centered">
            {/* <div className="excel--container-banner">
              <img className="img-banner excel--mobile" src={bannerMobile} />
              <img className="img-banner excel--desktop" src={bannerDesktop} />
              <div className="excel--venta-container-title">
                <img
                  className="onda-blanca"
                  src={ondaBlanca}
                  alt="ondas-blanca"
                />
                <p>Productos</p>
                <img
                  className="onda-blanca"
                  src={ondaBlanca}
                  alt="ondas-blanca"
                />
              </div>
            </div> */}

            <div className="container-stepper-excel">
              <p className="title-rosa">Mi Tienda</p>

              <div className="excel-container-stepper">
                  <StepperNewStore selected={1}/>
              </div>
            </div>
            <div className="excel--all-content">
              <div className="excel--container-contenido">
                <h4 className="excel--title-product">
                  ¡Sube tus productos de manera rápida!
                </h4>
                <h5 className="excel--subtitle-product">
                  Sigue este paso a paso y podrás cargar tus productos a nuestro
                  marketplace. Empieza a vender muy rápido
                </h5>

                <div className="excel--container-excel">
                  <Row className="centered-items">
                    {steps.map((step, i) => (
                      <Col key={i} xs={12} md={6} xl={4}>
                        <CircleImage {...step} circleYellow={circleYellow} />
                      </Col>
                    ))}
                  </Row>
                </div>

                <div className="excel--container-import">
                  <img src={arrow} />
                  <h4 className="excel--title-product">Importar productos</h4>
                  <div className="excel-container-download">
                    <div className="excel--flex-1 download">
                      <img clas src={download} alt="formato" />
                    </div>
                    <div className="excel--only-button" onClick={saveFile}>
                      <ButtonFilled color="outline-blue">
                        Descarga el formato
                      </ButtonFilled>
                    </div>{" "}
                  </div>
                </div>

                <div className="excel--container-boxes-option">
                  <div className="excel--box-option">
                    <div className="excel--flex-1">
                      <p>Subir productos</p>
                    </div>

                    <div>
                      <label htmlFor="input-excel-products">
                        <div className="excel--only-button">
                          <ButtonFilled color="blue" fsize="less">
                            Elige desde tu computadora
                          </ButtonFilled>
                        </div>
                      </label>
                      <p className="excel-file-loaded">
                        {files?.fileProducts?.name}
                      </p>
                    </div>
                    <input
                      type="file"
                      className="input-excel-products"
                      id="input-excel-products"
                      name="fileProducts"
                      accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                      onChange={handleFileChange}
                    />
                  </div>
                  <div className="excel--box-option">
                    <div className="excel--flex-1">
                      <p>Subir imágenes (.zip)</p>
                    </div>
                    <div>
                      <label htmlFor="input-zip-images">
                        <div className="excel--only-button">
                          <ButtonFilled color="blue" fsize="less">
                            Elige desde tu computadora
                          </ButtonFilled>
                        </div>
                      </label>
                      <p className="excel-file-loaded">
                        {files?.fileImages?.name}
                      </p>
                    </div>
                  </div>
                  {/* hide */}
                  <input
                    type="file"
                    className="input-zip"
                    id="input-zip-images"
                    name="fileImages"
                    accept=".zip,.rar,.7zip"
                    onChange={handleFileChange}
                  />
                </div>
                <div className="excel--container-save">
                  <ButtonFilled color="pink" fxClick={handleUploadProducts}>
                    Subir y guardar archivo
                  </ButtonFilled>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default AddProductExcel;
