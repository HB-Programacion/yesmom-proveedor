import React from 'react'
import { Link } from 'react-router-dom';
import AppLayout from '../../../components/AppLayout/AppLayout';
import Description from '../../../components/Perfil/Description/Description';
import TitlePerfil from '../../../components/Perfil/TitlePerfil/TitlePerfil';

import back from '../../../images/perfil/back.svg';
import iconEditar from '../../../images/header/icon-edit.svg';

import ButtonFilled from '../../../components/Button/ButtonFilled';
import Sidebar from '../../../components/Perfil/Sidebar/Sidebar';
import previewImage from '../../../images/producto/preview.svg';
import close from '../../../images/producto/close.svg';

import './ProfileStoreGeneral.css';
import { Col, Row } from 'react-bootstrap';

const ProfileStoreGeneral = () => {
    return (
        <AppLayout>
            <div className="contenedor-info-perfil-registro">
                <div className="info-perfil-contenido">
                    <div className="info-all-content">
                        <div className="info-contenedor-flex">
                                <div className="hide-desktop info-container-back">
                                    <div> 
                                        <Link to="/informacion-perfil">
                                            <div className="show return">
                                                <img src={back} alt="volver" />
                                                <p className="info-perfil-back">Volver</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            <div className="flex-left">
                                <div className="info-container-title">
                                    <TitlePerfil name="Baby Plaza Store" email="example@babyplaza.com" />
                                </div>
                                <Sidebar />
                            </div>
                            <div className="flex-right flex-right-ml">
                                <Description title="Perfil de tienda" description="Aquí encontrarás tu tienda. Si la quieres modificar 
                                    asegúrate de llenar todos los campos" />
                                <div className="info-container-content profile-store-container-content">
                                    <div className="registro-container-form info-container-form pt-6 mt-5 mb-2">
                                        <div className="info-icon-editar">
                                            <img src={iconEditar} />
                                        </div>
                                        <form>
                                            <div className="profile-store-wrapper-tienda">
                                                <h4 className="profile-flex-left registro-title op-8 mb-4">Nombre de la tienda</h4>
                                                <div className="profile-flex-right">
                                                    <input type="text" className="profile-store-input"/>
                                                </div>
                                            </div>
                                            <div className="profile-store-wrapper-tienda">
                                                <div className="profile-flex-desktop">
                                                    <h4 className="profile-flex-left registro-title op-8 mb-4">Adjuntar logo</h4>
                                                    <div className="profile-flex-right">
                                                        <div className="wrapper-input profile-store-wrapper-input">
                                                            <label htmlFor="nameTienda">Debe tener como medidas 446x168 px y una resolución de 300pxD</label>
                                                            <div className="profile-flex-input-button">
                                                                <div className="profile-flex-input">
                                                                    <input
                                                                        className="w-100 box-cargar-imagen"
                                                                        type="text"
                                                                        name="nameTienda"
                                                                        id="nameTienda"
                                                                    />
                                                                    <h6>*Campo obligatorio</h6>
                                                                </div>
                                                                <div className="profile-container-button">
                                                                    <ButtonFilled color="blue">
                                                                        Cargar imagen
                                                                    </ButtonFilled>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            

                                            <div className="profile-store-wrapper-tienda mt-5">
                                                <div className="profile-flex-desktop">
                                                    <h4 className="profile-flex-left registro-title op-8 mb-4">Cover de portada</h4>
                                                    <div className="profile-flex-right">
                                                        <div className="wrapper-input profile-store-wrapper-input">
                                                            <label htmlFor="nameTienda">Debe tener como medidas 1111x352 px y una resolución de 300pxD</label>
                                                           <div className="profile-flex-input-button">
                                                                <div className="profile-flex-input">
                                                                    <input
                                                                        className="w-100 box-cargar-imagen"
                                                                        type="text"
                                                                        name="nameTienda"
                                                                        id="nameTienda"
                                                                    />
                                                                    <h6>*Campo obligatorio</h6>
                                                                </div>
                                                                <div className="profile-container-button">
                                                                    <ButtonFilled color="blue">
                                                                        Cargar imagen
                                                                    </ButtonFilled>
                                                                </div>
                                                            </div> 
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="profile-flex-desktop">
                                                <div className="profile-store-wrapper-tienda profile-flex-left mt-5">
                                                    <h4 className="registro-title op-8 mb-4">Banners promocionales</h4>
                                                </div>

                                                <div className="add--container-images w-100 profile-flex-right">
                                                    <div className="profile-store-wrapper-input">
                                                        <h6>Debe tener como medidas 1920x613 px y una resolución de 300pxD</h6>
                                                    </div>
                                                    <div className="flex-container-images">

                                                        <div className="add--container-preview profile-store-container-preview">
                                                            <img className="add--icon-close" src={close} />
                                                            <div className="add--preview-image profile-store-preview-image">
                                                                <img src={previewImage} alt="preview-image" className="mq-mt-3"/>
                                                                <div className="add--question-box">
                                                                <label className="add--style-label-image" htmlFor="imagenBanner1">
                                                                    Subir imagen
                                                                </label>
                                                                <input
                                                                    type="file"
                                                                    name="imagenBanner1"
                                                                    id="imagenBanner1"
                                                                    className="add--input-form"
                                                                />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="add--container-preview profile-store-container-preview">
                                                            <img className="add--icon-close" src={close} />
                                                            <div className="add--preview-image profile-store-preview-image">
                                                                <img src={previewImage} alt="preview-image" className="mq-mt-3" />
                                                                <div className="add--question-box">
                                                                <label className="add--style-label-image" htmlFor="imagenBanner2">
                                                                    Subir imagen
                                                                </label>
                                                                <input
                                                                    type="file"
                                                                    name="imagenBanner2"
                                                                    id="imagenBanner2"
                                                                    className="add--input-form"
                                                                />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="add--container-preview profile-store-container-preview">
                                                            <img className="add--icon-close" src={close} />
                                                            <div className="add--preview-image profile-store-preview-image">
                                                                <img src={previewImage} alt="preview-image" className="mq-mt-3"/>
                                                                <div className="add--question-box">
                                                                <label className="add--style-label-image" htmlFor="imagenBanner3">
                                                                    Subir imagen
                                                                </label>
                                                                <input
                                                                    type="file"
                                                                    name="imagenBanner3"
                                                                    id="imagenBanner3"
                                                                    className="add--input-form"
                                                                />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="info-hr" />

                        <div className="info-container-buttons">
                            <div className="info-container-button-only">
                                <ButtonFilled color="pink">
                                    Previsualizar
                                </ButtonFilled>      
                            </div>
                            <div className="info-container-button-only">
                                <ButtonFilled color="outline-pink">
                                    Cancelar
                                </ButtonFilled>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default ProfileStoreGeneral
