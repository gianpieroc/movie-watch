import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { startGetMovieById, clearMovie } from "../../redux/movie/actions";
import Grid from "../../components/Grid";
import {
  isLoadingMovieSelector,
  movieDataSelector
} from "../../redux/movie/selectors";
import {
  MovieLink,
  PlotText,
  CoverImg,
  HeadlineSection,
  WatchTrailerButton,
  InfoSection,
  DescriptionSection,
  ShareSection,
  InfoLabelsPanel,
  InfoLabel,
  ActorImage,
  ActorContent,
  ActorInfoText,
  RowContainer,
  GenreImage,
  ColumnContainer,
  PunctuationLabel
} from "./Movie.styled";

const Movie = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingMovieSelector);
  const movie = useSelector(movieDataSelector);
  const { movieId } = useParams();

  useEffect(() => {
    dispatch(startGetMovieById(movieId));
    return () => dispatch(clearMovie());
  }, []);

  if (isLoading || !movie) {
    return <h1 data-testid="movie-page">Loading...</h1>;
  }

  const {
    plot,
    id,
    duration,
    year,
    original_title,
    classification: { name: classificationName },
    countries,
    actors,
    genres,
    scores,
    images: { snapshot }
  } = movie;
  const firstCountry =
    Array.isArray(countries) && countries.length > 0 && countries[0].name;

  return (
    <Grid data-testid="movie-page-content">
      <HeadlineSection>
        <CoverImg src={snapshot} />
        <MovieLink to={`/streaming/${id}`}>
          <WatchTrailerButton>Watch Trailer</WatchTrailerButton>
        </MovieLink>
      </HeadlineSection>
      <InfoSection>
        <DescriptionSection>
          <InfoLabelsPanel>
            <InfoLabel>{classificationName}</InfoLabel>
            <InfoLabel>{duration}min</InfoLabel>
            <InfoLabel>{year}</InfoLabel>
            <InfoLabel>{firstCountry}</InfoLabel>
            <InfoLabel>Título original: {original_title}</InfoLabel>
          </InfoLabelsPanel>
          <PlotText>{plot}</PlotText>
          <InfoLabel>Dirección y Reparto</InfoLabel>
          <RowContainer>
            {actors.map((actor) => (
              <ActorContent key={actor.id} data-testid="movie-actor">
                <ActorImage src={actor.photo} />
                <ActorInfoText>{actor.name}</ActorInfoText>
              </ActorContent>
            ))}
          </RowContainer>
          <RowContainer>
            <ColumnContainer>
              <InfoLabel>Géneros</InfoLabel>
              <RowContainer>
                {genres.map((genre) => (
                  <ActorContent key={genre.id} data-testid="movie-genre">
                    <GenreImage src={genre.additional_images.icon} />
                    <ActorInfoText>{genre.name}</ActorInfoText>
                  </ActorContent>
                ))}
              </RowContainer>
            </ColumnContainer>
            <ColumnContainer>
              <InfoLabel>Puntuaciones</InfoLabel>
              <RowContainer>
                {scores.map(({ id, score, site: { name } }) => (
                  <ActorContent key={id}>
                    <PunctuationLabel>{score}</PunctuationLabel>
                    <ActorInfoText>{name}</ActorInfoText>
                  </ActorContent>
                ))}
              </RowContainer>
            </ColumnContainer>
          </RowContainer>
        </DescriptionSection>
        <ShareSection></ShareSection>
      </InfoSection>
    </Grid>
  );
};

export default Movie;
