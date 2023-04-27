import React from "react";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";
import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  GridToolbar,
  useGridApiRef,
} from "@mui/x-data-grid";
import { useStore } from "../hooks/useStore";
import { Box, CircularProgress } from "@mui/material";
import { renderAvatarCell } from "./AvatarCell";

const UsersPage = () => {
  const apiRef = useGridApiRef();
  const { usersStore } = useStore();

  const rows: GridRowsProp = toJS(usersStore.items).map((item) => {
    return {
      id: item.id,
      col1: { img: item.image, text: item.firstName + " " + item.lastName },
      col2: item.age,
      col3: item.gender,
      col4: item.height,
      col5: item.weight,
      col6: item.company.name,
      col7: item.company.department,
    };
  });
  const columns: GridColDef[] = [
    {
      field: "col1",
      headerName: "Name",
      width: 250,
      renderCell: renderAvatarCell,
    },
    { field: "col2", headerName: "Age", width: 50, align: "center" },
    { field: "col3", headerName: "Gender", width: 100, align: "left" },
    { field: "col4", headerName: "Height, cm", width: 100, align: "center" },
    { field: "col5", headerName: "Weight, kg", width: 100, align: "center" },
    { field: "col6", headerName: "Company", width: 150, align: "left" },
    { field: "col7", headerName: "Department", width: 150, align: "left" },
  ];
  return (
    <>
      {usersStore.isLoading ? (
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

export default observer(UsersPage);
