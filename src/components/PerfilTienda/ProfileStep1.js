import React, { useRef, useState } from 'react'
import ButtonFilled from '../Button/ButtonFilled'
import CardShadow from '../CardShadow/CardShadow'


const MAX_MB = 2000000;

const ProfileStep1 = ( { setLogo, imageLogo  }) => {
  
  // const [imageLogo, setImageLogo] = useState('')
  const refLogo = useRef('');


  const handleFileChange = (e) => {
    // console.log(e.target.files);
    if(e.target.files.length >0 ){
      const file = e.target.files[0];
      // console.log('Hay archivo');
      if(file.size > MAX_MB){
        alert('Imagen pesada , máximo 2MB')
        refLogo.current.value = '';
      }else{
        // setImageLogo(e.target.files[0]);
        setLogo(e.target.files[0]);
      }
    }else{
      console.log('No hay archivo');
      // setImageLogo("");
      setLogo("");
      refLogo.current.value = '';
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
                  <p className="profile-store-filename">{imageLogo?.name} </p>
                </div>
                <div className="profile-store-container-input-mobile">
                  <p className="profile-store-filename">{imageLogo?.name} </p>
                </div>
                <p className="obligatory-field">*Campo obligatorio</p>
              </div>
              <div className="profile-step-container-button">
                <label htmlFor = "imageLogo" className="label-for-logo">
                  <ButtonFilled color="blue" >
                    Cargar Imagen
                  </ButtonFilled>
                </label> 
                <input
                  type="file"
                  id = "imageLogo"
                  accept="image/*" 
                  onChange={handleFileChange}
                  ref={ refLogo } 
                />
              </div>
            </div>
          </div>
        }
      />
    </div>
  )
}

export default ProfileStep1
