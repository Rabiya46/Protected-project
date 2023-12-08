import React from "react";
import { styled } from "@mui/material";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";

const ProductList = () => {
  const { products } = useSelector((state) => state.productStore);

  return (
    <StContainer>
      {products?.map((product) => (
        <ProductItem {...product} key={product.id} />
      ))}
    </StContainer>
  );
};

export default ProductList;

const StContainer = styled("ul")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "2rem",
  flexWrap: "wrap",
  margin: "4rem",
  marginTop: "6rem",
  backgroundColor: "white",
  borderRadius: "2rem",
  padding: "10px"
});
