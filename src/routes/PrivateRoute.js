import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) => (localStorage.getItem('TokenYesmonProveedor') !== null ? (
        <Component {...props} />
      ) : (
        <Redirect to='/login' />
      ))}
    />
  );
};

// PrivateRoute.propTypes = {
//   isAuthenticated: PropTypes.bool.isRequired,
//   component: PropTypes.func.isRequired,
// };

export default PrivateRoute;
