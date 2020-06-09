import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./Button.styled";

const Button = ({ children, ...props }) => {
  return (
    <StyledButton {...props}>
      <p>{children}</p>
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node
};

export default Button;
