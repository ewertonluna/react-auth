import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Consumer } from './Context';

// component: Component destructures the component prop and renames it to Component
export default ({ component: Component, ...rest }) => {
  return (
    <Consumer>
      { context => (
        <Route
          {...rest}
          render={props => context.authenticatedUser ? (
            <Component {...props} />
          ) : (
            <Redirect to="/signin" />
          )
          }
        />
      )}
    </Consumer>
  );
};