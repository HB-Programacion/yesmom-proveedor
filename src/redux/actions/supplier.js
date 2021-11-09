import axios from "axios";
import { getSupplierImages } from "../../utils/helpers/getSupplierImages";
import { getSupplierProducts, getSupplierProductsPaginate } from "../../utils/helpers/getSupplierProducts";
import { types } from "../types/types";
import { logout } from "./auth";


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
            }else{
                dispatch(logout());
                dispatch( cleanDataSupplier());
                alert('Sesión terminada');
            }
        }catch(e){
            console.log(e.message);
        }



    }
}

//Productos
export const startLoadingSupplierProducts = () => {
    return  async (dispatch  , getState ) => {
        const { token } = getState().auth;
        const data = await getSupplierProducts(token);
        //data es : 
        // {
                // total : 10,
                // products : []
        // }
        dispatch(loadSupplierProducts(data) );
    }
}
export const startLoadingSupplierProductsPaginate = ( config ) => {
    return  async (dispatch  , getState ) => {
        const { token } = getState().auth;
        const data = await getSupplierProductsPaginate(token , config );
        dispatch(loadSupplierProducts(data) );
    }
}

export const startLoadingSupplierImages = () => {
    return async (dispatch , getState) => {
        const { token } = getState().auth;
        const data = await getSupplierImages(token);
        dispatch(loadSupplierImages(data) );
    }
}


export const updateStore = ( data ) => ({
    type : types.updateActiveStore,
    payload : data
})
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

        const { active } = getState().supplierProducts;
        const { token } =getState().auth;
        console.log('Eliminando estos : ', active );
        //Enviar al endpoint
        //Enviar como arreglo : [ "id513123"];

        try{
            const { data } = await axios.patch(`${process.env.REACT_APP_BACKEND_URL_BUSINESS}/supplier/productstate` ,{
                "products" : active,
                "state" : "D"
            },{
                headers : {
                    'access-token' : token
                }
            })

            if(data?.response?.ok){
                alert('Eliminado');
                dispatch(deleteProduct());
            }else{
                alert('Hubo un error');
            }
        }catch(err){
            console.log(err);
            alert('Algo salió mal');
        }
        

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
// export const loadSupplierProductsPaginate = ( data) => ({
//     type : types.loadSupplierProductsPaginate,
//     payload : data
// })
export const loadSupplierImages = ( data) => ({
    type : types.loadSupplierImages,
    payload : data
})

export const cleanSupplierProducts = () => ({
    type : types.cleanSupplierProducts
})
export const cleanSupplier = () => ({
    type : types.cleanSupplier
})