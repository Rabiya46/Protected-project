import { styled } from "@mui/material";
import React from "react";

const ProductItem = ({ title, images, discountPercentage, price }) => {
  return (
    <StContainer>
      <StImage src={images[2]} alt="" />
      <h2>{title}</h2>
      <StContent>
        <p>{price} $</p>
        <StP>-{discountPercentage}% </StP>
      </StContent>
    </StContainer>
  );
};

export default ProductItem;

const StContainer = styled("ul")({
  backgroundColor: "black",
  borderRadius: "1rem",
  width: "400px",
  height: "400px",
  textAlign: "center",
  color: "white",
  transition: "0.2s",
  "&:hover": {
    boxShadow: "0px 10px 20px 5px rgba(27, 71, 154, 0.927)",
    transform: "translateY(-5px)",
  },
});

const StImage = styled("img")({
  width: "400px",
  height: "300px",
  padding: "10px 10px 0px 10px",
  borderRadius: "1rem",
});

const StContent = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 10px 0px 10px",
  fontSize: "20px",
});

const StP = styled("p")({
  color: "red",
});
