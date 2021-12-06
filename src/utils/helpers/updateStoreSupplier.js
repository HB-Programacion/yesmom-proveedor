import axios from "axios";
import Swal from "sweetalert2";
import { getUrlName } from "./getUlrName";



export const updateStoreSupplier = async ( { token ,images , nameStore , imagesInitial} ) => {

    try{   

        // console.log(nameStore);

        const { imgLogo , imgCover , imgBanners } = images;
        const formData = new FormData();
        //Name
        formData.append('nombreTienda', nameStore);
        formData.append('nombreTiendaUrl', getUrlName(nameStore));

        if(imgLogo!==''){
            formData.append('logo',imgLogo);
        }
        if(imgCover!==''){
            formData.append('portada',imgCover);
        }

        // let fileList = new DataTransfer();

        let arrayChanges = [];

        if(imgBanners.imgBanner_1 !==''){
            formData.append('banner',imgBanners.imgBanner_1);
            //Si tiene Id , quiere actualizar
            if(imagesInitial.imgBanners.imgBanner_1.id !=='')  {
                const obj = { id : imagesInitial.imgBanners.imgBanner_1.id , name : imgBanners.imgBanner_1.name }
                arrayChanges.push(obj);
            }
        }
        if(imgBanners.imgBanner_2 !==''){
            formData.append('banner',imgBanners.imgBanner_2);
            //Si tiene Id , quiere actualizar
            if(imagesInitial.imgBanners.imgBanner_2.id !==''){
                const obj = { id : imagesInitial.imgBanners.imgBanner_2.id , name : imgBanners.imgBanner_2.name }
                arrayChanges.push(obj);
            }
        }
        if(imgBanners.imgBanner_3 !==''){
            formData.append('banner',imgBanners.imgBanner_3);
            if(imagesInitial.imgBanners.imgBanner_3.id !==''){
                const obj = { id : imagesInitial.imgBanners.imgBanner_3.id , name : imgBanners.imgBanner_3.name }
                arrayChanges.push(obj);
            }
        }

        console.log(JSON.stringify(arrayChanges));
        if(arrayChanges.length >0 ){
            formData.append('bannerJson',JSON.stringify(arrayChanges));
        }

        // for (var pair of formData.entries()) {
        //     console.log(pair[0]+ ', ' + pair[1]); 
        // }

        //actualizar

        const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL_BUSINESS}/supplier/store`, formData ,{
            headers : {
                'access-token' : token,
                'Content-Type':'multipart/form-data'
            }
        })

        console.log(data);

       if(data?.response?.ok){
           return true;
        //    window.location.reload();
       }else{
        //    window.location.reload();
           return false;
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