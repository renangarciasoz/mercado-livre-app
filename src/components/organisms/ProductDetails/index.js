import React from "react";
import {
  ImageAndDescription,
  Description,
  ProductImage,
  BuyInfos,
  Price,
  Title,
  Info,
  BuyButton
} from "./styles";

const CONDITION_HELPER = {
  new: "Nuevo",
  used: "Usado"
};

const ProductDetails = ({ product }) => {
  return (
    <>
      {product ? (
        <>
          <ImageAndDescription>
            <ProductImage src={product.picture} alt={product.title} />
            <Description>
              <h3> Descripción del producto </h3>
              <p>
                {product.description &&
                  product.description.split("\n").map((item, i) => {
                    return <p key={i}>{item}</p>;
                  })}
              </p>
            </Description>
          </ImageAndDescription>
          <div>
            <BuyInfos>
              <Info>
                {CONDITION_HELPER[product.condition]} - {product.sold_quantity}{" "}
                vendidos
              </Info>
              <Title>{product.title}</Title>
              {product.price ? (
                <Price>
                  ${" "}
                  {product.price.amount.toLocaleString("pt-BR", product.price)}
                  <span>{product.price.decimals}</span>
                </Price>
              ) : (
                ""
              )}
              <BuyButton>Comprar</BuyButton>
            </BuyInfos>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default ProductDetails;
