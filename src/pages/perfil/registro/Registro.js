import React, { useEffect } from 'react'
import Swal from 'sweetalert2';
import axios from 'axios'
import clienteAxiosBusiness from '../../../config/axiosBusiness';
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

import './Registro.css';
import StoreInfo from '../../../components/PerfilTienda/PerfilTiendaData';
import { startInfoActiveStore } from '../../../redux/actions/store';

const Registro = () => {

  const dispatch = useDispatch();
  const { idActiveStore , store } = useSelector(state => state.store);
  const { token } = useSelector(state => state.auth);
  const { loading } = useSelector(state => state.ui);

  const { register , handleSubmit , formState:{errors} , reset} = useForm({
    resolver : yupResolver(schemaValidatorStep4)
  });


  const submitForm = async (values) => {
    console.log(values);
    try{

      // Swal.fire({
      //   title : "Actualizando perfil...",
      //   text : "Espera un momento....",
      //   allowOutsideClick : false,
      //   didOpen: () => {
      //       Swal.showLoading();
      //   }
      // })

      // const { data } = await clienteAxiosBusiness.patch('/supplier' , values , {
      //   headers : {
      //     'access-token' : token
      //   }
      // });
      // Swal.close();
      // //Token invalido
      // console.log(data);
      // if(data?.CodigoRespuesta === '12'){
      //   Swal.fire('Inicia sesión de nuevo', 'Sesión terminada' , 'info');
      //   window.location.reload();
      // }

      // if(data?.response?.ok){
      //   Swal.fire('Actualizado', 'El perfil ha sido actualizado' , 'success');
      //   dispatch(loadingDataSupplier(values));
      // }




    }catch(err){
      Swal.close();
      console.log(err);
      Swal.fire('Error', 'Hubo un error', 'error');
    }
  }


  useEffect(()=>{
    dispatch(startInfoActiveStore(idActiveStore));
  },[idActiveStore])

  useEffect(()=>{

    reset({
      nombreEncargadoAlmacen : store?.nombreEncargadoAlmacen,
      correoEncargadoAlmacen : store?.correoEncargadoAlmacen,
      telefonoAlmacen : store?.telefonoAlmacen,
      direccionAlmacen : store?.direccionAlmacen,
      referenciaAlmacen : store?.referenciaAlmacen,
      ciudadAlmacen : store?.ciudadAlmacen,
    })
  },[store])

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
                  <StoreInfo images = { { imgLogo : ''} } />
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
