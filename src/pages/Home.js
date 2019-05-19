import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "../components/organisms/header";

const Home = ({...props}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  // Setting search value
  useEffect(() => props.location.search ? setSearchValue(props.location.search).replace("?search=", "") : setSearchValue(""));

  // Get products on server when searchValue change
  useEffect(() => {
    return () => {
      setLoading(true);

      async function searchProducts() {
        const response = await axios.get(
          `http://localhost:1337/api/items?search=${searchValue}`
        );

        if (response.data && response.data.length > 0) {
          setLoading(false);
          setProducts(response.data);
        }
      }

      searchProducts();

      // Console for remove console warnings
      console.log(products, loading)
    };
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
