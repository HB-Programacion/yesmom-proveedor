import React, { useState } from 'react'
import CardShadow from '../../../components/CardShadow/CardShadow'

import './Profile.css'

const ProfileStep3 = () => {
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
        title="1.- Adjunta un logo para tu tienda"
        paragraph="Subir un logo correctamente fortalece la imagen y seriedad del negocio, de esta manera, juntos podremos darles a nuestros clientes la confianza de comprar con nosotros."
        content={
          <div className="profile-store-content-card">
            <p>Debe tener como medidas 446x168 px y una resolución de 300px</p>
            <div className="profile-store-content-input">
              <div className="profile-store-container-input">
                <p className="profile-store-filename">{fileName} </p>
              </div>
              <button>
                Cargar Imagen
                <input
                  type="file"
                  accept="image/*" onChange={handleFileChange} />
              </button>
            </div>
          </div>
        }
      />
    </div>
  )
}

export default ProfileStep3
