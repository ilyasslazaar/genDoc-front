import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";

import routes from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/shards-dashboards.1.1.0.min.css";

export default () => (
  <Router basename={process.env.REACT_APP_BASENAME || ""}>
    <Switch>
      {routes().map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={props => {
              return (<route.layout {...props}>
                <route.component {...props} />
              </route.layout>);
            }} />
        )
      })}
      <Redirect to="/error" />
    </Switch>
  </Router>
);