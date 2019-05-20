import React from "react";
import Products from "../components/organisms/Products";

const Home = ({ ...props }) =>
  props.location.pathname.includes("items") && props.location.search ? (
    <Products />
  ) : (
    ""
  );

export default Home;
