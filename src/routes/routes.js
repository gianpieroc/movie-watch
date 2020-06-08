import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Grid from "../components/Grid";
import routesList from "./routesList";

const Routes = () => {
  return (
    <>
      <NavBar />
      <Grid>
        <Router>
          <Switch>
            {routesList.map(({ key, ...routeProps }) => (
              <Route key={key} {...routeProps} />
            ))}
          </Switch>
        </Router>
      </Grid>
    </>
  );
};

export default Routes;
