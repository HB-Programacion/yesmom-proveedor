
import Swal from "sweetalert2";
import clienteAxiosBusiness from "../../config/axiosBusiness";
import { prepareDataProductSupplier } from "../../utils/helpers/getSupplierProducts";
import { types } from "../types/types"
import { finishLoading, startLoading } from "./ui";




export const loadProducts = ( formData) => {
    return async ( dispatch , getState) => {
        const { token } = getState().auth;
        try{
            Swal.fire({
                title: "Subiendo productos...",
                text: "Espera un momento....",
                allowOutsideClick: false,
                didOpen: () => {
                  Swal.showLoading();
                },
              });
            
            const { data } = await clienteAxiosBusiness.post('/store/importproducts', formData ,{
                headers : {
                    "access-token": token,
                },
                timeout : 1000 * 60 * 6
            })

            // console.log(data);
            
            Swal.close();

            //Token invalido
            if (data?.response?.subida) {

               
                Swal.fire("Productos subidos exitosamente","Revisa tus productos en tu perfil","success");
                return setTimeout(() => {
                  window.location.href="/p/info/registro"
                },1000)
            } else {
                return Swal.fire("Revisa los archivos","Archivo(s) con mal formato","error");
            }

        }catch(err){
            console.log(err);
            Swal.close();
            Swal.fire("Formato incorrecto","Revisa el formato de ambos archivos","info");
          }
    }
}

export const loadStores = () => {
  return async (dispatch , getState)=>{

    const { token } = getState().auth;
    try{
      const { data } = await clienteAxiosBusiness.get('/store/list' , {
        headers : {
          'access-token' : token
        }
      })

      if(data?.stores){
        dispatch( setStores(data.stores));
        // if(data.stores.length> 0){
        //   dispatch(startInfoActiveStore(data.stores[0]._id))
        // }
      }
    }catch(err){
      console.log(err);
    }
  }
}

export const startInfoActiveStore = (id) => {
  return async(dispatch, getState) => {
    try{
      //Iniciar
      dispatch(startLoading());

      const { token } = getState().auth;
      const { data } = await clienteAxiosBusiness.get('/store' , {
        headers : {
          'access-token' : token
        },
        params : {
          id
        }
      })

      if(data?.store){
        dispatch(setInfoActiveStore(data.store))
      }

      dispatch(finishLoading());
      
    }catch(err){
      dispatch(finishLoading());
      console.log(err);
    }
  }
}

//products

export const startLoadingProductsStore = ( { skip = 0 , limit = 6 , state='A' , name}) => {
  return async (dispatch , getState) =>{
    try{

      dispatch(startLoading());
      const { idActiveStore } = getState().store;
      const { token } = getState().auth;
      const { data } = await clienteAxiosBusiness.get('/store/products',{
        params : {
          id : idActiveStore,
          state,
          skip,
          limit : 6,
          name: name ? name : null,
        },
        headers :{
          'access-token' : token
        }
      })

      if(data?.productosGeneral){
        const cleanData = prepareDataProductSupplier(data.productosGeneral);
        
        if(state === 'A'){
          dispatch(setProductsByStore({
            total : data.totalDeProductos,
            products : cleanData
          }))
          
        }else{
          dispatch(setProductsDisabledByStore({
            totalDisabled : data.totalDeProductos,
            productsDisabled : cleanData
          }))
        }
      }else{
        dispatch(setProductsByStore({
          total : 0,
          products : []
        }))
      }
      
      dispatch(finishLoading());

    }catch(err){
      console.log(err);
    }
  }
}

export const startDeletingProduct = () => {
  return async ( dispatch , getState) => {
    try{

      const { productsActiveStore :  { active }, idActiveStore} = getState().store;
      const { token } =getState().auth;

      const { data } = await clienteAxiosBusiness.patch('/store/productstate' ,{
          products : active,
          state : "D",
          store: idActiveStore
      },{
          headers : {
              'access-token' : token
          }
      })

      if(data?.response?.ok){
          Swal.fire('Producto(s) desactivados', 'Productos seleccionados han sido desactivados' , 'success');
          dispatch(deleteProduct());
          dispatch( startLoadingProductsStore({}))
      }else{
          Swal.fire('Hubo un error', 'No se pudo desactivar los productos' , 'info');
          // alert('Hubo un error');
      }

      console.log(active);
    }catch(err){
      console.log(err);
    }
  }
}

export const loadOrdersByStore = ({ id, skip = 0 , limit = 'all' , state='P'}) => {
  return async (dispatch , getState)=>{

		dispatch(startLoading());
    const { idActiveStore } = getState().store;
    const { token } = getState().auth;
    try{
			let json;
			if(id === "0" || id === null) {
				json = {
          state,
          skip,
          limit,
        }
			}
			else {
				json = {
					storeId: id,
          state,
          skip,
          limit,
        }
			}
      const { data } = await clienteAxiosBusiness.get(`/supplier/listorders` , {
				params : json,
        headers : {
          'access-token' : token
        }
      })
      dispatch(finishLoading());
      if(data && data.ordersGeneral){
        dispatch( setOrdersByStore(data));
      }else{
        dispatch( setOrdersByStore({ordersGeneral: [], total : 0 , page :0}));
      }
    }catch(err){
      dispatch(finishLoading());
      console.log(err);
    }
  }
}

// export const loadOrdersBySupplier = ({ skip = 0 , limit = 'all' , state='P'}) => {
//   return async (dispatch , getState)=>{

// 		dispatch(startLoading());
//     const { token } = getState().auth;
//     try{
//       const { data } = await clienteAxiosBusiness.get(`/supplier/listorders` , {
// 				params : {
//           state,
//           skip,
//           limit,
//         },
//         headers : {
//           'access-token' : token
//         }
//       })
// 			console.log('loadOrdersBySupplier',data);
//       if(data?.ordersGeneral){
//         dispatch(setOrdersBySupplier(data.ordersGeneral));
//       }
//     }catch(err){
//       console.log(err);
//     }
//   }
// }

export const setStores = (payload) => ({
  type : types.setStores,
  payload
})
export const setInfoActiveStore = (payload) => ({
  type : types.setInfoActiveStore,
  payload
})
export const setActiveStore = (payload) => ({
    type : types.setActiveStore,
    payload
})

//products
export const setProductsByStore = ( payload ) => ({
  type : types.setProductsByStore,
  payload
})
export const setProductsDisabledByStore = ( payload ) => ({
  type : types.setProductsDisabledByStore,
  payload
})

export const setActiveProduct = (payload) => ({
  type : types.setActiveProduct,
  payload
})

export const unsetActiveProduct = (payload) => ({
  type : types.unsetActiveProduct,
  payload
})

export const setActiveAllProducts = () => ({
  type : types.setActiveAllProducts
})
export const unsetActiveAllProducts = () => ({
  type : types.unsetActiveAllProducts,
})

export const deleteProduct = () => ({
  type : types.deleteProduct
})

export const cleanStore = () => ({
  type : types.cleanStore
})

//? Orders
export const setOrdersByStore = (payload) => ({
  type : types.setOrdersByStore,
  payload
})
export const setOrdersBySupplier = (payload) => ({
  type : types.setOrdersByStore,
  payload
})