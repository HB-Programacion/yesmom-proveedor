import axios from "axios";
import { getSupplierProducts } from "../../utils/helpers/getSupplierProducts";
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

//Productos
export const startLoadingSupplierProducts = () => {
    return  async (dispatch ) => {
        const data = await getSupplierProducts();
        dispatch(loadSupplierProducts(data) );
    }
}

export const setActiveProduct = ( idProduct) => ({
    type : types.setActiveProduct, 
    payload : idProduct  
})

export const setActiveAllProducts = () => ({
    type : types.setActiveAllProducts
})

export const unsetActiveProduct = ( idProduct) => ({
    type : types.unsetActiveProduct,   
    payload : idProduct  
})

export const unsetActiveAllProducts= ( ) => ({
    type : types.unsetActiveAllProducts,   
})

export const startDeletingProduct = ( ) => {
    return async (dispatch , getState) => {

        const { active } = getState().supplierProducts
        console.log('Eliminando estos : ', active );
        //Enviar al endpoint
        //Enviar como arreglo : [ "id513123"];

        dispatch(deleteProduct());
    }
}
export const cleanDataSupplier = () => {

    return (dispatch) => {
        dispatch ( cleanSupplier());
        dispatch ( cleanSupplierProducts());
    }
}


export const deleteProduct = () => ({
    type : types.deleteProduct
})
export const loadingDataSupplier = ( data ) => ({
    type : types.loadInfoSupplier,
    payload : data
})
export const loadSupplierProducts = ( data) => ({
    type : types.loadSupplierProducts,
    payload : data
})

export const cleanSupplierProducts = () => ({
    type : types.cleanSupplierProducts
})
export const cleanSupplier = () => ({
    type : types.cleanSupplier
})