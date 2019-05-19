import React, { useState, useEffect } from "react";

import Header from "../components/organisms/header";
import Products from "../components/organisms/Products";

const Home = ({ ...props }) => {
  const [searchValue, setSearchValue] = useState("");

  // Setting search value
  useEffect(() => {
    if (props.location.search)
      setSearchValue(props.location.search).replace("?search=", "");
  }, [props.location.search]);

  return (
    <>
      <Header />
      <Products searchValue={searchValue} />
      <footer />
    </>
  );
};

export default Home;
