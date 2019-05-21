import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { getProduct } from "../store/actions/products";

import ProductDetails from "../components/organisms/ProductDetails";

const StyledDetails = styled.main`
  width: calc(100% - 104px);
  display: flex;
  background: white;
  margin: 20px;
  max-width: ${props => props.theme.sizes.maxWidth};
  padding: 32px;
`;

const Details = ({ ...props }) => {
  useEffect(() => {
    props.getProduct(props.match.params.id);
  }, [props.match.params.id]);

  if (props.product)
    return (
      <StyledDetails>
        <ProductDetails product={props.product} />
      </StyledDetails>
    );

  return <StyledDetails />;
};

function mapStateToProps(state) {
  return {
    product: state.products.product
  };
}

export default connect(
  mapStateToProps,
  { getProduct }
)(Details);
