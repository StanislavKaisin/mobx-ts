import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../hooks/useStore";
import { Box, CircularProgress } from "@mui/material";
import { toJS } from "mobx";
import { ProductCard } from "../components/ProductCard/ProductCard";
import { IProduct } from "../api/models/models";

const AllProductsPage = () => {
  const { productsStore } = useStore();

  const allProducts = toJS(productsStore.items);

  return (
    <Box
      sx={{
        padding: "20px",
      }}
    >
      {productsStore.isLoading ? (
        <Box sx={{ display: "flex", justifyContent: "center", pt: "50px" }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            gap: "20px",
            padding: "20px",
            paddingRight: "20px !important",
          }}
        >
          {allProducts.map((item: IProduct) => {
            return <ProductCard item={item} />;
          })}
        </Box>
      )}
    </Box>
  );
};

export default observer(AllProductsPage);
