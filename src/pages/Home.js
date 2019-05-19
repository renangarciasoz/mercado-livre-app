import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "../components/organisms/header";

const Home = ({ ...props }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const getSearchValue = () => {
    if (props.location.search)
      return setSearchValue(props.location.search).replace("?search=", "");
  };

  // Setting search value
  useEffect(() => getSearchValue(), [props.location.search]);

  // Get products on server when searchValue change
  useEffect(() => {
      setLoading(true);

      (async () => {
        const response = await axios.get(
          `http://localhost:1337/api/items?search=${searchValue}`
        );

        if (response.data && response.data.length > 0) {
          setLoading(false);
          setProducts(response.data);
        }
      })();

      // Console for remove console warnings
      console.log(products, loading);
  }, [searchValue]);

  return (
    <>
      <Header />
      <main />
      <footer />
    </>
  );
};

export default Home;
