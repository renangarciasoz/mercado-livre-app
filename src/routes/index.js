import React from "react";
import history from "./history";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

// Pages
import Home from "../pages/Home";
import Details from "../pages/Details";

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/items" component={Home}/>
      <Route exact path="/items/:id/:desc" component={Details}/>
    </Switch>
  </ConnectedRouter>
);

export default Routes;
