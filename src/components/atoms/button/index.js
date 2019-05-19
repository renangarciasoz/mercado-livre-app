import React from "react";
import PropTypes from "prop-types";

// Style components
import { Anchor, StyledLink, StyledButton } from "./styles";

const Button = ({ to, href, type, ...props }) => {
  switch (props) {
    case to:
      return <Anchor {...props} />;
    case href:
      return <StyledLink {...props} />;
    default:
      return <StyledButton {...props} type={type} />;
  }
};

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  type: PropTypes.string
};

Button.defaultProps = {
  type: "button"
};

export default Button;
