import React from 'react'
import { Route, Routes , Navigate} from 'react-router-dom';


import { 
    NewStore  , 
    ResumenVenta , 
    InfoPerfilRegistro,
    AddProductExcel,
    ActiveProducts,
    EliminarTienda,
    ChangePassword,
    MisDatos
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
                    <Route path="/p/info/productos" element={ 
                        <RestrictedRoute>
                            <ActiveProducts />
                        </RestrictedRoute>
                     } />
                    <Route path="/p/info/eliminar-tienda" element={ 
                        <RestrictedRoute>
                            <EliminarTienda />
                        </RestrictedRoute>
                     } />
                    
                    {/* Supplier */}
                    <Route path="/p/info/cambiar-password" element={ 
                        <RestrictedRoute>
                            <ChangePassword />
                        </RestrictedRoute>
                     } />
                    <Route path="/p/info/mis-datos" element={ 
                        <RestrictedRoute>
                            <MisDatos />
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
