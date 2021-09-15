import React from 'react'
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({
    isAuthenticated,
    component : Component,
    ...rest
}) => {
    
    console.log("Ruta protegida");
    
    return (
        <Route
            {...rest}
            component={( props) => ( 
                isAuthenticated ? <Component {...props} /> : <Redirect to="/iniciar-sesion" />
             )   
            }
        />
        
    )
}

PrivateRoute.propTypes={
    isAuthenticated : PropTypes.bool.isRequired,
    component  : PropTypes.func.isRequired,
}

export default PrivateRoute
