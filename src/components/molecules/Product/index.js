import React from "react";

import {
  StyledProduct,
  ProductInfos,
  PriceAndTitle,
  Title,
  Price,
  City
} from "./styles";

import Image from "../../atoms/image";

const Product = ({ loading, ...props }) => {
  return (
    <StyledProduct {...props} loading={loading}>
      <Image src={props.picture} alt={props.title} />
      <ProductInfos>
        <PriceAndTitle>
          <Title>{props.title}</Title>
          <Price>
            <h2>{props.value || ""}</h2>
            {props.free_shipping ? <span /> : ""}
          </Price>
        </PriceAndTitle>
        <City>{props.cityFrom || ""}</City>
      </ProductInfos>
    </StyledProduct>
  );
};

export default Product;
