
//Reducers asociados a autenticacion

import { types } from "../types/types";


export const authReducer = ( state = {} , action) => {

    switch (action.type) {
        case  types.login:
            return {
                logged : true,
                name : "TEST-LOGGED"
            }
        default:
            return state;
    }
}