import React from 'react'
import Switch from 'react-bootstrap/esm/Switch'
import { Redirect, Route } from 'react-router'
import { protectedRoutes } from '../routes'

const ProtectedRoutes = () => {
    
    return (
        <div>
            <Switch>
                {
                    protectedRoutes.map((route,i)=>(
                        <Route 
                            exact
                            path={route.path} 
                            component = { route.component}
                        />
                    ))
                }

                {/* Si no entra en ninguna */}
                {/* <Redirect to="/informacion-perfil/registro" /> */}
            </Switch>
        </div>
    )
}

export default ProtectedRoutes
