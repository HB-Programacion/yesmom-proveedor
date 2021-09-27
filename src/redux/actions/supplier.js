import { types } from "../types/types";


export const startLoadingInfoSupplier = () => {
    return async (dispatch) => {
        //Traer data del usuario
        console.log('loading data');

        dispatch( loadingDataSupplier());

    }
}

export const loadingDataSupplier = () => ({
    type : types.loadInfoSupplier,
    payload : {
        name : 'Baby Store'
    }
})