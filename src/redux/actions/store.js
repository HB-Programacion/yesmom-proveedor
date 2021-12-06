import axios from "axios";
import Swal from "sweetalert2";
import { types } from "../types/types"



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
            
            const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL_BUSINESS}/store/importproducts`, formData ,{
                headers : {
                    "access-token": token,
                },
                timeout : 1000 * 60 * 6
            })

            // console.log(data);
            
            Swal.close();

            //Token invalido
            if (data?.response?.subida) {
                return Swal.fire(
                  "Productos subidos exitosamente",
                  "Revisa tus productos en tu perfil",
                  "success"
                );
            } else {
                return Swal.fire(
                  "Revisa los archivos",
                  "Archivo(s) con mal formato",
                  "error"
                );
            }


        }catch(err){
            console.log(err);
            Swal.close();
            Swal.fire(
              "Formato incorrecto",
              "Revisa el formato de ambos archivos",
              "info"
            );
          }
    }
}


export const setActiveStore = (payload) => ({
    type : types.setActiveStore,
    payload
})