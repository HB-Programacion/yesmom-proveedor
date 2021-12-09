import { types } from "../types/types";


const initialState = {
    idActiveStore : null,
    // stores : null,
    store : null
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
    
        default: return state;
    }
}