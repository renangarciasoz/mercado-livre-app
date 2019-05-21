import React from "react";
import history from "../../../routes/history";

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
  const goToDetails = () => {
    if (!loading)
      return history.push(
        `/items/${props.id}/${props.title.split(" ").join("-")}`
      );
  };

  return (
    <StyledProduct {...props} loading={loading} onClick={goToDetails}>
      <Image src={props.picture} alt={props.title} />
      <ProductInfos>
        <PriceAndTitle>
          <Title>{props.title}</Title>
          <Price>
            {props.price ? (
              <h2>
                $ {props.price.amount.toLocaleString("pt-BR", props.price)}
                <span>{props.price.decimals}</span>
              </h2>
            ) : (
              ""
            )}
            {props.free_shipping ? <span /> : ""}
          </Price>
        </PriceAndTitle>
        <City>{props.cityFrom || ""}</City>
      </ProductInfos>
    </StyledProduct>
  );
};

export default Product;
