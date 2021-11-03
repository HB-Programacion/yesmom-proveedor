import axios from "axios";

export const getSupplierImages = async ( token ) => {
    try {

        const { data }  = await axios.get(`${process.env.REACT_APP_BACKEND_URL_BUSINESS}/supplier/store`,{
            headers : {
                'access-token' : token,
                'Content-Type' : 'application/json'
            }
        });
        
        // console.log(data);
        if(data?.proveedor){
            const cleanData = prepareDataProductImages( data.proveedor );
        
            return cleanData;
        }else{
            return {};
        }

    }catch(e){
        console.log(e.message);
        console.log('Algo salio mal');
        return {};
    }
}

export const prepareDataProductImages = ( data ) => {

    //schema
    let infoImagesSupplier = {};
    let images = { 
        imgLogo : "",
        imgCover :"",
        imgBanners : {
            imgBanner_1:{
                id: '',
                url:""
            },
            imgBanner_2:{
                id : '',
                url:""
            },
            imgBanner_3:{
                id: '',
                url:""
            },
        }
    };
    images.imgLogo = data?.imagenLogo[0]?.url;
    images.imgCover = data?.imagenPortada[0]?.url;
    data?.imagenBanner.map( ( objImagen , i) => {
        const idx = i+1;
        images.imgBanners[`imgBanner_${idx}`] = {
            url : objImagen.url,
            id : objImagen._id,
        }
    })
    //Añadir
    infoImagesSupplier.nameStore = data?.nombreTienda;
    infoImagesSupplier.images = images;

    return infoImagesSupplier;
}