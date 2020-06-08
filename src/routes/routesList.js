import React from "react";
import Movie from "../pages/Movie";
import Streaming from "../pages/Streaming";
import Home from "../pages/Home";

const NotFound = () => <h1>Not found</h1>;

const routesList = [
  { key: "movies", path: "/movie/:movieId", component: Movie },
  { key: "streaming", path: "/streaming/:movieId", component: Streaming },
  {
    key: "home",
    path: "/",
    component: Home,
    exact: true,
    strict: true,
    sensitive: true
  },
  { key: "not-found", component: NotFound }
];

export default routesList;
