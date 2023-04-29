import React from "react";
import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  GridToolbar,
  useGridApiRef,
} from "@mui/x-data-grid";
import { useStore } from "../hooks/useStore";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { Box, CircularProgress } from "@mui/material";
import { renderAvatarCell } from "./AvatarCell";

const CartsPage = () => {
  const apiRef = useGridApiRef();
  const { cartStore, usersStore } = useStore();
  console.log("cartStore :>> ", cartStore);
  console.log("cartStore :>> ", toJS(cartStore.items));

  const rows: GridRowsProp = toJS(cartStore.items).map((item) => {
    return {
      id: item.id,
      col1: item.id,
      col2: item.discountedTotal,
      col3: item.totalQuantity,
      col4: usersStore.getUserById(item.id),
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

  if (apiRef.current) {
    if (apiRef.current.exportState) {
      const exported = apiRef.current.exportState();
      console.log("exported :>> ", exported);
    }
  }

  return (
    <>
      {cartStore.isLoading && usersStore.isLoading ? (
        <Box sx={{ display: "flex", justifyContent: "center", pt: "50px" }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            apiRef={apiRef}
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
