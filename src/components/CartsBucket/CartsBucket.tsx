import React from "react";
import { Box, Typography } from "@mui/material";
import { useStore } from "../../hooks/useStore";
import { observer } from "mobx-react-lite";
import { DashboardBucket } from "../DashboardBucket/DashboardBucket";
import { AvatarCell } from "../../pages/AvatarCell";

const CartsBucket = () => {
  const { cartsStore, usersStore } = useStore();
  const mostValuableCustomerId = cartsStore.getMostValuableCustomer();
  const { img, text } = usersStore.getUserById(mostValuableCustomerId);
  const mostWantedProduct = cartsStore.getMostWantedGood();
  return (
    <DashboardBucket isLoading={cartsStore.isLoading && usersStore.isLoading}>
      <Typography variant="h6" align="center">
        Carts
      </Typography>
      <Typography variant="body2">
        Total Carts: {cartsStore.numberOfRecords}
      </Typography>
      <Typography variant="body2">
        Most Valuable Cart: {cartsStore.getHighestLowestCarts()[0]}$
      </Typography>
      <Box>
        <Typography variant="body2">Most Valuable Customer:</Typography>
        <Box sx={{ transform: "scale(0.75) translateX(-40px)" }}>
          <AvatarCell img={img} text={text} />
        </Box>
      </Box>
      <Typography variant="body2">
        Less Valuable Cart: {cartsStore.getHighestLowestCarts()[1]}$
      </Typography>
      <Typography variant="body2">
        Average Cart Sum: {cartsStore.getAverageCartCost}$
      </Typography>
      <Typography variant="body2">
        Total Products Bought: {cartsStore.getTotalProductsQuantity}
      </Typography>
      <>
        <Typography variant="body2">Most Wanted Products:</Typography>
        {mostWantedProduct &&
          mostWantedProduct.map((department) => {
            return (
              <Box key={department[0]}>
                <Typography variant="caption">
                  {department[0]} : {department[1]} pcs
                </Typography>
              </Box>
            );
          })}
      </>
    </DashboardBucket>
  );
};
export default observer(CartsBucket);
