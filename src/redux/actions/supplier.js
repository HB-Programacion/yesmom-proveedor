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

// export const getSupplierProducts = () => {
//     return async () => {
//         try {
//             const userType = "admin";
//             const idSupplier = "614cdeb4686d50c2139605be";

//             const { data }  = await axios.get(`${process.env.REACT_APP_BACKEND_URL_BUSINESS}/get-product-pagination/${userType}?skip=0&limit=10&state=A&supplier=${idSupplier}`);
            
//             console.log(data);
//         }catch(e){
//             console.log('Algo salio mal');
//         }
//     }
// }

export const loadingDataSupplier = ( data ) => ({
    type : types.loadInfoSupplier,
    payload : data
})
export const loadSupplierProducts = ( data) => ({
    type : types.loadSupplierProducts,
    payload : data
})
export const cleanSupplier = () => ({
    type : types.cleanSupplier
})