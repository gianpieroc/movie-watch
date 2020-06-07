import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.node
};

export default Button;
