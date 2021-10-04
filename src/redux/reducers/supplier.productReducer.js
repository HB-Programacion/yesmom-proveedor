import { types } from "../types/types";





const initialState = {
    products : [],
    active : [],
};
export const supplierProductReducer = ( state = initialState , action) => {

    switch (action.type) {
        case types.loadSupplierProducts:
            return {
                ...state,
                products : action.payload,
            }
        case types.setActiveProduct:
            return {
                ...state,
                active : [
                    ...state.active,
                    action.payload,
                ]
            }
        case types.unsetActiveProduct :
            return {
                ...state,
                active : state.active.filter(id => id!==action.payload)
            }
        case types.deleteProduct :
            return {
                ...state,
                products : state.products.filter(product => product.id!==action.payload)
            }
        default:
            return state;
            
    }

}   