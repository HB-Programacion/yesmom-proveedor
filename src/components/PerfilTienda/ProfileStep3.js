import React, { useState } from 'react'
import ButtonFilled from '../Button/ButtonFilled';
import CardShadow from '../../components/CardShadow/CardShadow'
import DragnDrop from '../../components/DragnDrop/DragnDrop'
import previewImage from '../../images/producto/preview.svg';

const MAX_MB = 2000000;

const ProfileStep3 = () => {
  
  const [ imgBanners , setImgBanners ]= useState({
    imgBanner_1 :'',
    imgBanner_2 :'',
    imgBanner_3 :'',
  });

  const [selectedFile, setSelectedFile] = useState("");

  const handleFileChange = (e) => {
    if(e.target.files.length >0 ){
      const file = e.target.files[0];
      if(file.size > MAX_MB){
        alert('Imagen pesada , máximo 2MB')
      }else{
        setImgBanners({
          ...imgBanners,
          [e.target.name] : file
        });
      }
    }else{
      console.log('No hay archivo');
      setImgBanners({
        ...imgBanners,
          [e.target.name] : ''
      });
    }

  };

  return (
    <div className="animated fade-in">
      <CardShadow
        title="3.- Adjunta banners promocionales"
        paragraph="Es importante entender que este es el contacto más importante que tenemos con el consumidor final. Si tenemos un diseño con una buena calidad de imagen y una diagramación atractiva para nuestro público, es mucho más probable de que se concrete una compra."
        content={
          <div className="profile-store-content-card" >
            <p>Debe tener como medidas 1111x352 px y una resolución de 300px:</p>
            <div className="profile-store-content-dragndrop">
              <DragnDrop image={previewImage} name="imgBanner_1" id="imgBanner_1" onChange={handleFileChange} required='true' />
              <DragnDrop image={previewImage} name="imgBanner_2" id="imgBanner_2" onChange={handleFileChange} required='true' />
              <DragnDrop image={previewImage} name="imgBanner_3" id="imgBanner_3" onChange={handleFileChange} required='true' />
            </div>
          </div>
        }
      />
    </div>
  )
}

export default ProfileStep3
