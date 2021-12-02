import React from 'react'
import { Route, Routes , Navigate} from 'react-router-dom';


import { 
    NewStore  , 
    ResumenVenta , 
    InfoPerfilRegistro,
    AddProductExcel
} from './Components'

import RestrictedRoute from './RestrictedRoute';

const AuthRoutes = () => {


    return (
        <>
            <div>
                <Routes>
                    <Route path="/p/store/new" element={ <NewStore /> } />
                    <Route path="/p/store/load-products" element={ <AddProductExcel /> } />
                    <Route path="/p/info/registro" element={ 
                        <RestrictedRoute>
                            <InfoPerfilRegistro />
                        </RestrictedRoute>
                     } />
                    <Route path="/p/resumen-venta" element={ 
                        <RestrictedRoute>
                            <ResumenVenta />
                        </RestrictedRoute>
                     } />
                    
                    <Route path="/*" element={ <Navigate to="/404" />} />
                </Routes>
            </div>    
        </>
    )
}

export default AuthRoutes
