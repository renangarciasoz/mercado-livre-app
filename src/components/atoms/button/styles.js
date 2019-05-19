import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const style = css`
  outline: none;
  display: flex;
  cursor: default;
  appearance: none;
  border-radius: 2px;
  align-items: center;
  white-space: nowrap;
  text-decoration: none;
  box-sizing: border-box;
  justify-content: center;

  &:disabled {
    cursor: disabled;
    pointer-events: none;
  }
`;

const Anchor = styled.a`
  ${style}
`;
const StyledButton = styled.button`
  ${style}
`;
const StyledLink = styled((...props) => <Link {...props} />)`
  ${style}
`;

export { Anchor, StyledLink, StyledButton };
