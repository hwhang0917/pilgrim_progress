import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Header from "./Header";
import Overview from "../Routes/Overview";
import Pilgrimage from "../Routes/Pilgrimage";
import Cited from "../Routes/Cited";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Overview} />
        <Route path="/pilgrimage" exact component={Pilgrimage} />
        <Route path="/cited" exact component={Cited} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
