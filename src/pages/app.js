import React from "react";
import routes from "./routes";
import { Route, Link, Redirect, Switch } from "react-router-dom";
import { NavBar } from "./NavBar";

export const App = () => (
  <React.Fragment>
    <Switch>
      {routes.map(({ path, exact, component: Component, ...rest }) => (
        <Route
          key={path}
          path={path}
          exact={exact}
          render={(props) => <Component {...props} {...rest} />}
        />
      ))}
    </Switch>
  </React.Fragment>
);
