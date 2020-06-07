import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { startGetMovieById } from "../../redux/movie/actions";
import Grid from "../../components/Grid";
import {
  isLoadingMovieSelector,
  movieDataSelector
} from "../../redux/movie/selectors";
import Button from "../../components/Button";
import { CoverImg } from "./Movie.styled";

const Movie = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingMovieSelector);
  const movie = useSelector(movieDataSelector);
  const { movieId } = useParams();

  useEffect(() => {
    dispatch(startGetMovieById(movieId));
  }, []);

  if (isLoading || !movie) {
    return <h1 data-testid="movie-page">Loading...</h1>;
  }

  const {
    title,
    plot,
    id,
    images: { snapshot }
  } = movie;

  return (
    <Grid data-testid="movie-page">
      <CoverImg src={snapshot} />
      <h1>{title}</h1>
      <h3>{plot}</h3>
      <Link to={`/streaming/${id}`}>
        <Button>Watch Trailer</Button>
      </Link>
    </Grid>
  );
};

export default Movie;
