import styled from "styled-components";

const ImageAndDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 32px;
`;

const ProductImage = styled.img`
  width: 680px;
`;

const Info = styled.span`
  font-size: 14px;
  margin-bottom: 16px;
`;

const Description = styled.div`
  h3 {
    font-size: 28px;
    margin: 0;
    margin-bottom: 32px;
    font-weight: normal;
  }

  p {
    font-size: 16px;
    margin: 0;
  }
`;

const BuyInfos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Price = styled.h2`
  display: flex;
  align-items: flex-start
  font-size: 46px;
  margin: 0;
  font-weight: normal;
  margin-bottom: 32px;

  span {
    font-size: 24px;
    margin-top: 5px;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0;
  margin-bottom: 32px;
`;

const BuyButton = styled.button`
  width: 100%;
  padding: 12px;
  text-align: center;
  font-size: 16px;
  border-radius: 3px;
  border: none;
  outline: none;
  color: white;
  background-color: ${props => props.theme.pallete.blue};
  cursor: pointer;
`;

export { ImageAndDescription, Description, ProductImage, BuyInfos, Price, Title, Info, BuyButton };
