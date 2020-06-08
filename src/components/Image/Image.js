import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyledImage, StyledEmptyImage } from "./Image.styled";

const Image = ({ src, ...props }) => {
  const [isLoading, setLoading] = useState(true);

  const onLoadImage = () => {
    setLoading(false);
  };

  return (
    <>
      <StyledEmptyImage className={props.className} isLoading={isLoading} />
      <StyledImage {...props} onLoad={onLoadImage} src={src} />
    </>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Image;
