import { types } from "../types/types";





const initialState = {
    total : 0,
    totalDisabled : 0,
    products : [],
    productsDisabled : [],
    active : [],
};
export const supplierProductReducer = ( state = initialState , action) => {

    switch (action.type) {
        case types.loadSupplierProducts:
            return {
                ...state,
                total : action.payload.total,
                products : action.payload.products,
            }
        case types.loadSupplierProductsDisabled:
            return {
                ...state,
                totalDisabled : action.payload.total,
                productsDisabled : action.payload.productsDisabled,
            }
        case types.loadSupplierProductsPaginate:
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
        case types.setActiveAllProducts:
            return {
                ...state,
                active : state.products.map( product => product.id)
            }
        case types.unsetActiveProduct :
            return {
                ...state,
                active : state.active.filter(id => id!==action.payload)
            }
        case types.unsetActiveAllProducts:
            return {
                ...state,
                active : []
            }
        case types.deleteProduct :
            return {
                ...state,
                products : state.products.filter(product => !state.active.includes(product.id)),
                active : [],
            }
        case types.cleanSupplierProducts:
            return  {
                products : [],
                active : [],
            }
        default:
            return state;
            
    }

}   