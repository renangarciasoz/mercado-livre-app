import styled from "styled-components";

const StyledProduct = styled.div`
  padding: 16px;
  display: flex;
  background-color: white;
  width: calc(100% - 32px);
  border-bottom: 2px solid ${props => props.theme.pallete.lightGrey};

  h1, h2, h3, img {
    ${props => props.loading ?
        (`background-image: linear-gradient(to right, #bebebe, #cecece, #dedede, #eeeeee, #ffffff);
         background-size: 400% 400%;
         animation: Gradient 1s ease-in-out infinite alternate;
         height: 30px;`) : ''
     }
  }

  img {
    width: 180px;
    height: 180px;
    min-width: 180px;
    min-height: 180px;
    border-radius: 4px;
    margin-right: 16px;
  }

  @keyframes Gradient {
    0% {
        background-position: 0% 50%
    }
    100% {
        background-position: 100% 50%
    }
  }
`;

const ProductInfos = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    flex-wrap: wrap;
  }
`;

const PriceAndTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  max-width: 500px;
`;

const Price = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  margin-bottom: 32px;

  h2 {
    min-width: 30%;
    margin: 0;
    font-size: 24px;
    margin-right: 10px;
    font-weight: normal;
    display: flex;
    align-items: flex-start;

    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      min-width: 60px;
    }
  }
  
  span {
    font-size: 16px;
    margin-top: 3px;
  }
`;

const Title = styled.h1`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  font-size: 18px;
  margin: 0;
  font-weight: normal;
`;

const City = styled.h3`
  width: 150px;
  display: flex;
  align-self: flex-start;
  flex-direction: column-reverse;
  font-size: 14px;
  text-transform: capitalize;
  margin: 0;
  margin-top: 8px;
  font-weight: normal;

  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    width: 50%;
    max-width: 100px;
  }
`;

export { StyledProduct, ProductInfos, PriceAndTitle, Price, Title, City };
