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
import { useNavigate } from 'react-router-dom';
import { updateStoreSupplier } from '../../../utils/helpers/updateStoreSupplier';
import { getUrlName } from '../../../utils/helpers/getUlrName';
import { verifyStoreName } from '../../../utils/helpers/verifyStoreName';
import Swal from 'sweetalert2';
import StoreInfo from '../../../components/Perfil/Store/StoreInfo';


const MAX_MB = 2000000;
const ProfileStoreGeneral = () => {

    const navigate = useNavigate();
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
        navigate(-1);
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
                                    <StoreInfo 
                                        preview ={ preview}
                                        handleImageBanners ={ handleImageBanners }
                                        refCover= { refCover }
                                        refLogo = { refLogo }
                                        images = { images }
                                        nameStore= { nameStore}
                                        availableName={ availableName }
                                        handleImageChange = { handleImageChange }
                                        handleChangeNameUrl = { handleChangeNameUrl }
                                        availableName = { availableName }
                                    />
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
