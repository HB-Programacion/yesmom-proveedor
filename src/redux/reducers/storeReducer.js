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
    ordersByStore : {
        isFetchingOrders : false,
    },
    clients: [],
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
        case types.setProductsDisabledByStore :
            return {
                ...state,
                productsActiveStore : {
                    ...state.productsActiveStore,
                    totalDisabled : action.payload.totalDisabled,
                    products : action.payload.productsDisabled
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
        case types.setActiveAllProducts : 
            return {
                ...state,
                productsActiveStore :{
                    ...state.productsActiveStore,
                    active : state.productsActiveStore.products.map(el => el.id )
                }
            }
        case types.unsetActiveAllProducts : 
            return {
                ...state,
                productsActiveStore :{
                    ...state.productsActiveStore,
                    active : []
                }
            }
        case types.deleteProduct:
            
            return {
                ...state,
                productsActiveStore :{
                    ...state.productsActiveStore,
                    // total : state.productsActiveStore.total - active.length,
                    // products : newProducts,
                    active : [],
                }
            }
        case types.setOrdersByStore :
            return {
                ...state,
                ordersByStore : action.payload,
                isFetchingOrders : false,
            }
        case types.startFetchClients: 
            return {
                ...state,
                fetchingClients: true,
                // clients: [],
            }
        case types.endFetchClients: 
            return {
                ...state,
                fetchingClients: undefined
            }
        case types.setClients :
                return {
                    ...state,
                    clients: action.payload
            }
        case types.cleanStore :
            return initialState;
        
        default: return state;
    }
}