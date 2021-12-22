import React from 'react'
import { getUrlName } from '../../../utils/helpers/getUlrName'
import ButtonFilled from '../../Button/ButtonFilled'

import close from '../../../images/producto/close.svg';
import previewImage from '../../../images/producto/preview.svg';

import '../../../pages/perfil/tienda/ProfileStoreGeneral';
const StoreInfo = ( {
    nameStore,
    availableName,
    preview , 
    refCover,
    refLogo,
    images ,
    handleImageChange,
    handleImageBanners,
    handleChangeNameUrl,
}) => {
    return (
        <>
           <div className="registro-container-form info-container-form pt-6 mt-5 mb-2">
                {/* <div className="info-icon-editar">
                    <img src={iconEditar} />
                </div> */}
                <form>
                    <div className="profile-store-wrapper-tienda">
                        <h4 className="profile-flex-left registro-title op-8 mb-4">Nombre de la tienda</h4>
                        <div className="profile-flex-right">
                            <input 
                                type="text" 
                                className="profile-store-input"
                                value = { nameStore }
                                onChange = { handleChangeNameUrl }
                            />
                        {nameStore?.length > 0 &&
                        <p className="link-tienda">URL TIENDA : www.yesmom.com.pe/tienda/{getUrlName(nameStore)} - {
                            availableName ? 'Disponible' : 'No disponible'
                        }</p> 
                        }
                        </div>
                    </div>
                    <div className="profile-store-wrapper-tienda">
                        <div className="profile-flex-desktop">
                            <h4 className="profile-flex-left registro-title op-8 mb-4">Adjuntar logo*</h4>
                            <div className="profile-flex-right">
                                <div className="wrapper-input profile-store-wrapper-input">
                                    <label htmlFor="nameTienda">Debe tener como alto máximo 110 px, png o svg y peso máximo 1 MB.</label>
                                    <div className="profile-flex-input-button">
                                        <div className="profile-flex-input">
                                            <div
                                                className="w-100 box-cargar-imagen"
                                            >
                                                {images.imgLogo?.name ? images.imgLogo.name : ""}
                                            </div>
                                            <h6>*Campo obligatorio</h6>
                                        </div>
                                        <div className="profile-container-button">
                                            <input
                                                type="file"
                                                onChange = { handleImageChange }
                                                name = "imgLogo"
                                                id = "imgLogo"
                                                accept="image/png, image/jpeg"
                                                ref = { refLogo}
                                            />
                                            <label htmlFor="imgLogo" className="label-image-profile-store">
                                                <ButtonFilled color="blue">
                                                    Cargar imagen*
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
                            <h4 className="profile-flex-left registro-title op-8 mb-4">Cover de portada*</h4>
                            <div className="profile-flex-right">
                                <div className="wrapper-input profile-store-wrapper-input">
                                    <label htmlFor="nameTienda">Debe tener como medidas 1204x381 px y peso máximo 1 MB.</label>
                                    <div className="profile-flex-input-button">
                                        <div className="profile-flex-input">
                                            <div
                                                className="w-100 box-cargar-imagen"
                                            >
                                                {images?.imgCover?.name ? images.imgCover.name : ""}
                                            </div>
                                            <h6>*Campo obligatorio</h6>
                                        </div>
                                        <div className="profile-container-button">
                                            <input
                                                type="file"
                                                onChange = { handleImageChange }            
                                                id = "imgCover"
                                                name = "imgCover"
                                                accept="image/png, image/jpeg"
                                                ref = { refCover}
                                            />
                                            <label htmlFor="imgCover" className="label-image-profile-store">
                                                <ButtonFilled color="blue">
                                                    Cargar imagen*
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
                            <h4 className="registro-title op-8 mb-4">Banners promocionales*</h4>
                        </div>

                        <div className="add--container-images w-100 profile-flex-right">
                            <div className="profile-store-wrapper-input">
                                <h6>Debe tener como medidas 1920x613 px y peso máximo 2 MB c/u.</h6>
                            </div>
                            <div className="flex-container-images">

                                <div className="add--container-preview profile-store-container-preview">
                                    <img className="add--icon-close" src={close} alt="close" />
                                    <div className="add--preview-image profile-store-preview-image">
                                        <img 
                                            src={preview?.imgBanner_1?.length >0 ? preview.imgBanner_1 : previewImage}  
                                            alt="preview" 
                                            className="mq-mt-3 img-preview-perfil-proveedor"
                                        />
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
                                    <img className="add--icon-close" src={close} alt="close"/>
                                    <div className="add--preview-image profile-store-preview-image">
                                        <img 
                                            src={preview?.imgBanner_2?.length >0 ? preview.imgBanner_2 : previewImage} 
                                            alt="preview" 
                                            className="mq-mt-3 img-preview-perfil-proveedor" 
                                        />
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
                                    <img className="add--icon-close" src={close} alt="close" />
                                    <div className="add--preview-image profile-store-preview-image">
                                        <img 
                                            src={preview?.imgBanner_3?.length >0 ? preview.imgBanner_3 : previewImage} 
                                            alt="preview" 
                                            className="mq-mt-3 img-preview-perfil-proveedor"  
                                        />
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
        </>
    )
}

export default StoreInfo
