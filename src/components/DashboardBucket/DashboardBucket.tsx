import React, { FC, ReactNode } from "react";
import { Box, CircularProgress, Paper } from "@mui/material";

interface DashboardBucketProps {
  isLoading: boolean;
  children: ReactNode;
}

export const DashboardBucket: FC<DashboardBucketProps> = ({
  isLoading,
  children,
}) => {
  return (
    <Paper
      elevation={3}
      sx={{
        width: "250px",
        minHeight: "300px",
        padding: "8px",
        margin: "4px",
        borderRadius: "10px",
      }}
    >
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        children
      )}
    </Paper>
  );
};
