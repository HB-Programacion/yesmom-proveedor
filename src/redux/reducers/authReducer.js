
//Reducers asociados a autenticacion

import { types } from "../types/types";

export const authReducer = ( state = {} , action) => {

    switch (action.type) {
        case types.authLogin:
            //Setear siempre el token , con el autenticado
            /* localStorage.setItem('YesmomToken',action.payload.token); */
            return {
                ...state,
                logged: true,
/*                 token : action.payload.token */
            }
        case types.authLogout:
            localStorage.removeItem('YesmomToken');
            return {
                logged:false
            }
    
        default:
            return state;
    }
    
}