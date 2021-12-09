
import Swal from "sweetalert2";
import clienteAxiosAuth from "../../config/axiosAuth";
import { validateToken } from "../../utils/helpers/validateToken";
import { types } from "../types/types"
import { loadStores } from "./store";
import { cleanDataSupplier, startLoadingInfoSupplier , startLoadingSupplierProducts } from "./supplier";



export const startAuth = ( access ) => {
    
    return async ( dispatch) => { //getState

        try{
            dispatch( startChecking());
            const { data }  = await clienteAxiosAuth.post('/autenticar/supplier?email=1',access);
            dispatch( finishChecking());
            
            if(data?.token){
                dispatch( startLogin(data.token));
            }else{
                Swal.fire('Inicio de sesión fallida', 'No existe usuario con esos accesos' , 'error');
                // alert('Revisa tus accesos');
            }
            

        }catch(e){
            dispatch( finishChecking());
            console.log(e);
        }


        /* dispatch(login()); */
    }
}

export const validateLoginSupplier = ( token ) => {
    return async (dispatch) => {
        try {

            dispatch( startChecking());
            const flagValidated = await validateToken(token);
            dispatch( finishChecking());
            if(flagValidated){
                // alert('Bienvenido de nuevo')
                dispatch( startLogin (token));

            }else{
                dispatch(logout());
                dispatch( cleanDataSupplier());
            }
            
        }catch(e){
            dispatch( finishChecking());
            console.log(e);
        }
    }
}

//Para setear data
export const startLogin = ( token) =>{
    return (dispatch) => {
        dispatch( login( token ));
        dispatch( loadStores())
        // dispatch( startLoadingInfoSupplier(token))
        // dispatch ( startLoadingSupplierProducts());
    }
}

export const startChecking = () => ({
    type : types.authStartChecking
})

export const finishChecking = () => ({
    type : types.authFinishChecking
})

export const logout = () => ({
    type : types.authLogout
})

export const login = ( token ) => ({
    type : types.authLogin,
    payload : token
})
