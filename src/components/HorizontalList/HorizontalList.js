import React, { useRef } from "react";
import PropTypes from "prop-types";
import {
  ListContainer,
  ListTitle,
  HorizontalListContainer,
  LeftArrow,
  ArrowsContainer,
  RightArrow
} from "./HorizontalList.styled";
import Card from "../Card";
import useHorizontalScroll from "./useHorizontalScroll";

const HorizontalList = ({ list }) => {
  const ref = useRef(null);
  const {
    sectionIndex,
    moveTo,
    hasLeftArrow,
    hasRightArrow,
    onScrollListener
  } = useHorizontalScroll(ref);

  if (!list) {
    return null;
  }

  const {
    name,
    contents: { data: movieList }
  } = list;

  return (
    <ListContainer data-testid="list-container">
      <ListTitle data-testid="list-container-name">{name}</ListTitle>
      <ArrowsContainer>
        <HorizontalListContainer
          data-testid="list"
          ref={ref}
          onScroll={onScrollListener}
        >
          {Array.isArray(movieList) &&
            movieList.map((movie) => <Card key={movie.id} movie={movie} />)}
        </HorizontalListContainer>
        {hasLeftArrow && (
          <LeftArrow
            data-testId="horizontal-list-left-arrow"
            onClick={moveTo(sectionIndex - 1)}
          />
        )}
        {hasRightArrow && (
          <RightArrow
            data-testId="horizontal-list-right-arrow"
            onClick={moveTo(sectionIndex + 1)}
          />
        )}
      </ArrowsContainer>
    </ListContainer>
  );
};

HorizontalList.propTypes = {
  list: PropTypes.shape({
    name: PropTypes.string.isRequired,
    contents: PropTypes.shape({ data: PropTypes.arrayOf(PropTypes.shape({})) })
      .isRequired
  })
};

export default HorizontalList;
