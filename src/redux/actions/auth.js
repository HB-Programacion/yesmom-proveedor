import clienteAxiosAuth from "../../config/axiosAuth";
import { types } from "../types/types"
import { startLoadingInfoSupplier } from "./supplier";



export const startLogin = ( access ) => {
    
    return async ( dispatch) => { //getState

        try{
            
            const { data }  = await clienteAxiosAuth.post('/autenticar/supplier?email=1',access);
            if(data?.token){
                alert('Logeado');
                dispatch( login( data.token ));
                dispatch( startLoadingInfoSupplier())
                //TODO : Cuando se lee de localstorage tmb debe llamar los datos!!!
            }else{
                alert('Revisa tus accesos');
            }
            

        }catch(e){
            console.log(e);
        }


        /* dispatch(login()); */
    }
}

export const logout = () => ({
    type : types.authLogout
})

export const login = ( token ) => ({
    type : types.authLogin,
    payload : token
})
