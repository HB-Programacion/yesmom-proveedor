import { 
    applyMiddleware, 
    combineReducers, 
    compose, 
    createStore 
} from "redux";
import thunk from 'redux-thunk';

import { authReducer } from "../reducers/authReducer";
import { supplierProductReducer } from "../reducers/supplier.productReducer";
import { supplierReducer } from "../reducers/supplierReducer";


//Para habilitar redux dev tools
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth : authReducer,
    supplier : supplierReducer,
    supplierProducts : supplierProductReducer,
    //More reducers 
})

const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
); 

export default store;