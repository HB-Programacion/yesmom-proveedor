import './NewStore.css'
import Swal from 'sweetalert2';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';


import AppLayout from '../../../components/AppLayout/AppLayout'
import StepperNewStore from '../../../components/PerfilTienda/StepperNewStore';
import RegistroStep4 from '../../../components/Registro/RegistroSteps/RegistroStep4';

import { schemaValidatorStep4Optional } from '../../../utils/validateRegistro/ValidationSchemas';
import PerfilTiendaData from '../../../components/PerfilTienda/PerfilTiendaData';
import ButtonFilled from '../../../components/Button/ButtonFilled';

import { verifyStoreName } from '../../../utils/helpers/verifyStoreName';
import { getUrlName } from '../../../utils/helpers/getUlrName';
import { saveNewStoreSupplier } from '../../../utils/helpers/updateStoreSupplier';

import { getPrevieWImage } from '../../../utils/helpers/getPreviewImage';
import Advice from '../../../components/Advice/Advice';
import { useDispatch } from 'react-redux';
import { setActiveStore } from '../../../redux/actions/store';
import useResponsive from '../../../utils/dom/useResponsive';


const MAX_MB = 2000000;

const NewStore = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isMobile = useResponsive(1024);
    const shownRef = useRef(false);
    //Cuarto form
    const { register, handleSubmit , formState , reset  } = useForm({
        resolver : yupResolver(schemaValidatorStep4Optional)
    }); 

    const refCover = useRef();
    const refLogo = useRef();
    //Control de imagenes
    const initialState = {
        imgLogo : "",
        imgCover :"",
        imgBanners : {
            imgBanner_1:"",
            imgBanner_2:"",
            imgBanner_3:"",
        },
    }
    const  [ images , setImages ] = useState(initialState);

    const initialPreviews = {
        imgBanner_1:"",
        imgBanner_2:"",
        imgBanner_3:"",
    }
    const [ preview , setPreview ] = useState(initialPreviews);

    const [ availableName , setAvailableName] = useState(true);
    const [ nameStore , setNameStore] = useState("");


    const handleChangeNameUrl = async (e) => {
        setNameStore(e.target.value);
        const flag = await verifyStoreName(getUrlName(e.target.value) , '');
        setAvailableName(flag);
        // console.log(flag);
    }

    //Control
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

    const handleNewStore = async ( values ) => {
        // console.log('Values form');
        // console.log(values);

        if(!availableName) return;
        const { imgLogo , imgCover } = images;
        if(!imgLogo || !imgCover){
            return Swal.fire('Campos incompletos' ,'Asegurate de llenar todos los campos obligatorios','info');
        }

        

        const { ok , response = {}} = await saveNewStoreSupplier({
            infoAlmacen : values , 
            images ,
            nameStore
        } );

        if(ok){
            reset();
            Swal.fire('Registrado correctamente','Tu tienda ha sido registrada correctamente','success');
            dispatch(setActiveStore(response.id));
            setTimeout(()=>{
                navigate('/p/store/load-products')
            },1500)
        }else{
            Swal.fire('Error','Hubo un error', 'error');
        }
    }

    useEffect(()=>{
        if(isMobile && !shownRef.current){
            Swal.fire('¡Usa un ordenador!','Recuerda que para crear tu tienda y poder subir tus productos, tienes que usar un ordenador.','info');
            shownRef.current= true;
        }
    },[isMobile])
    
    return (
        <AppLayout>
            <div className="contenedor-new_store animated fade-in">
                <div className="new_store-container-contenido">
                    <div className="new_store-all-content">
                        <Advice color="green" text="¡Hola! Recuerda que primero debes completar el registro y perfil de tu tienda"/>
                        <p className="title-rosa">Mi Tienda</p>

                        <div className="new_store-container-stepper">
                                <StepperNewStore selected={0}/>
                        </div>

                        <div className="new_store-container-all-forms">
                            <div className="registro-container-form">
                                <RegistroStep4
                                    customNumber= "1"
                                    register ={ register }
                                    errors = { formState.errors }
                                />
                            </div>
                            <PerfilTiendaData 
                                nameStore = { nameStore }
                                handleChangeNameUrl={ handleChangeNameUrl}
                                availableName={ availableName }
                                images={images}
                                refCover = { refCover }
                                refLogo = { refLogo }
                                handleImageBanners={ handleImageBanners }
                                handleImageChange = { handleImageChange }
                                preview = { preview }
                            />

                            <div className="new_store-container-button">
                                <ButtonFilled disabled={isMobile} color="yellow" fxClick = { handleSubmit( handleNewStore )}>
                                    Continuar
                                </ButtonFilled>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default NewStore
