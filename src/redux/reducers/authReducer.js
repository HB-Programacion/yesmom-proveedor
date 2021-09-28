
//Reducers asociados a autenticacion

import { types } from "../types/types";

export const authReducer = ( state = { } , action) => {

    switch (action.type) {
        case types.authLogin:
            //Setear siempre el token , con el autenticado
            localStorage.setItem('TokenYesmonProveedor',action.payload);
            return {
                ...state,
                logged: true,
                token : action.payload
            }
        case types.authLogout:
            localStorage.removeItem('TokenYesmonProveedor');
            return {
                logged:false
            }
    
        default:
            return state;
    }
    
}