import React from "react";
import { connect } from "react-redux";
import Product from "../../molecules/Product";
import { StyledSection, Error } from "./styles";

const Products = ({ ...props }) => {
  const getSection = () => {
    // Lazy load
    if (props.products.loadingProducts)
      return <Product loading={props.products.loadingProducts} />;

    // Products
    if (props.products.products.length > 0)
      return (
        <ol>
          {props.products.products.map(product => (
            <li key={product.id}>
              <Product {...product} />
            </li>
          ))}
        </ol>
      );

    // Message error
    return <Error> No hay anuncios que coincidan con tu búsqueda. </Error>;
  };

  return <StyledSection>{getSection()}</StyledSection>;
};

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

export default connect(
  mapStateToProps,
  null
)(Products);
