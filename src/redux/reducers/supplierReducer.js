import { types } from "../types/types";



const initialState = {}

export const supplierReducer = ( state = initialState , action) => {

    switch (action.type) {
        case types.loadInfoSupplier:
            return {
                ...state,
                ...action.payload
            }
/*         case types.loadSupplierProducts :
            return {
                ...state,
                
            } */
        case types.cleanSupplier : 
            return { }
        
        default:
            return state;
    }
}