import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductData } from "../../redux/slices/products-slice";
import ProductHeader from "./ProductHeader";
import { styled } from "@mui/material";

const ProductMain = () => {
  const { status } = useSelector((state) => state.productStore);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductData());
  }, [dispatch]);

  return (
    <>
      {status === "loading" ? (
        <StLoading>Loading...</StLoading>
      ) : (
        <ProductHeader />
      )}
    </>
  );
};

export default ProductMain;

const StLoading = styled("h1")({
  backgroundColor: "white",
  marginTop: "6rem",
  textAlign: "center",
  color: "blue",
  borderRadius: "1rem",
  height: "4rem",
  padding: "10px",
});
