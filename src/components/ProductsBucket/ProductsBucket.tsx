import React from "react";
import { Typography } from "@mui/material";
import { useStore } from "../../hooks/useStore";
import { observer } from "mobx-react-lite";
import { DashboardBucket } from "../DashboardBucket/DashboardBucket";
import { toJS } from "mobx";

const ProductsBucket = () => {
  const { productsStore } = useStore();

  return (
    <DashboardBucket isLoading={productsStore.isLoading}>
      <Typography variant="h6" align="center">
        Products
      </Typography>
      <Typography variant="body2">
        Total Products' Names: {productsStore.numberOfRecords}
      </Typography>
      <Typography variant="body2">
        Highest Price Product:{" "}
        {productsStore.getHighestLowestPricesProduct()[0]}$
      </Typography>
      <Typography variant="body2">
        Lowest Price Product: {productsStore.getHighestLowestPricesProduct()[1]}
        $
      </Typography>
      <Typography variant="body2">
        Average Price Product: {productsStore.getAverageProductCost}$
      </Typography>
      <Typography variant="body2">
        Total Items in Storage: {productsStore.getProductsOnStorage}
      </Typography>
      <Typography variant="body2">
        Total Sum in Storage: {productsStore.getTotalSumOnStorage}$
      </Typography>
    </DashboardBucket>
  );
};

export default observer(ProductsBucket);
