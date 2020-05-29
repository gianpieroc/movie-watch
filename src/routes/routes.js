import React from "react";
import { Router, Switch, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Movie from "../pages/Movie";
import { createMemoryHistory } from "history";

const history = createMemoryHistory();

const NotFound = () => <h1>Not found</h1>;

const Routes = ({ customHistory = history }) => {
  return (
    <Router history={customHistory}>
      <Switch>
        <Route path="/movie/:movieId" component={Movie} />
        <Route path="/" component={Home} exact/>
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
