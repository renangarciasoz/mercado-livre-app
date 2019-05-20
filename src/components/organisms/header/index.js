import React, { useEffect } from "react";
import { connect } from "react-redux";
import history from "../../../routes/history";
import { getProducts } from "../../../store/actions/products";
import { setSearchValue } from "../../../store/actions/searchValue";

// Style component
import { StyledHeader, Toolbar } from "./styles";

// Images
import logoImage from "../../../logo.png";

// Atoms
import Button from "../../atoms/button";
import Input from "../../atoms/input";
import Image from "../../atoms/image";

const Header = ({ ...props }) => {
  // Get products on loading with URL param
  useEffect(() => {
    const url = new URL(window.location.href);
    if (
      url.searchParams.get("search") !== "" &&
      window.location.pathname.includes("items")
    ) {
      props.setSearchValue(url.searchParams.get("search"));
      props.getProducts();
    }
  }, []);

  // Get products on submit form
  const onSubmit = e => {
    e.preventDefault();
    history.push(`/items?search=${props.searchValue}`);
    props.getProducts();
  };

  // On change searchValue with Redux
  const onChange = e => {
    props.setSearchValue(e.target.value);
  };

  return (
    <StyledHeader>
      <Toolbar>
        <Image src={logoImage} alt="Mercado Libre Logo" />
        <form onSubmit={onSubmit}>
          <Input
            placeholder="Nunca dejes de buscar"
            aria-label="Nunca dejes de buscar"
            onChange={onChange}
          />
          <Button type="submit" aria-label="Buscar" />
        </form>
      </Toolbar>
    </StyledHeader>
  );
};

function mapStateToProps(state) {
  return {
    searchValue: state.searchValue
  };
}

export default connect(
  mapStateToProps,
  { setSearchValue, getProducts }
)(Header);
