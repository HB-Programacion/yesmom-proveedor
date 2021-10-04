import React, { useState } from 'react'
import AppLayout from '../../../components/AppLayout/AppLayout';
import Description from '../../../components/Perfil/Description/Description';
import TitlePerfil from '../../../components/Perfil/TitlePerfil/TitlePerfil';

import iconEditar from '../../../images/header/icon-edit.svg';

import ButtonFilled from '../../../components/Button/ButtonFilled';
import Sidebar from '../../../components/Perfil/Sidebar/Sidebar';
import previewImage from '../../../images/producto/preview.svg';
import close from '../../../images/producto/close.svg';

import './ProfileStoreGeneral.css';
import BackComponent from '../../../components/Return/BackComponent';

const ProfileStoreGeneral = () => {

    const initialState = {
        imgLogo : "",
        imgCover :"",
        imgBanners : {
            imgBanner_1:"",
            imgBanner_2:"",
            imgBanner_3:"",
        },
    }
    const [ images , setImages ] = useState(initialState);

    const handleImageChange = (e) => {
        const name = e.target.name;
        if(e.target.files.length > 0){
            //Setear la imagen
            // console.log(e.target.files[0]);
            setImages({
                ...images,
                [name] : e.target.files[0]
            })
        }else{
            //Setear vacio
            setImages({
                ...images,
                [name] : ""
            })
        }
    }

    const handleImageBanners = (e) => {
        const name = e.target.name;
        const currentBanners = images.imgBanners;
        if(e.target.files.length > 0){
            //Hay imagen de Banner
            setImages({
                ...images,
                imgBanners : {
                    ...currentBanners,
                    [name] : e.target.files[0]
                }
            })
        }else{
            setImages({
                ...images,
                imgBanners : {
                    ...currentBanners,
                    [name] : ""
                }
            })
        }
    }

    const handleUpdateProfile = () => {
        console.log(images);
    }

    const handleCancel = () => {
        console.log('Cancelando');
    }

    return (
        <AppLayout>
            <div className="contenedor-info-perfil-registro animated fade-in">
                <div className="info-perfil-contenido">
                    <div className="info-all-content">
                        <div className="info-contenedor-flex">
                                <div className="hide-desktop info-container-back">
                                    <div> 
                                        <BackComponent />
                                    </div>
                                </div>
                            <div className="flex-left">
                                <div className="info-container-title">
                                    <TitlePerfil />
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
                                                                        disabled
                                                                        name="nameTienda"
                                                                        id="nameTienda"
                                                                        value={ 
                                                                            images?.imgLogo?.name ? images.imgLogo.name : ""
                                                                        }
                                                                    />
                                                                    <h6>*Campo obligatorio</h6>
                                                                </div>
                                                                <div className="profile-container-button">
                                                                    <input
                                                                        type="file"
                                                                        onChange = { handleImageChange }
                                                                        name = "imgLogo"
                                                                        id = "imgLogo"
                                                                        accept="image/png, image/jpeg"
                                                                    />
                                                                    <label htmlFor="imgLogo" className="label-image-profile-store">
                                                                        <ButtonFilled color="blue">
                                                                            Cargar imagen
                                                                        </ButtonFilled>
                                                                    </label>
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
                                                                        disabled
                                                                        value={ 
                                                                            images?.imgCover?.name ? images.imgCover.name : ""
                                                                        }
                                                                        name="nameTienda"
                                                                        id="nameTienda"
                                                                    />
                                                                    <h6>*Campo obligatorio</h6>
                                                                </div>
                                                                <div className="profile-container-button">
                                                                    <input
                                                                        type="file"
                                                                        onChange = { handleImageChange }            
                                                                        id = "imgCover"
                                                                        name = "imgCover"
                                                                        accept="image/png, image/jpeg"
                                                                    />
                                                                    <label htmlFor="imgCover" className="label-image-profile-store">
                                                                        <ButtonFilled color="blue">
                                                                            Cargar imagen
                                                                        </ButtonFilled>
                                                                    </label>
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
                                                                <label className="add--style-label-image" htmlFor="imgBanner_1">
                                                                    Subir imagen
                                                                </label>
                                                                <input
                                                                    type="file"
                                                                    name="imgBanner_1"
                                                                    onChange= { handleImageBanners }
                                                                    id="imgBanner_1"
                                                                    className="add--input-form"
                                                                    accept="image/png, image/jpeg"
                                                                />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="add--container-preview profile-store-container-preview">
                                                            <img className="add--icon-close" src={close} />
                                                            <div className="add--preview-image profile-store-preview-image">
                                                                <img src={previewImage} alt="preview-image" className="mq-mt-3" />
                                                                <div className="add--question-box">
                                                                <label className="add--style-label-image" htmlFor="imgBanner_2">
                                                                    Subir imagen
                                                                </label>
                                                                <input
                                                                    type="file"
                                                                    name="imgBanner_2"
                                                                    onChange= { handleImageBanners }
                                                                    id="imgBanner_2"
                                                                    className="add--input-form"
                                                                    accept="image/png, image/jpeg"
                                                                />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="add--container-preview profile-store-container-preview">
                                                            <img className="add--icon-close" src={close} />
                                                            <div className="add--preview-image profile-store-preview-image">
                                                                <img src={previewImage} alt="preview-image" className="mq-mt-3"/>
                                                                <div className="add--question-box">
                                                                <label className="add--style-label-image" htmlFor="imgBanner_3">
                                                                    Subir imagen
                                                                </label>
                                                                <input
                                                                    type="file"
                                                                    name="imgBanner_3"
                                                                    onChange= { handleImageBanners }
                                                                    id="imgBanner_3"
                                                                    className="add--input-form"
                                                                    accept="image/png, image/jpeg"
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
                                <ButtonFilled color="pink" fxClick= { handleUpdateProfile }>
                                    Guardar
                                </ButtonFilled>      
                            </div>
                            <div className="info-container-button-only">
                                <ButtonFilled color="outline-pink" fxClick={ handleCancel }>
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
