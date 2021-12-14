import { types } from "../types/types";


const initialState = {
    idActiveStore : null,
    // stores : null,
    store : null,
    productsActiveStore : {
        total : 0,
        products : [],
        active : [],
        disabled : [],
        totalDisabled : 0,
    },
}

export const storeReducer = ( state = initialState , action ) => {
    switch (action.type) {
        case types.setStores :
            return {
                ...state,
                stores : action.payload,
                idActiveStore :  action.payload.length >0 ? action.payload[0]._id : null
            }
        case types.setActiveStore:
            return {
                ...state,
                idActiveStore : action.payload
            }
        case types.setInfoActiveStore :
            return {
                ...state,
                store : action.payload
            }
        case types.setProductsByStore :
            return {
                ...state,
                productsActiveStore : {
                    ...state.productsActiveStore,
                    total : action.payload.total,
                    products : action.payload.products
                }
            }
        case types.setActiveProduct:
            return {
                ...state,
                productsActiveStore :{
                    ...state.productsActiveStore,
                    active : [...state.productsActiveStore.active,action.payload]
                }
            }
        case types.unsetActiveProduct:

            return {
                ...state,
                productsActiveStore :{
                    ...state.productsActiveStore,
                    active : state.productsActiveStore.active.filter( el => el !== action.payload)
                }
            }
    
        default: return state;
    }
}