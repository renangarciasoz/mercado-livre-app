import styled from "styled-components";
import searchIcon from "../../../assets/icons/search.png";

const StyledHeader = styled.header`
  width: calc(100% - 40px);
  display: flex;
  padding: 7px 20px;
  justify-content: center;
  background-color: ${props => props.theme.pallete.yellow};
`;

const Toolbar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  max-width: ${props => props.theme.sizes.maxWidth};

  img {
    height: 39px;
  }

  form {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    margin-left: 10px;
    border-radius: 3px;
    align-items: center;
    background-color: white;
  }

  input {
    width: 100%;
    font-size: 18px;
  }

  button {
    width: 40px;
    height: 37px;
    background-size: 50%;
    border: 1px solid white;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${searchIcon});
    background-color: ${props => props.theme.pallete.lightGrey};
  }
`

export { StyledHeader, Toolbar };