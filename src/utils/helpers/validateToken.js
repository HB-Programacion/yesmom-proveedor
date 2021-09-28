import axios from "axios"


export const validateToken = async (token) => {
    try{

        const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL_SECURITY}/autenticar/tokensupplier?delivery=no`,{
            headers : {
                'access-token' : token
            }
        })
    
        if( data?.mensaje ==="Token válido"){
            console.log('Validado');
            return true;
        }else{
            return false;
        }
    }catch(e){
        console.log(e);
        return false;
    }
}