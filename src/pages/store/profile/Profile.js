import React from "react";
import { useState } from 'react';

import AppLayout from "../../../components/AppLayout/AppLayout";
import CardShadow from "../../../components/CardShadow/CardShadow";
import Menu from "../../../components/menu/Menu";

import Stepper from "../../../components/Registro/Stepper";
import ProfileStep1 from "./ProfileStep1"
import ProfileStep2 from "./ProfileStep2"
import ProfileStep3 from "./ProfileStep3"
import "./Profile.css";
import ButtonFilled from "../../../components/Button/ButtonFilled";
import StepperTienda from "../../../components/Perfil/Stepper/StepperTienda";

const Profile = () => {
  const [selected, setSelected] = useState(0);

  const handleSelection = () => {
    setSelected(selected => {
      if (selected !== 2) {
        return selected + 1;
      }
      return selected;
    });
  }

  const handleSubmit = () => {
    alert("Enviando...");
  }

  return (
    <AppLayout>
      <Menu />
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
                {selected === 0 && <ProfileStep1 />}
                {selected === 1 && <ProfileStep2 />}
                {selected === 2 && <ProfileStep3 />}
                <div className="profile-store-container-button">
                  <ButtonFilled
                    color="yellow"
                    fxClick={selected === 2 ? handleSubmit : handleSelection}
                  >
                    Continuar
                  </ButtonFilled>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Profile;
