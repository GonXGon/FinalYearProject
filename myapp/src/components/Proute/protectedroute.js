import { Redirect, Route } from 'react-router-dom';

import React from 'react';

function ProtectedRoute({ component: Component, isAuthenticated, ...rest }) {

  return (
    <Route {...rest} render={(props) => (
        isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      )
    )} />
  );
}

export default ProtectedRoute;

