import { types } from "../types/types";



const initialState = {
    name : 'Baby Store'
}

export const supplierReducer = ( state = initialState , action) => {

    switch (action.type) {
        case types.loadInfoSupplier:
            return {
                name : action.payload.name
            }
            
    
        default:
            return state;
    }
}