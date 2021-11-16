import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
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
import Loading from '../../../components/Loading/Loading';
import { startLoadingSupplierImages, updateStore } from '../../../redux/actions/supplier';
import { getPrevieWImage } from '../../../utils/helpers/getPreviewImage';
import { useHistory } from 'react-router';
import { updateStoreSupplier } from '../../../utils/helpers/updateStoreSupplier';
import { getUrlName } from '../../../utils/helpers/getUlrName';
import { verifyStoreName } from '../../../utils/helpers/verifyStoreName';
import Swal from 'sweetalert2';


const MAX_MB = 2000000;
const ProfileStoreGeneral = () => {

    const router = useHistory();
    const dispatch = useDispatch();
    const  { logged=false , token } = useSelector(state => state.auth);
    //Limpiar los input file
    const refCover = useRef();
    const refLogo = useRef();
    const  { name="" , images : imagesInitial } = useSelector(state => state.supplierImages);
    const [ availableName , setAvailableName ] = useState(true);
    // console.log(imagesInitial);
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
    const [ nameStore, setNameStore ] = useState('');
    const [ loading , setLoading ] = useState(true);


    const initialPreviews = {
        imgBanner_1:"",
        imgBanner_2:"",
        imgBanner_3:"",
    }
    const [ preview , setPreview ] = useState(initialPreviews);

    const handleImageChange = (e) => {
        const name = e.target.name;
        if(e.target.files.length > 0){
            const file = e.target.files[0];
            if(file.size > MAX_MB){
                Swal.fire('Imagen pesada', 'La imagen debe tener un tamaño máximo de 2MB' , 'info');
                // alert('Imagen pesada , máximo 2MB');
                if(name === 'imgCover'){
                    refCover.current.value='';
                }else if(name==='imgLogo'){
                    refLogo.current.value='';
                }
            }else{

                setImages({
                    ...images,
                    [name] : e.target.files[0]
                })
            }

        }else{

            if(name === 'imgCover'){
                refCover.current.value='';
            }else if(name==='imgLogo'){
                refLogo.current.value='';
            }

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
            const file = e.target.files[0];
            if(file.size > MAX_MB){
                Swal.fire('Imagen pesada', 'La imagen debe tener un tamaño máximo de 2MB' , 'info');
                document.getElementsByName(name).value="";
            }else{
                setImages({
                    ...images,
                    imgBanners : {
                        ...currentBanners,
                        [name] : e.target.files[0]
                    }
                })
                
                setPreview({
                    ...preview,
                    [name] : getPrevieWImage(e.target.files[0])
                })
            }
        }else{

            setImages({
                ...images,
                imgBanners : {
                    ...currentBanners,
                    [name] : ""
                }
            })

            setPreview({
                ...preview,
                [name] : ""
            })
        }
    }

    const handleUpdateProfile = async () => {

        const { isConfirmed } = await Swal.fire('Actualizar perfil','Actualizar perfil','info');
        if(isConfirmed){

            setLoading(true);
            const flag = await updateStoreSupplier({
                token,
                images,
                nameStore,
                imagesInitial
            });

            // setLoading(false);
            if(flag){
                setImages(initialState);
                setPreview(initialPreviews);
                
            }

            setLoading(false);
            window.location.reload();
        }
    }

    const handleCancel = () => {
        router.goBack();
    }

    const loadSupplierImages = async () => {
        if(logged){
            await dispatch( startLoadingSupplierImages());

            setLoading(false);
        }
    }

    const handleChangeNameUrl = async (e) => {
        setNameStore(e.target.value);
        const flag = await verifyStoreName(getUrlName(e.target.value) ,  token);
        setAvailableName(flag);
        // console.log(flag);
    }


    useEffect(()=>{
        loadSupplierImages();
    },[])

    useEffect(() => {
        if(imagesInitial){
            const objPrevs = {
                imgBanner_1 : imagesInitial.imgBanners.imgBanner_1.url,
                imgBanner_2 : imagesInitial.imgBanners.imgBanner_2.url,
                imgBanner_3 : imagesInitial.imgBanners.imgBanner_3.url,
            }

            setPreview(objPrevs)
            setNameStore(imagesInitial.name)
        }

    }, [imagesInitial])

    useEffect(() => {
        setNameStore(name);
    }, [name])

    if(loading){
        return <Loading /> 
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
                                                                    <input
                                                                        className="w-100 box-cargar-imagen"
                                                                        type="text"
                                                                        disabled
                                                                        name="nameTienda"
                                                                        id="nameTienda"
                                                                        value={ 
                                                                            images.imgLogo?.name ? images.imgLogo.name : ""
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
                                                            <img className="add--icon-close" src={close} />
                                                            <div className="add--preview-image profile-store-preview-image">
                                                                <img 
                                                                    src={preview?.imgBanner_1?.length >0 ? preview.imgBanner_1 : previewImage}  
                                                                    alt="preview-image" 
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
                                                            <img className="add--icon-close" src={close} />
                                                            <div className="add--preview-image profile-store-preview-image">
                                                                <img 
                                                                    src={preview?.imgBanner_2?.length >0 ? preview.imgBanner_2 : previewImage} 
                                                                    alt="preview-image" 
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
                                                            <img className="add--icon-close" src={close} />
                                                            <div className="add--preview-image profile-store-preview-image">
                                                                <img 
                                                                    src={preview?.imgBanner_3?.length >0 ? preview.imgBanner_3 : previewImage} 
                                                                    alt="preview-image" 
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
