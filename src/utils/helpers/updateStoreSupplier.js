import axios from "axios";
import Swal from "sweetalert2";
import { getUrlName } from "./getUlrName";



export const updateStoreSupplier = async ( { images , infoAlmacen , nameStore , id} ) => {

    try{   
        console.log(infoAlmacen);

        Swal.fire({
            title : "Actualizando datos...",
            text : "Espera un momento....",
            allowOutsideClick : false,
            didOpen: () => {
                Swal.showLoading();
            }
        })

        const formData = new FormData();

        formData.append('id',id)

        Object.keys(infoAlmacen).forEach(( val , i)=>{
            formData.append(val,infoAlmacen[val])
        })

        const { imgLogo , imgCover , imgBanners } = images;
        
        //Name
        formData.append('nombreTienda', nameStore);
        formData.append('nombreTiendaUrl', getUrlName(nameStore));


        if(imgLogo!==''){
            formData.append('logo',imgLogo);
        }
        if(imgCover!==''){
            formData.append('portada',imgCover);
        }

        if(imgBanners.imgBanner_1 !==''){
            formData.append('banner',imgBanners.imgBanner_1);
        }
        if(imgBanners.imgBanner_2 !==''){
            formData.append('banner',imgBanners.imgBanner_2);
        }
        if(imgBanners.imgBanner_3 !==''){
            formData.append('banner',imgBanners.imgBanner_3);
        }
         for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }

        const token = localStorage.getItem('TokenYesmonProveedor');
        const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL_BUSINESS}/store`, formData ,{
            headers : {
                'access-token' : token,
                'Content-Type':'multipart/form-data'
            }
        })

        Swal.close();
        

        console.log(data);
    
       if(data?.CodigoRespuesta === '12'){
           return window.location.reload();
       }

       if(data?.response?.ok){
           return { ok : true , response : data.response}
        //    window.location.reload();
       }else{
        //    window.location.reload();
        return { ok : false }
       }

    }catch(error){
        // alert('Algo salió mal');
        console.log(error);
        return false;
    }
}


export const saveNewStoreSupplier = async ( { images , infoAlmacen , nameStore} ) => {
    try{

        Swal.fire({
            title : "Registrando tienda...",
            text : "Espera un momento....",
            allowOutsideClick : false,
            didOpen: () => {
                Swal.showLoading();
            }
        })
        const formData = new FormData();

        Object.keys(infoAlmacen).forEach(( val , i)=>{
            formData.append(val,infoAlmacen[val])
        })

        const { imgLogo , imgCover , imgBanners } = images;
        
        //Name
        formData.append('nombreTienda', nameStore);
        formData.append('nombreTiendaUrl', getUrlName(nameStore));


        if(imgLogo!==''){
            formData.append('logo',imgLogo);
        }
        if(imgCover!==''){
            formData.append('portada',imgCover);
        }

        if(imgBanners.imgBanner_1 !==''){
            formData.append('banner',imgBanners.imgBanner_1);
        }
        if(imgBanners.imgBanner_2 !==''){
            formData.append('banner',imgBanners.imgBanner_2);
        }
        if(imgBanners.imgBanner_3 !==''){
            formData.append('banner',imgBanners.imgBanner_3);
        }
        //  for (var pair of formData.entries()) {
        //     console.log(pair[0]+ ', ' + pair[1]); 
        // }

        const token = localStorage.getItem('TokenYesmonProveedor');
        const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL_BUSINESS}/store`, formData ,{
            headers : {
                'access-token' : token,
                'Content-Type':'multipart/form-data'
            }
        })

        Swal.close();
        

        console.log(data);
    
       if(data?.CodigoRespuesta === '12'){
           return window.location.reload();
       }

       if(data?.response?.ok){
           return { ok : true , response : data.response}
        //    window.location.reload();
       }else{
        //    window.location.reload();
        return { ok : false }
       }

    }catch( error ){
        Swal.close();
        console.log(error);
        return { ok : false }
    }
}