import React from 'react'
import PropTypes from 'prop-types';
import { Redirect, Route , } from 'react-router-dom'

const PublicRoute = ({
    isAuthenticated,
    component : Component,
    ...rest
}) => {
    console.log('Ruta si no estas autenticado');
    return (
        <Route
            {...rest}
            component={( props) => (
                !isAuthenticated ? <Component {...props} /> : <Redirect to="/p/product-excel" />
             )   
            }
        />
        
    )
}

// PublicRoute.propTypes={
//     isAuthenticated : PropTypes.bool.isRequired,
//     component  : PropTypes.func.isRequired,
// }

export default PublicRoute
