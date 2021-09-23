import clienteAxiosAuth from "../../config/axiosAuth";
import { types } from "../types/types"



export const startLogin = ( access ) => {
    
    return async ( dispatch) => { //getState

        try{
            
            const { data }  = await clienteAxiosAuth.post('/autenticar/supplier?email=1',access);
            if(data?.token){
                alert('Logeado');
                dispatch( login( data.token ));
            }else{
                alert('Revisa tus accesos');
            }
            

        }catch(e){
            console.log(e);
        }


        /* dispatch(login()); */
    }
}


export const login = ( token ) => ({
    type : types.authLogin,
    payload : token
})
