import React from "react";
import PropTypes from "prop-types";

// Style component
import { StyledInput } from "./styles";

const Input = ({ ...props }) => <StyledInput {...props} />;

Input.propTypes = {
  type: PropTypes.string,
  invalid: PropTypes.bool
};

Input.defaultProps = {
  type: "text"
};

export default Input;
