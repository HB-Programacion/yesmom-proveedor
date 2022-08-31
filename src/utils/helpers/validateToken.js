import axios from "axios"


const token = localStorage.getItem("TokenYesmonProveedor");

export const validateTokenHeader = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL_SECURITY}/autenticar/token/supplier?delivery=no`,
      {
        headers: { "access-token": token },
      }
    );
    return response;
  };

  export const validateToken = async (token) => {
    try{
        const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL_SECURITY}/autenticar/token/supplier?delivery=no`,{
            headers : {
                'access-token' : token
            }
        })
    
        if( data?.mensaje ==="Token válido"){
            console.log('Validado in validateToken');
            return true;
        }else{
            return false;
        }
    }catch(e){
        console.log(e);
        return false;
    }
}