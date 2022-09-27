
import React from 'react';
import { connect } from 'react-redux';
import { Route, Navigate, RouteProps } from 'react-router-dom';
import store from '../../app/store';

export default function PrivateRoute({ children, ...rest }) {
    console.log(store.getState())

    return (
      <Route
        {...rest}
        render={() => true
          ? children
          : <Navigate to="/login" />
        }
      />
    );
  }
  

//export default connect(MapStateToProps)(PrivateRoute)