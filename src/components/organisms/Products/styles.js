import styled from "styled-components";

const StyledSection = styled.main`
  box-sizing: border-box;
  padding: 20px;
  width: calc(100% - 40px);
  margin: 0;
  max-width: ${props => props.theme.sizes.maxWidth};
`;

const Error = styled.h3`
  text-align: center;
`;

export { StyledSection, Error };
