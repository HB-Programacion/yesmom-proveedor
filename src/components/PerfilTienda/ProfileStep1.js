import React, { useState } from 'react'
import ButtonFilled from '../Button/ButtonFilled'
import CardShadow from '../CardShadow/CardShadow'


const ProfileStep1 = () => {
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
          setFileName(input.files[0].name)
        } else {
          setFileName(input.files[0].name)
        }
      };
      reader.readAsDataURL(input.files[0]);

    }
  };
  return (
    <div className="animated fade-in">
      <CardShadow
        title="1.- Adjunta un logo para tu tienda"
        paragraph="Subir un logo correctamente fortalece la imagen y seriedad del negocio, de esta manera, juntos podremos darles a nuestros clientes la confianza de comprar con nosotros."
        content={
          <div className="profile-store-content-card-input">
            <p className="profile-store-recommendation">Debe tener como medidas 446x168 px y una resolución de 300px</p>
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
                <label htmlFor = "imageLogo" >
                  <ButtonFilled color="blue" >
                    Cargar Imagen
                  </ButtonFilled>
                </label> 
                <input
                  type="file"
                  id = "imageLogo"
                  accept="image/*" onChange={handleFileChange} />
              </div>
            </div>
          </div>
        }
      />
    </div>
  )
}

export default ProfileStep1
