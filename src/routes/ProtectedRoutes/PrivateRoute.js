import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({
    isAuthenticated,
    component : Component,
    ...rest
}) => {
    
    // console.log('Autenticado ', isAuthenticated);
    // console.log("Ruta protegida");
    useEffect(() => {
        window.scrollTo(0,0);
    },[])


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

// PrivateRoute.propTypes={
//     isAuthenticated : PropTypes.bool.isRequired,
//     component  : PropTypes.func.isRequired,
// }

export default PrivateRoute
