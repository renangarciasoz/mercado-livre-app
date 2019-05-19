import React, { useState, useEffect } from "react";
import axios from "axios";

import { StyledSection, Error } from "./styles";

import Product from "../../molecules/Product";

const Products = ({ searchValue, ...props }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get products on server when searchValue change
  useEffect(() => {
    if (searchValue) {
      setLoading(true);

      // Fetch products
      (async () => {
        const response = await axios.get(
          `http://localhost:1337/api/items?search=${searchValue}`
        );

        if (response.data && response.data.length > 0) {
          setLoading(false);
          setProducts(response.data);
        }
      })();
    }
  }, [searchValue]);

  const getSection = () => {
    // Lazy load
    if (loading) return <Product loading={loading} />
    
    // Products
    if (products && products.length > 0)
      return (
        <ol>
          {products.map(product => (
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

export default Products;
