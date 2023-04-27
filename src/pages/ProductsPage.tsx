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

const ProductsPage = () => {
  const { productsStore } = useStore();
  console.log("productsStore :>> ", toJS(productsStore.items));
  const rows: GridRowsProp = toJS(productsStore.items).map((item) => {
    return {
      id: item.id,
      col1: item.id,
      col2: { img: item.thumbnail, text: item.title },
      col3: item.brand,
      col4: item.price,
      col5: item.stock,
    };
  });
  const columns: GridColDef[] = [
    { field: "col1", headerName: "id", width: 75 },
    {
      field: "col2",
      headerName: "Title",
      width: 250,
      align: "left",
      renderCell: renderAvatarCell,
    },
    {
      field: "col3",
      headerName: "Brand",
      width: 150,
      align: "left",
    },
    { field: "col4", headerName: "Price, $", width: 75, align: "left" },
    { field: "col5", headerName: "Quantity", width: 75, align: "left" },
  ];
  const apiRef = useGridApiRef();
  if (apiRef.current) {
    if (apiRef.current.exportState) {
      const exported = apiRef.current.exportState();
      console.log("exported :>> ", exported);
    }
  }

  return (
    <>
      {productsStore.isLoading ? (
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

export default observer(ProductsPage);
