import React from "react";
import Swal from "sweetalert2";
import { useState } from 'react';

import AppLayout from "../../../components/AppLayout/AppLayout";
import ProfileStep1 from "../../../components/PerfilTienda/ProfileStep1";
import ProfileStep2 from "../../../components/PerfilTienda/ProfileStep2";
import ProfileStep3 from "../../../components/PerfilTienda/ProfileStep3";

import ButtonFilled from "../../../components/Button/ButtonFilled";
import StepperTienda from "../../../components/Perfil/Stepper/StepperTienda";

import "./Profile.css";


const Profile = () => {

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
  const [selected, setSelected] = useState(0);

  const handleSelection = () => {
    setSelected(selected => {
      //Primer form
      if(selected === 0){
        if(images.imgLogo!== ""){
          return selected +1;
        }else{
          Swal.fire('Campo incompleto', 'El logo es obligatorio' , 'info');
          // alert('Logo obligatorio');
          return selected;
        }
      }
      //Segundo form
      if(selected === 1){
        if(images.imgCover!== ""){
          return selected +1;
        }else{
          Swal.fire('Campo inco', 'El banner es obligatorio' , 'info');
          // alert('Cover obligatorio');
          return selected;
        }
      }

      //Ultimo form banners
      if(selected === 2){
        handleSubmit();
      }
      
      return selected;
    });
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

  const handleLogo = (file) => {
    setImages({
      ...images,
      imgLogo : file
    })
  }
  const handleCover = (file) => {
    setImages({
      ...images,
      imgCover : file
    })
  }

  const handleSubmit = () => {
    // alert("Enviando...");
    console.log(images);
  }

  return (
    <AppLayout>
      {/* <Menu /> */}
      <div className="profile-store--container">
        <div className="profile-store--contenedor-centered animated fade-in">
          <div className="profile-store--all-content">
            <div className="profile-store--container-contenido">
              <div className="profile-store--container-advice">
                <h5>¡Hola! Recuerda que primero debes completar el perfil de tu tienda</h5>
              </div>
              <p className="title-rosa">Completar perfil de tienda</p>
              <div className="profile-store-container-stepper">
                <StepperTienda selected={selected} setSelected={setSelected} />
              </div>
              <div className="profile-store-container-form">
                <form>
                  {selected === 0 && <ProfileStep1 setLogo={ handleLogo } imageLogo = { images.imgLogo } />}
                  {selected === 1 && <ProfileStep2 setCover={ handleCover } imageCover = { images.imgCover }/>}
                  {selected === 2 && <ProfileStep3 handleImageChange={handleImageBanners}/>}
                  <div className="profile-store-container-button">
                    <ButtonFilled
                      color="yellow"
                      fxClick={handleSelection}
                    >
                      Continuar
                    </ButtonFilled>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Profile;
