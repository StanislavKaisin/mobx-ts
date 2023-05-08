import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../hooks/useStore";
import { Box, Typography } from "@mui/material";
import { DashboardBucket } from "../DashboardBucket/DashboardBucket";

const CustomersBucket = () => {
  const { usersStore } = useStore();
  return (
    <DashboardBucket isLoading={usersStore.isLoading}>
      <Typography variant="h6" align="center">
        Customers
      </Typography>
      <Typography variant="body2">
        Total Customers: {usersStore.numberOfRecords}
      </Typography>
      <Typography variant="body2">
        Average Customer age: {usersStore.getAverageUserAge} years
      </Typography>
      <Typography variant="body2">
        Departments that order most often:
      </Typography>
      {usersStore.getMostCommonDepartment().map((department) => {
        return (
          <Box key={department[0]}>
            <Typography variant="caption">
              {department[0]}:{department[1]}
            </Typography>
          </Box>
        );
      })}
    </DashboardBucket>
  );
};

export default observer(CustomersBucket);
