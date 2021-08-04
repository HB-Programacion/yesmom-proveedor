import React, { useState } from 'react'
import ButtonFilled from '../../../components/Button/ButtonFilled'
import CardShadow from '../../../components/CardShadow/CardShadow'
import DragnDrop from '../../../components/DragnDrop/DragnDrop'
import previewImage from '../../../images/producto/preview.svg';

import './Profile.css'

const ProfileStep3 = () => {
  const [fileName, setFileName] = useState('')
  const [selectedFile, setSelectedFile] = useState("");

  const handleFileChange = (event) => {
    event.preventDefault();
    let input = event.target;
    if (input.files && input.files[0]) {
      const sizeByte = input.files[0].size;
      const sizeMegaByte = parseFloat(sizeByte / (1024 * 1024)).toFixed(2);
      let reader = new FileReader();
      reader.onload = (e) => {
        if (sizeMegaByte > 1) {
          console.log("El tamaño máximo es de 1mb")
        } else {
          // setAlertError(null)
          setSelectedFile({
            ...selectedFile,
            [input.name]: input.files[0],
            // imgOfertaPantalla: e.target.result,
          });
        }

      };
      reader.readAsDataURL(input.files[0]);

    }
  };

  return (
    <div>
      <CardShadow
        title="3.- Adjunta banners promocionales"
        paragraph="Es importante entender que este es el contacto más importante que tenemos con el consumidor final. Si tenemos un diseño con una buena calidad de imagen y una diagramación atractiva para nuestro público, es mucho más probable de que se concrete una compra."
        content={
          <div className="profile-store-content-card" >
            <p>Debe tener como medidas 1111x352 px y una resolución de 300px:</p>
            <div className="profile-store-content-dragndrop">
              <DragnDrop image={previewImage} name="imagenProducto1" id="imagenProducto1" onChange={handleFileChange} required='true' />
              <DragnDrop image={previewImage} name="imagenProducto1" id="imagenProducto1" onChange={handleFileChange} required='true' />
              <DragnDrop image={previewImage} name="imagenProducto1" id="imagenProducto1" onChange={handleFileChange} required='true' />
            </div>
          </div>
        }
      />
    </div>
  )
}

export default ProfileStep3
