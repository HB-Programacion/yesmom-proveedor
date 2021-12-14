import React, { useEffect, useRef, useState } from 'react'
import Swal from 'sweetalert2';

import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import AppLayout from '../../../components/AppLayout/AppLayout';
import Description from '../../../components/Perfil/Description/Description';
import TitlePerfil from '../../../components/Perfil/TitlePerfil/TitlePerfil';
import RegistroStep4 from '../../../components/Registro/RegistroSteps/RegistroStep4';
import BackComponent from '../../../components/Return/BackComponent';
import ButtonFilled from '../../../components/Button/ButtonFilled';
import Sidebar from '../../../components/Perfil/Sidebar/Sidebar';
import Loading from '../../../components/Loading/Loading';

import iconEditar from '../../../images/header/icon-edit.svg';


import { schemaValidatorStep4 } from '../../../utils/validateRegistro/ValidationSchemas';
import { loadingDataSupplier } from '../../../redux/actions/supplier';

import StoreInfo from '../../../components/PerfilTienda/PerfilTiendaData';
import { startInfoActiveStore } from '../../../redux/actions/store';
import { getPrevieWImage } from '../../../utils/helpers/getPreviewImage';
import { verifyStoreName } from '../../../utils/helpers/verifyStoreName';
import { getUrlName } from '../../../utils/helpers/getUlrName';

import './Registro.css';
import { updateStoreSupplier } from '../../../utils/helpers/updateStoreSupplier';
const MAX_MB = 2000000;



const Registro = () => {

  const dispatch = useDispatch();
  const { idActiveStore , store } = useSelector(state => state.store);
  const { loading } = useSelector(state => state.ui);

  const { register , handleSubmit , formState:{errors} , reset} = useForm({
    resolver : yupResolver(schemaValidatorStep4)
  });

  //Imagenes
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
    if(e.target.value!==store.nombreTienda){
      const flag = await verifyStoreName(getUrlName(e.target.value) , '');
      setAvailableName(flag);
    }else{
      setAvailableName(true);
    }
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

  const submitForm = async (values) => {

    if(!availableName) return;
    const { imgLogo , imgCover } = images;
    if(!imgLogo || !imgCover){
        return Swal.fire('Campos incompletos' ,'Asegurate de llenar todos los campos obligatorios','info');
    }

    try{

      const { ok } = await updateStoreSupplier({
        infoAlmacen : values , 
        images ,
        nameStore,
        id : idActiveStore
      } );

      if(ok){
        Swal.fire('Actualizado correctamente','Tu tienda ha sido actualizada correctamente','success');

      }else{
          Swal.fire('Error','Hubo un error', 'error');
      }

    }catch(err){
      Swal.close();
      console.log(err);
      Swal.fire('Error', 'Hubo un error', 'error');
    }
  }


  useEffect(()=>{
    dispatch(startInfoActiveStore(idActiveStore));
  },[idActiveStore])

  //Setear info de store que cambia
  useEffect(()=>{

    const objPrevs = {
      imgBanner_1 : store?.imagenBanner[0]?.url,
      imgBanner_2 : store?.imagenBanner[1]?.url,
      imgBanner_3 : store?.imagenBanner[2]?.url,
    }
    setPreview(objPrevs)
    
    setNameStore( store?.nombreTienda)
    reset({
      nombreEncargadoAlmacen : store?.nombreEncargadoAlmacen,
      correoEncargadoAlmacen : store?.correoEncargadoAlmacen,
      telefonoAlmacen : store?.telefonoAlmacen,
      direccionAlmacen : store?.direccionAlmacen,
      referenciaAlmacen : store?.referenciaAlmacen,
      ciudadAlmacen : store?.ciudadAlmacen,
    })
  },[store])

  //IMAGENES
  

  return (
    <AppLayout>
      {loading && <Loading />}
      <div className="contenedor-info-perfil-registro animated fade-in">
        <div className="info-perfil-contenido">
          <div className="info-all-content">
            <div className="info-contenedor-flex">
              <div className="hide-desktop info-container-back">
                <div className="back-component-container">
                  <BackComponent />
                </div>
              </div>
              <div className="flex-left">
                <div className="info-container-title">
                  <TitlePerfil />
                </div>
                <Sidebar />
              </div>
              <div className="flex-right">
                <Description title="Información de Registro" description="Aquí encontrarás los datos de la empresa" />
                <div className="info-container-content">
                  <div className="registro-container-form info-container-form mt-5 mb-2">
                    <div className="info-icon-editar">
                      <img src={iconEditar} />
                    </div>
                    <RegistroStep4 
                      register= { register}
                      errors = { errors }
                    />
                  </div>
                </div>
                <div className="info-container-content">
                  <StoreInfo
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
                </div>
              </div>
            </div>
            <hr className="info-hr" />

            <div className="info-container-buttons">
              <div className="info-container-button-only">
                <ButtonFilled color="pink" fxClick={ handleSubmit(submitForm) }>
                  Guardar
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

export default Registro
