import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { createMemoryHistory } from "history";
import NavBar from "../components/NavBar";
import Grid from "../components/Grid";
import routesList from "../routes/routesList";

const history = createMemoryHistory();

const Routes = ({ customHistory = history }) => {
  return (
    <>
      <NavBar />
      <Grid>
        <Router history={customHistory}>
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

Routes.propTypes = {
  customHistory: PropTypes.shape({})
};

export default Routes;
