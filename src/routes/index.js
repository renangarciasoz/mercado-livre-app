import React from "react";
import history from "./history";
import { Router, Switch, Route } from "react-router-dom";

// Pages
import Home from "../pages/Home";
import Details from "../pages/Details";

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/items" component={Home}/>
      <Route exact path="/items/:id/:desc" component={Details}/>
    </Switch>
  </Router>
);

export default Routes;
