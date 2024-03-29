import React, { useEffect } from 'react'
import { Route, Routes , Navigate} from 'react-router-dom';


import { 
    NewStore  , 
    ResumenVenta , 
    InfoPerfilRegistro,
    AddProductExcel,
    ActiveProducts,
    EliminarTienda,
    ChangePassword,
    MisDatos,
    Resumen,
    DesactivarCuenta
} from './Components'

import RestrictedRoute from './RestrictedRoute';

const AuthRoutes = ({ desktop }) => {

    useEffect(()=>{
        if(window){
            const timer = window.scrollTo(0,0);
            const timeout = setTimeout(timer,1000);

            return () => clearTimeout(timeout);
        }   
    },[])

    
    return (
        <>
            <div>
                <Routes>
                    <Route path="/p/store/new" element={ <NewStore /> } />
                    {
                        desktop && <Route path="/p/store/load-products" element={ <AddProductExcel /> } /> 
                    }
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
                     
                    <Route path="/p/info/mis-ordenes" element={ 
                        <RestrictedRoute>
                            <Resumen />
                        </RestrictedRoute>
                     } />
                    <Route path="/p/resumen-venta" element={ 
                        <RestrictedRoute>
                            <ResumenVenta />
                        </RestrictedRoute>
                     } />
                    <Route path="/p/info/desactivar-cuenta" element={ 
                        // <RestrictedRoute>
                            <DesactivarCuenta />
                        // </RestrictedRoute>
                     } />


                     
                    
                    <Route path="/*" element={ <Navigate to="/404" replace/>} />
                </Routes>
            </div>    
        </>
    )
}

export default AuthRoutes
