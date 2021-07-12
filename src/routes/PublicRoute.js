import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';


const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) => (
        (localStorage.getItem('TokenYesmonProveedor')===null ?
          <Component {...props} /> : <Redirect to='/' />)

        // (authReady === false) ? <p>Loading</p>

      )}
    />
  );
};

// PublicRoute.propTypes = {
//   isAuthenticated: PropTypes.bool.isRequired,
//   component: PropTypes.func.isRequired,
// };

export default PublicRoute;
