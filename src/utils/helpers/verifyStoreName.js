import axios from "axios";


export const verifyStoreName = async ( storeName='' , token) => {
    try{
        storeName = storeName.trim();

        if(storeName.length === 0){
            return false;
        }
        const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL_BUSINESS}/supplier/verifystorename?storeName=${storeName}`,{
            headers : {
                'access-token' : token
            }
        })
        if( data?.ok) {
            return true;
        }else{
            // window.location.reload();
            return false;
        }

    }catch(err){
        console.log(err);
        return false;
    }
}