import React from "react";
import PropTypes from "prop-types";

const Image = ({ src, ...props }) => <img {...props} src={src} />;

Image.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Image;
