import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Header from "./Header";
import About from "../Routes/About";
import Overview from "../Routes/Overview";
import Pilgrimage from "../Routes/Pilgrimage";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" component={Overview} />
        <Route path="/about" component={About} />
        <Route path="/pilgrimage" component={Pilgrimage} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
