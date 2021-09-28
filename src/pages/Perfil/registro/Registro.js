import React from 'react'
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
import { mergedSchema } from '../../../utils/validateRegistro/ValidationSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import BackComponent from '../../../components/Return/BackComponent';


const Registro = () => {

  const { register , handleSubmit , formState:{errors} } = useForm({
    resolver : yupResolver(mergedSchema),
    defaultValues: {
      "nombreCompletoEncargado": "Lincoln Villanueva Siccha",
      "telefono": "969670765",
      "nombreTienda": "LinkStore",
      "correoElectronico": "lvs1205@gmail.com",
      "contrasenia":"12link23",
      "nombreCompletoRepresentante": "Lincoln Elmer Villanueva Siccha",
      "documentoRepresentante":"44371856",
      "razonSocial":"Link Sac",
      "ruc":10443718562,
      "telefonoEmpresa":"969670765",
      "pais":"Perú",
      "ciudad":"Lima",
      "distrito":"Miraflores",
      "direccion":"Jr Agua Marina 276-Dpto 202",
      "paginaWeb":"www.ofertasperu.store",
      "titularCuenta":"Lincoln Villanueva Siccha",
      "entidadBancaria":"Bcp",
      "numeroCuentaSoles":"1644646454645477",
      "dniRucTitular":"44371856",
      "cciCuenta":"14544445465466466223",
      "nombreEncargadoAlmacen":"Lady Villanueva",
      "correoEncargadoAlmacen":"iris.lvs198@gmail.com",
      "telefonoAlmacen":"992841777",
      "direccionAlmacen":"Jr su casa ahi nomas",
      "referenciaAlmacen":"Cerca al vecino",
      "ciudadAlmacen":"Santiago de Surco"
    } 
  });

  const handleRef = () => {
    const type = document.getElementById('contrasenia').type;

    type==='password' ?  document.getElementById('contrasenia').type = 'text':  document.getElementById('contrasenia').type='password';
  }

  const submitForm = (values) => {
    alert('Test edit')
    alert(JSON.stringify(values))
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
                  <TitlePerfil name="Baby Plaza Store" email="example@babyplaza.com" />
                </div>
                <Sidebar />
              </div>
              <div className="flex-right">
                <Description title="Registro" description="Aquí encontrarás los datos de la empresa" />
                <div className="info-container-content">
                  <div className="registro-container-form info-container-form mt-5 mb-2">
                    <div className="info-icon-editar">
                      <img src={iconEditar} />
                    </div>
                    <RegistroStep1 
                      register= { register}
                      errors = { errors }
                      showPassword = { handleRef }
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
