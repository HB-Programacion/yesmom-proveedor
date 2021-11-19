import React, { useEffect } from 'react'
import axios from 'axios'

import AppLayout from '../../../components/AppLayout/AppLayout';
import Description from '../../../components/Perfil/Description/Description';
import TitlePerfil from '../../../components/Perfil/TitlePerfil/TitlePerfil';

import RegistroStep1 from '../../../components/Registro/RegistroSteps/RegistroStep1';
import RegistroStep2 from '../../../components/Registro/RegistroSteps/RegistroStep2';
import RegistroStep3 from '../../../components/Registro/RegistroSteps/RegistroStep3';
import RegistroStep4 from '../../../components/Registro/RegistroSteps/RegistroStep4';

import iconEditar from '../../../images/header/icon-edit.svg';


import ButtonFilled from '../../../components/Button/ButtonFilled';
import Sidebar from '../../../components/Perfil/Sidebar/Sidebar';


import './Registro.css';
import { useForm } from 'react-hook-form';
import { mergedSchemaWithoutPassword } from '../../../utils/validateRegistro/ValidationSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import BackComponent from '../../../components/Return/BackComponent';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import clienteAxiosBusiness from '../../../config/axiosBusiness';
import { loadingDataSupplier } from '../../../redux/actions/supplier';


const Registro = () => {

  const dispatch = useDispatch();
  const supplier = useSelector(state => state.supplier);
  const { token } = useSelector(state => state.auth);

  const { register , handleSubmit , formState:{errors} , reset} = useForm({
    resolver : yupResolver(mergedSchemaWithoutPassword),
  });

  const handleRef = () => {
    const type = document.getElementById('contrasenia').type;

    type==='password' ?  document.getElementById('contrasenia').type = 'text':  document.getElementById('contrasenia').type='password';
  }

  const submitForm = async (values) => {
    console.log(values);
    try{

      Swal.fire({
        title : "Actualizando perfil...",
        text : "Espera un momento....",
        allowOutsideClick : false,
        didOpen: () => {
            Swal.showLoading();
        }
      })

      const { data } = await clienteAxiosBusiness.patch('/supplier' , values , {
        headers : {
          'access-token' : token
        }
      });
      Swal.close();
      //Token invalido
      console.log(data);
      if(data?.CodigoRespuesta === '12'){
        Swal.fire('Inicia sesión de nuevo', 'Sesión terminada' , 'info');
        window.location.reload();
      }

      if(data?.response?.ok){
        Swal.fire('Actualizado', 'El perfil ha sido actualizado' , 'success');
        dispatch(loadingDataSupplier(values));
      }




    }catch(err){
      Swal.close();
      console.log(err);
      Swal.fire('Error', 'Hubo un error', 'error');
    }
  }


  useEffect(() => {
    if( Object.keys(supplier).length > 0 ){
      const defaultValues = supplier;

      //Solo datos necesarios 
      delete defaultValues.autorizado;
      delete defaultValues.createdAt;

      reset(defaultValues);
      // console.log(defaultValues);
    }
  },[supplier])


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
              <div className="flex-right">
                <Description title="Información de Registro" description="Aquí encontrarás los datos de la empresa" />
                <div className="info-container-content">
                  <div className="registro-container-form info-container-form mt-5 mb-2">
                    <div className="info-icon-editar">
                      <img src={iconEditar} />
                    </div>
                    <RegistroStep1 
                      register= { register}
                      errors = { errors }
                      showPassword = { handleRef }
                      edited = { true }
                    />
                  </div>
                  <div className="registro-container-form info-container-form mt-5 mb-2">
                    <div className="info-icon-editar">
                      <img src={iconEditar} />
                    </div>
                    <RegistroStep2 
                      register= { register}
                      errors = { errors }
                    />
                  </div>
                  <div className="registro-container-form info-container-form mt-5 mb-2">
                    <div className="info-icon-editar">
                      <img src={iconEditar} />
                    </div>
                    <RegistroStep3 
                      register= { register}
                      errors = { errors }
                    />
                  </div>
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
