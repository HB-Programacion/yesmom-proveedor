import { types } from "../types/types";


const initialState = {
    idActiveStore : null,
    store : null
}

export const storeReducer = ( state = initialState , action ) => {
    switch (action.type) {
        case types.setActiveStore:
            return {
                ...state,
                idActiveStore : action.payload
            }
    
        default: return state;
    }
}