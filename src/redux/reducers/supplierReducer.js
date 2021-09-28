import { types } from "../types/types";



const initialState = {}

export const supplierReducer = ( state = initialState , action) => {

    switch (action.type) {
        case types.loadInfoSupplier:
            return {
                ...state,
                ...action.payload
            }
            
    
        default:
            return state;
    }
}