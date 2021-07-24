import React from 'react';
import AppLayout from '../../../components/AppLayout/AppLayout';
import ButtonFilled from '../../../components/Button/ButtonFilled';

import bannerMobile  from '../../../images/banner.png'
import bannerDesktop from '../../../images/banner-desktop.png'

import excelFirst from '../../../images/producto/excel/ExcelFirst.png';
import excelSecond from  '../../../images/producto/excel/ExcelSecond.png';
import excelThird from  '../../../images/producto/excel/ExcelThird.png';

import circleYellow from '../../../images/producto/excel/circle-yellow.svg';
import arrow from '../../../images/producto/excel/arrow.svg';
import download from '../../../images/producto/excel/download.svg';


import './AddProductExcel.css';
import CircleImage from '../../../components/CircleImage/CircleImage';
import { Col, Row } from 'react-bootstrap';
const AddProductExcel = () => {

    const steps=[
        { id : 1 , img:excelFirst, description : "Descarga nuestro formato Excel para la carga de productos"},
        { id : 2 , img:excelSecond, description : "Completa la información de tus productos en el formato y súbelo en nuestra web"},
        { id : 3 , img:excelThird, description : "¡Listo! Solo debes esperar a nuestra confirmación para comenzar a vender"},
    ]

    return (
        <>
            <AppLayout>
                <div className="excel--box-main-proveedor">
                    <div className="excel--contenedor-centered">
                        <div className="excel--container-banner">
                            <img className="excel--mobile" src={bannerMobile} />
                            <img className="excel--desktop" src={bannerDesktop} />
                            <p>Productos</p>
                        </div>
                        <div className="excel--all-content">
                            <div className="excel--container-contenido"> 
                                <h4 className="excel--title-product">¡Sube tus productos de manera rápida!</h4>
                                <h5 className="excel--subtitle-product">Sigue este paso a paso y podrás cargar tus productos a nuestro marketplace. Empieza a vender muy rápido</h5>

                                <div className="excel--container-excel">
                                    <Row className="centered-items">
                                        {steps.map((step,i)=>(
                                            <Col key={i }xs={12} md={6} xl={4}>
                                                <CircleImage {...step} circleYellow={circleYellow} />
                                            </Col>
                                        ))}
                                    </Row>
                                    
                                </div>

                                <div className="excel--container-import">
                                    <img src={arrow}/>
                                    <h4 className="excel--title-product">Importar productos</h4>
                                </div>

                                <div className="excel--container-boxes-option">
                                    <div className="excel--box-option">
                                        <div className="excel--flex-1 download">
                                            <img clas src={download} alt="formato" />
                                        </div>
                                        <div className="excel--only-button">
                                            <ButtonFilled color="outline-blue">
                                                Descarga el formato
                                            </ButtonFilled>
                                        </div>
                                    </div>
                                    <div className="excel--box-option">
                                        <div className="excel--flex-1">
                                            <p>Arrastra el archivo aquí, o</p>
                                        </div>
                                        <div className="excel--only-button">
                                            <ButtonFilled color="blue" fsize="less">
                                                Elige desde tu computadora...
                                            </ButtonFilled>
                                        </div>
                                    </div>
                                </div>
                                <div className="excel--container-save">
                                    <ButtonFilled color="pink">
                                        Guardar
                                    </ButtonFilled>
                                </div>

                            </div> 
                        </div>
                    </div>
                </div>
            </AppLayout>
        </>
    )
}

export default AddProductExcel
