import React from "react";
import { useSelector } from "react-redux";
import RakutenLogo from "../RakutenLogo";
import { Nav, NavTitle } from "./NavBar.styled";
import Grid from "../Grid";
import { movieDataSelector } from "../../redux/movie/selectors";

const NavBar = () => {
  const movie = useSelector(movieDataSelector);
  return (
    <Nav>
      <Grid>
        {movie && movie.title ? (
          <NavTitle>{movie.title}</NavTitle>
        ) : (
          <RakutenLogo />
        )}
      </Grid>
    </Nav>
  );
};

export default NavBar;
