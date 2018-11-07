import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({
  user,
  component: Comp,
  restricted,
  ...rest
}) => {
  return <Route {...rest} component={(props) => (
    restricted ?
      ( user ?
        <Redirect to="/dashboard" />
        :
        <Comp {...props} user={user} />
      )
      :
      <Comp {...props} user={user} />
  )} />

};

export default PublicRoute;