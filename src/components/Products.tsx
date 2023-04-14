import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { IProducts } from "../utils/interface.dto";
import Product from "./Product";
const ServerUrl = process.env.REACT_APP_SERVER_URL;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: space-between;
`;

const Products = ({
  cat,
  filters,
  sort,
}: {
  cat?: string;
  filters?: {};
  sort?: string;
}) => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProducts[]>([]);


  const location = useLocation();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          cat
            ? `${ServerUrl}/api/products?category=${cat}`
            : `${ServerUrl}/api/products`
        );
        setProducts(response.data.products);

      } catch (error) {
        console.log(error);
      }
    };
    void getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter(
          (item: IProducts) =>
            filters &&
            Object.entries(filters).every(([key, value]) =>
              item[key].includes(value)
            )
        )
      );
  }, [products, cat, filters]);

 useEffect(() => {
   setFilteredProducts((previous) =>
     sort === "newest"
       ? [...previous].sort((a, b) => Number(a.createdAt) - Number(b.createdAt))
       : sort === "asc"
       ? [...previous].sort((a, b) => Number(a.price) - Number(b.price))
       : [...previous].sort((a, b) => Number(b.price) - Number(a.price))
   );
 }, [sort]);
 
  return (
    <Container>
      {location.pathname === "/"
        ? products.map((item, index) => <Product item={item} key={index} />)
        : filteredProducts.map((item, index) => (
            <Product item={item} key={index} />
          ))}
    </Container>
  );
};

export default Products;
