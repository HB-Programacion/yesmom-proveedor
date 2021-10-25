import axios from "axios";
import clienteAxiosAuth from "../../config/axiosAuth";
import { validateToken } from "../../utils/helpers/validateToken";
import { types } from "../types/types"
import { cleanDataSupplier, startLoadingInfoSupplier , startLoadingSupplierProducts } from "./supplier";



export const startAuth = ( access ) => {
    
    return async ( dispatch) => { //getState

        try{
        
            const { data }  = await clienteAxiosAuth.post('/autenticar/supplier?email=1',access);
    
            if(data?.token){
                // alert('Logeado');
                dispatch( validateLoginSupplier(data.token));
                // dispatch ( login(data.token));
                // dispatch( startLoadingInfoSupplier(data.token))
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

export const validateLoginSupplier = ( token ) => {
    return async (dispatch) => {
        try {

            const flagValidated = await validateToken(token);
            
            if(flagValidated){
                // alert('Bienvenido de nuevo')
                dispatch( startLogin (token));

            }else{
                dispatch(logout());
                dispatch( cleanDataSupplier());
                alert('Inicia sesión de nuevo')
            }
            
        }catch(e){
            console.log(e);
        }
    }
}

//Para setear data
export const startLogin = ( token) =>{
    return (dispatch) => {
        dispatch( login( token ));
        dispatch( startLoadingInfoSupplier(token))
        dispatch ( startLoadingSupplierProducts());
    }
}


export const logout = () => ({
    type : types.authLogout
})

export const login = ( token ) => ({
    type : types.authLogin,
    payload : token
})
