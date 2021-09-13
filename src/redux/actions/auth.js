import { types } from "../types/types"



export const startLogin = ( access ) => {
    
    return ( dispatch) => { //getState
        dispatch(login());
    }
}


export const login = () => ({
    type : types.authLogin,
})
