import React from "react";
import PropTypes from "prop-types";
import { CardContainer, CardImage } from "./Card.styled";
import { Link } from "react-router-dom";

const Card = ({ movie }) => {
  if (!movie) {
    return null;
  }
  const {
    images: { artwork }
  } = movie;

  return (
    <Link to={`/movie/${movie.id}`}>
      <CardContainer>
        <CardImage src={artwork} />
      </CardContainer>
    </Link>
  );
};

Card.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    images: PropTypes.shape({ artwork: PropTypes.string }).isRequired
  })
};

export default Card;
