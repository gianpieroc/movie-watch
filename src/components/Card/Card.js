import React from "react";
import PropTypes from "prop-types";
import { CardContainer, CardImage, StyledLink } from "./Card.styled";

const Card = ({ movie }) => {
  if (!movie) {
    return null;
  }
  const {
    images: { artwork }
  } = movie;

  return (
    <StyledLink to={`/movie/${movie.id}`} data-testId="card-movie">
      <CardContainer>
        <CardImage src={artwork} alt={`artwork-${movie.id}`} />
      </CardContainer>
    </StyledLink>
  );
};

Card.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    images: PropTypes.shape({ artwork: PropTypes.string }).isRequired
  })
};

export default Card;
