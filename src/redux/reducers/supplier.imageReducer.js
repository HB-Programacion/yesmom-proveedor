import { types } from "../types/types";


const initialState = {
    name : '',
    images : { 
        imgLogo : "",
        imgCover :"",
        imgBanners : {
            imgBanner_1:"",
            imgBanner_2:"",
            imgBanner_3:"",
        },
    },
    activeStore : { 
        imgLogo : "",
        imgCover :"",
        imgBanners : {
            imgBanner_1:"",
            imgBanner_2:"",
            imgBanner_3:"",
        },
    }
}

export const supplierImageReducer = ( state = initialState  , action) => {

    switch (action.type) {
        case types.loadSupplierImages:
            const { nameStore : name , images } = action.payload;
            return { 
                ...state , 
                name,
                images,
            }
        case types.updateActiveStore :
            console.log(action.payload);
            return {
                ... state,
                activeStore : action.payload
            }
    
        default:
            return state;
    }
}