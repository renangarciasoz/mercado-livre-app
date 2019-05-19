import styled from "styled-components";

const StyledSection = styled.main`
  box-sizing: border-box;
  padding: 20px 0;
  width: 100%;
  margin: 0;
  max-width: ${props => props.theme.sizes.maxWidth};
`;

const Error = styled.h3``;

export { StyledSection, Error };
