import React from "react";
import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  GridToolbar,
} from "@mui/x-data-grid";
import { useStore } from "../hooks/useStore";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { Box, CircularProgress } from "@mui/material";
import { renderAvatarCell } from "./AvatarCell";

const CartsPage = () => {
  const { cartsStore, usersStore } = useStore();
  const rows: GridRowsProp = toJS(cartsStore.items).map((item) => {
    return {
      id: item.id,
      col1: item.id,
      col2: item.discountedTotal,
      col3: item.totalQuantity,
      col4: usersStore.getUserById(item.userId),
    };
  });
  const columns: GridColDef[] = [
    { field: "col1", headerName: "Id", width: 75 },
    { field: "col2", headerName: "Total Sum, $", width: 150, align: "left" },
    {
      field: "col3",
      headerName: "Total Quantity",
      width: 150,
    },
    {
      field: "col4",
      headerName: "Customer",
      width: 250,
      align: "left",
      renderCell: renderAvatarCell,
    },
  ];

  return (
    <>
      {cartsStore.isLoading && usersStore.isLoading ? (
        <Box sx={{ display: "flex", justifyContent: "center", pt: "50px" }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            slots={{
              toolbar: GridToolbar,
            }}
          />
        </Box>
      )}
    </>
  );
};

export default observer(CartsPage);
