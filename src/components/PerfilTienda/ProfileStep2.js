import React, { useRef, useState } from 'react'
import ButtonFilled from '../Button/ButtonFilled'
import CardShadow from '../CardShadow/CardShadow'

const MAX_MB = 2000000;
const ProfileStep2 = ( { imageCover, setCover}) => {

  // const [imageCover, setImageCover] = useState('')
  const refCover = useRef('');

  const handleFileChange = (e) => {
    
    if(e.target.files.length >0 ){
      const file = e.target.files[0];
      // console.log('Hay archivo');
      if(file.size > MAX_MB){
        alert('Imagen pesada , máximo 2MB')
        refCover.current.value = '';
      }else{
        // setImageCover(e.target.files[0]);
        setCover(e.target.files[0]);
      }
    }else{
      console.log('No hay archivo');
      // setImageCover("");
      setCover("");
      refCover.current.value = '';
    }

    
  };
  return (
    <div className="animated fade-in">
      <CardShadow
        title="2.- Adjunta cover de portada"
        paragraph="La portada del anuncio nos ayudará a ser más visibles, un buen diseño y una buena foto es fundamental para generar el impacto visual que necesitamos para atraer más clientes."
        content={
          <div className="profile-store-content-card-input">
            <p className="profile-store-recommendation">Debe tener como medidas 1111x352 px y una resolución de 300px:</p>
            <div className="profile-store-content-input">
              <div>
                <div className="profile-store-container-input">
                  <p className="profile-store-filename">{imageCover?.name} </p>
                </div>
                <div className="profile-store-container-input-mobile">
                  <p className="profile-store-filename">{imageCover?.name} </p>
                </div>
                <p className="obligatory-field">*Campo obligatorio</p>
              </div>
              <div className="profile-step-container-button">
                <label htmlFor="imageCover" className="label-for-logo">
                  <ButtonFilled color="blue" >
                    Cargar Imagen
                  </ButtonFilled>
                </label>
                <input
                  type="file"
                  id="imageCover"
                  accept="image/*" 
                  onChange={handleFileChange} 
                  ref ={ refCover }
                />
              </div>
            </div>
          </div>
        }
      />
    </div>
  )
}

export default ProfileStep2
