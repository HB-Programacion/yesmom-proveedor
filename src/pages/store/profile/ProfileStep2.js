import React, { useState } from 'react'
import ButtonFilled from '../../../components/Button/ButtonFilled'
import CardShadow from '../../../components/CardShadow/CardShadow'

import './Profile.css'

const ProfileStep2 = () => {
  const [fileName, setFileName] = useState('')

  const handleFileChange = (event) => {
    event.preventDefault();
    let input = event.target;
    console.log(event.target.files[0])
    if (input.files && input.files[0]) {
      const sizeByte = input.files[0].size;
      const sizeMegaByte = parseFloat(sizeByte / (1024 * 1024)).toFixed(2);
      let reader = new FileReader();
      reader.onload = (e) => {
        if (sizeMegaByte > 1) {
          console.log("El tamaño máximo es de 1mb")
          setFileName(input.files[0].name)
        } else {
          setFileName(input.files[0].name)
        }
      };
      reader.readAsDataURL(input.files[0]);

    }
  };
  return (
    <div>
      <CardShadow
        title="2.- Adjunta cover de portada"
        paragraph="La portada del anuncio nos ayudará a ser más visibles, un buen diseño y una buena foto es fundamental para generar el impacto visual que necesitamos para atraer más clientes."
        content={
          <div className="profile-store-content-card-input">
            <p className="profile-store-recommendation">Debe tener como medidas 1111x352 px y una resolución de 300px:</p>
            <div className="profile-store-content-input">
              <div>
                <div className="profile-store-container-input">
                  <p className="profile-store-filename">{fileName} </p>
                </div>
                <div className="profile-store-container-input-mobile">
                  <p className="profile-store-filename">{fileName} </p>
                </div>
                <p className="obligatory-field">*Campo obligatorio</p>
              </div>
              <div className="profile-step-container-button">
                <ButtonFilled color="blue" >
                  Cargar Imagen
                  <input
                    type="file"
                    accept="image/*" onChange={handleFileChange} />
                </ButtonFilled>
              </div>
            </div>
          </div>
        }
      />
    </div>
  )
}

export default ProfileStep2
