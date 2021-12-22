import axios from "axios";
import Swal from "sweetalert2";

import clienteAxiosBusiness from "../../config/axiosBusiness";


import { logout } from "./auth";
import { cleanUi, finishLoading, startLoading } from "./ui";

import { types } from "../types/types";
import { cleanStore } from "./store";


export const startLoadingInfoSupplier = () => {
    return async (dispatch , getState) => {
        const { token } = getState().auth;
        //Traer data del usuario
        //Llamar a endpoint con el token
        try{
            dispatch( startLoading());
            
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

            }

            dispatch( finishLoading());
        }catch(e){
            dispatch( finishLoading());
            console.log(e.message);
        }



    }
}

export const startUpdatingInfoSupplier = ( values ) => {
    return async (dispatch , getState) => {
        try{
            dispatch( startLoading());

            const { token } = getState().auth;

            const { data } = await clienteAxiosBusiness.patch('/supplier', values , { 
                headers :  { 'access-token' : token }
            })

            if(data?.response.ok){
                dispatch( loadingDataSupplier(values));
            }
            
            dispatch ( loadingDataSupplier(values));
            dispatch( finishLoading());
            

        }catch(err){
            dispatch( finishLoading());
            console.log(err);
        }
    }
}

export const startDisablingSupplier = ( { password }) => {
    return async( dispatch , getState) => {

        try {

            Swal.fire({
                title : "Desactivando proveedor...",
                text : "Espera un momento....",
                allowOutsideClick : false,
                didOpen: () => {
                    Swal.showLoading();
                }
            })
            dispatch( startLoading());
            const { auth : { token } } = getState();

            const { data } = await clienteAxiosBusiness.patch('/supplier/disabled',{
                password
            }, {
                headers : { 'access-token' : token }
            })


            Swal.close();
            if(data?.response?.ok){
                Swal.fire('Proveedor desactivado', 'Proveedor desactivado correctamente','success');
                setTimeout(()=>{
                    
                    dispatch(logout());
                    window.location.href='/';
                },500)
            }else{
                Swal.fire('Contraseña incorrecta', 'Ingresaste una contraseña incorrecta','error');
            }

            dispatch( finishLoading());

        }catch(err){
            dispatch( finishLoading());
            console.log(err);
        }
    } 
}

export const startDisablingStore = ( password ) => {
    return async( dispatch , getState) => {

        try {

            Swal.fire({
                title : "Desactivando tienda...",
                text : "Espera un momento....",
                allowOutsideClick : false,
                didOpen: () => {
                    Swal.showLoading();
                }
            })
            dispatch( startLoading());
            const { auth : { token } , store : { idActiveStore } } = getState();
            
            const { data } = await clienteAxiosBusiness.patch('/store/desactive',{
                id : idActiveStore,
                password
            }, {
                headers : { 'access-token' : token }
            })

            Swal.close();
            if(data?.response.ok){
                Swal.fire('Tienda desactivada', 'La tienda ha sido desactivada correctamente','success');
                setTimeout(()=>{
                    window.location.reload();
                },500)
            }

            dispatch( finishLoading());

        }catch(err){
            dispatch( finishLoading());
            console.log(err);
        }
    }
}

//Productos
// export const startLoadingSupplierProducts = () => {
//     return  async (dispatch  , getState ) => {
//         const { token } = getState().auth;

//         const [ data , data_disabled] = await Promise.all([
//             getSupplierProducts(token),
//             getSupplierProductsDisabled(token)
//         ])

//         dispatch(loadSupplierProducts(data) );
//         dispatch(loadSupplierProductsDisabled(data_disabled) );
//     }
// }
// export const startLoadingSupplierProductsPaginate = ( config ) => {
//     return  async (dispatch  , getState ) => {
//         const { token } = getState().auth;
//         const data = await getSupplierProductsPaginate(token , config );

//         // console.log('DATA EN ESTE LLAMADO ' , data);
//         dispatch(loadSupplierProducts(data) );
//     }
// }
// export const startLoadingSupplierProductsDisabledPaginate = ( config ) => {
//     return  async (dispatch  , getState ) => {
//         const { token } = getState().auth;
//         const data = await getSupplierProductsDisabledPaginate(token , config );

//         // console.log('DATA EN ESTE LLAMADO ' , data);
//         dispatch(loadSupplierProductsDisabled(data) );
//     }
// }
// export const startDeletingProduct = ( ) => {
//     return async (dispatch , getState) => {

//         const { active } = getState().supplierProducts;
//         const { token } =getState().auth;
//         // console.log('Eliminando estos : ', active );
//         //Enviar al endpoint
//         //Enviar como arreglo : [ "id513123"];

//         try{
//             const { data } = await axios.patch(`${process.env.REACT_APP_BACKEND_URL_BUSINESS}/supplier/productstate` ,{
//                 "products" : active,
//                 "state" : "D"
//             },{
//                 headers : {
//                     'access-token' : token
//                 }
//             })

//             if(data?.response?.ok){
//                 Swal.fire('Producto(s) desactivados', 'Productos seleccionados han sido desactivados' , 'success');
//                 dispatch(deleteProduct());
//             }else{
//                 Swal.fire('Hubo un error', 'No se pudo desactivar los productos' , 'info');
//                 // alert('Hubo un error');
//             }
//         }catch(err){
//             console.log(err);
//             Swal.fire('Error', 'Error inesperado' , 'error');
//             // alert('Algo salió mal');
//         }
        

//     }
// }


export const cleanDataSupplier = () => {

    return (dispatch) => {
        dispatch ( cleanSupplier());
        dispatch ( cleanUi())
        dispatch ( cleanStore())
    }
}

export const updateStore = ( data ) => ({
    type : types.updateActiveStore,
    payload : data
})

export const loadingDataSupplier = ( data ) => ({
    type : types.loadInfoSupplier,
    payload : data
})

export const cleanSupplier = () => ({
    type : types.cleanSupplier
})