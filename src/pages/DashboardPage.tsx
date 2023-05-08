import React from "react";
import { observer } from "mobx-react-lite";
import { Box, CircularProgress, Typography } from "@mui/material";

import CartsBucket from "../components/CartsBucket/CartsBucket";
import ProductsBucket from "../components/ProductsBucket/ProductsBucket";
import CustomersBucket from "../components/CustomersBucket/CustomersBucket";

const DashboardPage = () => {
  return (
    <>
      {false ? (
        <Box sx={{ display: "flex", justifyContent: "center", pt: "50px" }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box sx={{}}>
          <Typography
            variant="h4"
            component={"h1"}
            sx={{ textAlign: "center" }}
          >
            Brief Summary
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            <CartsBucket />
            <CustomersBucket />
            <ProductsBucket />
          </Box>
        </Box>
      )}
    </>
  );
};

export default observer(DashboardPage);
