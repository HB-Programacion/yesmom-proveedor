import { 
    applyMiddleware, 
    combineReducers, 
    compose, 
    createStore 
} from "redux";
import thunk from 'redux-thunk';

import { authReducer } from "../reducers/authReducer";
import { supplierImageReducer } from "../reducers/supplier.imageReducer";
import { supplierProductReducer } from "../reducers/supplier.productReducer";
import { supplierReducer } from "../reducers/supplierReducer";


//Para habilitar redux dev tools


const composeEnhancers = (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth : authReducer,
    supplier : supplierReducer,
    supplierProducts : supplierProductReducer,
    supplierImages : supplierImageReducer,
    //More reducers 
})

const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
); 

export default store;