import styled from "styled-components";

const StyledSection = styled.main`
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
  margin: 0;
  max-width: ${props => props.theme.sizes.maxWidth};

   ol, li {
     margin: 0;
     padding: 0;
     list-style: none;
   }
`;

const Error = styled.h3`
  text-align: center;
`;

export { StyledSection, Error };
