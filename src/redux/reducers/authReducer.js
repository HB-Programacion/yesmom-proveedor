
//Reducers asociados a autenticacion

import { types } from "../types/types";

const initialState = {
    logged : false,
    token : null,
    checking : true
}

export const authReducer = ( state = initialState , action) => {

    switch (action.type) {
        case types.authLogin:
            //Setear siempre el token , con el autenticado
            localStorage.setItem('TokenYesmonProveedor',action.payload);
            return {
                ...state,
                logged: true,
                token : action.payload,
                checking : false
            }
        case types.authStartChecking : 
            return {
                ...state,
                checking : true
            }
        case types.authFinishChecking : 
            return {
                ...state,
                checking : false
            }
        case types.authLogout:
            localStorage.removeItem('TokenYesmonProveedor');
            return {
                ...state,
                logged:false
            }
    
        default:
            return state;
    }
    
}