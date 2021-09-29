import axios from "axios";
import { types } from "../types/types";


export const startLoadingInfoSupplier = (token) => {
    return async (dispatch) => {
        //Traer data del usuario
        //Llamar a endpoint con el token
        try{
            const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL_BUSINESS}/supplier/getOne`,{
                headers : {
                    'access-token' : token
                }
            })

            if(data?.response?.ok){
                const { response : { item } } = data;
                dispatch( loadingDataSupplier(item));
            }
        }catch(e){
            console.log(e.message);
        }



    }
}

export const loadingDataSupplier = ( data ) => ({
    type : types.loadInfoSupplier,
    payload : data
})

export const cleanSupplier = () => ({
    type : types.cleanSupplier
})
//Perfil
export const getInfoProfile = () => {}