import axios from "axios";



export const updateStoreSupplier = async ( { token ,images , nameStore} ) => {

    try{   

        console.log(images);
        const { imgLogo , imgCover , imgBanners } = images;
        const formData = new FormData();

        //Name
        formData.append('nombreTienda', nameStore);
        if(imgLogo!= ''){
            formData.append('logo',imgLogo);
        }
        if(imgCover!=''){
            formData.append('portada',imgCover);
        }

        // let fileList = new DataTransfer();

        imgBanners.imgBanner_1 !='' && formData.append('banner',imgBanners.imgBanner_1);
        // fileList.items.add(imgBanners.imgBanner_1)
        imgBanners.imgBanner_2 !='' && formData.append('banner',imgBanners.imgBanner_2);
        // fileList.items.add(imgBanners.imgBanner_2);
        imgBanners.imgBanner_3 !='' && formData.append('banner',imgBanners.imgBanner_3);
        // fileList.items.add(imgBanners.imgBanner_3);

        // console.log(fileList.files);
        
        // // formData.append('banner',fileList.files);
        // formData.append('banner[]', fileList.files);


        for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }

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
           return false;
        //    window.location.reload();
       }

    }catch(error){
        alert('Algo salió mal');
        console.log(error);
        return false;
    }
}